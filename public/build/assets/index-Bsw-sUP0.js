import{q as v,r as s,W as A,j as e,a as o}from"./app-bBQMqR6O.js";import{A as D}from"./AdminLayout-BHjzgd9T.js";import{e as S}from"./index-CYmrYT0Q.js";import{N as P}from"./notyf.min-DLu_xjpT.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";const p=new P;function q({complaints:n}){const{props:a}=v(),[d,f]=s.useState([]);s.useEffect(()=>{Array.isArray(a.auth.permissions)&&f(a.auth.permissions)},[a]);const[i,j]=s.useState(""),[c,b]=s.useState(n),[m,x]=s.useState(1),[l]=s.useState(10);s.useEffect(()=>{const t=n.filter(r=>r.complaint_no.includes(i));b(t)},[i,n]);const N=t=>{j(t.target.value),x(1)},h=m*l,y=h-l,u=c.slice(y,h),g=Math.ceil(c.length/l),w=Array.from({length:g},(t,r)=>r+1),{delete:_}=A();function C(t){event.preventDefault(),confirm("Are you sure you want to delete this complaint?")&&_(route("complaint.destroy",t),{onSuccess:()=>{p.success("Complaint deleted successfully!")},onError:()=>{p.error("Failed to delete complaint.")}})}return e.jsx(D,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"search",value:i,onChange:N,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),a.auth.user.roles[0].name==="admin"||d.includes("create_complaint")?e.jsx(o,{href:"complaint/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Complaint"}):""]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"Complaint No."}),e.jsx("th",{className:"p-3 text-left border",children:"Customer Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Complaint Date"}),e.jsx("th",{className:"p-3 text-left border",children:"Complaint Type"}),e.jsx("th",{className:"p-3 text-left border",children:"Assigned To"}),e.jsx("th",{className:"p-3 text-left border",children:"Status"}),e.jsx("th",{className:"p-3 text-center border",children:"Actions"})]})}),e.jsx("tbody",{children:u&&u.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:t.complaint_no}),e.jsx("td",{className:"p-3",children:t.first_name+" "+t.middle_name+" "+t.last_name}),e.jsx("td",{className:"p-3",children:t.date}),e.jsxs("td",{className:"p-3",children:[t.complaint_type==0&&"Under Warranty",t.complaint_type==1&&"Warranty Expires"]}),e.jsx("td",{className:"p-3",children:t.af_name+" "+t.am_name+" "+t.al_name}),e.jsx("td",{className:"p-3",children:e.jsxs("div",{className:"flex",children:[t.status==0&&e.jsx("p",{className:"text-sm font-medium bg-green-500 px-2 text-white py-1 rounded",children:"Open"}),t.status==1&&e.jsx("p",{className:"text-sm font-medium bg-amber-500 px-2 py-1 rounded",children:"In Progress"}),t.status==2&&e.jsx("p",{className:"text-sm font-medium bg-red-500 text-white px-2 py-1 rounded",children:"Closed"})]})}),e.jsxs("td",{className:"p-3 flex gap-1",children:[a.auth.user.roles[0].name==="admin"||d.includes("edit_complaint")?e.jsx(o,{href:`/complaint/${t.id}/edit`,className:"text-sm flex items-center gap-1 font-medium px-2 py-1 bg-blue-500 text-white rounded",children:e.jsx("span",{children:"Edit"})}):"",e.jsx(o,{className:"p-2 text-white bg-red-500 rounded",href:`complaint-print/${t.id}`,children:e.jsx(S,{})}),a.auth.user.roles[0].name==="admin"||d.includes("delete_complaint")?e.jsx("button",{type:"button",onClick:()=>C(t.id),className:"text-sm flex items-center gap-1 font-medium px-2 py-1 bg-red-500 text-white rounded",children:e.jsx("span",{children:"Delete"})}):""]})]},r))})]}),e.jsx("div",{className:"flex justify-center mt-4",children:w.map(t=>e.jsx("button",{onClick:()=>x(t),className:`px-4 py-2 mx-1 rounded ${m===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]})})}export{q as default};