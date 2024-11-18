import{j as e}from"./app-bBQMqR6O.js";import{A as v}from"./AdminLayout-BHjzgd9T.js";import{u as N}from"./index-B0uXLlEO.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";import"./index-BUrNszlx.js";const q=({taxes:p,products:m,employees:u,customers:x})=>{const{data:r,setData:t,post:h,errors:f}=N({payee_id:"",payment_date:"",category_id:"",account:"Cash",items:[{id:1,service_id:"",qty:"",price:"",discount:"",tax:""}]}),b=a=>{a.preventDefault(),h("/expense",{onSuccess:()=>alert("Expense created successfully"),onError:()=>alert("There was an error!")})},y=()=>{t("items",[...r.items,{id:r.items.length+1,service_id:"",qty:"",price:"",discount:"",tax:""}])},n=(a,l,s)=>{const d=[...r.items];d[a][l]=s,t("items",d)},c=()=>r.items.reduce((a,l)=>{const s=parseFloat(l.qty)||0,d=parseFloat(l.price)||0;return a+s*d},0),o=()=>r.items.reduce((a,l)=>a+(parseFloat(l.discount)||0),0),i=()=>r.items.reduce((a,l)=>{const s=parseFloat(l.qty)||0,d=parseFloat(l.price)||0,g=parseFloat(l.tax)||0;return a+s*d*g/100},0),j=()=>{const a=c(),l=o(),s=i();return a-l+s};return e.jsx(v,{children:e.jsx("div",{className:"p-6 mx-auto max-w-7xl",children:e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"p-6 bg-white rounded shadow",children:[e.jsx("h1",{className:"mb-4 text-xl font-bold",children:"Expense Create"}),e.jsxs("div",{className:"flex items-center mb-4 space-x-4",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"payee",value:"Employee",checked:r.payee_type==="Employee",onChange:()=>t("payee_type","Employee"),className:"mr-2"}),"Employee"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"payee",value:"Customer",checked:r.payee_type==="Customer",onChange:()=>t("payee_type","Customer"),className:"mr-2"}),"Customer"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"payee",value:"Vendor",checked:r.payee_type==="Vendor",onChange:()=>t("payee_type","Vendor"),className:"mr-2"}),"Vendor"]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1",children:"Payee"}),r.payee_type==="Employee"&&e.jsxs("select",{value:r.payee_id,onChange:a=>t("payee_id",a.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{children:"Select Employee"}),u.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),r.payee_type==="Customer"&&e.jsxs("select",{value:r.payee_id,onChange:a=>t("payee_id",a.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{children:"Select Customer"}),x.map(a=>e.jsx("option",{value:a.id,children:a.first_name+" "+a.middle_name+" "+a.last_name},a.id))]}),r.payee_type==="Vendor"&&e.jsxs("select",{value:r.payee_id,onChange:a=>t("payee_id",a.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{children:"Select Vendor"}),vendors.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1",children:"Payment Date"}),e.jsx("input",{type:"date",value:r.payment_date,onChange:a=>t("payment_date",a.target.value),className:"w-full p-2 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1",children:"Category"}),e.jsxs("select",{value:r.category_id,onChange:a=>t("category_id",a.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{children:"Select Category"}),e.jsx("option",{value:"1",children:"abc"})]})]})]}),e.jsx("div",{className:"grid grid-cols-3 gap-4 mb-6",children:e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1",children:"Account"}),e.jsx("input",{type:"text",value:"Cash",className:"w-full p-2 border rounded",readOnly:!0})]})})]}),e.jsxs("div",{className:"p-6 mt-6 bg-white rounded shadow",children:[e.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Product & Services"}),e.jsxs("table",{className:"min-w-full border border-collapse border-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100",children:[e.jsx("th",{className:"p-2 border border-gray-300",children:"Items"}),e.jsx("th",{className:"p-2 border border-gray-300",children:"Quantity"}),e.jsx("th",{className:"p-2 border border-gray-300",children:"Price"}),e.jsx("th",{className:"p-2 border border-gray-300",children:"Discount"}),e.jsx("th",{className:"p-2 border border-gray-300",children:"Tax (%)"}),e.jsx("th",{className:"p-2 border border-gray-300",children:"Amount"})]})}),e.jsx("tbody",{children:r.items.map((a,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border border-gray-300",children:e.jsxs("select",{className:"w-full p-1 border rounded",value:a.service_id,onChange:s=>n(l,"service_id",s.target.value),children:[e.jsx("option",{children:"Select Item"}),m.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})}),e.jsx("td",{className:"p-2 border border-gray-300",children:e.jsx("input",{type:"text",placeholder:"Qty",className:"w-full p-1 border rounded",value:a.qty,onChange:s=>n(l,"qty",s.target.value)})}),e.jsx("td",{className:"p-2 border border-gray-300",children:e.jsx("input",{type:"text",placeholder:"Price",className:"w-full p-1 border rounded",value:a.price,onChange:s=>n(l,"price",s.target.value)})}),e.jsx("td",{className:"p-2 border border-gray-300",children:e.jsx("input",{type:"text",placeholder:"Discount",className:"w-full p-1 border rounded",value:a.discount,onChange:s=>n(l,"discount",s.target.value)})}),e.jsx("td",{className:"p-2 border border-gray-300",children:e.jsxs("select",{className:"w-full p-1 border rounded",value:a.tax,onChange:s=>n(l,"tax",s.target.value),children:[e.jsx("option",{children:"Select Tax (%)"}),p.map(s=>e.jsxs("option",{value:s.percent,children:[s.percent," (",s.name,"%)"]},s.id))]})}),e.jsx("td",{className:"p-2 border border-gray-300",children:(parseFloat(a.qty||0)*parseFloat(a.price||0)*(1-parseFloat(a.discount||0)/100)+parseFloat(a.qty||0)*parseFloat(a.price||0)*(parseFloat(a.tax||0)/100)).toFixed(2)})]},a.id))})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx("button",{type:"button",onClick:y,className:"px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700",children:"+ Add Item"})})]}),e.jsxs("div",{className:"p-6 mt-6 bg-white rounded shadow",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{children:"Subtotal:"}),e.jsxs("span",{children:["$",c().toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{children:"Total Discount:"}),e.jsxs("span",{children:["-$",o().toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{children:"Total Tax:"}),e.jsxs("span",{children:["$",i().toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between font-bold",children:[e.jsx("span",{children:"Total:"}),e.jsxs("span",{children:["$",j().toFixed(2)]})]})]}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx("button",{type:"submit",className:"px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",children:"Submit"})})]})})})};export{q as default};