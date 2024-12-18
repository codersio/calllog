import React, { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdLockClock, MdOutlineAssignmentLate } from "react-icons/md";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

import { BiArchive } from "react-icons/bi";

const notyf = new Notyf();

const index = ({ data }) => {
    const { props } = usePage();
    const [permissions, setPermissions] = useState([]);
    useEffect(() => {
        if (Array.isArray(props.auth.permissions)) {
            setPermissions(props.auth.permissions);
        }
    }, [props]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Adjust items per page as needed

    useEffect(() => {
        // Filter data based on the search query

    }, [query, data]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page when search query changes
    };

    const { delete: destroy } = useForm();

    const handleDelete = (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this record?')) {
            destroy(`/Employee/${id}`, {
                onSuccess: () => {

                    // Show success notification on successful submission
                    notyf.success('Client deleted successfully!');
                    location.reload()
                },
                onError: () => {
                    // Show error notification if there are errors
                    notyf.error('Failed to delete data.');
                }
            })

        }
    };

    // Pagination logic
    const indexOfLastData = currentPage * itemsPerPage;
    const indexOfFirstData = indexOfLastData - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    // Page numbers
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <AdminLayout>
            <div className='p-6 bg-white rounded-lg shadow'>
                <div className='flex justify-between mb-4'>
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search data..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('create_employee') ?
                            (
                                <Link href='Employee/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                                    Add Employee
                                </Link>
                            ) : ''
                    }
                    <Link href='archiveemployee' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Archive Employee
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>SL No</th>
                            <th className='p-3 text-left border'>Image</th>
                            <th className='p-3 text-left border'>Employee Name</th>
                            <th className='p-3 text-left border'>Address </th>
                            <th className='p-3 text-left border'>Mobile Number</th>
                            <th className='p-3 text-center border'>Eamil</th>
                            <th className='p-3 text-left border'>Action</th>

                            {/* <th className='p-3 text-center border'>Unlock Timesheet</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((emp, index) => (
                                <tr key={emp.user_id} className="odd:bg-white even:bg-gray-100">
                                    <td className="p-3 border">{indexOfFirstData + index + 1}</td>
                                    <td className="p-3 border">
                                        {/* Construct the image URL using baseUrl */}
                                        <img
                                            src={`${emp.photo}`} // Use the base URL
                                            alt={`${emp.name}'s photo`}
                                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                                        />
                                    </td>

                                    <td className="p-3 border">{emp.first_name + ' ' + emp.last_name}</td>
                                    <td className="p-3 border">{emp.address}</td>

                                    <td className="p-3 border">{emp.mobile_no}</td>
                                    <td className="p-3 border">{emp.email}</td>

                                    <td className="p-3 text-center border">
                                        <div className="flex justify-center space-x-3">
                                            {
                                                props.auth.user.roles[0].name === "admin" || permissions.includes('edit_employee') ?
                                                    (
                                                        <Link className="p-2 text-white bg-green-500 rounded" href={`Employee/${emp.user_id}/edit`}>
                                                            <CiEdit />
                                                        </Link>
                                                    ) : ''
                                            }
                                            <Link className="p-2 text-white bg-green-500 rounded" href={`Employee-Archive/${emp.user_id}`}>
                                                <BiArchive />
                                            </Link>
                                            {
                                                props.auth.user.roles[0].name === "admin" || permissions.includes('delete_employee') ?
                                                    (
                                                        <button className="p-2 text-white bg-red-500 rounded" onClick={(e) => handleDelete(e, emp.user_id)}>
                                                            <RiDeleteBinLine />
                                                        </button>
                                                    ) : ''
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="18" className="p-3 text-center">No data found</td> {/* Adjust colSpan to match the total number of columns */}
                            </tr>
                        )}
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
    );
};

export default index;
