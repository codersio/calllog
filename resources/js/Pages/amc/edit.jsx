import AdminLayout from '@/Layouts/AdminLayout'
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
function edit({ customers, products, employees,amc }) {
    const [rows, setRows] = useState(amc.amc_details || [
        { product: '', note: '' }
    ]);

    const [intervalss, setIntervalss] = useState(amc.interval); // interval in months
    const [numOfServices, setNumOfServices] = useState(amc.no_of_service); // default number of services
    const [services, setServices] = useState(amc.service_details || []);

    const { put, data, setData, errors, processing } = useForm({
        amc_no: amc.amc_no,
        contact_person: amc.contact_person,
        date: amc.date,
        customer_id: amc.customer_id,
        mobile_no: amc.mobile_no,
        assigned_to: amc.assigned_to,
        email: amc.email,
        status: amc.status,
        interval: '',
        details: amc.details,
        attachments: '',
        no_of_service: '',
        billing_address: amc.billing_address,
        service_details: [],
        amc_details: [],
    })

    useEffect(() => {
        // Only calculate services if interval or number of services change
        if ((intervalss !== amc.interval || numOfServices !== amc.no_of_service) && intervalss && numOfServices) {
            const startDate = new Date(data.date || new Date()); // Use `data.date` or today’s date as the start
            const newServices = Array.from({ length: numOfServices }, (_, i) => {
                const date = new Date(startDate);
                date.setMonth(startDate.getMonth() + i * intervalss); // Add interval in months
                return {
                    id: i + 1,
                    date: date.toISOString().split('T')[0],
                    service: `${i + 1} Service`
                };
            });
            setServices(newServices);
        }
    }, [intervalss, numOfServices, data.date]);
    

    // Handle "No of Services" selection
    function handleNumOfServicesChange (e){
        if (!intervalss) {
            alert('Please select interval first');
            setNumOfServices('')
            return; // Exit function if interval is not selected
        }
        setNumOfServices(Number(e.target.value));
    };

    const handleServiceChange = (id, field, value) => {
        setServices((prevServices) =>
            prevServices.map((service) =>
                service.id === id ? { ...service, [field]: value } : service
            )
        );
    };

    useEffect(() => {
        setData((prevState) => ({
            ...prevState,
            amc_details: rows,
            no_of_service: numOfServices,
            interval: intervalss,
            service_details: services
        }));
    }, [rows, numOfServices, intervalss, services]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', note: '' }]);
    };

    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleChange = (index, field, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };

    function handleSubmit(e) {
        e.preventDefault();
        put(route('amc.update',amc.id), {
            onSuccess: () => {
                // Show success notification on successful submission
                notyf.success('Amc updated successfully!');
            },
            onError: (err) => {
                console.log(err)
                // Show error notification if there are errors
                notyf.error('Failed to add amc. Please check your inputs.');
            }
        })
    }
    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Amc</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">AMC No.</label>
                        <input onChange={(e) => setData('amc_no', e.target.value)} value={data.amc_no} type="text" className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.amc_no && <p className="mt-1 text-xs text-red-500">{errors.amc_no}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Date</label>
                        <input type="date" name='date' onChange={(e) => setData('date', e.target.value)} value={data.date} className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Contact Person</label>
                        <input type="text" name='contact_person' onChange={(e) => setData('contact_person', e.target.value)} value={data.contact_person} className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.contact_person && <p className="mt-1 text-xs text-red-500">{errors.contact_person}</p>}
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
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Customer Name</label>
                        <select name="" onChange={(e) => setData('customer_id', e.target.value)} value={data.customer_id} className='form-select w-full rounded' id="">
                            <option value="">-- Select Customer --</option>
                            {
                                customers && customers.map((cust, i) => (
                                    <option value={cust.user_id}>{cust.first_name + ' ' + cust.middle_name + ' ' + cust.last_name}</option>
                                ))
                            }
                        </select>
                        {errors.customer_id && <p className="mt-1 text-xs text-red-500">{errors.customer_id}</p>}
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
                        <label htmlFor="">Assigned To</label>
                        <select name="" onChange={(e) => setData('assigned_to', e.target.value)} value={data.assigned_to} className='form-select w-full rounded' id="">
                            <option value="">-- Select Assigned --</option>
                            {
                                employees && employees.map((emp, i) => (
                                    <option key={i} value={emp.id}>{emp.name}</option>
                                ))
                            }
                        </select>
                        {errors.assigned_to && <p className="mt-1 text-xs text-red-500">{errors.assigned_to}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Amc Details</label>
                        <textarea name="" onChange={(e) => setData('details', e.target.value)} value={data.details} id="" rows={3} className='form-textarea resize-none w-full rounded'></textarea>
                        {errors.details && <p className="mt-1 text-xs text-red-500">{errors.details}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Billing Address</label>
                        <textarea name="" onChange={(e) => setData('billing_address', e.target.value)} value={data.billing_address} id="" rows={3} className='form-textarea resize-none w-full rounded'></textarea>
                        {errors.billing_address && <p className="mt-1 text-xs text-red-500">{errors.billing_address}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="attachments">Attachments</label>
                        <input
                            type="file"
                            onChange={(e) => setData('attachments', e.target.files[0])}
                            className='form-input'
                        />
                        {errors.attachments && <p className="mt-1 text-xs text-red-500">{errors.attachments}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Interval</label>
                        <select name="" value={intervalss}
                            onChange={(e) => setIntervalss(Number(e.target.value))} className='form-select w-full rounded' id="">
                            <option value="">-- No Of Interval --</option>
                            <option value="1">1 Month</option>
                            <option value="2">2 Month</option>
                            <option value="3">3 Month</option>
                        </select>
                        {errors.interval && <p className="mt-1 text-xs text-red-500">{errors.interval}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">No Of Service</label>
                        <select name="" value={numOfServices}
                            onChange={handleNumOfServicesChange} className='form-select w-full rounded' id="">
                            <option value="">-- No Of Service --</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        {errors.no_of_service && <p className="mt-1 text-xs text-red-500">{errors.no_of_service}</p>}
                    </div>
                    <div className='w-full py-3'>
                        {services.map((service) => (
                            <div key={service.id} className="flex items-center space-x-4 border-b pb-4">
                                <div className="w-10 text-center">{service.id}</div>
                                <input
                                    type="date"
                                    value={service.date}
                                    onChange={(e) => handleServiceChange(service.id, 'date', e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1 bg-gray-100 w-1/3"
                                />
                                <input
                                    type="text"
                                    value={service.service}
                                    onChange={(e) => handleServiceChange(service.id, 'service', e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1 bg-gray-100 w-1/3"
                                />
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className='w-full py-2'>
                        <h1 className='text-xl font-semibold text-gray-600'>Amc Details</h1>
                    </div>
                    <div className='w-full py-2'>
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className='border border-gray-300 p-2'>Product</th>
                                    <th className='border border-gray-300 p-2'>Notes</th>
                                    <th className='border border-gray-300 p-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td className='p-2'>
                                            <select
                                                className="form-select rounded w-full"
                                                value={row.product}
                                                onChange={(e) =>
                                                    handleChange(index, 'product', e.target.value)
                                                }
                                            >
                                                <option value="">-- Select Product --</option>
                                                {products && products.map((pr, i) => (
                                                    <option key={i} value={pr.name}>{pr.name}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="text"
                                                className='form-input rounded w-full'
                                                value={row.note}
                                                onChange={(e) =>
                                                    handleChange(index, 'note', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className='p-2'>
                                            {index !== 0 &&
                                                <button type='button'
                                                    className='flex gap-1 items-center text-sm font-medium text-red-500'
                                                    onClick={() => handleDeleteRow(index)}
                                                >
                                                    <FaTrash size={15} /><span>Delete</span>
                                                </button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button type='button'
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={handleAddRow}
                        >
                            Add Row
                        </button>
                    </div>
                    <div className='w-full py-5'>
                        <button className='py-2 px-6 text-sm bg-rose-600 rounded font-medium text-white'>Edit Amc</button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default edit