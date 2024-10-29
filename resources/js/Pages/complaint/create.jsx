import AdminLayout from '@/Layouts/AdminLayout'
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

function create({ customers, products, employees }) {

    const { post, data, setData, errors, processing } = useForm({
        complaint_no: '',
        date: '',
        customer_id: '',
        complaint_type: '',
        description: '',
        product_id: '',
        assigned_id: '',
        assigned_date: '',
        status:'',
        mobile_no: '',
        email: '',
        address: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        post(route('complaint.store'), {
            onSuccess: () => {
                // Show success notification on successful submission
                notyf.success('complaint added successfully!');
            },
            onError: () => {
                // Show error notification if there are errors
                notyf.error('Failed to add complaint. Please check your inputs.');
            }
        })
    }

    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Complaint</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Complaint No.</label>
                        <input onChange={(e) => setData('complaint_no', e.target.value)} value={data.complaint_no} type="text" className="form-input w-full rounded" placeholder='Enter complaint no' />
                        {errors.complaint_no && <p className="mt-1 text-xs text-red-500">{errors.complaint_no}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Complaint Date</label>
                        <input type="date" name='date' onChange={(e) => setData('date', e.target.value)} value={data.date} className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Customer Name</label>
                        <select name="" onChange={(e) => setData('customer_id', e.target.value)} value={data.customer_id} className='form-select w-full rounded' id="">
                            <option value="">-- Select Customer --</option>
                            {
                                customers && customers.map((cust, i) => (
                                    <option key={i} value={cust.user_id}>{cust.first_name + ' ' + cust.middle_name + ' ' + cust.last_name}</option>
                                ))
                            }
                        </select>
                        {errors.customer_id && <p className="mt-1 text-xs text-red-500">{errors.customer_id}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Complaint Type</label>
                        <select name="" onChange={(e) => setData('complaint_type', e.target.value)} value={data.complaint_type} className='form-select w-full rounded' id="">
                            <option value="0">Under Warranty</option>
                            <option value="1">Warranty Expires</option>
                        </select>
                        {errors.complaint_type && <p className="mt-1 text-xs text-red-500">{errors.complaint_type}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Complaint Description</label>
                        <textarea name="" onChange={(e) => setData('description', e.target.value)} value={data.description} id="" rows={3} className='form-textarea resize-none w-full rounded' placeholder='Enter billing address'></textarea>
                        {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Product</label>
                        <select name="" onChange={(e) => setData('product_id', e.target.value)} value={data.product_id} className='form-select w-full rounded' id="">
                            <option value="">-- Select Product --</option>
                            {
                                products && products.map((prd, i) => (
                                    <option key={i} value={prd.id}>{prd.name}</option>
                                ))
                            }
                        </select>
                        {errors.product_id && <p className="mt-1 text-xs text-red-500">{errors.product_id}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Assigned To</label>
                        <select name="" onChange={(e) => setData('assigned_id', e.target.value)} value={data.assigned_id} className='form-select w-full rounded' id="">
                            <option value="">-- Select Assigned --</option>
                            {
                                employees && employees.map((emp, i) => (
                                    <option key={i} value={emp.id}>{emp.name}</option>
                                ))
                            }
                        </select>
                        {errors.assigned_id && <p className="mt-1 text-xs text-red-500">{errors.assigned_id}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Assigned Date</label>
                        <input type="date" name='date' onChange={(e) => setData('assigned_date', e.target.value)} value={data.assigned_date} className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.assigned_date && <p className="mt-1 text-xs text-red-500">{errors.assigned_date}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Status</label>
                        <select name="" onChange={(e) => setData('status', e.target.value)} value={data.status} className='form-select w-full rounded' id="">
                            <option value="0">Open</option>
                            <option value="1">Progress</option>
                            <option value="2">Closed</option>
                        </select>
                        {errors.status && <p className="mt-1 text-xs text-red-500">{errors.status}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Mobile No</label>
                        <input type="tel" onChange={(e) => setData('mobile_no', e.target.value)} value={data.mobile_no} className="form-input w-full rounded" placeholder='Enter mobile no' />
                        {errors.mobile_no && <p className="mt-1 text-xs text-red-500">{errors.mobile_no}</p>}
                    </div>

                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setData('email', e.target.value)} value={data.email} className="form-input w-full rounded" placeholder='Enter email' />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Address</label>
                        <textarea name="" onChange={(e) => setData('address', e.target.value)} value={data.address} id="" rows={3} className='form-textarea resize-none w-full rounded' placeholder='Enter address'></textarea>
                        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                    </div>
                    <div className='w-full py-5'>
                        <button className='py-2 px-6 text-sm bg-rose-600 rounded font-medium text-white'>Add Complaint</button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default create