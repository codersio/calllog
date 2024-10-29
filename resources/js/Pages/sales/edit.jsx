import AdminLayout from '@/Layouts/AdminLayout'
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'

function edit({ customers, products, sale }) {
    const [rows, setRows] = useState([
        { product: '', quantity: 0, price: 0, amount: 0 }
    ]);

    const [taxs, setTax] = useState([
        { tax: '', amount: 0 }
    ]);

    
    useEffect(() => {
        if (sale?.sales_details) {
            console.log(sale.tax_details)
            setRows(sale.sales_details);
        }
        if (sale?.account_tax) { // Assuming sale.account_tax holds tax information
            setTax(sale.account_tax);
        }
    }, [sale]);

    const handleAddRow = () => {
        setRows([...rows, { product: '', quantity: 0, price: 0, amount: 0 }]);
    };

    const handleAddTax = () => {
        setTax([...taxs, { tax: '', amount: 0 }]);
    };

    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleDeleteTax = (index) => {
        const updatedTax = taxs.filter((_, i) => i !== index);
        setTax(updatedTax);
    };

    const handleChange = (index, field, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };

    const handleTaxChange = (index, field, value) => {
        const updatedTax = taxs.map((tax, i) =>
            i === index ? { ...tax, [field]: value } : tax
        );
        setTax(updatedTax);
    };

    const { put,data,setData,errors,processing } = useForm({
        bill_no: sale.bill_no,
        status: sale.status,
        date:sale.date,
        customer_id: sale.customer_id,
        mobile_no:sale.mobile_no,
        amc_type:sale.amc_type,
        email:sale.email,
        discount:sale.discount,
        billing_address:sale.billing_address,
        sales_details:rows,
        account_tax:taxs
    })

    function handleSubmit(e){
        e.preventDefault();
        put(route('sales.edit'),{
            onSuccess: () => {
                // Show success notification on successful submission
                notyf.success('sales updated successfully!');
            },
            onError: () => {
                // Show error notification if there are errors
                notyf.error('Failed to add sales. Please check your inputs.');
            }
        })
    }
    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Sales</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Bill No.</label>
                        <input onChange={(e)=>setData('bill_no',e.target.value)} value={data.bill_no} type="text" className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.bill_no && <p className="mt-1 text-xs text-red-500">{errors.bill_no}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Status</label>
                        <select name="status" onChange={(e)=>setData('status',e.target.value)} value={data.status} className='form-select w-full rounded' id="">
                            <option value="">-- Select Status --</option>
                            <option value="unpaid">Unpaid</option>
                            <option value="full_paid">Full Paid</option>
                            <option value="half_paid">Half Paid</option>
                        </select>
                        {errors.status && <p className="mt-1 text-xs text-red-500">{errors.status}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Sales Date</label>
                        <input type="date" name='date' onChange={(e)=>setData('date',e.target.value)} value={data.date} className="form-input w-full rounded" placeholder='Enter bill no' />
                        {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Customer Name</label>
                        <select name="" onChange={(e)=>setData('customer_id',e.target.value)} value={data.customer_id} className='form-select w-full rounded' id="">
                            <option value="">-- Select Customer --</option>
                            {
                                customers && customers.map((cust, i) => (
                                    <option value={cust.user_id}>{cust.first_name+' ' + cust.middle_name+' '+cust.last_name}</option>
                                ))
                            }
                        </select>
                        {errors.customer_id && <p className="mt-1 text-xs text-red-500">{errors.customer_id}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Mobile No</label>
                        <input type="tel" onChange={(e)=>setData('mobile_no',e.target.value)} value={data.mobile_no} className="form-input w-full rounded" placeholder='Enter mobile no' />
                        {errors.mobile_no && <p className="mt-1 text-xs text-red-500">{errors.mobile_no}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">AMC Type</label>
                        <select name="" onChange={(e)=>setData('amc_type',e.target.value)} value={data.amc_type} className='form-select w-full rounded' id="">
                            <option value="no_amc">No AMC</option>
                            <option value="amc">AMC</option>
                        </select>
                        {errors.amc_type && <p className="mt-1 text-xs text-red-500">{errors.amc_type}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e)=>setData('email',e.target.value)} value={data.email} className="form-input w-full rounded" placeholder='Enter email' />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-1/2'>
                        <label htmlFor="">Discount</label>
                        <input type="number" onChange={(e)=>setData('discount',e.target.value)} value={data.discount} className="form-input w-full rounded" placeholder='Enter discount' />
                        {errors.discount && <p className="mt-1 text-xs text-red-500">{errors.discount}</p>}
                    </div>
                    <div className='flex flex-col gap-2 p-2 w-full'>
                        <label htmlFor="">Billing Address</label>
                        <textarea name="" onChange={(e)=>setData('billing_address',e.target.value)} value={data.billing_address} id="" rows={2} className='form-textarea resize-none w-full rounded'></textarea>
                        {errors.billing_address && <p className="mt-1 text-xs text-red-500">{errors.billing_address}</p>}
                    </div>
                    <hr />
                    <div className='w-full py-2'>
                        <h1 className='text-xl font-semibold text-gray-600'>Sales Details</h1>
                    </div>
                    <div className='w-full py-2'>
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className='border border-gray-300 p-2'>Product</th>
                                    <th className='border border-gray-300 p-2'>Quantity</th>
                                    <th className='border border-gray-300 p-2'>Price (Af)</th>
                                    <th className='border border-gray-300 p-2'>Amount (Af)</th>
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
                                                    <option key={i} value={pr.id}>{pr.name}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='form-input rounded w-full'
                                                value={row.quantity}
                                                onChange={(e) =>
                                                    handleChange(index, 'quantity', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='form-input rounded w-full'
                                                value={row.price}
                                                onChange={(e) =>
                                                    handleChange(index, 'price', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='form-input rounded w-full'
                                                value={row.amount}
                                                readOnly
                                            />
                                        </td>
                                        <td className='p-2'>
                                            { index !== 0 &&
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
                    <hr />
                    <div className='w-full py-2'>
                        <h1 className='text-xl font-semibold text-gray-600'>Account Tax</h1>
                    </div>
                    <div className='w-full py-2'>
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className='border border-gray-300 p-2'>Select Tax</th>
                                    <th className='border border-gray-300 p-2'>Tax</th>
                                    <th className='border border-gray-300 p-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taxs.map((t, index) => (
                                    <tr key={index}>
                                        <td className='p-2'>
                                            <select
                                                className="form-select rounded w-full"
                                                value={t.tax}
                                                onChange={(e) =>
                                                    handleTaxChange(index, 'tax', e.target.value)
                                                }
                                            >
                                                <option value="">-- Select Tax --</option>
                                                <option value="0">ACE Tax Consultants</option>
                                                <option value="1">Elite Tax Consultants</option>
                                            </select>
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='form-input rounded w-full'
                                                value={t.amount}
                                                onChange={(e) =>
                                                    handleTaxChange(index, 'amount', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className='p-2'>
                                        { index !== 0 &&
                                            <button type='button'
                                                className='flex gap-1 items-center text-sm font-medium text-red-500'
                                                onClick={() => handleDeleteTax(index)}
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
                            onClick={handleAddTax}
                        >
                            Add Row
                        </button>
                    </div>
                    <div className='w-full py-5'>
                        <button className='py-2 px-6 text-sm bg-rose-600 rounded font-medium text-white'>Update Sale</button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default edit