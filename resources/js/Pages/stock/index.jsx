import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import React from 'react';
import { FaPencil, FaTrash } from 'react-icons/fa6';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export default function Index({ stocks }) {
    const { delete: destroy } = useForm();

    function handleDelete(id, event) {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this stock?")) {
            destroy(route('stocks.destroy', id), {
                onSuccess: () => {
                    notyf.success('Stock deleted successfully!');
                },
                onError: () => {
                    notyf.error('Failed to delete stock.');
                }
            });
        }
    }

    return (
        <AdminLayout>
            <div className='p-6 bg-white rounded-lg shadow'>
                <div className='flex justify-between mb-4'>
                    <input
                        type="text"
                        placeholder="Search stocks..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    <Link href='/stocks/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Add Stock
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>Name</th>
                            <th className='p-3 text-left border'>SKU</th>
                            <th className='p-3 text-left border'>Price</th>
                            <th className='p-3 text-left border'>Category ID</th>
                            <th className='p-3 text-left border'>Quantity</th>
                            {/* <th className='p-3 text-left border'>Unit ID</th> */}
                            <th className='p-3 text-center border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stocks && stocks.map((stock) => (
                                <tr key={stock.id}>
                                    <td className="p-3">{stock.name}</td>
                                    <td className="p-3">{stock.sku}</td>
                                    <td className="p-3">&#8377; {stock.price}</td>
                                    <td className="p-3">{stock.item_name}</td>
                                    <td className="p-3">{stock.quantity}</td>
                                    {/* <td className="p-3">{stock.unit}</td> */}
                                    <td className='p-3 flex gap-1'>
                                        <Link href={`/stocks/${stock.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'>
                                            <FaPencil /> Edit
                                        </Link>
                                        <button type='button' onClick={(e) => handleDelete(stock.id, e)} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'>
                                            <FaTrash />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
