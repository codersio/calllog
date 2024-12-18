import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

function ServiceTable({ data }) {
  const { props } = usePage();
    const [permissions, setPermissions] = useState([]);
    useEffect(() => {
        if (Array.isArray(props.auth.permissions)) {
            setPermissions(props.auth.permissions);
        }
    }, [props]);
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
      Inertia.delete(`/services/${serviceId}`)
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Service List</h2>
        {
          props.auth.user.roles[0].name === "admin" || permissions.includes('create_service') ?
            (
              <Link href="/services/create" className="px-4 py-2 text-white bg-blue-500 rounded">Create New Service</Link>
            ) : ''
        }
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
                <td className="px-4 py-2 border">{service.assigned_first_name+' '+service.assigned_middle_name+' '+service.assigned_last_name}</td>
                <td className="px-4 py-2 border">
                  <span className={`px-2 py-1 font-semibold text-white rounded ${service.status === 'Open' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {service.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2 border">
                  {
                    props.auth.user.roles[0].name === "admin" || permissions.includes('edit_service') ?
                      (
                        <Link href={`services/${service.id}/edit`} className="px-4 py-1 text-white bg-blue-500 rounded">Edit</Link>
                      ) : ''
                  }
                  {
                    props.auth.user.roles[0].name === "admin" || permissions.includes('delete_service') ?
                      (
                        <button onClick={() => handleDelete(service.id)} className="px-4 py-1 text-white bg-red-500 rounded">Delete</button>
                      ) : ''
                  }
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
