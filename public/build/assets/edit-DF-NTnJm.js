import{W as p,j as e}from"./app-CwTpoyqh.js";import{A as u}from"./AdminLayout-DQmQe51a.js";import{N as h}from"./notyf.min-DLu_xjpT.js";import"./Dropdown-C_Ing8xx.js";import"./index-DXOuEoXo.js";import"./index-CBtgs9-R.js";const o=new h;function w({task:l,customers:n,employees:i,ttypes:c}){const{put:m,data:r,setData:a,errors:t,processing:j}=p({customer_id:l.customer_id,employee_id:l.employee_id,subject:l.subject,assign_date:l.assign_date,task_type_id:l.task_type_id,remarks:l.remarks||"",description:l.description,close_date:l.close_date,attachment:"",status:l.status});function x(s){s.preventDefault(),m(route("tasks.update",l.id),{onSuccess:()=>{o.success("Task updated successfully!")},onError:()=>{o.error("Failed to add task. Please check your inputs.")}})}return e.jsx(u,{children:e.jsxs("div",{className:"max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Edit Tasks"}),e.jsxs("form",{onSubmit:x,className:"flex flex-wrap",children:[e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Customer Name"}),e.jsxs("select",{name:"",onChange:s=>a("customer_id",s.target.value),value:r.customer_id,className:"w-full rounded form-select",id:"",children:[e.jsx("option",{value:"",children:"-- Select Customer --"}),n&&n.map((s,d)=>e.jsx("option",{value:s.user_id,children:s.first_name+" "+s.middle_name+" "+s.last_name},d))]}),t.customer_id&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.customer_id})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Assign To"}),e.jsxs("select",{name:"",onChange:s=>a("employee_id",s.target.value),value:r.employee_id,className:"w-full rounded form-select",id:"",children:[e.jsx("option",{value:"",children:"-- Select Assigned To --"}),i&&i.map((s,d)=>e.jsx("option",{value:s.id,children:s.name},d))]}),t.employee_id&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.employee_id})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Subject"}),e.jsx("input",{onChange:s=>a("subject",s.target.value),value:r.subject,type:"text",className:"w-full rounded form-input",placeholder:"Enter subject"}),t.subject&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.subject})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Assigned Date"}),e.jsx("input",{type:"date",name:"date",onChange:s=>a("assign_date",s.target.value),value:r.assign_date,className:"w-full rounded form-input",placeholder:"Enter bill no"}),t.assign_date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.assign_date})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Task Type"}),e.jsxs("select",{name:"status",onChange:s=>a("task_type_id",s.target.value),value:r.task_type_id,className:"w-full rounded form-select",id:"",children:[e.jsx("option",{value:"",children:"-- Select Task Type --"}),c&&c.map((s,d)=>e.jsx("option",{value:s.id,children:s.name},d))]}),t.task_type_id&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.task_type_id})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Remarks"}),e.jsx("input",{type:"text",onChange:s=>a("remarks",s.target.value),value:r.remarks,className:"w-full rounded form-input",placeholder:"Enter remarks"}),t.remarks&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.remarks})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Description"}),e.jsx("textarea",{name:"",onChange:s=>a("description",s.target.value),value:r.description,id:"",rows:1,className:"w-full rounded resize-none form-textarea",placeholder:"Enter description"}),t.description&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.description})]}),e.jsxs("div",{className:"flex flex-col w-1/2 gap-2 p-2",children:[e.jsx("label",{htmlFor:"",children:"Close Date"}),e.jsx("input",{type:"date",name:"date",onChange:s=>a("close_date",s.target.value),value:r.close_date,className:"w-full rounded form-input",placeholder:"Enter bill no"}),t.close_date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.close_date})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"attachments",children:"Attachments"}),e.jsx("input",{type:"file",onChange:s=>a("attachment",s.target.files[0]),className:"form-input"}),t.attachment&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.attachment})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-2 w-1/2",children:[e.jsx("label",{htmlFor:"",children:"Status"}),e.jsxs("select",{name:"status",onChange:s=>a("status",s.target.value),value:r.status,className:"form-select w-full rounded",id:"",children:[e.jsx("option",{value:"",children:"-- Select Status --"}),e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"progress",children:"Progress"}),e.jsx("option",{value:"closed",children:"Closed"})]}),t.status&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:t.status})]}),e.jsx("div",{className:"w-full py-5",children:e.jsx("button",{className:"px-6 py-2 text-sm font-medium text-white rounded bg-rose-600",children:"Update Task"})})]})]})})}export{w as default};
