import React from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AdminLayout from '@/Layouts/AdminLayout';
import { Inertia } from '@inertiajs/inertia';
const notyf = new Notyf();

const Create = ({ client,client_history }) => {
    console.log(client)
    const { data, setData, patch, processing, errors } = useForm({
        client_id: client.client_id,
        first_name: client.first_name,
        middle_name: client.middle_name,
        last_name: client.last_name,
        gender: client.gender || 'male',
        dob: client.dob,
        company_name: client.company_name,
        position: client.main_person,
        account_number: client.account_number,
        ifsc_code: client.ifs_code,
        branch_name: client.branch_name,
        tin_no: client.tin_no,
        cst_no: client.cst_no,
        pan_no: client.pan_no,
        contact_person: client_history || [],
        mobile_no: client.mobile_no,
        addresses: client.address || [],
        city: client.city,
        state: client.state,
        pin: client.pincode,
        alt_mobile: client.alt_mobile,
        photo: '',
        email: client.email,
        password: '',
    });

    // New function to handle image change
    const handleImageChange = (e) => {
        setData('photo', e.target.files[0]); // Save the first selected file
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleGenderChange = (e) => {
        setData('gender', e.target.value);
    };
    const handleAddressChange = (index, e) => {
        const newAddresses = [...data.addresses];
        newAddresses[index].address = e.target.value;
        setData('addresses', newAddresses);
    };

    const addAddress = () => {
        setData('addresses', [...data.addresses, { address: '' }]);
    };

    const removeAddress = (index) => {
        const newAddresses = data.addresses.filter((_, i) => i !== index);
        setData('addresses', newAddresses);
    };

    // Function to handle adding a new contact person row
    const addContactPerson = () => {
        setData('contact_person', [...data.contact_person, { name: '', mobile: '', designation: '' }]);
    };

    // Function to handle changes in contact person fields
    const handleContactPersonChange = (index, field, value) => {
        const newContactPersons = [...data.contact_person];
        newContactPersons[index][field] = value;
        setData('contact_person', newContactPersons);
    };

    // Function to remove a contact person row
    const removeContactPerson = (index) => {
        const newContactPersons = data.contact_person.filter((_, i) => i !== index);
        setData('contact_person', newContactPersons);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/Client/${client.user_id}`, { // Adjust the endpoint to the correct one for creating a client
            onSuccess: () => {
                notyf.success('Client updated successfully!');
            },
            onError: () => {
                notyf.error('Failed to update client. Please check your inputs.');
            },
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Client</h2>

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

                    {/* Company Details */}
                    <h2 className="mb-1 text-2xl font-bold text-gray-600 md:col-span-2">Company Information</h2>
                    {/* Position */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Main Person Name</label>
                        <input
                            type="text"
                            name="position"
                            value={data.position}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Position"
                        />
                        {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position}</p>}
                    </div>
                    {/* Company Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            name="company_name"
                            value={data.company_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Company Name"
                        />
                        {errors.company_name && <p className="mt-1 text-xs text-red-500">{errors.company_name}</p>}
                    </div>



                    {/* Account Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Account Number</label>
                        <input
                            type="text"
                            name="account_number"
                            value={data.account_number}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Account Number"
                        />
                        {errors.account_number && <p className="mt-1 text-xs text-red-500">{errors.account_number}</p>}
                    </div>

                    {/* IFSC Code */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">IFSC Code</label>
                        <input
                            type="text"
                            name="ifsc_code"
                            value={data.ifsc_code}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter IFSC Code"
                        />
                        {errors.ifsc_code && <p className="mt-1 text-xs text-red-500">{errors.ifsc_code}</p>}
                    </div>

                    {/* Branch Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Branch Name</label>
                        <input
                            type="text"
                            name="branch_name"
                            value={data.branch_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Branch Name"
                        />
                        {errors.branch_name && <p className="mt-1 text-xs text-red-500">{errors.branch_name}</p>}
                    </div>

                    {/* TIN No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">TIN No</label>
                        <input
                            type="text"
                            name="tin_no"
                            value={data.tin_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter TIN No"
                        />
                        {errors.tin_no && <p className="mt-1 text-xs text-red-500">{errors.tin_no}</p>}
                    </div>

                    {/* CST No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">CST No</label>
                        <input
                            type="text"
                            name="cst_no"
                            value={data.cst_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter CST No"
                        />
                        {errors.cst_no && <p className="mt-1 text-xs text-red-500">{errors.cst_no}</p>}
                    </div>

                    {/* Pan No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">PAN No</label>
                        <input
                            type="text"
                            name="pan_no"
                            value={data.pan_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter PAN No"
                        />
                        {errors.pan_no && <p className="mt-1 text-xs text-red-500">{errors.pan_no}</p>}
                    </div>

                    {/* Mobile No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Mobile No</label>
                        <input
                            type="text"
                            name="mobile_no"
                            value={data.mobile_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Mobile No"
                        />
                        {errors.mobile_no && <p className="mt-1 text-xs text-red-500">{errors.mobile_no}</p>}
                    </div>

                    {/* Address Section */}
                    <h2 className="mb-1 text-2xl font-bold text-gray-600 md:col-span-2">Address Information</h2>

                    {/* Render Address Fields */}
                    {data.addresses.map((address, index) => (
                        <div key={index} className="md:col-span-2 flex items-center space-x-2">
                            <input
                                name={`address_${index}`}
                                value={address.address}
                                onChange={(e) => handleAddressChange(index, e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Address"
                                required // Make this field required
                            />
                            {data.addresses.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeAddress(index)}
                                    className="px-4 py-2 text-red-600 bg-transparent border border-red-600 rounded-lg hover:bg-red-600 hover:text-white"
                                >
                                    -
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={addAddress}
                                className="px-4 py-2 text-green-600 bg-transparent border border-green-600 rounded-lg hover:bg-green-600 hover:text-white"
                            >
                                +
                            </button>
                        </div>
                    ))}

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
                            name="alt_mobile"
                            value={data.alt_mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Alternate Mobile"
                        />
                        {errors.alt_mobile && <p className="mt-1 text-xs text-red-500">{errors.alt_mobile}</p>}
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
                            name="photo"
                            accept="image/*" // Accept only image files
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.photo && <p className="mt-1 text-xs text-red-500">{errors.photo}</p>}
                    </div>
                    {/* Contact Person Table Section */}
                    <h2 className="mb-1 text-2xl font-bold text-gray-600 md:col-span-2">Other Contact Details</h2>


                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="button"
                            onClick={addContactPerson}
                            className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Add New'}
                        </button>
                    </div>
                    <table className="table-auto border-collapse border border-gray-300" id="tab_product_detail" align="center">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Contact Person Name</th>
                                <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
                                <th className="border border-gray-300 px-4 py-2">Designation</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.contact_person.map((contact, index) => (
                                <tr key={index} id={`row_id_${index}`}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            name={`contact_person[name][${index}]`}
                                            placeholder="Enter Name.."
                                            className="quantity form-control"
                                            value={contact.name}
                                            onChange={(e) => handleContactPersonChange(index, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            name={`contact_person[mobile][${index}]`}
                                            placeholder="Enter Mobile Number.."
                                            className="quantity form-control"
                                            value={contact.mobile}
                                            onChange={(e) => handleContactPersonChange(index, 'mobile', e.target.value)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            name={`contact_person[designation][${index}]`}
                                            placeholder="Enter Designation.."
                                            className="quantity form-control"
                                            value={contact.designation}
                                            onChange={(e) => handleContactPersonChange(index, 'designation', e.target.value)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <span className="trash" onClick={() => removeContactPerson(index)}>
                                            <i className="fa fa-trash"></i> Delete
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Update Client'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default Create;
