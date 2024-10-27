import React from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';

const notyf = new Notyf();

const Create = ({client_idf2}) => {
    const { data, setData, post, processing, errors } = useForm({
        product_id: client_idf2.value,
        item_name: '',
        model_no: '',
        brand: '',
        product_category: 'male',
        price: '',
        unit: '',
        image: '',
        product_desc: '',
        
    });

    // New function to handle image change
    const handleImageChange = (e) => {
        setData('image', e.target.files[0]); // Save the first selected file
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        post('/Product-List/', { // Adjust the endpoint to the correct one for creating a client
            onSuccess: () => {
                notyf.success('Product added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add product. Please check your inputs.');
            },
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Client</h2>
                
                <h2 className="mb-1 text-2xl font-bold text-gray-600">Personal Information</h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Client Id */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product Id</label>
                        <input
                            type="text"
                            name="product_id"
                            readOnly={true}
                            value={data.product_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Product Id"
                        />
                        {errors.product_id && <p className="mt-1 text-xs text-red-500">{errors.product_id}</p>}
                    </div>

                    {/* Item Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Item Name</label>
                        <input
                            type="text"
                            name="item_name"
                            value={data.item_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter First Name"
                        />
                        {errors.item_name && <p className="mt-1 text-xs text-red-500">{errors.item_name}</p>}
                    </div>

                    {/* Modle Number  */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Model Number</label>
                        <input
                            type="text"
                            name="model_no"
                            value={data.model_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Middle Name"
                        />
                        {errors.model_no && <p className="mt-1 text-xs text-red-500">{errors.model_no}</p>}
                    </div>

                    {/* Brand Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            value={data.brand}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder=""
                        />
                        {errors.brand && <p className="mt-1 text-xs text-red-500">{errors.brand}</p>}
                    </div>

                    {/*  Product Category */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product Category</label>
                        <input
                            type="text"
                            name="product_category"
                            value={data.product_category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder=""
                        />
                        {errors.product_category && <p className="mt-1 text-xs text-red-500">{errors.product_category}</p>}
                    </div>

                    {/*Price */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">price</label>
                        <input
                            type="text"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder=""
                        />
                        {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price}</p>}
                    </div>

                    {/* Unit  */}
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Unit</label>
                        <input
                            type="text"
                            name="unit"
                            value={data.unit}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Position"
                        />
                        {errors.unit && <p className="mt-1 text-xs text-red-500">{errors.unit}</p>}
                    </div>
                 
                     {/* Image Upload Field */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*" // Accept only image files
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                    </div>
                     

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Add Client'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default Create;
