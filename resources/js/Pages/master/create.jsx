import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    const [categories, setCategories] = useState([]);
    const [units, setUnits] = useState([]); // State for managing units
    const [showBrandManager, setShowBrandManager] = useState(false);
    const [showCategoryManager, setShowCategoryManager] = useState(false);
    const [showUnitManager, setShowUnitManager] = useState(false); // State to toggle unit manager
    const [newBrand, setNewBrand] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newUnit, setNewUnit] = useState(''); // State for new unit

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('/brands');
                const brands = await response.json();
                setBrands(brands);
            } catch (error) {
                notyf.error('Failed to load brands');
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await fetch('/categories');
                const categories = await response.json();
                setCategories(categories);
            } catch (error) {
                notyf.error('Failed to load categories');
            }
        };
        const fetchUnits = async () => { // Fetch units from the API
            try {
                const response = await fetch('/unit');
                const units = await response.json();
                setUnits(units);
            } catch (error) {
                notyf.error('Failed to load units');
            }
        };

        fetchBrands();
        fetchCategories();
        fetchUnits();
    }, []);

    const handleImageChange = (e) => {
        setData('image', e.target.files[0]);
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/Product-List', {
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
                    setBrands([...brands, addedBrand]);
                    setNewBrand('');
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
                setBrands(brands.filter((brand) => brand.cat_id !== brandId));
                notyf.success('Brand removed successfully');
            } else {
                notyf.error('Failed to delete brand');
            }
        } catch (error) {
            notyf.error('Error deleting brand');
        }
    };

    const handleAddCategory = async () => {
        if (newCategory) {
            try {
                const response = await fetch('/categories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify({ name: newCategory }),
                });

                if (response.ok) {
                    const addedCategory = await response.json();
                    setCategories([...categories, addedCategory]);
                    setNewCategory('');
                    notyf.success('Category added successfully');
                } else {
                    notyf.error('Failed to add category');
                }
            } catch (error) {
                notyf.error('Error adding category');
            }
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`/categories/${categoryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
            });

            if (response.ok) {
                // Update categories based on 'cat_id'
                setCategories(categories.filter((category) => category.cat_id !== categoryId));
                notyf.success('Category removed successfully');
            } else {
                notyf.error('Failed to delete category');
            }
        } catch (error) {
            notyf.error('Error deleting category');
        }
    };

    // New functions for managing units
    const handleAddUnit = async () => {
        if (newUnit) {
            try {
                const response = await fetch('/unit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    },
                    body: JSON.stringify({ name: newUnit }),
                });

                if (response.ok) {
                    const addedUnit = await response.json();
                    setUnits([...units, addedUnit]);
                    setNewUnit('');
                    notyf.success('Unit added successfully');
                } else {
                    notyf.error('Failed to add unit');
                }
            } catch (error) {
                notyf.error('Error adding unit');
            }
        }
    };

    const handleDeleteUnit = async (unitId) => {
        try {
            const response = await fetch(`/unit/${unitId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            });

            if (response.ok) {
                setUnits(units.filter((unit) => unit.cat_id !== unitId));
                notyf.success('Unit removed successfully');
            } else {
                notyf.error('Failed to delete unit');
            }
        } catch (error) {
            notyf.error('Error deleting unit');
        }
    };
    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Product</h2>
                <h2 className="mb-1 text-2xl font-bold text-gray-600">Product Information</h2>

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
                            placeholder="Enter Item Name"
                        />
                        {errors.item_name && <p className="mt-1 text-xs text-red-500">{errors.item_name}</p>}
                    </div>

                    {/* Model Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Model Number</label>
                        <input
                            type="text"
                            name="model_no"
                            value={data.model_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Model Number"
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
                                <option key={brand.cat_id} value={brand.cat_id}>
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

                    {/* Product Category Dropdown and Manage Categories Button */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product Category</label>
                        <select
                            name="product_category"
                            value={data.product_category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.cat_id} value={category.cat_id}>
                                    {category.title}
                                </option>
                            ))}
                        </select>

                        <button
                            type="button"
                            onClick={() => setShowCategoryManager(!showCategoryManager)}
                            className="mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg"
                        >
                            Manage Categories
                        </button>

                        {showCategoryManager && (
                            <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                                <h3 className="mb-2 font-bold">Manage Categories</h3>

                                {/* New Category Input */}
                                <div className="flex items-center mb-4">
                                    <input
                                        type="text"
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        placeholder="New Category Name"
                                        className="flex-grow px-2 py-1 border border-gray-300 rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddCategory}
                                        className="ml-2 px-3 py-1 text-sm text-white bg-green-600 rounded-lg"
                                    >
                                        Add
                                    </button>
                                </div>

                                {/* List of Categories with Delete Button */}
                                <ul>
                                    {categories.map((category) => (
                                        <li key={category.cat_id} className="flex items-center justify-between py-1">
                                            <span>{category.title}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteCategory(category.cat_id)}
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

                    {/* Price */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter Price"
                        />
                        {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price}</p>}
                    </div>

                    {/* Unit */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Unit</label>
                        <select
                            name="unit"
                            value={data.unit}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select a Unit</option>
                            {units.map((unit) => (
                                <option key={unit.cat_id} value={unit.cat_id}>
                                    {unit.title}
                                </option>
                            ))}
                        </select>

                        <button
                            type="button"
                            onClick={() => setShowUnitManager(!showUnitManager)}
                            className="mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg"
                        >
                            Manage Units
                        </button>

                        {showUnitManager && (
                            <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                                <h3 className="mb-2 font-bold">Manage Units</h3>

                                {/* New Unit Input */}
                                <div className="flex items-center mb-4">
                                    <input
                                        type="text"
                                        value={newUnit}
                                        onChange={(e) => setNewUnit(e.target.value)}
                                        placeholder="New Unit Name"
                                        className="flex-grow px-2 py-1 border border-gray-300 rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddUnit}
                                        className="ml-2 px-3 py-1 text-sm text-white bg-green-600 rounded-lg"
                                    >
                                        Add
                                    </button>
                                </div>

                                {/* List of Units with Delete Button */}
                                <ul>
                                    {units.map((unit) => (
                                        <li key={unit.cat_id} className="flex items-center justify-between py-1">
                                            <span>{unit.title}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteUnit(unit.cat_id)}
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


                    {/* Image Upload */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="w-full border border-gray-300 rounded-lg"
                        />
                        {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                    </div>

                    {/* Product Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Product Description</label>
                        <ReactQuill
                            theme="snow"
                            value={data.product_desc}
                            onChange={(content) => setData('product_desc', content)}
                            // className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter Product Description"
                        />
                        {errors.product_desc && <p className="mt-1 text-xs text-red-500">{errors.product_desc}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className={`w-full px-4 py-2 text-white rounded-lg ${processing ? 'bg-gray-400' : 'bg-blue-600'}`}
                            disabled={processing}
                        >
                            {processing ? 'Adding...' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default Create;
