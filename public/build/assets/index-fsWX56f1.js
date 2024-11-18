import{q as A,r as s,W as _,j as e,a as d}from"./app-bBQMqR6O.js";import{C as S}from"./index-Bdzr3ZA9.js";import{R as C}from"./index-DrwY1Ojx.js";import{N as D}from"./notyf.min-DLu_xjpT.js";import{A as L}from"./AdminLayout-BHjzgd9T.js";import{a as E}from"./index-Qvw_WbM9.js";import"./index-CYmrYT0Q.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";const j=new D,I=({data:l})=>{const{props:r}=A(),[c,b]=s.useState([]);s.useEffect(()=>{Array.isArray(r.auth.permissions)&&b(r.auth.permissions)},[r]);const[i,f]=s.useState(""),[n,$]=s.useState(l),[h,u]=s.useState(1),[o]=s.useState(10);s.useEffect(()=>{},[i,l]);const N=t=>{f(t.target.value),u(1)},{delete:g}=_(),y=(t,a)=>{t.preventDefault(),confirm("Are you sure you want to delete this record?")&&g(`/Product-List/${a}`,{onSuccess:()=>{j.success("Client deleted successfully!")},onError:()=>{j.error("Failed to delete data.")}})},x=h*o,m=x-o,p=n.slice(m,x),w=Math.ceil(n.length/o),P=Array.from({length:w},(t,a)=>a+1);return e.jsx(L,{children:e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("input",{type:"text",value:i,onChange:N,placeholder:"Search data...",className:"w-[60%] p-2 border border-gray-300 rounded-md"}),r.auth.user.roles[0].name==="admin"||c.includes("add_product")?e.jsx(d,{href:"Product-List/create",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Add Product"}):"",e.jsx(d,{href:"archiveproduct",className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",children:"Archive Product"})]}),e.jsxs("table",{className:"w-full border border-collapse table-auto",children:[e.jsx("thead",{className:"text-white bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left border",children:"SL No"}),e.jsx("th",{className:"p-3 text-left border",children:"Image"}),e.jsx("th",{className:"p-3 text-left border",children:"Product Code"}),e.jsx("th",{className:"p-3 text-left border",children:"Product Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Model No "}),e.jsx("th",{className:"p-3 text-center border",children:"Price(Af)"}),e.jsx("th",{className:"p-3 text-left border",children:"Action"})]})}),e.jsx("tbody",{children:p.length>0?p.map((t,a)=>e.jsxs("tr",{className:"odd:bg-white even:bg-gray-100",children:[e.jsx("td",{className:"p-3 border",children:m+a+1}),e.jsx("td",{className:"p-3 border",children:e.jsx("img",{src:`${t.image}`,alt:`${t.image}'s photo`,style:{maxWidth:"100px",maxHeight:"100px"}})}),e.jsx("td",{className:"p-3 border",children:t.product_code}),e.jsx("td",{className:"p-3 border",children:t.item_name}),e.jsx("td",{className:"p-3 border",children:t.model_no}),e.jsx("td",{className:"p-3 border",children:t.price}),e.jsx("td",{className:"p-3 text-center border",children:e.jsxs("div",{className:"flex justify-center space-x-3",children:[r.auth.user.roles[0].name==="admin"||c.includes("edit_product")?e.jsx(d,{className:"p-2 text-white bg-green-500 rounded",href:`Product-List/${t.product_id}/edit`,children:e.jsx(S,{})}):"",e.jsx(d,{className:"p-2 text-white bg-green-500 rounded",href:`/Archive-Product/${t.product_id}`,children:e.jsx(E,{})}),r.auth.user.roles[0].name==="admin"||c.includes("delete_product")?e.jsx("button",{className:"p-2 text-white bg-red-500 rounded",onClick:v=>y(v,t.product_id),children:e.jsx(C,{})}):""]})})]},t.product_id)):e.jsxs("tr",{children:[e.jsx("td",{colSpan:"18",className:"p-3 text-center",children:"No data found"})," "]})})]}),e.jsx("div",{className:"flex justify-center mt-4",children:P.map(t=>e.jsx("button",{onClick:()=>u(t),className:`px-4 py-2 mx-1 rounded ${h===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})]})})};export{I as default};