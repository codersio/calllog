import{W as p,j as e,a as j}from"./app-CwTpoyqh.js";import{H as _,N as g}from"./Nav-BNAzavBs.js";import{w as b}from"./index-DXOuEoXo.js";import{N as f}from"./notyf.min-DLu_xjpT.js";import"./index-CBtgs9-R.js";import"./index-C8Prn04T.js";import"./index-DwEyoyjJ.js";const l=new f,D=({project:a,employees:v,user:m,user_type:u,notif:o})=>{const{data:d,setData:i,post:c,errors:s}=p({title:a.title||"",estimate_time:a.estimate_time||"",estimate_budget:a.estimate_budget||"",start_date:a.start_date||"",end_date:a.end_date||"",employee_ids:a.assignments.map(t=>t.employee_id)||[]}),x=t=>{t.preventDefault(),c(`/projects-update/${a.id}`,{onSuccess:()=>{l.success("Project updated successfully")},onError:r=>{typeof r=="object"&&r!==null?Object.entries(r).forEach(([y,n])=>{Array.isArray(n)?n.forEach(h=>l.error(h)):l.error(n)}):l.error("An unexpected error occurred.")}})};return e.jsxs("div",{className:"w-[85.2%] ml-[12rem]",children:[e.jsx(_,{user:m,notif:o}),e.jsx(g,{user_type:u}),e.jsxs("form",{onSubmit:x,className:"px-[10rem] grid  border-blue-950 rounded-b-md  space-y-3",children:[e.jsx("div",{className:"flex justify-end ",children:e.jsxs(j,{href:"/projects",className:"flex p-1 px-4 space-x-2 text-white rounded-md bg-slate-600",children:["  ",e.jsx("span",{className:"grid place-items-center",children:e.jsx(b,{})})," ",e.jsx("span",{children:"back"})," "]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",children:"Title:"}),e.jsx("input",{className:"w-full rounded-lg",type:"text",id:"title",value:d.title,onChange:t=>i("title",t.target.value)}),s.title&&e.jsx("div",{children:s.title})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"estimate_time",children:"Estimate Time:"}),e.jsx("input",{className:"w-full rounded-lg",type:"text",id:"estimate_time",value:d.estimate_time,onChange:t=>i("estimate_time",t.target.value)}),s.estimate_time&&e.jsx("div",{children:s.estimate_time})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"estimate_budget",children:"Estimate Budget:"}),e.jsx("input",{className:"w-full rounded-lg",type:"number",id:"estimate_budget",value:d.estimate_budget,onChange:t=>i("estimate_budget",t.target.value)}),s.estimate_budget&&e.jsx("div",{children:s.estimate_budget})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"start_date",children:"Start Date:"}),e.jsx("input",{className:"w-full rounded-lg",type:"date",id:"start_date",value:d.start_date,onChange:t=>i("start_date",t.target.value)}),s.start_date&&e.jsx("div",{children:s.start_date})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"end_date",children:"End Date:"}),e.jsx("input",{className:"w-full rounded-lg",type:"date",id:"end_date",value:d.end_date,onChange:t=>i("end_date",t.target.value)}),s.end_date&&e.jsx("div",{children:s.end_date})]}),e.jsx("br",{}),e.jsx("button",{type:"submit",className:"bg-[#0A1B3F] p-2 rounded-md text-white w-[20%]",children:"Save"})]})]})};export{D as default};
