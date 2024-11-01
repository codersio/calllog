import React, { useEffect, useState } from 'react';
import Modal from '@/Components/Modal';
import { useForm } from '@inertiajs/react'; // Import useForm from Inertia.js
import { Notyf } from 'notyf'; // Import Notyf for notifications
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

const TaskType = ({ tasktype }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTaskTypeId, setSelectedTaskTypeId] = useState(null);

    // Initialize Notyf
    const notyf = new Notyf();

    // Use useForm for form handling
    const { data, setData, post, put, delete: inertiaDelete, reset, errors } = useForm({
        name: '', // Initial form field
        status: 1 // Initial form field for percent
    });

    const openModal = (tasktype = null) => {
        setIsModalOpen(true);
        if (tasktype) {
            setData(prevState => ({
                ...prevState,
                name: tasktype.name || '',
                status: tasktype.status || 0
            }));
        }
        setSelectedTaskTypeId(tasktype ? tasktype.id : null); // Set tax ID for editing
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTaskTypeId(null); // Reset the selected tax ID
        reset('name', 'percent'); // Reset the form fields
    };

    const handleCreateOrUpdateTaskType = (e) => {
        e.preventDefault();
        if (selectedTaskTypeId) {
            console.log(selectedTaskTypeId);
            put(`/tasktype-update/${selectedTaskTypeId}`, {
                onSuccess: () => {
                    notyf.success('Task Type updated successfully!');
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while updating the task type.');
                },
            });
        } else {
            // Create new tax
            post('/tasktype-store', {
                onSuccess: () => {
                    notyf.success('Task Type created successfully!');
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while creating the tasktype.');
                },
            });
        }
    };

    // const destroy=delete;

    const handleDeleteTaskType = async (id) => {
        if (confirm('Are you sure you want to delete this task type?')) {
            try {
                await inertiaDelete(`/tasktype-delete/${id}`); // Make sure to await the delete call
                notyf.success('Tax deleted successfully!'); // Show success message
            } catch (error) {
                console.error('Error deleting tax:', error);
                notyf.error('An error occurred while deleting the tax.'); // Show error message
            }
        }
    };

    return (
        <>
            <AdminLayout>
                <div className="flex-1 p-6 bg-gray-100">
                    <div className='flex justify-between'>
                        <h1 className="mb-4 text-2xl font-bold">Manage Task Type</h1>
                        <button onClick={() => openModal()} className="p-2 text-teal-900 underline rounded-md">
                            Create Task Type
                        </button>
                    </div>

                    <div className='mt-3'>
                        <table className='min-w-full border border-gray-300'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th className='px-4 py-2 text-left border-b'>Name</th>
                                    <th className='px-4 py-2 text-left border-b'>Status</th>
                                    <th className='px-4 py-2 text-right border-b'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasktype.map(t => (
                                    <tr key={t.id} className='transition duration-200 hover:bg-gray-100'>
                                        <td className='px-4 py-2 border-b'>{t.name}</td>
                                        <td className='px-4 py-2 border-b'>
                                            <div className='flex'>
                                                {t.status ? <p className='text-sm font-semibold text-green-500 bg-green-100 px-3 py-0.5 rounded-full'>Active</p> : <p className='text-sm font-semibold text-red-500 bg-red-100 px-3 py-0.5 rounded-full'>Inactive</p>}
                                            </div>
                                        </td>
                                        <td className='px-4 py-2 text-right border-b'>
                                            <button onClick={() => openModal(t)} className="text-blue-600 underline hover:text-blue-800">Edit</button>
                                            <button onClick={() => handleDeleteTaskType(t.id)} className="ml-4 text-red-600 underline hover:text-red-800">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>

            {/* Modal for creating or updating tax */}
            <Modal show={isModalOpen} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-bold">{selectedTaskTypeId ? 'Edit Task Type' : 'Create New Task Type'}</h2>
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                    {errors.amount && <p className="text-red-600">{errors.amount}</p>}
                    <form onSubmit={handleCreateOrUpdateTaskType} className="mt-4">
                        <label className="block mb-2">
                            Task Type Name:
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                        <label className="flex flex-col mb-2">
                            Status:
                            {/* <input
                                type="text"
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                required
                            /> */}
                            <label className="inline-flex items-center mb-5 mt-2 cursor-pointer">
                                <input onChange={(e) => setData(prevData => ({ ...prevData, status: e.target.checked }))} type="checkbox" checked={!!data.status} className="sr-only peer" />
                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:ring-0 peer-focus:ring-offset-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </label>
                        <button
                            type="submit"
                            className="p-2 mt-4 mr-2 text-white bg-blue-600 rounded-md"
                        >
                            {selectedTaskTypeId ? 'Update Task Type' : 'Create Task Type'}
                        </button>
                        <button
                            onClick={closeModal}
                            type="button"
                            className="p-2 mt-2 text-white bg-red-600 rounded-md"
                        >
                            Close
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default TaskType;
