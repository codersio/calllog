import AdminLayout from '@/Layouts/AdminLayout'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'
import { FaPencil } from 'react-icons/fa6';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Modal from '@/Components/Modal';

const notyf = new Notyf();
export default function index({ purchases }) {
    const formatLabel = (label) => {
        return label
            .split('_') // Split by underscore
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join with a space
    };
    const { delete: destroy } = useForm()
    function handleDelete(id) {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this purchase?")) {
            destroy(route('purchase.destroy', id), {
                onSuccess: () => {
                    notyf.success('Purchase deleted successfully!');
                },
                onError: () => {
                    notyf.error('Failed to delete purchase.');
                }
            });
        }
    }
    return (
        <AdminLayout>
            {/* <Modal show={true} maxWidth='2xl'>
                <div className='flex justify-between items-center p-2 px-5'>
                    <h1>Sales</h1>
                    <button>X</button>
                </div>
                <div>
                    <img src="https://equi.org.in/demo/amc/img/setting/logo_1718790982.png" alt="" />
                    <div>

                    </div>
                </div>
            </Modal> */}
            <div className='p-6 bg-white rounded-lg shadow'>
                <div className='flex justify-between mb-4'>
                    <input
                        type="text"

                        placeholder="Search data..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    <Link href='purchase/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Add Purchase
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>Purchase No.</th>
                            <th className='p-3 text-left border'>Supplier Name</th>
                            <th className='p-3 text-left border'>Date</th>
                            <th className='p-3 text-left border'>Billing Address</th>
                            <th className='p-3 text-left border'>Status</th>
                            <th className='p-3 text-center border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases && purchases.map((pur, index) => (
                                <tr>
                                    <td className="p-3">
                                        {pur.purchase_no}
                                    </td>
                                    <td className="p-3">
                                        {pur.name}
                                    </td>
                                    <td className="p-3">
                                        {pur.date}
                                    </td>
                                    <td className="p-3">
                                        {pur.billing_address}
                                    </td>
                                    <td className="p-3">
                                        <div className='flex justify-center'>
                                            {pur.status ? <p className='text-sm px-3 py-0.5 bg-green-500 text-white rounded'>Paid</p> : <p className='text-sm px-3 py-1 bg-red-500 text-white rounded'>Pending</p>}
                                        </div>
                                    </td>
                                    <td className='p-3 flex gap-1'>
                                        {/* <button className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-emerald-500 text-white rounded'><span>View</span></button> */}
                                        <Link href={`/purchase/${pur.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'><span>Edit</span></Link>
                                        <button type='button' onClick={() => handleDelete(pur.id)} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'><span>Delete</span></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
