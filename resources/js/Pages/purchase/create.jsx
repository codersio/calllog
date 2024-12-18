import AdminLayout from '@/Layouts/AdminLayout'
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Multiselect from 'multiselect-react-dropdown';

const notyf = new Notyf();
function create({ suppliers, products, taxes }) {

    const [rows, setRows] = useState([
        { product: '', quantity: 0, price: 0, amount: 0, amountWithTax: 0, selectedTaxes: [] } // Removed selected field
    ]);

    const [totalTax, setTotalTax] = useState(0);

    const handleAddRow = () => {
        setRows([...rows, { product: '', quantity: 0, price: 0, amount: 0, amountWithTax: 0, selectedTaxes: [] }]);
    };

    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleChange = (index, field, value) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                const updatedRow = { ...row, [field]: field === 'product' ? value : Number(value) };

                // Calculate base amount based on quantity and price
                if (field === 'quantity' || field === 'price') {
                    updatedRow.amount = updatedRow.quantity * updatedRow.price;
                }

                return updatedRow;
            }
            return row;
        });

        setRows(updatedRows);
        calculateTotalTax(updatedRows); // Recalculate tax with updated rows
    };

    const handleTaxSelect = (index, selectedList) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                return { ...row, selectedTaxes: selectedList }; // Update the selected taxes for the specific row
            }
            return row;
        });

        setRows(updatedRows); // Update rows
        calculateTotalTax(updatedRows); // Recalculate total tax based on updated rows
    };

    // Calculate total tax based on selected taxes for each row
    const calculateTotalTax = (rows) => {
        console.log(rows)
        const updatedRows = rows.map(row => {
            // Calculate total tax for this row based on selected taxes
            const totalTaxForRow = row.selectedTaxes.reduce((taxSum, tax) => {
                return taxSum + (row.amount * (tax.percent / 100));
            }, 0);

            row.amountWithTax = row.amount + totalTaxForRow; // Add tax to the base amount
            return row; // Return updated row
        });

        // Calculate the total tax amount for all rows
        const totalTax = updatedRows.reduce((sum, row) => {
            return sum + (row.amountWithTax - row.amount); // Total tax calculated across all rows
        }, 0);

        setTotalTax(totalTax); // Update total tax state
        setRows(updatedRows); // Update rows to reflect amountWithTax
    };



    const { post, data, setData, errors, processing } = useForm({
        purchase_no: '',
        status: '',
        date: '',
        contact_person: '',
        supplier_id: '',
        email: '',
        billing_address: '',
        sales_details: [],
    })


    // Sync taxs with form data
    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            sales_details: rows || []
        }));
    }, [rows]);


    function handleSubmit(e) {
        e.preventDefault();
        post(route('purchase.store'), {
            onSuccess: () => {
                notyf.success('Purchase added successfully!');
            },
            onError: () => {
                notyf.error('Failed to add purchase. Please check your inputs.');
            }
        })
    }
    return (
        <AdminLayout>
            <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Purchase</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Purchase No.</label>
                        <input onChange={(e) => setData('purchase_no', e.target.value)} value={data.purchase_no} type="text" className="w-full rounded form-input" placeholder='Enter bill no' />
                        {errors.purchase_no && <p className="mt-1 text-xs text-red-500">{errors.purchase_no}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Status</label>
                        <select name="status" onChange={(e) => setData('status', e.target.value)} value={data.status} className='w-full rounded form-select' id="">
                            <option value="">-- Select Status --</option>
                            <option value="0">Pending</option>
                            <option value="1">Approved</option>
                        </select>
                        {errors.status && <p className="mt-1 text-xs text-red-500">{errors.status}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Purchase Date</label>
                        <input type="date" name='date' onChange={(e) => setData('date', e.target.value)} value={data.date} className="w-full rounded form-input" placeholder='Enter bill no' />
                        {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Contact Person</label>
                        <input type="text" onChange={(e) => setData('contact_person', e.target.value)} value={data.contact_person} className="w-full rounded form-input" placeholder='Enter contact person' />
                        {errors.contact_person && <p className="mt-1 text-xs text-red-500">{errors.contact_person}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Supplier</label>
                        <select name="" onChange={(e) => setData('supplier_id', e.target.value)} value={data.supplier_id} className='w-full rounded form-select' id="">
                            <option value="">-- Select Supplier --</option>
                            {
                                suppliers && suppliers.map((sup, i) => (
                                    <option key={i} value={sup.id}>{sup.name}</option>
                                ))
                            }
                        </select>
                        {errors.customer_id && <p className="mt-1 text-xs text-red-500">{errors.customer_id}</p>}
                    </div>
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setData('email', e.target.value)} value={data.email} className="w-full rounded form-input" placeholder='Enter email' />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div className='flex flex-col w-full gap-2 p-2'>
                        <label htmlFor="">Billing Address</label>
                        <textarea name="" onChange={(e) => setData('billing_address', e.target.value)} value={data.billing_address} id="" rows={2} className='w-full rounded resize-none form-textarea'></textarea>
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
                                    <th className='p-2 border border-gray-300'>Product</th>
                                    <th className='p-2 border border-gray-300'>Quantity</th>
                                    <th className='p-2 border border-gray-300'>Price (Af)</th>
                                    <th className='p-2 border border-gray-300'>Tax</th>
                                    <th className='p-2 border border-gray-300'>Amount (Af)</th>
                                    <th className='p-2 border border-gray-300'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td className='p-2'>
                                            <select
                                                className="w-full rounded form-select"
                                                value={row.product}
                                                onChange={(e) =>
                                                    handleChange(index, 'product', e.target.value)
                                                }
                                            >
                                                <option value="">-- Select Product --</option>
                                                {products && products.map((pr, i) => (
                                                    <option key={i} value={pr.item_name}>{pr.item_name}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='w-full rounded form-input'
                                                value={row.quantity}
                                                onChange={(e) =>
                                                    handleChange(index, 'quantity', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='w-full rounded form-input'
                                                value={row.price}
                                                onChange={(e) =>
                                                    handleChange(index, 'price', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className='p-2'>
                                            <Multiselect
                                                options={taxes.map(tax => ({
                                                    name: `${tax.name} (${tax.percent}%)`, // Display format
                                                    percent: tax.percent, // Keeping percent for calculations if needed
                                                }))}
                                                onSelect={(selectedList) => handleTaxSelect(index, selectedList)}
                                                onRemove={(selectedList) => handleTaxSelect(index, selectedList)}
                                                displayValue="name"
                                            />
                                        </td>
                                        <td className='p-2'>
                                            <input
                                                type="number"
                                                className='w-full rounded form-input'
                                                value={row.amountWithTax.toFixed(2)}
                                                readOnly
                                            />
                                        </td>
                                        <td className='p-2'>
                                            {index !== 0 &&
                                                <button type='button'
                                                    className='flex items-center gap-1 text-sm font-medium text-red-500'
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
                            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
                            onClick={handleAddRow}
                        >
                            Add Row
                        </button>
                    </div>
                    <div className='w-full py-5'>
                        <button className='px-6 py-2 text-sm font-medium text-white rounded bg-rose-600'>Add Sale</button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default create
