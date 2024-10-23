import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

// Create an instance of Notyf
const notyf = new Notyf();

const CreateCategory = ({ categories,service_centers }) => {
    const { data, setData, post, processing, errors } = useForm({
        call_allocation: '',
        customer_name: '',
        address: '',
        phone_number: '',
        service_partner: '',
        spare_part_type: '',
        product_name: '',
        qty: '',
        model: '',
        spare_part_Serial: '',
        invoice: '',
        dispatch_model:'',
        dispatch_type:'',
        date:'',

   
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Check if the dispatch_model has changed
        if (name === "dispatch_model") {
            // Update the dispatch_type to "1 2 3" if dispatch_model is changed
            setData({
                ...data,
                dispatch_model: value,
                dispatch_type: value ? value+'-' : "" , // Clear dispatch_type if no model is selected
            });
        } else {
            // Update other fields as normal
            setData({
                ...data,
                [name]: value,
            });
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/spare-part/', {
            onSuccess: () => {
                notyf.success('Spare & Parts  added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add Spare & Parts. Please check your inputs.');
            }
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Spare & Parts</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Call Allocation */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Call Allocation</label>
                        <input
                            type="text"
                            name="call_allocation"
                            value={data.call_allocation}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder={"Call Allocation"}
                        />
                        {errors.call_allocation && <p className="mt-1 text-xs text-red-500">{errors.call_allocation}</p>}
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
                            placeholder={"Customer Name"}
                        />
                        {errors.customer_name && <p className="mt-1 text-xs text-red-500">{errors.customer_name}</p>}
                    </div>

                    {/* Address*/}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder={"Enter Address"}
                        />
                        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                    </div>

                    {/* Phone No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text" // changed from "number" to "text" to handle validation properly
                            name="phone_number"
                            value={data.phone_number}
                            onChange={(e) => {
                                const { value } = e.target;
                                // Allow only digits and ensure it's 10 digits long
                                if (value === '' || (/^\d{0,10}$/.test(value))) {
                                    handleChange(e);
                                }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Phone Number"
                            maxLength={10} // limits the input length to 10 digits
                        />
                        {errors.phone_number && <p className="mt-1 text-xs text-red-500">{errors.phone_number}</p>}
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
                            {service_centers.map((service_centers) => (
                                <option key={service_centers.id} value={service_centers.id}>
                                    {service_centers.name}
                                </option>
                            ))}
                        </select>
                        {errors.service_partner && <p className="mt-1 text-xs text-red-500">{errors.service_partner}</p>}
                    </div>

                    {/* Spare Parts Type  */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Spare Parts Type</label>
                        <input
                            type="text"
                            name="spare_part_type"
                            value={data.spare_part_type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder={"Enter Spare Parts Type"}
                        />
                        {errors.spare_part_type && <p className="mt-1 text-xs text-red-500">{errors.spare_part_type}</p>}
                    </div>
                    {/* Parent Category Dropdown */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product Name</label>
                        <select
                            name="product_name"
                            value={data.product_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                             {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.product_name && <p className="mt-1 text-xs text-red-500">{errors.product_name}</p>}
                    </div>
                    {/* Qty  */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Qty</label>
                        <input
                            type="number"
                            name="qty"
                            value={data.qty}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder={"Enter Qty"}
                        />
                        {errors.qty && <p className="mt-1 text-xs text-red-500">{errors.qty}</p>}
                    </div>

                  

                {/* Source Of Material */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Model</label>
                    <input
                        type="text"
                        name="model"
                        value={data.model}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Source Of Material"
                    />
                    {errors.model && <p className="mt-1 text-xs text-red-500">{errors.model}</p>}
                </div>
                 {/* Spare Part Serial No */}
                 <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Spare Parts Serial Number</label>
                    <input
                        type="number"
                        name="spare_part_Serial"
                        value={data.spare_part_Serial}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Source Of Material"
                    />
                    {errors.spare_part_Serial && <p className="mt-1 text-xs text-red-500">{errors.spare_part_Serial}</p>}
                </div>
                    {/* Invoice No */}
                    <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Invoice Number</label>
                    <input
                        type="text"
                        name="invoice"
                        value={data.invoice}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Invoice No"
                    />
                    {errors.invoice && <p className="mt-1 text-xs text-red-500">{errors.invoice}</p>}
                </div>
                    {/* Dispatch Module */}
                <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Dispatch Module</label>
                        <select
                            name="dispatch_model"
                            value={data.dispatch_model}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">--Select--</option>
                            <option value="Courier">Courier</option>
                            <option value="Bus">Bus</option>
                            <option value="Staff">Staff</option>
                            
                        </select>
                        {errors.dispatch_model && <p className="mt-1 text-xs text-red-500">{errors.dispatch_model}</p>}
                    </div>
                     {/* Dispatch   */}
                     <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Dispatch Type</label>
                    <input
                        type="text"
                        name="dispatch_type"
                        value={data.dispatch_type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder=""
                    />
                    {errors.dispatch_type && <p className="mt-1 text-xs text-red-500">{errors.dispatch_type}</p>}
                </div>
                 {/* Date */}
                 <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={data.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Primary contact number"
                    />
                    {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                </div>
                   
                    

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Add Spare & Parts'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateCategory;
