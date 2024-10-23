import React from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

// Create an instance of Notyf
const notyf = new Notyf();

const create = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/products-category', {
            onSuccess: () => {
                // Show success notification on successful submission
                notyf.success('Product Category added successfully!');
            },
            onError: () => {
                // Show error notification if there are errors
                notyf.error('Failed to add product category. Please check your inputs.');
            }
        });
    };

    return (
        <AdminLayout>
        <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Product Category</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Category Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Product Category Name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
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

export default create;
