import React, { useEffect, useState } from 'react';
import Modal from '@/Components/Modal';
import { useForm } from '@inertiajs/react'; // Import useForm from Inertia.js
import { Notyf } from 'notyf'; // Import Notyf for notifications
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

const Tax = ({ user, notif, user_type, tax }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTaxId, setSelectedTaxId] = useState(null);

    // Initialize Notyf
    const notyf = new Notyf();

    // Use useForm for form handling
    const { data, setData, post, put,delete: inertiaDelete, reset, errors } = useForm({
        name: '', // Initial form field
        percent: '' // Initial form field for percent
    });

    const openModal = (tax = null) => {
        setIsModalOpen(true);
        if (tax) {
            setData(prevState => ({
                ...prevState,
                name: tax.name || '',
                percent: tax.percent || ''
            }));
        } 
        setSelectedTaxId(tax ? tax.id : null); // Set tax ID for editing
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTaxId(null); // Reset the selected tax ID
        reset('name', 'percent'); // Reset the form fields
    };

    const handleCreateOrUpdateTax = (e) => {
        e.preventDefault();
        if (selectedTaxId) {
           console.log(selectedTaxId);
            put(`/tax-update/${selectedTaxId}`, {
                onSuccess: () => {
                    notyf.success('Tax updated successfully!'); 
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while updating the tax.');
                },
            });
        } else {
            // Create new tax
            post('/tax-store', {
                onSuccess: () => {
                    notyf.success('Tax created successfully!');
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while creating the tax.');
                },
            });
        }
    };

    // const destroy=delete;

    const handleDeleteTax = async (id) => {
        if (confirm('Are you sure you want to delete this tax?')) {
            try {
                await inertiaDelete(`/tax-delete/${id}`); // Make sure to await the delete call
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
                        <h1 className="mb-4 text-2xl font-bold">Manage Taxes</h1>
                        <button onClick={() => openModal()} className="p-2 text-teal-900 underline rounded-md">
                            Create Tax
                        </button>
                    </div>

                    <div className='mt-3'>
                        <table className='min-w-full border border-gray-300'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th className='px-4 py-2 text-left border-b'>Tax Name</th>
                                    <th className='px-4 py-2 text-left border-b'>Percentage (%)</th>
                                    <th className='px-4 py-2 text-right border-b'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tax.map(t => (
                                    <tr key={t.id} className='transition duration-200 hover:bg-gray-100'>
                                        <td className='px-4 py-2 border-b'>{t.name}</td>
                                        <td className='px-4 py-2 border-b'>{t.percent}</td>
                                        <td className='px-4 py-2 text-right border-b'>
                                            <button onClick={() => openModal(t)} className="text-blue-600 underline hover:text-blue-800">Edit</button>
                                            <button onClick={() => handleDeleteTax(t.id)} className="ml-4 text-red-600 underline hover:text-red-800">Delete</button>
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
                    <h2 className="text-lg font-bold">{selectedTaxId ? 'Edit Tax' : 'Create New Tax'}</h2>
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                    {errors.amount && <p className="text-red-600">{errors.amount}</p>}
                    <form onSubmit={handleCreateOrUpdateTax} className="mt-4">
                        <label className="block mb-2">
                            Tax Name:
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Percentage (%):
                            <input
                                type="text"
                                value={data.percent}
                                onChange={(e) => setData('percent', e.target.value)}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="p-2 mt-4 mr-2 text-white bg-blue-600 rounded-md"
                        >
                            {selectedTaxId ? 'Update Tax' : 'Create Tax'}
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

export default Tax;
