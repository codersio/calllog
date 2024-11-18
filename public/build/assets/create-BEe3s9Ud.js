import{r as m,W as O,j as e}from"./app-bBQMqR6O.js";import{A as R}from"./AdminLayout-BHjzgd9T.js";import{r as P}from"./index-BtE-ENE6.js";import{N as M}from"./notyf.min-DLu_xjpT.js";import"./Dropdown-BP-MPy4X.js";import"./index-CYmrYT0Q.js";const w=new M;function $({customers:p,products:f,employees:j,intvls:g}){const[i,u]=m.useState([{product:"",note:""}]),[c,y]=m.useState(),[x,v]=m.useState(),[h,N]=m.useState([]),{post:C,data:a,setData:n,errors:l,processing:I}=O({amc_no:"",contact_person:"",date:"",customer_id:"",mobile_no:"",assigned_to:"",email:"",status:"",interval:"",details:"",attachments:"",no_of_service:"",billing_address:"",service_details:[],amc_details:[]});m.useEffect(()=>{if(c){const s=new Date(a.date||new Date),t=Array.from({length:x},(r,d)=>{const o=new Date(s);return o.setMonth(s.getMonth()+d*c),{id:d+1,date:o.toISOString().split("T")[0],service:`${d+1} Service`}});N(t)}},[c,x,a.date]);function S(s){if(!c){alert("Please select interval first"),v("");return}v(Number(s.target.value))}const b=(s,t,r)=>{N(d=>d.map(o=>o.id===s?{...o,[t]:r}:o))};m.useEffect(()=>{n(s=>({...s,amc_details:i,no_of_service:x,interval:c,service_details:h}))},[i,x,c,h]);const A=()=>{u([...i,{product:"",note:""}])},F=s=>{const t=i.filter((r,d)=>d!==s);u(t)},_=(s,t,r)=>{const d=i.map((o,E)=>E===s?{...o,[t]:r}:o);u(d)};function D(s){s.preventDefault(),C(route("amc.store"),{onSuccess:()=>{w.success("Amc added successfully!")},onError:t=>{console.log(t),w.error("Failed to add amc. Please check your inputs.")}})}return e.jsx(R,{children:e.jsxs("div",{className:"max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Add Amc"}),e.jsxs("form",{onSubmit:D,className:"flex flex-wrap",children:[e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"AMC No."}),e.jsx("input",{onChange:s=>n("amc_no",s.target.value),value:a.amc_no,type:"text",className:"form-input w-full rounded",placeholder:"Enter bill no"}),l.amc_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.amc_no})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Date"}),e.jsx("input",{type:"date",name:"date",onChange:s=>n("date",s.target.value),value:a.date,className:"form-input w-full rounded",placeholder:"Enter bill no"}),l.date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.date})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Contact Person"}),e.jsx("input",{type:"text",name:"contact_person",onChange:s=>n("contact_person",s.target.value),value:a.contact_person,className:"form-input w-full rounded",placeholder:"Enter bill no"}),l.contact_person&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.contact_person})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Status"}),e.jsxs("select",{name:"status",onChange:s=>n("status",s.target.value),value:a.status,className:"form-select w-full rounded",id:"",children:[e.jsx("option",{value:"",children:"-- Select Status --"}),e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"progress",children:"Progress"}),e.jsx("option",{value:"closed",children:"Closed"})]}),l.status&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.status})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Customer Name"}),e.jsxs("select",{name:"",onChange:s=>n("customer_id",s.target.value),value:a.customer_id,className:"form-select w-full rounded",id:"",children:[e.jsx("option",{value:"",children:"-- Select Customer --"}),p&&p.map((s,t)=>e.jsx("option",{value:s.user_id,children:s.first_name+" "+s.middle_name+" "+s.last_name},t))]}),l.customer_id&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.customer_id})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Mobile No"}),e.jsx("input",{type:"tel",onChange:s=>n("mobile_no",s.target.value),value:a.mobile_no,className:"form-input w-full rounded",placeholder:"Enter mobile no"}),l.mobile_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.mobile_no})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Email"}),e.jsx("input",{type:"email",onChange:s=>n("email",s.target.value),value:a.email,className:"form-input w-full rounded",placeholder:"Enter email"}),l.email&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.email})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Assigned To"}),e.jsxs("select",{name:"",onChange:s=>n("assigned_to",s.target.value),value:a.assigned_to,className:"form-select w-full rounded",id:"",children:[e.jsx("option",{value:"",children:"-- Select Assigned --"}),j&&j.map((s,t)=>e.jsx("option",{value:s.user_id,children:s.first_name+" "+s.middle_name+" "+s.last_name},t))]}),l.assigned_to&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.assigned_to})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Amc Details"}),e.jsx("textarea",{name:"",onChange:s=>n("details",s.target.value),value:a.details,id:"",rows:3,className:"form-textarea resize-none w-full rounded"}),l.details&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.details})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Billing Address"}),e.jsx("textarea",{name:"",onChange:s=>n("billing_address",s.target.value),value:a.billing_address,id:"",rows:3,className:"form-textarea resize-none w-full rounded"}),l.billing_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.billing_address})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"attachments",children:"Attachments"}),e.jsx("input",{type:"file",onChange:s=>n("attachments",s.target.files[0]),className:"form-input"}),l.attachments&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.attachments})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Interval"}),e.jsxs("select",{name:"",value:c,onChange:s=>y(Number(s.target.value)),className:"form-select w-full rounded",id:"",children:[e.jsx("option",{value:"",children:"-- No Of Interval --"}),g&&g.map((s,t)=>e.jsx("option",{value:s.id,children:s.name+" Month"},t))]}),l.interval&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.interval})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"No Of Service"}),e.jsxs("select",{name:"",value:x,onChange:S,className:"form-select w-full rounded",id:"",children:[e.jsx("option",{value:"",children:"-- No Of Service --"}),Array.from({length:12},(s,t)=>t+1).map(s=>e.jsx("option",{value:s,children:s},s))]}),l.no_of_service&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.no_of_service})]}),e.jsx("div",{className:"w-full py-3",children:h.map(s=>e.jsxs("div",{className:"flex items-center space-x-4 border-b pb-4",children:[e.jsx("div",{className:"w-10 text-center",children:s.id}),e.jsx("input",{type:"date",value:s.date,onChange:t=>b(s.id,"date",t.target.value),className:"border border-gray-300 rounded px-2 py-1 bg-gray-100 w-1/3"}),e.jsx("input",{type:"text",value:s.service,onChange:t=>b(s.id,"service",t.target.value),className:"border border-gray-300 rounded px-2 py-1 bg-gray-100 w-1/3"})]},s.id))}),e.jsx("hr",{}),e.jsx("div",{className:"w-full py-2",children:e.jsx("h1",{className:"text-xl font-semibold text-gray-600",children:"Amc Details"})}),e.jsxs("div",{className:"w-full py-2",children:[e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-gray-300 p-2",children:"Product"}),e.jsx("th",{className:"border border-gray-300 p-2",children:"Notes"}),e.jsx("th",{className:"border border-gray-300 p-2",children:"Action"})]})}),e.jsx("tbody",{children:i.map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2",children:e.jsxs("select",{className:"form-select rounded w-full",value:s.product,onChange:r=>_(t,"product",r.target.value),children:[e.jsx("option",{value:"",children:"-- Select Product --"}),f&&f.map((r,d)=>e.jsx("option",{value:r.item_name,children:r.item_name},d))]})}),e.jsx("td",{className:"p-2",children:e.jsx("input",{type:"text",className:"form-input rounded w-full",value:s.note,onChange:r=>_(t,"note",r.target.value)})}),e.jsx("td",{className:"p-2",children:t!==0&&e.jsxs("button",{type:"button",className:"flex gap-1 items-center text-sm font-medium text-red-500",onClick:()=>F(t),children:[e.jsx(P,{size:15}),e.jsx("span",{children:"Delete"})]})})]},t))})]}),e.jsx("button",{type:"button",className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:A,children:"Add Row"})]}),e.jsx("div",{className:"w-full py-5",children:e.jsx("button",{className:"py-2 px-6 text-sm bg-rose-600 rounded font-medium text-white",children:"Add Amc"})})]})]})})}export{$ as default};