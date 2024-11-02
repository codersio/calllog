import React, { useState } from "react";
import Chart from "react-apexcharts";
import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from "@inertiajs/react";

const initialChartData = {
    series: [
        {
            name: "Complaints",
            data: [0, 0] // Placeholder data; will be updated based on the props
        }
    ],
    options: {
        chart: {
            type: "bar",
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
        },
        xaxis: {
            categories: [], // Placeholder categories, will be updated based on the props
            title: {
                text: "Complaints Month"
            }
        },
        yaxis: {
            title: {
                text: "Number of Complaints"
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: (val) => `${val} complaints`
            }
        },
        colors: ["#00C49F"]
    }
};

const ComplaintsReport = ({ datas, clients }) => {
    const today = new Date();
    const endDate = today.toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    // Set the start date to one year back
    const startDate = new Date(today);
    startDate.setFullYear(today.getFullYear() - 1);
    const formattedStartDate = startDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    const { props } = usePage();
    const [formValues, setFormValues] = useState({
        startDate: props.startDate || formattedStartDate,
        endDate: props.endDate || endDate,
        option: props.option || "All",
        client: props.client || "All"
    });

    const chartData = {
        ...initialChartData,
        series: [{
            name: "Complaints",
            data: datas.map(complaint => complaint.count) // Update based on the data structure
        }],
        options: {
            ...initialChartData.options,
            xaxis: {
                categories: datas.map(complaint => complaint.month), // Update categories based on the data
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use Inertia to visit the report page and pass the form data
        Inertia.get('/complaint-reports', {
            startDate: formValues.startDate,
            endDate: formValues.endDate,
            option: formValues.option,
            client: formValues.client,
        });
    };

    return (
        <AdminLayout>
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Complaints Reports</h2>

                <form onSubmit={handleSubmit} className="flex flex-wrap items-center w-full mb-6">
                    <div className="flex items-center gap-2 px-2 w-1/4">
                        <input
                            type="date"
                            name="startDate"
                            value={formValues.startDate}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded p-2 w-full"
                        />
                    </div>

                    <div className="flex items-center gap-2 px-2 w-1/4">
                        <input
                            type="date"
                            name="endDate"
                            value={formValues.endDate}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded p-2 w-full"
                        />
                    </div>

                    <div className="px-2 w-1/4">
                        <select
                            name="option"
                            value={formValues.option}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded p-2 w-full"
                        >
                            <option value="All">All Complaint</option>
                            <option value="1">Open Complaint</option>
                            <option value="2">Closed Complaint</option>
                            <option value="3">Progress Complaint</option>
                        </select>
                    </div>

                    <div className="px-2 w-1/4">
                        <select
                            name="client"
                            value={formValues.client}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded p-2 w-full"
                        >
                            <option value="All">All Customer</option>
                            {
                                clients && clients.map((clnt, i) => (
                                    <option key={i} value={clnt.user_id}>{clnt.first_name + ' ' + clnt.middle_name + ' ' + clnt.last_name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="p-2 space-x-2">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                            Go
                        </button>
                        <Link href="/complaint-reports" className="bg-zinc-500 text-white py-2.5 px-4 rounded">
                            Reset
                        </Link>
                    </div>
                </form>

                <p className="text-lg font-medium mb-4">
                    {`${formValues.startDate} UNTIL ${formValues.endDate}: ${chartData.series[0].data.reduce((acc, val) => acc + val, 0)} COMPLAINTS`}
                </p>

                <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
            </div>
        </AdminLayout>
    );
};

export default ComplaintsReport;
