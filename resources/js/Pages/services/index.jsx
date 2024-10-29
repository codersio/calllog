import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout';

function ServiceTable({data}) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <AdminLayout>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-semibold">Service List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Service Code</th>
            <th className="px-4 py-2 border">Service Date</th>
            <th className="px-4 py-2 border">Assign To</th>
            <th className="px-4 py-2 border">Service Detail</th>
            <th className="px-4 py-2 border">Customer Name</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Employee Status</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((service) => (
            <tr key={service.id} className="text-center">
              <td className="px-4 py-2 border">{service.service_code}</td>
              <td className="px-4 py-2 border">{service.service_date}</td>
              <td className="px-4 py-2 border">{service.assign_to}</td>
              <td className="px-4 py-2 border">{service.service_detail}</td>
              <td className="px-4 py-2 border">{service.customer?.name || 'N/A'}</td>
              <td className="px-4 py-2 border">
                <span className={`px-2 py-1 font-semibold text-white rounded ${service.status === 'Open' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {service.status}
                </span>
              </td>
              <td className="px-4 py-2 border">
                <span className={`px-2 py-1 font-semibold text-white rounded ${service.employee_status === 'Open' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {service.employee_status}
                </span>
              </td>
              <td className="px-4 py-2 space-x-2 border">
                <button className="px-4 py-1 text-white bg-blue-500 rounded">Edit</button>
                <button className="px-4 py-1 text-white bg-red-500 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminLayout>
  );
}

export default ServiceTable;
