import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

function ServiceTable({ data }) {
  const [services, setServices] = useState(data); // Initialize state with props data

  useEffect(() => {
    // Fetch services only if not provided as props
    if (services.length === 0) {
      axios.get('/api/services')
        .then(response => setServices(response.data))
        .catch(error => console.error('Error fetching services:', error));
    }
  }, [services]);

  const handleDelete = (serviceId) => {
    // Confirm deletion
    if (window.confirm('Are you sure you want to delete this service?')) {
      axios.delete(`/services/${serviceId}`)
        .then(() => {
          // Filter out the deleted service from the state
          setServices(services.filter(service => service.id !== serviceId));
          alert('Service deleted successfully');
        })
        .catch(error => {
          console.error('Error deleting service:', error);
          alert('Failed to delete service');
        });
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Service List</h2>
        <Link href="/services/create" className="px-4 py-2 text-white bg-blue-500 rounded">Create New Service</Link>
        <br />
        <br />
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Service Code</th>
              <th className="px-4 py-2 border">Service Date</th>
              <th className="px-4 py-2 border">Assign To</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="text-center">
                <td className="px-4 py-2 border">{service.service_code}</td>
                <td className="px-4 py-2 border">{service.service_date}</td>
                <td className="px-4 py-2 border">{service.name}</td>
                <td className="px-4 py-2 border">
                  <span className={`px-2 py-1 font-semibold text-white rounded ${service.status === 'Open' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {service.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2 border">
                  <Link href={`services/${service.id}/edit`} className="px-4 py-1 text-white bg-blue-500 rounded">Edit</Link>
                  <button onClick={() => handleDelete(service.id)} className="px-4 py-1 text-white bg-red-500 rounded">Delete</button>
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
