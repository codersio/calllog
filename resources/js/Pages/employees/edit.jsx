import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';

const notyf = new Notyf();

const CreateOrUpdate = ({ client }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        client_id: client?.client_id || '',
        first_name: client?.first_name || '',
        middle_name: client?.middle_name || '',
        last_name: client?.last_name || '',
        gender: client?.gender || 'male',
        dob: client?.dob || '',
        phone: client?.phone || '',
        mobile_no: client?.mobile_no || '',
        addresses: client?.address || '',
        city: client?.city || '',
        state: client?.state || '',
        pin: client?.pincode || '',
        alt_mobile: client?.alt_mobile || '',
        image: client?.image || '',
        email: client?.email || '',
        password: '',
    });

    const [previewImage, setPreviewImage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        if (client?.image) {
            setPreviewImage(client.image);
        } else {
            setPreviewImage(''); // Clear preview if no image
        }
    }, [client]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setPreviewImage(URL.createObjectURL(file)); // Create a URL for the selected file
        }
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleGenderChange = (e) => {
        setData('gender', e.target.value);
    };

    const validateFields = () => {
        const newErrors = {};
        const requiredFields = [
            'first_name', 'last_name', 'addresses', 'city', 
            'state', 'pin', 'mobile_no', 'email', 'dob', 'gender'
        ];

        requiredFields.forEach(field => {
            if (!data[field]) {
                newErrors[field] = `${field.replace('_', ' ')} is required.`;
            }
        });

        setValidationErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            put(`/Employee/${client.user_id}`, {
                onSuccess: () => {
                    notyf.success('Employee updated successfully!');
                    reset(); // Reset the form after successful submission
                },
                onError: () => {
                    notyf.error('Failed to update Employee. Please check your inputs.');
                }
            });
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">{client ? 'Update' : 'Add'} Employee</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Client Id */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Client Id</label>
                        <input
                            type="text"
                            name="client_id"
                            readOnly={true}
                            value={data.client_id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Client Id"
                        />
                        {errors.client_id && <p className="mt-1 text-xs text-red-500">{errors.client_id}</p>}
                    </div>

                    {/* First Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={data.first_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter First Name"
                        />
                        {validationErrors.first_name && <p className="mt-1 text-xs text-red-500">{validationErrors.first_name}</p>}
                    </div>

                    {/* Middle Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Middle Name</label>
                        <input
                            type="text"
                            name="middle_name"
                            value={data.middle_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Middle Name"
                        />
                        {errors.middle_name && <p className="mt-1 text-xs text-red-500">{errors.middle_name}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={data.last_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Last Name"
                        />
                        {validationErrors.last_name && <p className="mt-1 text-xs text-red-500">{validationErrors.last_name}</p>}
                    </div>

                    {/* Gender Selection */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={data.gender === 'male'}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={data.gender === 'female'}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="other"
                                    checked={data.gender === 'other'}
                                    onChange={handleGenderChange}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                        {validationErrors.gender && <p className="mt-1 text-xs text-red-500">{validationErrors.gender}</p>}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={data.dob}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {validationErrors.dob && <p className="mt-1 text-xs text-red-500">{validationErrors.dob}</p>}
                    </div>

                    {/* Address Information */}
                    <h2 className="mb-1 text-2xl font-bold text-gray-600 md:col-span-2">Address Information</h2>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="addresses"
                            value={data.addresses}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Address"
                        />
                        {validationErrors.addresses && <p className="mt-1 text-xs text-red-500">{validationErrors.addresses}</p>}
                    </div>

                    {/* City */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={data.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter City"
                        />
                        {validationErrors.city && <p className="mt-1 text-xs text-red-500">{validationErrors.city}</p>}
                    </div>

                    {/* State */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            name="state"
                            value={data.state}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter State"
                        />
                        {validationErrors.state && <p className="mt-1 text-xs text-red-500">{validationErrors.state}</p>}
                    </div>

                    {/* Pin Code */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Pin Code</label>
                        <input
                            type="text"
                            name="pin"
                            value={data.pin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Pin Code"
                        />
                        {validationErrors.pin && <p className="mt-1 text-xs text-red-500">{validationErrors.pin}</p>}
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            name="mobile_no"
                            value={data.mobile_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Mobile Number"
                        />
                        {validationErrors.mobile_no && <p className="mt-1 text-xs text-red-500">{validationErrors.mobile_no}</p>}
                    </div>

                    {/* Alt Mobile */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Alternative Mobile Number</label>
                        <input
                            type="text"
                            name="alt_mobile"
                            value={data.alt_mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Alternative Mobile Number"
                        />
                        {validationErrors.alt_mobile && <p className="mt-1 text-xs text-red-500">{validationErrors.alt_mobile}</p>}
                    </div>

                    {/* Profile Image */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Profile Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Profile Preview"
                                className="mb-2 w-24 h-24 object-cover rounded-full"
                            />
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : client ? 'Update Client' : 'Add Client'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateOrUpdate;
