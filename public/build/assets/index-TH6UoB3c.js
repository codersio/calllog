import{q as S,r as a,W as v,j as e,a as l}from"./app-bBQMqR6O.js";import{C as D}from"./index-Bdzr3ZA9.js";import{R as A}from"./index-DrwY1Ojx.js";import{N as Q}from"./notyf.min-DLu_xjpT.js";import{A as E}from"./AdminLayout-BHjzgd9T.js";import{e as L}from"./index-CYmrYT0Q.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";const p=new Q,M=({data:o})=>{const{props:r}=S(),[n,j]=a.useState([]);a.useEffect(()=>{Array.isArray(r.auth.permissions)&&j(r.auth.permissions)},[r]);const[d,b]=a.useState(""),[c,N]=a.useState(o),[u,h]=a.useState(1),[i]=a.useState(10);a.useEffect(()=>{const t=d.toLowerCase();N(o.filter(s=>s.f_name.toLowerCase().includes(t)||s.last_name.toLowerCase().includes(t)))},[d,o]);const g=t=>{b(t.target.value),h(1)},{delete:y}=v(),w=(t,s)=>{t.preventDefault(),confirm("Are you sure you want to delete this record?")&&y(`/Quotation/${s}`,{onSuccess:()=>{p.success("Quotation deleted successfully!")},onError:()=>p.error("Failed to delete data.")})},x=u*i,m=x-i,f=c.slice(m,x),_=Math.ceil(c.length/i),q=Array.from({length:_},(t,s)=>s+1);return e.jsx(E,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"text",value:d,onChange:g,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),r.auth.user.roles[0].name==="admin"||n.includes("add_quotation")?e.jsx(l,{href:"Quotation/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Qoutation"}):""]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"SL No"}),e.jsx("th",{className:"p-3 text-left border",children:"Quotation No"}),e.jsx("th",{className:"p-3 text-left border",children:"Customer Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Date"}),e.jsx("th",{className:"p-3 text-center border",children:"Email"}),e.jsx("th",{className:"p-3 text-left border",children:"Action"})]})}),e.jsx("tbody",{children:f.length>0?f.map((t,s)=>e.jsxs("tr",{className:"odd:bg-white even:bg-gray-100",children:[e.jsx("td",{className:"p-3 border",children:m+s+1}),e.jsx("td",{className:"p-3 border",children:t.quotation_no}),e.jsx("td",{className:"p-3 border",children:t.f_name+" "+t.l_name}),e.jsx("td",{className:"p-3 border",children:t.quotation_date}),e.jsx("td",{className:"p-3 border",children:t.email}),e.jsx("td",{className:"p-3 text-center border",children:e.jsxs("div",{className:"flex justify-center space-x-3",children:[r.auth.user.roles[0].name==="admin"||n.includes("edit_quotation")?e.jsx(l,{className:"p-2 text-white bg-green-500 rounded",href:`Quotation/${t.quotation_id}/edit`,children:e.jsx(D,{})}):"",e.jsx(l,{className:"p-2 text-white bg-red-500 rounded",href:`quotation-print/${t.quotation_id}`,children:e.jsx(L,{})}),r.auth.user.roles[0].name==="admin"||n.includes("delete_quotation")?e.jsx("button",{className:"p-2 text-white bg-red-500 rounded",onClick:C=>w(C,t.quotation_id),children:e.jsx(A,{})}):""]})})]},t.quotation_id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",className:"p-3 text-center",children:"No data found"})})})]}),e.jsx("div",{className:"flex justify-center mt-4",children:q.map(t=>e.jsx("button",{onClick:()=>h(t),className:`px-4 py-2 mx-1 rounded ${u===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]})})};export{M as default};