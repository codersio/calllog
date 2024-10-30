import AdminLayout from '@/Layouts/AdminLayout'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'
import { FaPencil } from 'react-icons/fa6';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
export default function index({ complaints }) {
    const { delete: destroy } = useForm()
    function handleDelete(id) {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this complaint?")) {
            destroy(route('complaint.destroy', id), {
                onSuccess: () => {
                    notyf.success('Complaint deleted successfully!');
                },
                onError: () => {
                    notyf.error('Failed to delete complaint.');
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

                        placeholder="Search data..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    <Link href='complaint/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Add Complaint
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>Complaint No.</th>
                            <th className='p-3 text-left border'>Customer Name</th>
                            <th className='p-3 text-left border'>Complaint Date</th>
                            <th className='p-3 text-left border'>Complaint Type</th>
                            <th className='p-3 text-left border'>Assigned To</th>
                            <th className='p-3 text-left border'>Status</th>
                            {/* <th className='p-3 text-left border'>Employee Status</th> */}
                            <th className='p-3 text-center border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            complaints && complaints.map((cmpl, index) => (
                                <tr key={index}>
                                    <td className="p-3">
                                        {cmpl.complaint_no}
                                    </td>
                                    <td className="p-3">
                                        {cmpl.first_name + ' ' + cmpl.middle_name + ' ' + cmpl.last_name}
                                    </td>
                                    <td className="p-3">
                                        {cmpl.date}
                                    </td>
                                    <td className="p-3">

                                        {cmpl.complaint_type == 0 && 'Under Warranty'}
                                        {cmpl.complaint_type == 1 && 'Warranty Expires'}
                                    </td>
                                    <td className="p-3">
                                        {cmpl.assigned_to}
                                    </td>
                                    <td className="p-3">
                                        <div className='flex'>
                                            {cmpl.status == 0 && <p className='text-sm font-medium bg-green-500 px-2 text-white py-1 rounded'>Open</p>}
                                            {cmpl.status == 1 && <p className='text-sm font-medium bg-amber-500 px-2 py-1 rounded'>In Progress</p>}
                                            {cmpl.status == 2 && <p className='text-sm font-medium bg-red-500 text-white px-2 py-1 rounded'>Closed</p>}
                                        </div>
                                    </td>
                                    <td className='p-3 flex gap-1'>
                                        {/* <button className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-emerald-500 text-white rounded'><span>View</span></button> */}
                                        <Link href={`/complaint/${cmpl.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'><span>Edit</span></Link>
                                        <button type='button' onClick={() => handleDelete(cmpl.id)} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'><span>Delete</span></button>
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