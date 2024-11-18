import AdminLayout from '@/Layouts/AdminLayout'
import { Link, useForm, usePage } from '@inertiajs/react'
import React, { useState, useEffect } from 'react'
import { FaPencil, FaRegFilePdf } from 'react-icons/fa6';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
export default function index({ complaints }) {
    const { props } = usePage();
    const [permissions, setPermissions] = useState([]);
    useEffect(() => {
        if (Array.isArray(props.auth.permissions)) {
            setPermissions(props.auth.permissions);
        }
    }, [props]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(complaints);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Filter data based on the search query
        const filtered = complaints.filter(cmp =>
            cmp.complaint_no.includes(query)
        );
        setFilteredData(filtered);
    }, [query, complaints]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page when search query changes
    };

    // Pagination logic
    const indexOfLastData = currentPage * itemsPerPage;
    const indexOfFirstData = indexOfLastData - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    // Page numbers
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

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
                        type="search"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search data..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('create_complaint') ?
                            (
                                <Link href='complaint/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                                    Add Complaint
                                </Link>
                            ) : ''
                    }
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
                            currentData && currentData.map((cmpl, index) => (
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
                                        {cmpl.af_name+" "+cmpl.am_name+" "+cmpl.al_name}
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
                                        {
                                            props.auth.user.roles[0].name === "admin" || permissions.includes('edit_complaint') ?
                                                (
                                                    <Link href={`/complaint/${cmpl.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'><span>Edit</span></Link>
                                                ) : ''
                                        }
                                        <Link className="p-2 text-white bg-red-500 rounded" href={`complaint-print/${cmpl.id}`}><FaRegFilePdf /></Link>
                                        {
                                            props.auth.user.roles[0].name === "admin" || permissions.includes('delete_complaint') ?
                                                (
                                                    <button type='button' onClick={() => handleDelete(cmpl.id)} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'><span>Delete</span></button>
                                                ) : ''
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className='flex justify-center mt-4'>
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={`px-4 py-2 mx-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </AdminLayout>
    )
}
