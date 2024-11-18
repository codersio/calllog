import{W as x,j as e}from"./app-bBQMqR6O.js";import{N as b}from"./notyf.min-DLu_xjpT.js";import{A as h}from"./AdminLayout-BHjzgd9T.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const c=new b,v=({categories:m,service_centers:i})=>{const{data:a,setData:o,post:u,processing:n,errors:r}=x({call_allocation:"",customer_name:"",address:"",phone_number:"",service_partner:"",spare_part_type:"",product_name:"",qty:"",model:"",spare_part_Serial:"",invoice:"",dispatch_model:"",dispatch_type:"",date:""}),s=t=>{const{name:l,value:d}=t.target;o(l==="dispatch_model"?{...a,dispatch_model:d,dispatch_type:d?d+"-":""}:{...a,[l]:d})},p=t=>{t.preventDefault(),u("/spare-part",{onSuccess:()=>{c.success("Spare & Parts  added successfully!")},onError:()=>{c.error("Failed to add Spare & Parts. Please check your inputs.")}})};return e.jsx(h,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Add Spare & Parts"}),e.jsxs("form",{onSubmit:p,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Call Allocation"}),e.jsx("input",{type:"text",name:"call_allocation",value:a.call_allocation,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Call Allocation"}),r.call_allocation&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.call_allocation})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Customer Name"}),e.jsx("input",{type:"text",name:"customer_name",value:a.customer_name,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Customer Name"}),r.customer_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.customer_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Address"}),e.jsx("input",{type:"text",name:"address",value:a.address,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Address"}),r.address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Phone Number"}),e.jsx("input",{type:"text",name:"phone_number",value:a.phone_number,onChange:t=>{const{value:l}=t.target;(l===""||/^\d{0,10}$/.test(l))&&s(t)},className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Phone Number",maxLength:10}),r.phone_number&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.phone_number})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner"}),e.jsx("select",{name:"service_partner",value:a.service_partner,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:i.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))}),r.service_partner&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Spare Parts Type"}),e.jsx("input",{type:"text",name:"spare_part_type",value:a.spare_part_type,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Spare Parts Type"}),r.spare_part_type&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.spare_part_type})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Product Name"}),e.jsx("select",{name:"product_name",value:a.product_name,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:m.map(t=>e.jsx("option",{value:t.product_id,children:t.item_name},t.product_id))}),r.product_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.product_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Qty"}),e.jsx("input",{type:"number",name:"qty",value:a.qty,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Qty"}),r.qty&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.qty})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Model"}),e.jsx("input",{type:"text",name:"model",value:a.model,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Source Of Material"}),r.model&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.model})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Spare Parts Serial Number"}),e.jsx("input",{type:"number",name:"spare_part_Serial",value:a.spare_part_Serial,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Source Of Material"}),r.spare_part_Serial&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.spare_part_Serial})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Invoice Number"}),e.jsx("input",{type:"text",name:"invoice",value:a.invoice,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Invoice No"}),r.invoice&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.invoice})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Dispatch Module"}),e.jsxs("select",{name:"dispatch_model",value:a.dispatch_model,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"--Select--"}),e.jsx("option",{value:"Courier",children:"Courier"}),e.jsx("option",{value:"Bus",children:"Bus"}),e.jsx("option",{value:"Staff",children:"Staff"})]}),r.dispatch_model&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.dispatch_model})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Dispatch Type"}),e.jsx("input",{type:"text",name:"dispatch_type",value:a.dispatch_type,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:""}),r.dispatch_type&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.dispatch_type})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Date"}),e.jsx("input",{type:"date",name:"date",value:a.date,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Primary contact number"}),r.date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.date})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:n,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:n?"Processing...":"Add Spare & Parts"})})]})]})})};export{v as default};