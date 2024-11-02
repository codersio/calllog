import{q as _,r as a,W as C,j as e,a as x}from"./app-CwTpoyqh.js";import{A as M}from"./AdminLayout-DQmQe51a.js";import{N as E}from"./notyf.min-DLu_xjpT.js";import"./Dropdown-C_Ing8xx.js";import"./index-DXOuEoXo.js";import"./index-CBtgs9-R.js";const p=new E;function U({amcs:n}){const{props:r}=_(),[l,f]=a.useState([]);a.useEffect(()=>{Array.isArray(r.auth.permissions)&&f(r.auth.permissions)},[r]);const[c,j]=a.useState(""),[i,N]=a.useState(n),[o,h]=a.useState(1),[d]=a.useState(10);a.useEffect(()=>{const t=n.filter(s=>s.amc_no.includes(c));N(t)},[c,n]);const b=t=>{j(t.target.value),h(1)},m=o*d,g=m-d,u=i.slice(g,m),y=Math.ceil(i.length/d),w=Array.from({length:y},(t,s)=>s+1),A=t=>t.split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "),D=t=>{const s=new Date(t);return s.setMonth(s.getMonth()+1),s.toLocaleDateString()},{delete:S}=C();function v(t){event.preventDefault(),confirm("Are you sure you want to delete this AMC?")&&S(route("amc.destroy",t),{onSuccess:()=>{p.success("AMC deleted successfully!")},onError:()=>{p.error("Failed to delete amc.")}})}return e.jsx(M,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"search",value:c,onChange:b,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),r.auth.user.roles[0].name==="admin"||l.includes("create_amc")?e.jsx(x,{href:route("amc.create"),className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Amc"}):""]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"AMC No."}),e.jsx("th",{className:"p-3 text-left border",children:"Customer Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Date"}),e.jsx("th",{className:"p-3 text-left border",children:"Assigned To"}),e.jsx("th",{className:"p-3 text-left border",children:"Next Services"}),e.jsx("th",{className:"p-3 text-left border",children:"Upcoming Services"}),e.jsx("th",{className:"p-3 text-left border",children:"Status"}),e.jsx("th",{className:"p-3 text-center border",children:"Actions"})]})}),e.jsx("tbody",{children:u&&u.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:t.amc_no}),e.jsx("td",{className:"p-3",children:t.first_name+" "+t.middle_name+" "+t.last_name}),e.jsx("td",{className:"p-3",children:t.date}),e.jsx("td",{className:"p-3",children:t.assigned_to}),e.jsx("td",{className:"p-3",children:D(new Date)}),e.jsx("td",{className:"p-3",children:t.interval}),e.jsx("td",{className:"p-3",children:A(t.status)}),e.jsxs("td",{className:"p-3 flex gap-1",children:[r.auth.user.roles[0].name==="admin"||l.includes("edit_amc")?e.jsx(x,{href:`/amc/${t.id}/edit`,className:"text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded",children:e.jsx("span",{children:"Edit"})}):"",r.auth.user.roles[0].name==="admin"||l.includes("delete_amc")?e.jsx("button",{type:"button",onClick:()=>v(t.id),className:"text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded",children:e.jsx("span",{children:"Delete"})}):""]})]},s))})]}),e.jsx("div",{className:"flex justify-center mt-4",children:w.map(t=>e.jsx("button",{onClick:()=>h(t),className:`px-4 py-2 mx-1 rounded ${o===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]})})}export{U as default};
