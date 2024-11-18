import{W as i,j as e}from"./app-bBQMqR6O.js";import{N as u}from"./notyf.min-DLu_xjpT.js";import{A as x}from"./AdminLayout-BHjzgd9T.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const d=new u,N=({serv:r})=>{const{data:a,setData:o,put:c,processing:n,errors:s}=i({name:r.name||"",address:r.address||"",pin:r.pin||"",con1:r.con1||"",con2:r.con2||"",email:r.email||"",gstn:r.gstn||"",pan:r.pan||"",username:r.username||""}),t=l=>{o(l.target.name,l.target.value)},m=l=>{l.preventDefault(),c(`/service-centers/${r.user_id}`,{onSuccess:()=>{d.success("Service center updated successfully!")},onError:()=>{d.error("Failed to update service center. Please check your inputs.")}})};return e.jsx(x,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Edit Service Center"}),e.jsxs("form",{onSubmit:m,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:a.name,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter service center's name"}),s.name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Address"}),e.jsx("input",{type:"text",name:"address",value:a.address,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter address"}),s.address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"PIN"}),e.jsx("input",{type:"text",name:"pin",value:a.pin,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter PIN code"}),s.pin&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.pin})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Contact No 1"}),e.jsx("input",{type:"text",name:"con1",value:a.con1,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Primary contact number"}),s.con1&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.con1})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Contact No 2"}),e.jsx("input",{type:"text",name:"con2",value:a.con2,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Secondary contact number"}),s.con2&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.con2})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:a.email,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Email address"}),s.email&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"GST Number"}),e.jsx("input",{type:"text",name:"gstn",value:a.gstn,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"GST Number"}),s.gstn&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.gstn})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"PAN Number"}),e.jsx("input",{type:"text",name:"pan",value:a.pan,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"PAN Number"}),s.pan&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.pan})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Username"}),e.jsx("input",{type:"text",name:"username",value:a.username,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Username"}),s.username&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.username})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:n,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:n?"Processing...":"Update Distributor"})})]})]})})};export{N as default};