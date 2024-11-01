import AdminLayout from '@/Layouts/AdminLayout'
import { Link, useForm } from '@inertiajs/react'
import React,{useState,useEffect} from 'react'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
function index({ tasks }) {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(tasks);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Filter data based on the search query
        const filtered = tasks.filter(tsk =>
            (tsk.first_name + ' ' + tsk.middle_name + ' ' + tsk.last_name).toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    }, [query, tasks]);

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
        if (confirm("Are you sure you want to delete this task?")) {
            destroy(route('tasks.destroy', id), {
                onSuccess: () => {
                    notyf.success('Task deleted successfully!');
                },
                onError: () => {
                    notyf.error('Failed to delete task.');
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
                        type="search"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search data..."
                        className='w-[60%] p-2 border border-gray-300 rounded-md'
                    />
                    <Link href='tasks/create' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Add Task
                    </Link>
                </div>

                <table className="w-full border border-collapse table-auto">
                    <thead className='text-white bg-gray-700'>
                        <tr>
                            <th className='p-3 text-left border'>Client</th>
                            <th className='p-3 text-left border'>Assign To</th>
                            <th className='p-3 text-left border'>Assign Date</th>
                            <th className='p-3 text-left border'>Close Date</th>
                            <th className='p-3 text-left border'>Status</th>
                            <th className='p-3 text-center border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentData && currentData.map((tsk, i) => (
                                <tr key={i}>
                                    <td className='p-3'>{tsk.first_name + ' ' + tsk.middle_name + ' ' + tsk.last_name}</td>
                                    <td className='p-3'>{tsk.name}</td>
                                    <td className='p-3'>{tsk.assign_date}</td>
                                    <td className='p-3'>{tsk.close_date}</td>
                                    <td>
                                        <div className='flex justify-center'>
                                            {tsk.status == 'open' && <p className='text-sm font-medium bg-green-500 px-2 text-white py-1 rounded'>Open</p>}
                                            {tsk.status == 'progress' && <p className='text-sm font-medium bg-amber-500 px-2 py-1 rounded'>In Progress</p>}
                                            {tsk.status == 'closed' && <p className='text-sm font-medium bg-red-500 text-white px-2 py-1 rounded'>Closed</p>}
                                        </div>
                                    </td>
                                    <td className='p-3 flex gap-1'>
                                        {/* <button className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-emerald-500 text-white rounded'><span>View</span></button> */}
                                        <Link href={`/tasks/${tsk.id}/edit`} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded'><span>Edit</span></Link>
                                        <button type='button' onClick={() => handleDelete(tsk.id)} className='text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded'><span>Delete</span></button>
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

export default index