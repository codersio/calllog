import React from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';

const notyf = new Notyf();

const Create = ({client_idf2}) => {
    const { data, setData, post, processing, errors } = useForm({
        client_id: client_idf2.value,
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: 'male',
        dob: '',
        phone:'',
        mobile_no: '',
        addresses: '',
        city: '',
        state: '',
        pin: '',
        alt_mobile:'',
        image:'',
        email:'',
        password:'',
    });

    // New function to handle image change
    const handleImageChange = (e) => {
        setData('image', e.target.files[0]); // Save the first selected file
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleGenderChange = (e) => {
        setData('gender', e.target.value);
    };
   
    


    const handleSubmit = (e) => {
        e.preventDefault();
        post('/Employee', { // Adjust the endpoint to the correct one for creating a client
            onSuccess: () => {
                notyf.success('Employee added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add employee. Please check your inputs.');
            },
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Employee</h2>
                
                <h2 className="mb-1 text-2xl font-bold text-gray-600">Personal Information</h2>
                
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
                        {errors.first_name && <p className="mt-1 text-xs text-red-500">{errors.first_name}</p>}
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
                        {errors.last_name && <p className="mt-1 text-xs text-red-500">{errors.last_name}</p>}
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
                        {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
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
                        {errors.dob && <p className="mt-1 text-xs text-red-500">{errors.dob}</p>}
                    </div>

                   
                    {/* Address Section */}
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
                            placeholder="Enter City"
                        />
                        {errors.addresses && <p className="mt-1 text-xs text-red-500">{errors.addresses}</p>}
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
                        {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
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
                        {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
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
                        {errors.pin && <p className="mt-1 text-xs text-red-500">{errors.pin}</p>}
                    </div>
                    <h2 className="mb-1 text-2xl font-bold text-gray-600 md:col-span-2">Contact</h2>

                     {/* Contact */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Alternate Mobile No</label>
                        <input
                            type="text"
                            name="mobile_no"
                            value={data.mobile_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Mobile"
                        />
                        {errors.mobile_no && <p className="mt-1 text-xs text-red-500">{errors.mobile_no}</p>}
                    </div>
                     {/* Contact */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Alternate Mobile No</label>
                        <input
                            type="text"
                            name="alt_mobile"
                            value={data.alt_mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Alternate Mobile"
                        />
                        {errors.alt_mobile && <p className="mt-1 text-xs text-red-500">{errors.alt_mobile}</p>}
                    </div>
                    {/* Contact */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Alternate Mobile No</label>
                        <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Phone No"
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                     <h2 className="mb-1 text-2xl font-bold text-gray-600 md:col-span-2">Other Info</h2>

                  
                     {/* Email */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Email"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="text"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Password"
                        />
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                    </div>
                     {/* Image Upload Field */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*" // Accept only image files
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                    </div>
                 


                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Add Client'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default Create;
