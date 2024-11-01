import AdminLayout from '@/Layouts/AdminLayout'
import { Link, useForm } from '@inertiajs/react'
import React,{useState,useEffect} from 'react'
import { FaPencil } from 'react-icons/fa6';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
export default function index({ amcs }) {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(amcs);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Filter data based on the search query
        const filtered = amcs.filter(amc =>
            amc.amc_no.includes(query)
        );
        setFilteredData(filtered);
    }, [query, amcs]);

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

    const formatLabel = (label) => {
        return label
            .split('_') // Split by underscore
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join with a space
    };

    const addOneMonth = (date) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + 1);
        return newDate.toLocaleDateString(); // Format the date as needed
    };

    const { delete: destroy } = useForm()
    function handleDelete(id) {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this AMC?")) {
            destroy(route('amc.destroy', id), {
                onSuccess: () => {
                    notyf.success('AMC deleted successfully!');
                },
                onError: () => {
                    notyf.error('Failed to delete amc.');
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
                    <Link href={route('amc.create')} className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Add Amc
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>AMC No.</th>
                            <th className='p-3 text-left border'>Customer Name</th>
                            <th className='p-3 text-left border'>Date</th>
                            <th className='p-3 text-left border'>Assigned To</th>
                            <th className='p-3 text-left border'>Next Services</th>
                            <th className='p-3 text-left border'>Upcoming Services</th>
                            <th className='p-3 text-left border'>Status</th>
                            <th className='p-3 text-center border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentData && currentData.map((amc, index) => (
                                <tr key={index}>
                                    <td className="p-3">
                                        {amc.amc_no}
                                    </td>
                                    <td className="p-3">
                                        {amc.first_name + ' ' + amc.middle_name + ' ' + amc.last_name}
                                    </td>
                                    <td className="p-3">
                                        {amc.date}
                                    </td>
                                    <td className="p-3">
                                        {amc.assigned_to}
                                    </td>
                                    <td className="p-3">
                                        {addOneMonth(new Date())}
                                    </td>
                                    <td className="p-3">
                                        {amc.interval}
                                    </td>
                                    <td className="p-3">
                                        {formatLabel(amc.status)}
                                    </td>
                                    <td className='p-3 flex gap-1'>
                                        {/* <button className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-emerald-500 text-white rounded'><span>View</span></button> */}
                                        <Link href={`/amc/${amc.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'><span>Edit</span></Link>
                                        <button type='button' onClick={()=>handleDelete(amc.id)} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'><span>Delete</span></button>
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
