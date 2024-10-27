import React, { useState, useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';

import { BiArchive } from "react-icons/bi";
const notyf = new Notyf();

const Index = ({ data }) => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        const lowerCaseQuery = query.toLowerCase();
        setFilteredData(data.filter(emp => emp.first_name.toLowerCase().includes(lowerCaseQuery) || emp.last_name.toLowerCase().includes(lowerCaseQuery)));
    }, [query, data]);

    const handleSearch = event => {
        setQuery(event.target.value);
        setCurrentPage(1);
    };

    const { delete: destroy } = useForm();

    const handleDelete = (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this record?')) {
            destroy(`/Client/${id}`, {
                onSuccess: () => {
                    notyf.success('Client deleted successfully!');
                    location.reload();
                },
                onError: () => notyf.error('Failed to delete data.')
            });
        }
    };

    const indexOfLastData = currentPage * itemsPerPage;
    const indexOfFirstData = indexOfLastData - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <AdminLayout>
            <div className='p-6 bg-white rounded-lg shadow'>
                <div className='flex justify-between mb-4'>
                    <input type="text" value={query} onChange={handleSearch} placeholder="Search data..." className='w-[60%] p-2 border border-gray-300 rounded-md' />
                    <Link href='Client/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Add Client</Link>
                    <Link href='archiveclient' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Archive Client</Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>SL No</th>
                            <th className='p-3 text-left border'>Image</th>
                            <th className='p-3 text-left border'>Client Name</th>
                            <th className='p-3 text-left border'>Address</th>
                            <th className='p-3 text-left border'>Mobile Number</th>
                            <th className='p-3 text-center border'>Email</th>
                            <th className='p-3 text-left border'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((emp, index) => (
                                <tr key={emp.user_id} className="odd:bg-white even:bg-gray-100">
                                    <td className="p-3 border">{indexOfFirstData + index + 1}</td>
                                    <td className="p-3 border">
                                        <img src={`${emp.photo}`} alt={`${emp.name}'s photo`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                    </td>
                                    <td className="p-3 border">{emp.first_name + ' ' + emp.last_name}</td>
                                    <td className="p-3 border">
                                        {typeof emp.address === 'string' && emp.address.trim() !== ''
                                            ? (() => {
                                                try {
                                                    const parsedAddresses = JSON.parse(emp.address);
                                                    return Array.isArray(parsedAddresses)
                                                        ? parsedAddresses.map(addr => addr.address).join(', ')
                                                        : 'Invalid Address Format';
                                                } catch {
                                                    return 'Invalid Address Format';
                                                }
                                            })()
                                            : Array.isArray(emp.address)
                                                ? emp.address.map(addr => addr.address).join(', ')
                                                : 'No Address'}
                                    </td>
                                    <td className="p-3 border">{emp.mobile_no}</td>
                                    <td className="p-3 border">{emp.email}</td>
                                    <td className="p-3 text-center border">
                                        <div className="flex justify-center space-x-3">
                                            <Link className="p-2 text-white bg-green-500 rounded" href={`service-centers/${emp.user_id}/edit`}><CiEdit /></Link>
                                            <Link className="p-2 text-white bg-green-500 rounded" href={`Archive/${emp.user_id}`}>
              <BiArchive />
            </Link>
                                             <button className="p-2 text-white bg-red-500 rounded" onClick={(e) => handleDelete(e, emp.user_id)}><RiDeleteBinLine /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-3 text-center">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className='flex justify-center mt-4'>
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => setCurrentPage(number)} className={`px-4 py-2 mx-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
