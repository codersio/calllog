import{r as a,W as C,j as e,a as u}from"./app-bBQMqR6O.js";import{C as L}from"./index-Bdzr3ZA9.js";import{R as D}from"./index-DrwY1Ojx.js";import{N as v}from"./notyf.min-DLu_xjpT.js";import{A as S}from"./AdminLayout-BHjzgd9T.js";import"./index-CYmrYT0Q.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";const m=new v,q=({data:o})=>{const[r,b]=a.useState(""),[c,f]=a.useState(o),[i,n]=a.useState(1),[l]=a.useState(10);a.useEffect(()=>{const t=o.filter(s=>s.name.toLowerCase().includes(r.toLowerCase())||s.email.toLowerCase().includes(r.toLowerCase())||s.roles.some(d=>d.name.toLowerCase().includes(r.toLowerCase()))||s.datas.some(d=>d.phone.toLowerCase().includes(r.toLowerCase())));f(t)},[r,o]);const j=t=>{b(t.target.value),n(1)},{delete:p}=C(),N=(t,s)=>{t.preventDefault(),confirm("Are you sure you want to delete this record?")&&p(`/distributers/${s}`,{onSuccess:()=>{m.success("Distributor deleted successfully!")},onError:()=>{m.error("Failed to delete data.")}})},h=i*l,g=h-l,x=c.slice(g,h),w=Math.ceil(c.length/l),y=Array.from({length:w},(t,s)=>s+1);return e.jsx(S,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"text",value:r,onChange:j,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),e.jsx(u,{href:"distributers/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Create New Data"})]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Email"}),e.jsx("th",{className:"p-3 text-left border",children:"Phone"}),e.jsx("th",{className:"p-3 text-center border",children:"Actions"})]})}),e.jsx("tbody",{children:x.length>0?x.map(t=>e.jsxs("tr",{className:"odd:bg-white even:bg-gray-100",children:[e.jsx("td",{className:"p-3 border",children:t.name}),e.jsx("td",{className:"p-3 border",children:t.email}),e.jsx("td",{className:"p-3 border",children:t.con1}),e.jsx("td",{className:"p-3 text-center border",children:e.jsxs("div",{className:"flex justify-center space-x-3",children:[e.jsx(u,{className:"p-2 text-white bg-green-500 rounded",href:`distributers/${t.id}/edit`,children:e.jsx(L,{})}),e.jsx("button",{className:"p-2 text-white bg-red-500 rounded",onClick:s=>N(s,t.id),children:e.jsx(D,{})})]})})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",className:"p-3 text-center",children:"No data found"})})})]}),e.jsx("div",{className:"flex justify-center mt-4",children:y.map(t=>e.jsx("button",{onClick:()=>n(t),className:`px-4 py-2 mx-1 rounded ${i===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]})})};export{q as default};