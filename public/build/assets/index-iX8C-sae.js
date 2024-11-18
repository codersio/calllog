import{W as i,j as e,a}from"./app-bBQMqR6O.js";import{A as n}from"./AdminLayout-BHjzgd9T.js";import{g as o,h as x}from"./index-CYmrYT0Q.js";import{N as m}from"./notyf.min-DLu_xjpT.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";const d=new m;function N({stocks:r}){const{delete:l}=i();function c(t,s){s.preventDefault(),confirm("Are you sure you want to delete this stock?")&&l(route("stocks.destroy",t),{onSuccess:()=>{d.success("Stock deleted successfully!")},onError:()=>{d.error("Failed to delete stock.")}})}return e.jsx(n,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"text",placeholder:"Search stocks...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),e.jsx(a,{href:"/stocks/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Stock"})]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"Name"}),e.jsx("th",{className:"p-3 text-left border",children:"SKU"}),e.jsx("th",{className:"p-3 text-left border",children:"Price"}),e.jsx("th",{className:"p-3 text-left border",children:"Category ID"}),e.jsx("th",{className:"p-3 text-left border",children:"Quantity"}),e.jsx("th",{className:"p-3 text-center border",children:"Actions"})]})}),e.jsx("tbody",{children:r&&r.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:t.name}),e.jsx("td",{className:"p-3",children:t.sku}),e.jsxs("td",{className:"p-3",children:["₹ ",t.price]}),e.jsx("td",{className:"p-3",children:t.item_name}),e.jsx("td",{className:"p-3",children:t.quantity}),e.jsxs("td",{className:"p-3 flex gap-1",children:[e.jsxs(a,{href:`/stocks/${t.id}/edit`,className:"text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded",children:[e.jsx(o,{})," Edit"]}),e.jsxs("button",{type:"button",onClick:s=>c(t.id,s),className:"text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded",children:[e.jsx(x,{}),"Delete"]})]})]},t.id))})]})]})})}export{N as default};