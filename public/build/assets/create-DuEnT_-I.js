import{W as m,j as e}from"./app-bBQMqR6O.js";import{N as u}from"./notyf.min-DLu_xjpT.js";import{A as i}from"./AdminLayout-BHjzgd9T.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const d=new u,y=()=>{const{data:r,setData:n,post:o,processing:t,errors:s}=m({name:"",address:"",pin:"",con1:"",con2:"",email:"",gstn:"",pan:"",username:"",password:""}),a=l=>{n(l.target.name,l.target.value)},c=l=>{l.preventDefault(),o("/delars",{onSuccess:()=>{d.success("Distributor added successfully!")},onError:()=>{d.error("Failed to add distributor. Please check your inputs.")}})};return e.jsx(i,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Add Delars"}),e.jsxs("form",{onSubmit:c,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:r.name,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter distributor's name"}),s.name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Address"}),e.jsx("input",{type:"text",name:"address",value:r.address,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter address"}),s.address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"PIN"}),e.jsx("input",{type:"text",name:"pin",value:r.pin,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter PIN code"}),s.pin&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.pin})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Contact No 1"}),e.jsx("input",{type:"text",name:"con1",value:r.con1,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Primary contact number"}),s.con1&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.con1})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Contact No 2"}),e.jsx("input",{type:"text",name:"con2",value:r.con2,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Secondary contact number"}),s.con2&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.con2})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Email address"}),s.email&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"GST Number"}),e.jsx("input",{type:"text",name:"gstn",value:r.gstn,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"GST Number"}),s.gstn&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.gstn})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"PAN Number"}),e.jsx("input",{type:"text",name:"pan",value:r.pan,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"PAN Number"}),s.pan&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.pan})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Username"}),e.jsx("input",{type:"text",name:"username",value:r.username,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Username"}),s.username&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.username})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{type:"password",name:"password",value:r.password,onChange:a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Password"}),s.password&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.password})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:t,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:t?"Processing...":"Add Distributor"})})]})]})})};export{y as default};