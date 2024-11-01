import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function ServiceForm({ employees, customers, products, serviceCode, service }) {
  const { data, setData, post, put, processing, errors } = useForm({
    service_code: serviceCode,
    service_date: "2024-10-29",
    customer_id: "",
    assigned_to: "",
    status: "open",
    service_charge: "no-charge",
    service_details: "",
    amc_details: [{ id: Date.now(), product: "PR584062024 Chiquita Castro", note: "" }],
  });

useEffect(() => {
    // Populate form fields when editing a service
    if (service) {
        setData({
            service_code: service.service_code,
            service_date: service.service_date,
            customer_id: service.customer_id,
            assigned_to: service.assigned_to,
            status: service.status,
            service_charge: service.service_charge,
            service_details: service.service_details,
            amc_details: service.amc_details.length > 0 ? service.amc_details : [{ id: Date.now(), product: "", note: "" }],
        });
    }
}, [service]);


  // Function to handle adding a new AMC detail row
  const addNewAmcDetail = () => {
    setData("amc_details", [
      ...data.amc_details,
      { id: Date.now(), product: "", note: "" },
    ]);
  };

  // Function to handle removing an AMC detail row
  const removeAmcDetail = (id) => {
    setData("amc_details", data.amc_details.filter((detail) => detail.id !== id));
  };

  // Function to handle changes in AMC detail fields
  const handleAmcDetailChange = (id, field, value) => {
    setData(
      "amc_details",
      data.amc_details.map((detail) => (detail.id === id ? { ...detail, [field]: value } : detail))
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (service) {
      put(route("services.update", service.id)); // For update
    } else {
      post(route("services.store")); // For create
    }
  };

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="p-6 mx-auto bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">{service ? "Edit Service" : "Service Form"}</h2>

        {/* Service Code and Date */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-700">Service Code *</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={data.service_code}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">Service Date *</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={data.service_date}
              onChange={(e) => setData("service_date", e.target.value)}
            />
          </div>
        </div>

        {/* Customer Name and Assigned To */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-700">Customer Name *</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={data.customer_id}
              onChange={(e) => setData("customer_id", e.target.value)}
            >
              <option value="">--Select Customer--</option>
              {customers.map((cust) => (
                <option key={cust.user_id} value={cust.user_id}>
                  {cust.first_name + " " + cust.middle_name + " " + cust.last_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Assigned To *</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={data.assigned_to}
              onChange={(e) => setData("assigned_to", e.target.value)}
            >
              <option value="">--Select Name--</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status and Service Charge */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-700">Status *</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={data.status}
              onChange={(e) => setData("status", e.target.value)}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Service Charge (Af)</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={data.service_charge}
              onChange={(e) => setData("service_charge", e.target.value)}
            >
              <option value="no-charge">No Charge</option>
              <option value="charge">Charge</option>
            </select>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-4">
          <label className="block text-gray-700">Service Details *</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            rows="4"
            placeholder="Enter service details here..."
            value={data.service_details}
            onChange={(e) => setData("service_details", e.target.value)}
          ></textarea>
        </div>

        {/* AMC Details */}
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">AMC Details</h3>
          <button
            type="button"
            onClick={addNewAmcDetail}
            className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg"
          >
            Add New
          </button>

          {data.amc_details.map((detail) => (
            <div key={detail.id} className="grid items-center grid-cols-3 gap-4 p-3 mb-2 border rounded-lg">
              <select
                className="col-span-1 px-3 py-2 border rounded-lg"
                value={detail.product}
                onChange={(e) => handleAmcDetailChange(detail.id, "product", e.target.value)}
              >
                <option value="">--Select Product--</option>
                {products.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                className="col-span-1 px-3 py-2 border rounded-lg"
                value={detail.note}
                placeholder="Note"
                onChange={(e) => handleAmcDetailChange(detail.id, "note", e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeAmcDetail(detail.id)}
                className="col-span-1 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-500 rounded-lg"
          disabled={processing}
        >
          {processing ? "Saving..." : service ? "Update" : "Save"}
        </button>
      </form>
    </AdminLayout>
  );
}

export default ServiceForm;
