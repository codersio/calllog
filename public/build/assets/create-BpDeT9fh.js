import{W as m,j as e}from"./app-CwTpoyqh.js";import{N as i}from"./notyf.min-DLu_xjpT.js";import{A as u}from"./AdminLayout-DQmQe51a.js";import"./Dropdown-C_Ing8xx.js";import"./index-DXOuEoXo.js";import"./index-CBtgs9-R.js";const a=new i,f=()=>{const{data:o,setData:d,post:c,processing:r,errors:s}=m({name:""}),n=t=>{d(t.target.name,t.target.value)},l=t=>{t.preventDefault(),c("/products-category",{onSuccess:()=>{a.success("Product Category added successfully!")},onError:()=>{a.error("Failed to add product category. Please check your inputs.")}})};return e.jsx(u,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Add Product Category"}),e.jsxs("form",{onSubmit:l,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Category Name"}),e.jsx("input",{type:"text",name:"name",value:o.name,onChange:n,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Product Category Name"}),s.name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.name})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:r,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:r?"Processing...":"Add Product Category"})})]})]})})};export{f as default};
