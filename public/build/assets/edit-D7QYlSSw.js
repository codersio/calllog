import{j as e,a as v}from"./app-CwTpoyqh.js";import{H as f,N as g}from"./Nav-BNAzavBs.js";import{u as N}from"./index-DIUTJu-4.js";import{r as b}from"./index-DXOuEoXo.js";import{N as w}from"./notyf.min-DLu_xjpT.js";import"./index-CBtgs9-R.js";import"./index-C8Prn04T.js";import"./index-DwEyoyjJ.js";import"./index-8gYQyaiN.js";const d=new w,L=({empdataloyee:o,type:m,leave:a,user:u,user_type:c})=>{const{data:s,setData:p,post:h,errors:l,notif:x}=N({employee_id:a.employee_id,leave_type_id:a.leave_type_id,sdate:a.sdate,edate:a.edate,reason:a.reason,remark:a.remark,hours:"",status:a.status}),t=r=>{p(r.target.name,r.target.value)},j=r=>{r.preventDefault(),h(`/leave-store-update/${a.id}`,{onSuccess:()=>{d.success("Employee leave updated successfully")},onError:n=>{typeof n=="object"&&n!==null?Object.entries(n).forEach(([_,i])=>{Array.isArray(i)?i.forEach(y=>d.error(y)):d.error(i)}):d.error("An unexpected error occurred.")}})};return e.jsxs("div",{className:"w-[85.2%] ml-[11.5rem]",children:[e.jsx(f,{user:u,notif:x}),e.jsx(g,{user_type:c}),e.jsxs("div",{className:"p-3 table-section",children:[e.jsx("div",{className:"flex justify-end ",children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"grid p-2 mt-2 text-white bg-blue-800 rounded-lg place-items-center",children:e.jsxs(v,{href:"/leave-index",children:["  ",e.jsx(b,{className:"text-[1rem] "})]})})})}),e.jsxs("form",{onSubmit:j,className:"px-[8rem] grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Leave Name"}),e.jsxs("select",{name:"employee_id",id:"",className:"w-full rounded-lg",type:"text",value:s.employee_id,onChange:t,required:!0,children:[e.jsx("option",{value:"",children:"Select employees"}),o.map(r=>e.jsx("option",{value:r.id,children:r.name}))]}),l.name&&e.jsx("div",{children:l.employee_id})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Leave Type"}),e.jsxs("select",{name:"leave_type_id",id:"",className:"w-full rounded-lg",type:"text",value:s.leave_type_id,onChange:t,required:!0,children:[e.jsx("option",{value:"",children:"Select leave Type"}),m.map(r=>e.jsx("option",{value:r.id,children:r.type_name}))]}),l.name&&e.jsx("div",{children:l.employee_id})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Start Date"}),e.jsx("input",{className:"w-full rounded-lg",id:"password",name:"sdate",type:"date",value:s.sdate,onChange:t,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",children:"End date"}),e.jsx("input",{className:"w-full rounded-lg",id:"phone",name:"edate",type:"date",value:s.edate,onChange:t,required:!0}),e.jsx("input",{className:"w-full rounded-lg",id:"phone",name:"status",hidden:!0,type:"number",value:s.status,onChange:t,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",children:"Leave Reason "}),e.jsx("textarea",{className:"w-full rounded-lg",name:"reason",type:"text",value:s.reason,onChange:t,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",children:"Remarks"}),e.jsx("textarea",{className:"w-full rounded-lg",name:"remark",type:"text",value:s.remark,onChange:t,required:!0})]}),e.jsx("button",{type:"submit",className:"bg-blue-600 p-2 rounded-md text-white w-[30%]",children:"Update"})]})]})]})};export{L as default};
