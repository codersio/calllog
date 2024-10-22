import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

// Create an instance of Notyf
const notyf = new Notyf();

const CreateCategory = ({ categories }) => {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        model: '',
        source: '',
        qty: '',
        purchase: '',
        invoice: '',
   
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/products/', {
            onSuccess: () => {
                notyf.success('Product  added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add product. Please check your inputs.');
            }
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Product Category</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Parent Category Dropdown */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product Category</label>
                        <select
                            name="category_id"
                            value={data.category_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select a parent category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category_id && <p className="mt-1 text-xs text-red-500">{errors.category_id}</p>}
                    </div>
                    {/* Category Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={data.model}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder={"Enter Model"}
                        />
                        {errors.model && <p className="mt-1 text-xs text-red-500">{errors.model}</p>}
                    </div>

                  

                {/* Source Of Material */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Source Of Material</label>
                    <input
                        type="text"
                        name="source"
                        value={data.source}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Source Of Material"
                    />
                    {errors.source && <p className="mt-1 text-xs text-red-500">{errors.source}</p>}
                </div>
                    {/* Qty */}
                    <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        name="qty"
                        value={data.qty}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Quantity"
                    />
                    {errors.qty && <p className="mt-1 text-xs text-red-500">{errors.qty}</p>}
                </div>

                 {/* Date Of Purchase */}
                 <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Date Of Purchasel</label>
                    <input
                        type="date"
                        name="purchase"
                        value={data.purchase}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Primary contact number"
                    />
                    {errors.purchase && <p className="mt-1 text-xs text-red-500">{errors.purchase}</p>}
                </div>
                    {/* Invoice Number */}
                    <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Invoice Number</label>
                    <input
                        type="number"
                        name="invoice"
                        value={data.invoice}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Invoice No"
                    />
                    {errors.invoice && <p className="mt-1 text-xs text-red-500">{errors.invoice}</p>}
                </div>
                    

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Add Product Category'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateCategory;
