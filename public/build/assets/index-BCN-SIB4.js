import{j as s,a as t}from"./app-DFTNfJ2u.js";import{H as i,N as m,f as c}from"./Nav-CWswFE9u.js";import"./index-BjoqcNMp.js";function N({user:l,user_type:r,notif:a,empl:x,holidays:n,assignments:o,holiday:d}){return s.jsxs("div",{className:"w-[85.2%] absolute right-0 overflow-hidden",children:[s.jsx(i,{user:l,notif:a}),s.jsx(m,{user_type:r}),s.jsxs("div",{className:"p-3 px-[5rem] table-section",children:[s.jsx("h1",{className:"underline",children:"Notifications"}),s.jsx("div",{className:"p-2 ",children:a==null?void 0:a.map(e=>s.jsxs(t,{onClick:()=>handleNotificationClick(e.id),href:e.data.url,className:"flex items-center w-full p-2 border gap-x-4 hover:bg-gray-100",children:[s.jsx(c,{size:18,className:"text-green-500"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("span",{className:"text-sm font-medium text-gray-800",children:e.data.project}),s.jsx("span",{className:"text-sm text-gray-600",children:e.data.employee_id}),s.jsx("span",{className:"text-sm text-gray-700",children:e.data.message})]}),!e.read_at&&s.jsx("span",{className:"bg-red-500 w-1.5 h-1.5 rounded-full ml-auto"})]},d.id))})]})]})}export{N as default};
