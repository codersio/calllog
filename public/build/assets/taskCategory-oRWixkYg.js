import{r as d,W as E,j as e,a as S,b as T}from"./app-DFTNfJ2u.js";import{H as D,N as F,c as O,d as H,e as I}from"./Nav-CWswFE9u.js";import{R}from"./index--930hQoJ.js";import{N as $}from"./notyf.min-DLu_xjpT.js";import"./index-BjoqcNMp.js";const l=new $,P=({taskcategory:b,user:g,user_type:y,notif:N})=>{const[a,i]=d.useState(!1),[n,m]=d.useState(!1),[o,u]=d.useState(null),{data:c,setData:x,post:h,errors:p,reset:j}=E({tname:""}),w=(t,s)=>{t.preventDefault(),confirm("Are you sure you want to delete this task category?")&&T.get(`/task-category-delete/${s}`).then(r=>{alert("Task Category deleted successfully"),window.location.reload()}).catch(r=>{console.log(r)})},C=()=>{j(),i(!0)},k=t=>{x({tname:t.tname}),u(t),m(!0)},f=()=>{i(!1),m(!1),u(null),j()},v=t=>{x(t.target.name,t.target.value)},M=async t=>{t.preventDefault();try{a?(await h("/task-category-store",c),l.success("Task category created successfully!")):n&&o&&(await h(`/task-category-update/${o.id}`,c),l.success("Task category updated successfully!")),f()}catch(s){a?l.error("Failed to create task category."):n&&o&&l.error("Failed to update task category."),console.error("Submit error:",s)}};return e.jsxs("div",{className:"w-[85%] absolute right-0",children:[e.jsx(D,{user:g,notif:N}),e.jsx(F,{user_type:y}),e.jsx("div",{className:"flex items-center justify-end p-4",children:e.jsx("button",{onClick:C,className:"p-2 text-white bg-blue-600 rounded-md ",children:e.jsx(O,{})})}),e.jsx("div",{className:"p-3 border-2 table-section",children:e.jsxs("table",{className:"table border w-full p-4",children:[e.jsx("thead",{className:"bg-[#065E91] text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"Category Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Action"})]})}),e.jsx("tbody",{children:b.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 border",children:e.jsx(S,{href:`/projects-show/${t.id}`,children:t.tname})}),e.jsx("td",{className:"p-3 border",children:e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{onClick:()=>k(t),className:"mr-2 text-green-800 text-[1.5rem]",children:e.jsx(H,{})}),e.jsx("button",{onClick:r=>w(r,t.id),className:"text-red-800 text-[1.5rem]",children:e.jsx(R,{})})]})})]},s))})]})}),(a||n)&&e.jsx("div",{className:"fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-20",children:e.jsxs("div",{className:"p-10 w-full max-w-[500px] relative bg-white rounded-md shadow-md",children:[e.jsx("div",{className:"absolute right-[10px] top-[13px] text-[1.5rem]",children:e.jsx("button",{onClick:f,className:"text-black",children:e.jsx(I,{})})}),e.jsxs("form",{onSubmit:M,className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tname",children:"Category Name"}),e.jsx("input",{id:"tname",className:"w-full rounded-lg",name:"tname",type:"text",value:c.tname,onChange:v,required:!0}),p.tname&&e.jsx("div",{children:p.tname})]}),e.jsx("button",{type:"submit",className:"bg-blue-600 p-2 rounded-md text-white w-[35%]",children:a?"Create":"Update"})]})]})})]})};export{P as default};
