import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPencil } from 'react-icons/fa6';

export default function index({sales}) {
    const formatLabel = (label) => {
        return label
            .split('_') // Split by underscore
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join with a space
    };
    return (
        <AdminLayout>
            <div className='p-6 bg-white rounded-lg shadow'>
                <div className='flex justify-between mb-4'>
                    <input
                        type="text"
                       
                        placeholder="Search data..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    <Link href='sales/add' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Add Sales
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>Bill No.</th>
                            <th className='p-3 text-left border'>Customer Name</th>
                            <th className='p-3 text-left border'>Date</th>
                            <th className='p-3 text-left border'>Billing Address</th>
                            <th className='p-3 text-left border'>Status</th>
                            <th className='p-3 text-center border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales && sales.map((sale,index)=>(
                                <tr>
                                    <td className="p-3">
                                        {sale.bill_no}
                                    </td>
                                    <td className="p-3">
                                        {sale.first_name +' '+ sale.middle_name+' '+ sale.last_name}
                                    </td>
                                    <td className="p-3">
                                        {sale.date}
                                    </td>
                                    <td className="p-3">
                                        {sale.billing_address}
                                    </td>
                                    <td className="p-3">
                                        { formatLabel(sale.status) }
                                    </td>
                                    <td className='p-3 flex gap-1'>
                                        <button className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-emerald-500 text-white rounded'><span>View</span></button>
                                        <Link href={`/sales/${sale.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'><span>Edit</span></Link>
                                        <button className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'><span>Delete</span></button>
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
