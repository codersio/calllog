import{r as s,j as e,b as I}from"./app-DFTNfJ2u.js";import{H as R,N as $,c as Q,d as C,e as z}from"./Nav-CWswFE9u.js";import{u as B}from"./index-B8Eyb5Ah.js";import{R as S}from"./index--930hQoJ.js";import"./index-BjoqcNMp.js";import"./index-B_-yfxRH.js";const X=({holiday:H,user:D,user_type:l,notif:E})=>{const[i,h]=s.useState(!1),[j,p]=s.useState(!1),[f,b]=s.useState(null),[y,M]=s.useState(""),[o,k]=s.useState(1),c=5,{data:d,setData:N,post:g,errors:a,reset:w}=B({name:"",start_date:"",end_date:""}),A=(t,r)=>{t.preventDefault(),confirm("Are you sure you want to delete this holiday?")&&I.get(`/holi-delete/${r}`).then(n=>{console.log(n),alert("Holiday deleted successfully"),window.location.reload()}).catch(n=>{console.log(n)})},P=()=>{w(),h(!0)},F=t=>{N({name:t.name,start_date:t.start_date,end_date:t.end_date}),b(t),p(!0)},m=()=>{h(!1),p(!1),b(null),w()},x=t=>{N(t.target.name,t.target.value)},L=t=>{t.preventDefault(),i?g("/holi-store",d).then(()=>m()):j&&f&&g(`/holi-update/${f.id}`,d).then(()=>m())},[u,O]=s.useState([]);s.useEffect(()=>{Array.isArray(l)?O(l):console.error("Expected user_type to be an array:",l)},[l]);const v=H.filter(t=>t.name.toLowerCase().includes(y.toLowerCase())),q=Math.ceil(v.length/c),_=v.slice((o-1)*c,o*c);return e.jsxs("div",{className:"w-[85.2%] ml-[12rem]",children:[e.jsx(R,{user:D,notif:E}),e.jsx($,{user_type:l}),e.jsx("div",{className:"flex items-center justify-between px-[12rem]",children:u.includes("create_holiday")?e.jsx("button",{onClick:P,className:"p-2 text-black underline rounded-md ",children:"Add New"}):e.jsx("button",{className:"p-2 text-white bg-blue-600 rounded-md",disabled:!0,children:e.jsx(Q,{})})}),e.jsxs("div",{className:"p-3 px-[12rem] table-section",children:[e.jsx("div",{className:"flex justify-between mb-4",children:e.jsx("input",{type:"text",placeholder:"Search Holiday...",className:"p-2 border rounded-md",value:y,onChange:t=>M(t.target.value)})}),e.jsxs("table",{className:"table w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"p-3",children:[e.jsx("th",{className:"p-3 text-left border",children:"Holiday Name"}),e.jsx("th",{className:"p-3 text-left border",children:"Start Date"}),e.jsx("th",{className:"p-3 text-left border",children:"End Date"}),e.jsx("th",{className:"p-3 text-left border",children:"Action"})]})}),e.jsx("tbody",{children:_.length>0?_.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 border",children:t.name}),e.jsx("td",{className:"p-3 border",children:t.start_date}),e.jsx("td",{className:"p-3 text-left border",children:t.end_date}),e.jsxs("td",{className:"p-3 text-left border",children:[u.includes("edit_holiday")?e.jsx("button",{onClick:()=>F(t),children:e.jsx(C,{})}):e.jsx("button",{disabled:!0,children:e.jsx(C,{})}),u.includes("delete_holiday")?e.jsx("button",{onClick:n=>A(n,t.id),children:e.jsx(S,{})}):e.jsx("button",{disabled:!0,children:e.jsx(S,{})})]})]},r)):e.jsx("tr",{children:e.jsx("td",{colSpan:"4",className:"py-4 text-center",children:"No holidays found"})})})]}),e.jsx("div",{className:"flex justify-between mt-4",children:e.jsx("div",{className:"flex items-center space-x-2",children:Array.from({length:q},(t,r)=>r+1).map(t=>e.jsx("button",{onClick:()=>k(t),className:`px-4 py-2 rounded ${o===t?"bg-blue-500 text-white":"bg-gray-200"}`,children:t},t))})})]}),(i||j)&&e.jsx("div",{className:"fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-20",children:e.jsxs("div",{className:"p-10 w-full max-w-[500px] bg-white rounded-md shadow-md relative",children:[e.jsx("div",{className:"flex justify-end absolute top-0 right-[2rem]",children:e.jsx("button",{onClick:m,className:" p-2 rounded-md text-black w-[20%]",children:e.jsx(z,{})})}),e.jsxs("form",{onSubmit:L,className:"grid",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"type_name",children:"Holiday Name"}),e.jsx("input",{id:"type_name",className:"w-full rounded-lg",name:"name",type:"text",value:d.name,onChange:x,required:!0}),a.type_name&&e.jsx("div",{children:a.type_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"type_name",children:"Start Date"}),e.jsx("input",{id:"type_name",className:"w-full rounded-lg",name:"start_date",type:"date",value:d.start_date,onChange:x,required:!0}),a.type_name&&e.jsx("div",{children:a.type_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"days",children:"End Date"}),e.jsx("input",{className:"w-full rounded-lg",name:"end_date",type:"date",value:d.end_date,onChange:x,required:!0}),a.days&&e.jsx("div",{children:a.days})]}),e.jsx("div",{className:"flex justify-center p-3",children:e.jsx("button",{className:"p-2 bg-blue-500 rounded-md text-white w-[60%] mt-[2rem]",type:"submit",children:i?"Add Holiday":"Update Holiday"})})]})]})})]})};export{X as default};
