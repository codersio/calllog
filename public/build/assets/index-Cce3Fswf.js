import{q as x,r as t,b as h,j as e,a as d}from"./app-bBQMqR6O.js";import{A as m}from"./AdminLayout-BHjzgd9T.js";import{d as p}from"./index-BUrNszlx.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";function g({data:n}){const{props:r}=x(),[a,c]=t.useState([]);t.useEffect(()=>{Array.isArray(r.auth.permissions)&&c(r.auth.permissions)},[r]);const[i,l]=t.useState(n);t.useEffect(()=>{i.length===0&&h.get("/api/services").then(s=>l(s.data)).catch(s=>console.error("Error fetching services:",s))},[i]);const o=s=>{window.confirm("Are you sure you want to delete this service?")&&p.Inertia.delete(`/services/${s}`)};return e.jsx(m,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold",children:"Service List"}),r.auth.user.roles[0].name==="admin"||a.includes("create_service")?e.jsx(d,{href:"/services/create",className:"px-4 py-2 text-white bg-blue-500 rounded",children:"Create New Service"}):"",e.jsx("br",{}),e.jsx("br",{}),e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border",children:"Service Code"}),e.jsx("th",{className:"px-4 py-2 border",children:"Service Date"}),e.jsx("th",{className:"px-4 py-2 border",children:"Assign To"}),e.jsx("th",{className:"px-4 py-2 border",children:"Status"}),e.jsx("th",{className:"px-4 py-2 border",children:"Action"})]})}),e.jsx("tbody",{children:i.map(s=>e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{className:"px-4 py-2 border",children:s.service_code}),e.jsx("td",{className:"px-4 py-2 border",children:s.service_date}),e.jsx("td",{className:"px-4 py-2 border",children:s.assigned_first_name+" "+s.assigned_middle_name+" "+s.assigned_last_name}),e.jsx("td",{className:"px-4 py-2 border",children:e.jsx("span",{className:`px-2 py-1 font-semibold text-white rounded ${s.status==="Open"?"bg-green-500":"bg-gray-500"}`,children:s.status})}),e.jsxs("td",{className:"px-4 py-2 space-x-2 border",children:[r.auth.user.roles[0].name==="admin"||a.includes("edit_service")?e.jsx(d,{href:`services/${s.id}/edit`,className:"px-4 py-1 text-white bg-blue-500 rounded",children:"Edit"}):"",r.auth.user.roles[0].name==="admin"||a.includes("delete_service")?e.jsx("button",{onClick:()=>o(s.id),className:"px-4 py-1 text-white bg-red-500 rounded",children:"Delete"}):""]})]},s.id))})]})]})})}export{g as default};
