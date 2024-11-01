import AdminLayout from '@/Layouts/AdminLayout'
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
function edit({ task,customers,employees,ttypes }) {

    const { put, data, setData, errors, processing } = useForm({
        customer_id: task.customer_id,
        employee_id: task.employee_id,
        subject: task.subject,
        assign_date: task.assign_date,
        task_type_id: task.task_type_id,
        remarks: task.remarks || '',
        description: task.description,
        close_date: task.close_date,
        attachment: '',
        status: task.status,
    })



    function handleSubmit(e) {
        e.preventDefault();
        put(route('tasks.update',task.id), {
            onSuccess: () => {
                notyf.success('Task updated successfully!');
            },
            onError: () => {
                notyf.error('Failed to add task. Please check your inputs.');
            }
        })
    }
    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Tasks</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Customer Name</label>
                        <select name="" onChange={(e) => setData('customer_id', e.target.value)} value={data.customer_id} className='w-full rounded form-select' id="">
                            <option value="">-- Select Customer --</option>
                            {
                                customers && customers.map((cust, i) => (
                                    <option key={i} value={cust.user_id}>{cust.first_name + ' ' + cust.middle_name + ' ' + cust.last_name}</option>
                                ))
                            }
                        </select>
                        {errors.customer_id && <p className="mt-1 text-xs text-red-500">{errors.customer_id}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Assign To</label>
                        <select name="" onChange={(e) => setData('employee_id', e.target.value)} value={data.employee_id} className='w-full rounded form-select' id="">
                            <option value="">-- Select Assigned To --</option>
                            {
                                employees && employees.map((emp, i) => (
                                    <option key={i} value={emp.id}>{emp.name}</option>
                                ))
                            }
                        </select>
                        {errors.employee_id && <p className="mt-1 text-xs text-red-500">{errors.employee_id}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Subject</label>
                        <input onChange={(e) => setData('subject', e.target.value)} value={data.subject} type="text" className="w-full rounded form-input" placeholder='Enter subject' />
                        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Assigned Date</label>
                        <input type="date" name='date' onChange={(e) => setData('assign_date', e.target.value)} value={data.assign_date} className="w-full rounded form-input" placeholder='Enter bill no' />
                        {errors.assign_date && <p className="mt-1 text-xs text-red-500">{errors.assign_date}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Task Type</label>
                        <select name="status" onChange={(e) => setData('task_type_id', e.target.value)} value={data.task_type_id} className='w-full rounded form-select' id="">
                            <option value="">-- Select Task Type --</option>
                            {
                                ttypes && ttypes.map((tsk,i)=>(
                                    <option key={i} value={tsk.id}>{tsk.name}</option>
                                ))
                            }
                        </select>
                        {errors.task_type_id && <p className="mt-1 text-xs text-red-500">{errors.task_type_id}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Remarks</label>
                        <input type="text" onChange={(e) => setData('remarks', e.target.value)} value={data.remarks} className="w-full rounded form-input" placeholder='Enter remarks' />
                        {errors.remarks && <p className="mt-1 text-xs text-red-500">{errors.remarks}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Description</label>
                        <textarea name="" onChange={(e) => setData('description', e.target.value)} value={data.description} id="" rows={1} className='w-full rounded resize-none form-textarea' placeholder='Enter description'></textarea>
                        {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Close Date</label>
                        <input type="date" name='date' onChange={(e) => setData('close_date', e.target.value)} value={data.close_date} className="w-full rounded form-input" placeholder='Enter bill no' />
                        {errors.close_date && <p className="mt-1 text-xs text-red-500">{errors.close_date}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="attachments">Attachments</label>
                        <input
                            type="file"
                            onChange={(e) => setData('attachment', e.target.files[0])}
                            className='form-input'
                        />
                        {errors.attachment && <p className="mt-1 text-xs text-red-500">{errors.attachment}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Status</label>
                        <select name="status" onChange={(e) => setData('status', e.target.value)} value={data.status} className='form-select w-full rounded' id="">
                            <option value="">-- Select Status --</option>
                            <option value="open">Open</option>
                            <option value="progress">Progress</option>
                            <option value="closed">Closed</option>
                        </select>
                        {errors.status && <p className="mt-1 text-xs text-red-500">{errors.status}</p>}
                    </div>
                    <div className='w-full py-5'>
                        <button className='px-6 py-2 text-sm font-medium text-white rounded bg-rose-600'>Update Task</button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default edit
