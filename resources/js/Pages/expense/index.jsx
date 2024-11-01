import AdminLayout from '@/Layouts/AdminLayout';
import React, { useState } from 'react';

const ManageExpenses = ({expense}) => {
    const [expenses] = useState([
        {
            id: 'EXP00001',
            category: 'Thomas Bean',
            date: 'Oct 3, 2024',
            status: 'Paid'
        }
        // Add more expenses if needed
    ]);

    return (
 <AdminLayout>
        <div className="p-6 mx-auto bg-white max-w-7xl">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Manage Expenses</h2>
                <nav className="text-sm text-gray-500">
                    <span>Dashboard</span> &gt; <span>Expense</span>
                </nav>
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap items-center p-4 mb-6 space-x-4 bg-gray-100 rounded-md">
                <div className="flex-1">
                    <label className="block text-gray-600">Payment Date</label>
                    <input
                        type="date"
                        className="w-full p-2 mt-1 border rounded"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-gray-600">Category</label>
                    <select className="w-full p-2 mt-1 border rounded">
                        <option>Select Category</option>
                        {/* Populate options dynamically */}
                    </select>
                </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded">
                    <thead>
                        <tr className="text-gray-700 bg-gray-50">
                            <th className="p-2 border-b">EXPENSE</th>
                            <th className="p-2 border-b">CATEGORY</th>
                            <th className="p-2 border-b">DATE</th>
                            <th className="p-2 border-b">STATUS</th>
                            <th className="p-2 border-b">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map((expense) => (
                            <tr key={expense.id} className="text-center">
                                <td className="p-2 border-b">
                                    <button className="font-semibold text-teal-600">
                                        #EXP000{expense.id}
                                    </button>
                                </td>
                                <td className="p-2 border-b">{expense.category_id}</td>
                                <td className="p-2 border-b">{expense.payment_date}</td>
                                <td className="p-2 border-b">
                                    <span className="px-3 py-1 text-white bg-teal-500 rounded-full">
                                        {expense.account}
                                    </span>
                                </td>
                                <td className="p-2 border-b">
                                    <button className="p-2 text-teal-600">👁</button>
                                    <button className="p-2 text-blue-600">✏️</button>
                                    <button className="p-2 text-red-600">🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-2 text-sm text-gray-500">Showing 1 to 1 of {expenses.length} entries</div>
            </div>
        </div> </AdminLayout>
    );
};

export default ManageExpenses;
