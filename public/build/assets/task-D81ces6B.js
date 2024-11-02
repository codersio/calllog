import{r as d,j as e,b as E}from"./app-CwTpoyqh.js";import{u as Y,L as y}from"./index-DIUTJu-4.js";import{H as Z,N as ee}from"./Nav-BNAzavBs.js";import{u as te}from"./index-DXOuEoXo.js";import{R as se}from"./index-bxi0VpGJ.js";import{N as re}from"./notyf.min-DLu_xjpT.js";import{M as ae}from"./index-CfJux8De.js";import"./index-8gYQyaiN.js";import"./index-CBtgs9-R.js";import"./index-C8Prn04T.js";import"./index-DwEyoyjJ.js";const n=new re,ge=({user:T,tasks:m,user_type:F,notif:A,taskcategory:L,employee:b,projects:c})=>{const[i,M]=d.useState(""),[N,D]=d.useState([]),[v,k]=d.useState(1),[p]=d.useState(10),[H,w]=d.useState(!1),[O,$]=d.useState(""),[u,I]=d.useState(""),{data:o,setData:j,post:B,errors:le}=Y({task_name:"",estimate_hours:"",sdate:"",edate:"",employee_id:[],status:"",project_id:c.length>0?c[0].id:""});d.useEffect(()=>{const r=m.flatMap(s=>s.tasks).filter(s=>(i===""||s.task_name.toLowerCase().includes(i.toLowerCase())||s.users.some(l=>l.name.toLowerCase().includes(i.toLowerCase())))&&(u===""||m.some(l=>l.title.toLowerCase().includes(u.toLowerCase())&&l.tasks.includes(s))));D(r)},[i,u,m]);const h=t=>{const{name:r,value:s}=t.target;console.log(`Selected ${r}: ${s}`),j(l=>({...l,[r]:s}))},R=(t,r)=>{t.preventDefault(),confirm("Are you sure you want to delete this task?")&&E.get(`/task-delete/${r}`).then(s=>{n.success("Task and related task assign deleted successfully."),window.location.reload()}).catch(s=>{console.log(s)})},q=t=>{const r=c.find(s=>s.title===t);r?(j(s=>({...s,project_id:r.id})),$(t),w(!0)):n.error("Project not found.")},Q=()=>{w(!1)},C=v*p,U=C-p,_=N.slice(U,C),V=Math.ceil(N.length/p),z=Array.from({length:V},(t,r)=>r+1),G=t=>{M(t.target.value),k(1)},S=(t,r)=>{j("employee_id",t.map(s=>s.id))},J=async t=>{t.preventDefault(),console.log("Project ID:",o.project_id),console.log("Projects Array:",c);const r=parseInt(o.project_id),s=c.find(a=>a.id===r);if(!s){n.error("Selected project not found."),console.error("Selected project not found.");return}const l=parseFloat(o.estimate_hours);try{const a=await E.get(`/project-tasks/${r}/total-hours`),W=parseFloat(a.data.total_hours)+l,P=parseFloat(s.estimate_time);if(W>P){n.error(`Total hours exceed the allowed limit for the project. Maximum allowed: ${P} hours.`);return}B("/task-store",{data:o,onSuccess:()=>{n.success("Task created successfully with notification sent.")},onError:x=>{typeof x=="object"&&x!==null?Object.entries(x).forEach(([oe,g])=>{Array.isArray(g)?g.forEach(X=>n.error(X)):n.error(g)}):n.error("An unexpected error occurred."),console.error("Server-side validation errors:",x)}})}catch(a){console.error("Error fetching total task hours:",a),n.error("Failed to validate project hours. Please try again later.")}},K=o.task_name.replace(/\u00A0/g," ").trim();return e.jsxs("div",{className:"w-[85.2%] absolute right-0 overflow-hidden",children:[e.jsx(Z,{user:T,notif:A}),e.jsx(ee,{user_type:F}),e.jsxs("div",{className:"px-8 table-section",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"w-[40%] flex space-x-2",children:[e.jsx("input",{type:"text",value:u,onChange:t=>I(t.target.value),placeholder:"Search projects...",className:"w-full p-2 border rounded-md"}),e.jsx("input",{type:"text",value:i,onChange:G,placeholder:"Search tasks...",className:"w-full p-2 border rounded-md"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"grid p-2 mt-2 text-black underline rounded-lg place-items-center",children:e.jsx(y,{href:"task-create",children:"Add New"})}),e.jsx("div",{className:"grid p-2 mt-2 text-black underline rounded-lg place-items-center",children:e.jsx(y,{href:"task-category",children:"Add Task type"})})]})]}),e.jsx("br",{}),e.jsxs("table",{className:"w-full border border-collapse border-gray-200 table-auto",children:[e.jsx("thead",{className:"bg-[#0A1B3F] text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border border-gray-300",children:"Project Name"}),e.jsx("th",{className:"px-4 py-2 border border-gray-300",children:"Task Name"}),e.jsx("th",{className:"px-4 py-2 border border-gray-300",children:"Assigned Users"}),e.jsx("th",{className:"px-4 py-2 border border-gray-300",children:"Actions"})]})}),e.jsx("tbody",{children:_.length>0?_.map((t,r)=>{var l;const s=((l=m.find(a=>a.tasks.includes(t)))==null?void 0:l.title)||"Unknown Project";return e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 border border-gray-300 text-[0.9rem]",children:s}),e.jsx("td",{className:"px-4 py-2 border border-gray-300 text-[0.9rem]",children:t.task_name}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:t.users.map((a,f)=>e.jsxs("span",{className:"bg-blue-400 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full",children:[a.name," - ",a.pivot.employee_hours," hours",f<t.users.length-1&&", "]},f))}),e.jsxs("td",{className:"flex px-4 py-2 space-x-2 border border-gray-300",children:[e.jsx(y,{href:`/task-edit/${t.id}`,children:e.jsx(te,{className:"text-blue-500 cursor-pointer hover:text-blue-700"})}),e.jsx(se,{className:"text-red-500 cursor-pointer hover:text-red-700",onClick:a=>R(a,t.id)}),e.jsx("button",{onClick:()=>q(s),className:"text-green-500 cursor-pointer hover:text-green-700",children:"Copy"})]})]},r)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"4",className:"p-3 text-center",children:"No tasks found"})})})]}),e.jsx("div",{className:"flex justify-center mt-4",children:z.map(t=>e.jsx("button",{onClick:()=>k(t),className:`px-4 py-2 mx-1 rounded ${v===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]}),H&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsx("form",{onSubmit:J,className:"px-[8rem] items-center justify-center ",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Copied Project Name"}),e.jsx("input",{type:"text",value:O,readOnly:!0,className:"w-full p-2 border rounded-md mb-4"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"task_name",children:"Task Name"}),e.jsxs("select",{className:"w-full rounded-lg",name:"task_name",value:o.task_name,onChange:h,children:[e.jsx("option",{value:"",children:"Select task"}),L.map(t=>e.jsx("option",{value:t.tname,children:t.tname},t.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sdate",children:"Start Date"}),e.jsx("input",{className:"w-full rounded-lg",id:"sdate",name:"sdate",type:"date",value:o.sdate,onChange:h,required:!0})]}),e.jsx("div",{children:K!=="NON-BILLABLE"&&e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"estimate_hours",children:"Estimate Hours"}),e.jsx("input",{className:"w-full rounded-lg",id:"estimate_hours",name:"estimate_hours",type:"number",value:o.estimate_hours,onChange:h})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"edate",children:"End Date"}),e.jsx("input",{className:"w-full rounded-lg",id:"edate",name:"edate",type:"date",value:o.edate,onChange:h,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"employee_id",children:"Assign Employees"}),e.jsx(ae,{options:b,selectedValues:o.employee_id.map(t=>b.find(r=>r.id===t)),onSelect:S,onRemove:S,displayValue:"name",placeholder:"Select Employees"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:Q,className:"mt-4 px-4 py-2 bg-red-500 text-white rounded",children:"Close"}),e.jsx("button",{type:"submit",className:"mt-4 px-4 py-2 bg-green-500 text-white rounded",children:"Create"})]})]})})})]})};export{ge as default};
