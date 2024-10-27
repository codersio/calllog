import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';

const notyf = new Notyf();

const Create = ({ client_idf2 }) => {
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

    const [brands, setBrands] = useState([]);
    const [showBrandManager, setShowBrandManager] = useState(false);
    const [newBrand, setNewBrand] = useState('');

    useEffect(() => {
        // Fetch brands from backend
        const fetchBrands = async () => {
            try {
                const response = await fetch('/brands'); // Adjust API endpoint accordingly
                const brands = await response.json();
                setBrands(brands);
            } catch (error) {
                notyf.error('Failed to load brands');
            }
        };
        fetchBrands();
    }, []);

    const handleImageChange = (e) => {
        setData('image', e.target.files[0]);
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/Product-List/', {
            onSuccess: () => {
                notyf.success('Product added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add product. Please check your inputs.');
            },
        });
    };

    const handleAddBrand = async () => {
        if (newBrand) {
            try {
                const response = await fetch('/brands', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify({ name: newBrand }),
                });

                if (response.ok) {
                    const addedBrand = await response.json();
                    setBrands([...brands, addedBrand]); // Update brands state
                    setNewBrand(''); // Clear input field
                    notyf.success('Brand added successfully');
                } else {
                    notyf.error('Failed to add brand');
                }
            } catch (error) {
                notyf.error('Error adding brand');
            }
        }
    };

    const handleDeleteBrand = async (brandId) => {
        try {
            const response = await fetch(`/brands/${brandId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
            });

            if (response.ok) {
                // Update the brands list in state by removing the deleted brand
                setBrands(brands.filter((brand) => brand.cat_id !== brandId));
                notyf.success('Brand removed successfully');
            } else {
                notyf.error('Failed to delete brand');
            }
        } catch (error) {
            notyf.error('Error deleting brand');
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Client</h2>
                <h2 className="mb-1 text-2xl font-bold text-gray-600">Personal Information</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Product ID */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product ID</label>
                        <input
                            type="text"
                            name="product_id"
                            readOnly={true}
                            value={data.product_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
                    {/* Brand Dropdown and Manage Brands Button */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Brand</label>
                        <select
                            name="brand"
                            value={data.brand}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select a brand</option>
                            {brands.map((brand) => (
                                <option key={brand.cat_id} value={brand.title}>
                                    {brand.title}
                                </option>
                            ))}
                        </select>
                        {errors.brand && <p className="mt-1 text-xs text-red-500">{errors.brand}</p>}

                        <button
                            type="button"
                            onClick={() => setShowBrandManager(!showBrandManager)}
                            className="mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg"
                        >
                            Manage Brands
                        </button>

                        {showBrandManager && (
                            <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                                <h3 className="mb-2 font-bold">Manage Brands</h3>
                                
                                {/* New Brand Input */}
                                <div className="flex items-center mb-4">
                                    <input
                                        type="text"
                                        value={newBrand}
                                        onChange={(e) => setNewBrand(e.target.value)}
                                        placeholder="New Brand Name"
                                        className="flex-grow px-2 py-1 border border-gray-300 rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddBrand}
                                        className="ml-2 px-3 py-1 text-sm text-white bg-green-600 rounded-lg"
                                    >
                                        Add
                                    </button>
                                </div>

                                {/* List of Brands with Delete Button */}
                                <ul>
                                    {brands.map((brand) => (
                                        <li key={brand.cat_id} className="flex items-center justify-between py-1">
                                            <span>{brand.title}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteBrand(brand.cat_id)}
                                                className="px-2 py-1 text-sm text-white bg-red-600 rounded-lg"
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Other form fields (Item Name, Model No, etc.) here */}

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
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
