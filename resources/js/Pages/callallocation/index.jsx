import React, { useState, useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdLockClock, MdOutlineAssignmentLate } from "react-icons/md";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

const notyf = new Notyf();

const index = ({ data }) => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Adjust items per page as needed

    useEffect(() => {
        // Filter data based on the search query
        const filtered = data.filter(emp =>
            emp.name.toLowerCase().includes(query.toLowerCase()) ||
            emp.email.toLowerCase().includes(query.toLowerCase()) ||
            emp.roles.some(role => role.name.toLowerCase().includes(query.toLowerCase())) ||
            emp.datas.some(empDetail => empDetail.phone.toLowerCase().includes(query.toLowerCase()))
        );
        setFilteredData(filtered);
    }, [query, data]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page when search query changes
    };

    const { delete: destroy } = useForm();

    const handleDelete = (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this record?')) {
            destroy(`/service-centers/${id}`,{
                onSuccess: () => {
                    // Show success notification on successful submission
                    notyf.success('Service center deleted successfully!');
                },
                onError: () => {
                    // Show error notification if there are errors
                    notyf.error('Failed to delete data.');
                }
            })
                // .then(() => {
                //     notyf.success('Data deleted successfully');
                //     // Optionally refresh the data here or update state
                // })
                // .catch(error => {
                //     console.error(error);
                //     notyf.error('Failed to delete data');
                // });
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
                    <Link href='service-centers/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Create New Data
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>Name</th>
                            <th className='p-3 text-left border'>Email</th>
                            {/* <th className='p-3 text-left border'>Roles</th> */}
                            <th className='p-3 text-left border'>Phone</th>
                            {/* <th className='p-3 text-center border'>Holiday Work Assign</th> */}
                            <th className='p-3 text-center border'>Actions</th>
                            {/* <th className='p-3 text-center border'>Unlock Timesheet</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map(emp => (
                                <tr key={emp.id} className="odd:bg-white even:bg-gray-100">
                                    <td className='p-3 border'>{emp.name}</td>
                                    <td className='p-3 border'>{emp.email}</td>
                                    <td className='p-3 border'>{emp.con1}</td>
                                    {/* <td className='p-3 border'>
                                        {emp.roles.map(role => (
                                            <span key={role.id} className='block'>{role.name}</span>
                                        ))}
                                    </td> */}
                                    {/* <td className='p-3 border'>
                                        {emp.datas.map(empDetail => (
                                            <span key={empDetail.id} className='block'>{empDetail.phone}</span>
                                        ))}
                                    </td> */}

                                    <td className='p-3 text-center border'>
                                        <div className='flex justify-center space-x-3'>
                                            <Link className='p-2 text-white bg-green-500 rounded' href={`service-centers/${emp.id}/edit`}>
                                                <CiEdit />
                                            </Link>
                                            <button className='p-2 text-white bg-red-500 rounded' onClick={(e) => handleDelete(e, emp.id)}>
                                                <RiDeleteBinLine />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className='p-3 text-center'>No data found</td>
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
