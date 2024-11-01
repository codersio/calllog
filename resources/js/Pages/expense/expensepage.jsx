import Header from "@/Layouts/Header";
import ExpenseCreate from "./expensecreate";
import ProductServices from "./productservice";
import Nav from "@/Layouts/Nav";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";

const ExpenseCreatePage = ({ taxes, products, employees,customers }) => {
    const { data, setData, post, errors } = useForm({
        payee_id: '',
        payment_date: '',
        category_id: '',
        account: 'Cash',
        items: [{ id: 1, service_id: '', qty: '', price: '', discount: '', tax: '' }]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/expense', {
            onSuccess: () => alert('Expense created successfully'),
            onError: () => alert('There was an error!')
        });
    };

    const addItem = () => {
        setData('items', [
            ...data.items,
            { id: data.items.length + 1, service_id: '', qty: '', price: '', discount: '', tax: '' }
        ]);
    };

    const handleItemChange = (index, key, value) => {
        const items = [...data.items];
        items[index][key] = value;
        setData('items', items);
    };

    // Calculate totals
    const calculateSubtotal = () => {
        return data.items.reduce((acc, item) => {
            const qty = parseFloat(item.qty) || 0;
            const price = parseFloat(item.price) || 0;
            return acc + qty * price;
        }, 0);
    };

    const calculateTotalDiscount = () => {
        return data.items.reduce((acc, item) => {
            return acc + (parseFloat(item.discount) || 0);
        }, 0);
    };

    const calculateTotalTax = () => {
        return data.items.reduce((acc, item) => {
            const qty = parseFloat(item.qty) || 0;
            const price = parseFloat(item.price) || 0;
            const taxRate = parseFloat(item.tax) || 0;
            return acc + (qty * price * taxRate / 100);
        }, 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const totalDiscount = calculateTotalDiscount();
        const totalTax = calculateTotalTax();
        return subtotal - totalDiscount + totalTax;
    };

    return (
        <AdminLayout>
            <div className="p-6 mx-auto max-w-7xl">
                <form onSubmit={handleSubmit}>
                    <div className="p-6 bg-white rounded shadow">
                        <h1 className="mb-4 text-xl font-bold">Expense Create</h1>

                        {/* Payee Section */}
                        <div className="flex items-center mb-4 space-x-4">
                         <label className="flex items-center">
                               <input
            type="radio"
            name="payee"
            value="Employee"
            checked={data.payee_type === "Employee"}
            onChange={() => setData('payee_type', "Employee")}
            className="mr-2"
        />
        Employee
    </label>

    <label className="flex items-center">
        <input
            type="radio"
            name="payee"
            value="Customer"
            checked={data.payee_type === "Customer"}
            onChange={() => setData('payee_type', "Customer")}
            className="mr-2"
        />
        Customer
    </label>
    <label className="flex items-center">
        <input
            type="radio"
            name="payee"
            value="Vendor"
            checked={data.payee_type === "Vendor"}
            onChange={() => setData('payee_type', "Vendor")}
            className="mr-2"
        />
        Vendor
    </label>
                        </div>

                        {/* Payee Selection, Payment Date, Category */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                               <label className="block mb-1">Payee</label>
    {data.payee_type === "Employee" && (
        <select
            value={data.payee_id}
            onChange={(e) => setData('payee_id', e.target.value)}
            className="w-full p-2 border rounded"
        >
            <option>Select Employee</option>
            {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                    {employee.name}
                </option>
            ))}
        </select>
    )}
    {data.payee_type === "Customer" && (
        <select
            value={data.payee_id}
            onChange={(e) => setData('payee_id', e.target.value)}
            className="w-full p-2 border rounded"
        >
            <option>Select Customer</option>
            {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                   {customer.first_name + ' ' + customer.middle_name + ' ' + customer.last_name}
                </option>
            ))}
        </select>
    )}
    {data.payee_type === "Vendor" && (
        <select
            value={data.payee_id}
            onChange={(e) => setData('payee_id', e.target.value)}
            className="w-full p-2 border rounded"
        >
            <option>Select Vendor</option>
            {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                </option>
            ))}
        </select>
    )}
                            </div>
                            <div>
                                <label className="block mb-1">Payment Date</label>
                                <input
                                    type="date"
                                    value={data.payment_date}
                                    onChange={(e) => setData('payment_date', e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Category</label>
                                <select
                                    value={data.category_id}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option>Select Category</option>
                                    <option value="1">abc</option>
                                    {/* Populate categories here */}
                                </select>
                            </div>
                        </div>

                        {/* Account */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block mb-1">Account</label>
                                <input type="text" value="Cash" className="w-full p-2 border rounded" readOnly />
                            </div>
                        </div>
                    </div>

                    {/* Product & Services */}
                    <div className="p-6 mt-6 bg-white rounded shadow">
                        <h2 className="mb-4 text-xl font-bold">Product & Services</h2>

                        <table className="min-w-full border border-collapse border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 border border-gray-300">Items</th>
                                    <th className="p-2 border border-gray-300">Quantity</th>
                                    <th className="p-2 border border-gray-300">Price</th>
                                    <th className="p-2 border border-gray-300">Discount</th>
                                    <th className="p-2 border border-gray-300">Tax (%)</th>
                                    <th className="p-2 border border-gray-300">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.items.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="p-2 border border-gray-300">
                                            <select
                                                className="w-full p-1 border rounded"
                                                value={item.service_id}
                                                onChange={(e) =>
                                                    handleItemChange(index, 'service_id', e.target.value)
                                                }
                                            >
                                                <option>Select Item</option>
                                                {products.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                        {product.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                placeholder="Qty"
                                                className="w-full p-1 border rounded"
                                                value={item.qty}
                                                onChange={(e) =>
                                                    handleItemChange(index, 'qty', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                placeholder="Price"
                                                className="w-full p-1 border rounded"
                                                value={item.price}
                                                onChange={(e) =>
                                                    handleItemChange(index, 'price', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                placeholder="Discount"
                                                className="w-full p-1 border rounded"
                                                value={item.discount}
                                                onChange={(e) =>
                                                    handleItemChange(index, 'discount', e.target.value)
                                                }
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <select
                                                className="w-full p-1 border rounded"
                                                value={item.tax}
                                                onChange={(e) =>
                                                    handleItemChange(index, 'tax', e.target.value)
                                                }
                                            >
                                                <option>Select Tax (%)</option>
                                                {taxes.map((tax) => (
                                                    <option key={tax.id} value={tax.percent}>
                                                        {tax.percent} ({tax.name}%)
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                      <td className="p-2 border border-gray-300">
    {/* Amount calculated per item */}
    {(
        parseFloat(item.qty || 0) *
        parseFloat(item.price || 0) *
        (1 - (parseFloat(item.discount || 0) / 100)) +
        (parseFloat(item.qty || 0) * parseFloat(item.price || 0) * (parseFloat(item.tax || 0) / 100))
    ).toFixed(2)}
</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={addItem}
                                className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700"
                            >
                                + Add Item
                            </button>
                        </div>
                    </div>

                    {/* Totals Display */}
                    <div className="p-6 mt-6 bg-white rounded shadow">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between mb-2">
                            <span>Total Discount:</span>
                            <span>-${calculateTotalDiscount().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Total Tax:</span>
                            <span>${calculateTotalTax().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default ExpenseCreatePage;
