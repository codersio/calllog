import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Notyf } from 'notyf';
import axios from 'axios'; // Import Axios for API requests
import 'notyf/notyf.min.css'; // Import Notyf styles
import AdminLayout from '@/Layouts/AdminLayout';

// Create an instance of Notyf
const notyf = new Notyf();

const create = ({ warranty_no, service_centers,distribter }) => {
    const { data, setData, post, processing, errors } = useForm({
        warranty_no: warranty_no.value,
        customer_name: '',
        address: '',
        phone: '',
        service_partner: '',
        pin: '',
        distributer_name1: '',
        source_material: '',
        model: '',
        purchase: '',
        sl_no: '',
        invoice_no:'',
        invoice_date:'',
        service_partner_address: '',
        service_partner_pin: '',
        service_partner_contact1: '', // Initialize with an empty string
        service_partner_contact2: '', // Initialize with an empty string
        service_partner_pan: '',      // Initialize with an empty string
        distributer_name: '',         // Initialize with an empty string
        distributer_address: '',      // Initialize with an empty string
        distributer_pin: '',          // Initialize with an empty string
        distributer_contact1: '',     // Initialize with an empty string
        distributer_contact2: '',     // Initialize with an empty string
        distributer_pan: '',        
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Fetch service partner details when service_partner changes
    useEffect(() => {
        if (data.service_partner) {
            // Make an API call to get service partner details
            axios.get(`/Get-Service/${data.service_partner}`)
                .then((response) => {
                    // Update the service partner address and pin fields
                    setData({
                        ...data,
                        service_partner_address: response.data.address, // Assuming the address field in response
                        service_partner_pin: response.data.pin, // Assuming the pin field in response
                        service_partner_contact2:response.data.con1,
                        service_partner_contact1:response.data.con2,
                        service_partner_pan:response.data.pan,
                    });
                })
                .catch((error) => {
                    console.error("Failed to fetch service partner details", error);
                });
        }
    }, [data.service_partner]);
     // Dependency on service_partner selection

     useEffect(() => {
        if (data.distributer_name1) {
            axios.get(`/Get-Distributer/${data.distributer_name1}`)
                .then((response) => {
                    setData({
                        ...data,
                        distributer_name: response.data.name,
                        distributer_address: response.data.address,
                        distributer_pin: response.data.pin,
                        distributer_contact1: response.data.con1,
                        distributer_contact2: response.data.con2,
                        distributer_pan: response.data.pan,
                    });
                })
                .catch((error) => {
                    console.error("Failed to fetch distributor details", error);
                });
        }
    }, [data.distributer_name1]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/Warranty-Extend', {
            onSuccess: () => {
                notyf.success('Call Allocation added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add call allocation. Please check your inputs.');
            }
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Warranty Extend Registration</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Call No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Warranty No</label>
                        <input
                            type="text"
                            name="warranty_no"
                            readOnly={true}
                            value={data.warranty_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter service center's name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Customer Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Customer Name</label>
                        <input
                            type="text"
                            name="customer_name"
                            value={data.customer_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Customer Name"
                        />
                        {errors.customer_name && <p className="mt-1 text-xs text-red-500">{errors.customer_name}</p>}
                    </div>

                    {/* Customer Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Customer Address</label>
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Customer Address"
                        />
                        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                    </div>

                    {/* Customer Mobile No */}
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text" // changed from "number" to "text" to handle validation properly
                            name="phone"
                            value={data.phone}
                            onChange={(e) => {
                                const { value } = e.target;
                                // Allow only digits and ensure it's 10 digits long
                                if (value === '' || (/^\d{0,10}$/.test(value))) {
                                    handleChange(e);
                                }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Phone Number"
                            maxLength={10} // limits the input length to 10 digits
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Service Partner */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner</label>
                        <select
                            name="service_partner"
                            value={data.service_partner}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">---Select----</option>
                            {service_centers.map((service_center) => (
                                <option key={service_center.id} value={service_center.id}>
                                    {service_center.name}
                                </option>
                            ))}
                        </select>
                        {errors.service_partner && <p className="mt-1 text-xs text-red-500">{errors.service_partner}</p>}
                    </div>

                            {/* Service Partner Pin */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Pin</label>
                        <input
                            type="text"
                            name="pin"
                            value={data.pin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Pin"
                        />
                        {errors.pin && <p className="mt-1 text-xs text-red-500">{errors.pin}</p>}
                    </div>
                    {/* Service Partner Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Address</label>
                        <input
                            type="text"
                            name="service_partner_address"
                            value={data.service_partner_address}
                            onChange={handleChange}
                            readOnly={true}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Address"
                        />
                        {errors.service_partner_address && <p className="mt-1 text-xs text-red-500">{errors.service_partner_address}</p>}
                    </div>

                    {/* Service Partner Pin */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Pin</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="service_partner_pin"
                            value={data.service_partner_pin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Pin"
                        />
                        {errors.service_partner_pin && <p className="mt-1 text-xs text-red-500">{errors.service_partner_pin}</p>}
                    </div>

                     {/* Service Partner Address */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Contact No 1</label>
                        <input
                            type="text"
                            name="service_partner_contact1"
                            value={data.service_partner_contact1}
                            onChange={handleChange}
                            readOnly={true}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Contact No 1"
                        />
                        {errors.service_partner_contact1 && <p className="mt-1 text-xs text-red-500">{errors.service_partner_contact1}</p>}
                    </div>

                    {/* Service Partner Contact No 2 */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Contact No 2</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="service_partner_contact2"
                            value={data.service_partner_contact2}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Conatct No 2"
                        />
                        {errors.service_partner_contact2 && <p className="mt-1 text-xs text-red-500">{errors.service_partner_contact2}</p>}
                    </div>
                    {/* service_partner_pan */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Service Partner Pan No</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="service_partner_pan"
                            value={data.service_partner_pan}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Service Partner Pin"
                        />
                        {errors.service_partner_pan && <p className="mt-1 text-xs text-red-500">{errors.service_partner_pan}</p>}
                    </div>
                    <br />
                    {/* Service Partner */}
                    <label htmlFor="">Distributor Details</label>
<br />
<hr /><hr />
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">User Name</label>
                        <select
                            name="distributer_name1"
                            value={data.distributer_name1}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">---Select----</option>
                            {distribter.map((distribters) => (
                                <option key={distribters.id} value={distribters.id}>
                                    {distribters.name}
                                </option>
                            ))}
                        </select>
                        {errors.distributer_name1 && <p className="mt-1 text-xs text-red-500">{errors.distributer_name1}</p>}
                    </div>

                     {/* Distributer NAme */}
                     <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Distributor Name</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="distributer_name"
                            value={data.distributer_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Distributor Name"
                        />
                        {errors.distributer_name && <p className="mt-1 text-xs text-red-500">{errors.distributer_name}</p>}
                    </div>
                    {/* Distributer Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Distributor Address</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="distributer_address"
                            value={data.distributer_address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Distributor Address"
                        />
                        {errors.distributer_address && <p className="mt-1 text-xs text-red-500">{errors.distributer_address}</p>}
                    </div>
                    {/* Distributer Pin */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Distributor Pin</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="distributer_pin"
                            value={data.distributer_pin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Distributor  Pin"
                        />
                        {errors.distributer_pin && <p className="mt-1 text-xs text-red-500">{errors.distributer_pin}</p>}
                    </div>
                    {/* Distributer Contact No1 */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Distributor Contatct No 1</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="distributer_contact1"
                            value={data.distributer_contact1}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Distributor  Conatact No 1"
                        />
                        {errors.distributer_contact1 && <p className="mt-1 text-xs text-red-500">{errors.distributer_contact1}</p>}
                    </div>
                    {/* Distributer Contact N2 */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Distributor Contatct No 2</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="distributer_contact2"
                            value={data.distributer_contact2}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Distributor Contact No 2"
                        />
                        {errors.distributer_contact2 && <p className="mt-1 text-xs text-red-500">{errors.distributer_contact2}</p>}
                    </div>
                    {/* Distributer PAN*/}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Distributor Pan</label>
                        <input
                            type="text"
                            readOnly={true}
                            name="distributer_pan"
                            value={data.distributer_pan}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Distributor Pan No"
                        />
                        {errors.distributer_pan && <p className="mt-1 text-xs text-red-500">{errors.distributer_pan}</p>}
                    </div>
<br />

<label htmlFor="">Product Details</label> <br />
<hr /><hr />

                    {/* source of matrial */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Source Of Material</label>
                        <input
                            type="text"
                            name="source_material"
                            value={data.source_material}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Source Of Material"
                        />
                        {errors.source_material && <p className="mt-1 text-xs text-red-500">{errors.source_material}</p>}
                    </div>
                    {/* Model */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Model Number</label>
                        <input
                            type="text"
                            name="model"
                            value={data.model}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Model Number"
                        />
                        {errors.model && <p className="mt-1 text-xs text-red-500">{errors.model}</p>}
                    </div>
                    {/* Sl No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">SL Number</label>
                        <input
                            type="text"
                            name="sl_no"
                            value={data.sl_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Model Number"
                        />
                        {errors.sl_no && <p className="mt-1 text-xs text-red-500">{errors.sl_no}</p>}
                    </div>
                    {/* Sl No */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Invoice Number</label>
                        <input
                            type="text"
                            name="invoice_no"
                            value={data.invoice_no}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Model Number"
                        />
                        {errors.invoice_no && <p className="mt-1 text-xs text-red-500">{errors.invoice_no}</p>}
                    </div>

                    {/* Date Of Purchase */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Date Of Purchase</label>
                        <input
                            type="date"
                            name="purchase"
                            value={data.purchase}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Date Of Purchase"
                        />
                        {errors.purchase && <p className="mt-1 text-xs text-red-500">{errors.purchase}</p>}
                    </div>
                    {/* Reason */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Date Of Invoice</label>
                        <input
                            type="date"
                            name="invoice_date"
                            value={data.invoice_date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Reason"
                        />
                        {errors.invoice_date && <p className="mt-1 text-xs text-red-500">{errors.invoice_date}</p>}
                    </div>
                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default create;
