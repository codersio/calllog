import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Multiselect from 'multiselect-react-dropdown';
import { FaTrash } from 'react-icons/fa';

const notyf = new Notyf();

function Create({ taxes, cats }) {
    const { post, data, setData, errors } = useForm({
        name: '',
        sku: '',
        price: '',
        quantity: '',
        category_id: '',
        unit: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('stocks.store'), {
            onSuccess: () => {
                notyf.success('Stock added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add stock. Please check your inputs.');
            },
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Stock</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Stock Name</label>
                        <input
                            onChange={(e) => setData('name', e.target.value)}
                            value={data.name}
                            type="text"
                            className="w-full rounded form-input"
                            placeholder='Enter stock name'
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">SKU</label>
                        <input
                            onChange={(e) => setData('sku', e.target.value)}
                            value={data.sku}
                            type="text"
                            className="w-full rounded form-input"
                            placeholder='Enter SKU'
                        />
                        {errors.sku && <p className="mt-1 text-xs text-red-500">{errors.sku}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Price</label>
                        <input
                            type="number"
                            onChange={(e) => setData('price', e.target.value)}
                            value={data.price}
                            className="w-full rounded form-input"
                            placeholder='Enter price'
                        />
                        {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Quantity</label>
                        <input
                            type="number"
                            onChange={(e) => setData('quantity', e.target.value)}
                            value={data.quantity}
                            className="w-full rounded form-input"
                            placeholder='Enter quantity'
                        />
                        {errors.quantity && <p className="mt-1 text-xs text-red-500">{errors.quantity}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Category</label>
                        <select
                            onChange={(e) => setData('category_id', e.target.value)}
                            value={data.category_id}
                            className='w-full rounded form-select'
                        >
                            <option value="">-- Select Category --</option>
                            {cats && cats.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.category_id && <p className="mt-1 text-xs text-red-500">{errors.category_id}</p>}
                    </div>
                    {/* <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Unit</label>
                        <select
                            onChange={(e) => setData('category_id', e.target.value)}
                            value={data.category_id}
                            className='w-full rounded form-select'
                        >
                            <option value="">-- Select Unit --</option>
                            <option value="1">Kg</option>
                            <option value="2">Piece</option>
                            <option value="3">Piece</option>
                        </select>
                        <input
                            type="text"
                            onChange={(e) => setData('unit', e.target.value)} // Changed 'unit_id' to 'unit'
                            value={data.unit} // Changed from 'data.unit_id' to 'data.unit'
                            className="w-full rounded form-input"
                            placeholder='Enter unit (e.g., kg, liters)'
                        /> 
                        {errors.unit && <p className="mt-1 text-xs text-red-500">{errors.unit}</p>}
                    </div> */}


                    <div className='w-full py-5'>
                        <button className='px-6 py-2 text-sm font-medium text-white rounded bg-rose-600'>
                            Add Stock
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

export default Create;
