import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

// Create an instance of Notyf
const notyf = new Notyf();

const edit = ({ serv }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: serv.name || '',
        address: serv.address || '',
        pin: serv.pin || '',
        con1: serv.con1 || '',
        con2: serv.con2 || '',
        email: serv.email || '',
        gstn: serv.gstn || '',
        pan: serv.pan || '',
        username: serv.username || '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/service-centers/${serv.user_id}`, {
            onSuccess: () => {
                notyf.success('Service center updated successfully!');
            },
            onError: () => {
                notyf.error('Failed to update service center. Please check your inputs.');
            }
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Service Center</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter service center's name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter address"
                        />
                        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                    </div>

                    {/* PIN */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">PIN</label>
                        <input
                            type="text"
                            name="pin"
                            value={data.pin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter PIN code"
                        />
                        {errors.pin && <p className="mt-1 text-xs text-red-500">{errors.pin}</p>}
                    </div>

                    {/* Contact No 1 */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Contact No 1</label>
                        <input
                            type="text"
                            name="con1"
                            value={data.con1}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Primary contact number"
                        />
                        {errors.con1 && <p className="mt-1 text-xs text-red-500">{errors.con1}</p>}
                    </div>

                    {/* Contact No 2 */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Contact No 2</label>
                        <input
                            type="text"
                            name="con2"
                            value={data.con2}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Secondary contact number"
                        />
                        {errors.con2 && <p className="mt-1 text-xs text-red-500">{errors.con2}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Email address"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* GST Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">GST Number</label>
                        <input
                            type="text"
                            name="gstn"
                            value={data.gstn}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="GST Number"
                        />
                        {errors.gstn && <p className="mt-1 text-xs text-red-500">{errors.gstn}</p>}
                    </div>

                    {/* PAN Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">PAN Number</label>
                        <input
                            type="text"
                            name="pan"
                            value={data.pan}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="PAN Number"
                        />
                        {errors.pan && <p className="mt-1 text-xs text-red-500">{errors.pan}</p>}
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Username"
                        />
                        {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Update Distributor'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default edit;
