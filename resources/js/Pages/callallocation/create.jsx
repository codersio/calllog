import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import axios from 'axios'; // Import Axios for API requests
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

// Create an instance of Notyf
const notyf = new Notyf();

const create = ({ nextcallno2, service_centers }) => {
    const { data, setData, post, processing, errors } = useForm({
        call_no: '',
        customer_name: '',
        address: '',
        phone: '',
        service_partner: '',
        pin: '',
        distributer: '',
        source_material: '',
        model: '',
        purchase: '',
        reason: '',
        service_partner_address: '',
        service_partner_pin: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Fetch service partner details when service_partner changes
    useEffect(() => {
        if (data.service_partner) {
            // Make an API call to get service partner details
            axios.get(`/Get-Service/${data.service_partner}`)
                .then((response) => {
                    // Update the service partner address and pin fields
                    setData({
                        ...data,
                        service_partner_address: response.data.address, // Assuming the address field in response
                        service_partner_pin: response.data.pin, // Assuming the pin field in response
                    });
                })
                .catch((error) => {
                    console.error("Failed to fetch service partner details", error);
                });
        }
    }, [data.service_partner]); // Dependency on service_partner selection

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/Call-Allocation', {
            onSuccess: () => {
                notyf.success('Call Allocation added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add call allocation. Please check your inputs.');
            }
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Call Allocation</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Call No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Call No</label>
                        <input
                            type="text"
                            name="call_no"
                            readOnly={true}
                            value={nextcallno2.value}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter service center's name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Customer Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Customer Name</label>
                        <input
                            type="text"
                            name="customer_name"
                            value={data.customer_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Customer Name"
                        />
                        {errors.customer_name && <p className="mt-1 text-xs text-red-500">{errors.customer_name}</p>}
                    </div>

                    {/* Customer Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Customer Address</label>
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Customer Address"
                        />
                        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                    </div>

                    {/* Customer Mobile No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Customer Mobile No</label>
                        <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Customer contact number"
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Service Partner */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner</label>
                        <select
                            name="service_partner"
                            value={data.service_partner}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">---Select----</option>
                            {service_centers.map((service_center) => (
                                <option key={service_center.id} value={service_center.id}>
                                    {service_center.name}
                                </option>
                            ))}
                        </select>
                        {errors.service_partner && <p className="mt-1 text-xs text-red-500">{errors.service_partner}</p>}
                    </div>

                    {/* Service Partner Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Address</label>
                        <input
                            type="text"
                            name="service_partner_address"
                            value={data.service_partner_address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Address"
                        />
                        {errors.service_partner_address && <p className="mt-1 text-xs text-red-500">{errors.service_partner_address}</p>}
                    </div>

                    {/* Service Partner Pin */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Pin</label>
                        <input
                            type="text"
                            name="service_partner_pin"
                            value={data.service_partner_pin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Pin"
                        />
                        {errors.service_partner_pin && <p className="mt-1 text-xs text-red-500">{errors.service_partner_pin}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Add Service Center'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default create;
