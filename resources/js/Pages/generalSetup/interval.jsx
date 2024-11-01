import React, { useEffect, useState } from 'react';
import Modal from '@/Components/Modal';
import { useForm } from '@inertiajs/react'; // Import useForm from Inertia.js
import { Notyf } from 'notyf'; // Import Notyf for notifications
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

const Interval = ({ interval }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIntervalId, setSelectedIntervalId] = useState(null);

    // Initialize Notyf
    const notyf = new Notyf();

    // Use useForm for form handling
    const { data, setData, post, put, delete: inertiaDelete, reset, errors } = useForm({
        name: '', // Initial form field
        status: 1 // Initial form field for percent
    });

    const openModal = (interval = null) => {
        setIsModalOpen(true);
        if (interval) {
            setData(prevState => ({
                ...prevState,
                name: interval.name || '',
                status: interval.status || 0
            }));
        }
        setSelectedIntervalId(interval ? interval.id : null); // Set tax ID for editing
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedIntervalId(null); // Reset the selected tax ID
        reset('name', 'status'); // Reset the form fields
    };

    const handleCreateOrUpdateInterval = (e) => {
        e.preventDefault();
        if (selectedIntervalId) {
            console.log(selectedIntervalId);
            put(`/interval-update/${selectedIntervalId}`, {
                onSuccess: () => {
                    notyf.success('Interval updated successfully!');
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while updating the interval.');
                },
            });
        } else {
            // Create new tax
            post('/interval-store', {
                onSuccess: () => {
                    notyf.success('Interval created successfully!');
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while creating the interval.');
                },
            });
        }
    };

    // const destroy=delete;

    const handleDeleteInterval = async (id) => {
        if (confirm('Are you sure you want to delete this interval?')) {
            try {
                await inertiaDelete(`/interval-delete/${id}`);
                notyf.success('Interval deleted successfully!');
            } catch (error) {
                console.error('Error deleting interval:', error);
                notyf.error('An error occurred while deleting the interval.');
            }
        }
    };

    return (
        <>
            <AdminLayout>
                <div className="flex-1 p-6 bg-gray-100">
                    <div className='flex justify-between'>
                        <h1 className="mb-4 text-2xl font-bold">Manage Intervals</h1>
                        <button onClick={() => openModal()} className="p-2 text-teal-900 underline rounded-md">
                            Create Interval
                        </button>
                    </div>

                    <div className='mt-3'>
                        <table className='min-w-full border border-gray-300'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th className='px-4 py-2 text-left border-b'>Interval Time</th>
                                    <th className='px-4 py-2 text-left border-b'>Status</th>
                                    <th className='px-4 py-2 text-right border-b'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {interval.map(t => (
                                    <tr key={t.id} className='transition duration-200 hover:bg-gray-100'>
                                        <td className='px-4 py-2 border-b'>{t.name + ' Month'}</td>
                                        <td className='px-4 py-2 border-b'>
                                            <div className='flex'>
                                                {t.status ? <p className='text-sm font-semibold text-green-500 bg-green-100 px-3 py-0.5 rounded-full'>Active</p> : <p className='text-sm font-semibold text-red-500 bg-red-100 px-3 py-0.5 rounded-full'>Inactive</p>}
                                            </div>
                                        </td>
                                        <td className='px-4 py-2 text-right border-b'>
                                            <button onClick={() => openModal(t)} className="text-blue-600 underline hover:text-blue-800">Edit</button>
                                            <button onClick={() => handleDeleteInterval(t.id)} className="ml-4 text-red-600 underline hover:text-red-800">Delete</button>
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
                    <h2 className="text-lg font-bold">{selectedIntervalId ? 'Edit Interval' : 'Create New Interval'}</h2>
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                    {errors.amount && <p className="text-red-600">{errors.status}</p>}
                    <form onSubmit={handleCreateOrUpdateInterval} className="mt-4">
                        <label className="block mb-2">
                            Interval Time (Month):
                            <input
                                type="number"
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
                            {selectedIntervalId ? 'Update Interval' : 'Create Interval'}
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

export default Interval;
