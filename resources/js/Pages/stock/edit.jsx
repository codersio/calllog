import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

function Edit({ stock, cats }) {
    // Initialize form with existing stock data
    const { put, data, setData, errors } = useForm({
        name: stock.name || '', // Pre-fill with existing data
        sku: stock.sku || '',
        price: stock.price || '',
        quantity: stock.quantity || '',
        category_id: stock.category_id || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update existing stock using PUT method (or PATCH based on your API)
        put(route('stocks.update', stock.id), { // Use the stock ID to update
            onSuccess: () => {
                notyf.success('Stock updated successfully!');
            },
            onError: () => {
                notyf.error('Failed to update stock. Please check your inputs.');
            },
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Stock</h2>
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
                            <option value="">-- Select Product --</option>
                            {cats && cats.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.item_name}</option>
                            ))}
                        </select>
                        {errors.category_id && <p className="mt-1 text-xs text-red-500">{errors.category_id}</p>}
                    </div>
                    {/* <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Unit</label>
                        <input
                            type="text"
                            onChange={(e) => setData('unit', e.target.value)}
                            value={data.unit}
                            className="w-full rounded form-input"
                            placeholder='Enter unit (e.g., kg, liters)'
                        />
                        {errors.unit && <p className="mt-1 text-xs text-red-500">{errors.unit}</p>}
                    </div> */}

                    <div className='w-full py-5'>
                        <button className='px-6 py-2 text-sm font-medium text-white rounded bg-rose-600'>
                            Update Stock
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

export default Edit;
