import{q as S,r,W as D,j as e,a as l}from"./app-CwTpoyqh.js";import{C as E}from"./index-DKlx98bH.js";import{R as L}from"./index-bxi0VpGJ.js";import{N as P}from"./notyf.min-DLu_xjpT.js";import{A as $}from"./AdminLayout-DQmQe51a.js";import{a as F}from"./index-C8Prn04T.js";import"./index-CBtgs9-R.js";import"./Dropdown-C_Ing8xx.js";import"./index-DXOuEoXo.js";const f=new P,H=({data:i})=>{const{props:a}=S(),[n,j]=r.useState([]);r.useEffect(()=>{Array.isArray(a.auth.permissions)&&j(a.auth.permissions)},[a]);const[c,N]=r.useState(""),[h,g]=r.useState(i),[x,m]=r.useState(1),[o]=r.useState(10);r.useEffect(()=>{const s=c.toLowerCase();g(i.filter(t=>t.first_name.toLowerCase().includes(s)||t.last_name.toLowerCase().includes(s)))},[c,i]);const y=s=>{N(s.target.value),m(1)},{delete:A}=D(),w=(s,t)=>{s.preventDefault(),confirm("Are you sure you want to delete this record?")&&A(`/Client/${t}`,{onSuccess:()=>{f.success("Client deleted successfully!"),location.reload()},onError:()=>f.error("Failed to delete data.")})},u=x*o,p=u-o,b=h.slice(p,u),v=Math.ceil(h.length/o),C=Array.from({length:v},(s,t)=>t+1);return e.jsx($,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"text",value:c,onChange:y,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),a.auth.user.roles[0].name==="admin"||n.includes("create_client")?e.jsx(l,{href:"Client/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Client"}):"",e.jsx(l,{href:"archiveclient",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Archive Client"})]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"SL No"}),e.jsx("th",{className:"p-3 text-left border",children:"Image"}),e.jsx("th",{className:"p-3 text-left border",children:"Client Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Address"}),e.jsx("th",{className:"p-3 text-left border",children:"Mobile Number"}),e.jsx("th",{className:"p-3 text-center border",children:"Email"}),e.jsx("th",{className:"p-3 text-left border",children:"Action"})]})}),e.jsx("tbody",{children:b.length>0?b.map((s,t)=>e.jsxs("tr",{className:"odd:bg-white even:bg-gray-100",children:[e.jsx("td",{className:"p-3 border",children:p+t+1}),e.jsx("td",{className:"p-3 border",children:e.jsx("img",{src:`${s.photo}`,alt:`${s.name}'s photo`,style:{maxWidth:"100px",maxHeight:"100px"}})}),e.jsx("td",{className:"p-3 border",children:s.first_name+" "+s.last_name}),e.jsx("td",{className:"p-3 border",children:typeof s.address=="string"&&s.address.trim()!==""?(()=>{try{const d=JSON.parse(s.address);return Array.isArray(d)?d.map(_=>_.address).join(", "):"Invalid Address Format"}catch{return"Invalid Address Format"}})():Array.isArray(s.address)?s.address.map(d=>d.address).join(", "):"No Address"}),e.jsx("td",{className:"p-3 border",children:s.mobile_no}),e.jsx("td",{className:"p-3 border",children:s.email}),e.jsx("td",{className:"p-3 text-center border",children:e.jsxs("div",{className:"flex justify-center space-x-3",children:[a.auth.user.roles[0].name==="admin"||n.includes("edit_client")?e.jsx(l,{className:"p-2 text-white bg-green-500 rounded",href:`service-centers/${s.user_id}/edit`,children:e.jsx(E,{})}):"",e.jsx(l,{className:"p-2 text-white bg-green-500 rounded",href:`Archive/${s.user_id}`,children:e.jsx(F,{})}),a.auth.user.roles[0].name==="admin"||n.includes("delete_client")?e.jsx("button",{className:"p-2 text-white bg-red-500 rounded",onClick:d=>w(d,s.user_id),children:e.jsx(L,{})}):""]})})]},s.user_id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",className:"p-3 text-center",children:"No data found"})})})]}),e.jsx("div",{className:"flex justify-center mt-4",children:C.map(s=>e.jsx("button",{onClick:()=>m(s),className:`px-4 py-2 mx-1 rounded ${x===s?"bg-blue-500 text-white":"bg-gray-200"}`,children:s},s))})]})})};export{H as default};
