import{W as _,r as x,j as s}from"./app-CwTpoyqh.js";import{A as C}from"./AdminLayout-DQmQe51a.js";import"./Dropdown-C_Ing8xx.js";import"./index-DXOuEoXo.js";import"./index-CBtgs9-R.js";const O=({user:y,user_type:P,role:a,permissions:c,notif:k})=>{console.log("Role:",a),console.log("Permissions:",c);const{data:i,setData:p,post:h,errors:m}=_({role_name:a?a.name:"",permissions:a?a.permissions.map(e=>e.id):[]}),[f,j]=x.useState({});x.useEffect(()=>{c&&g(c)},[c]);const g=e=>{if(e&&e.length>0){const r=e.reduce((n,l)=>{const d=l.name.split("_"),u=d[0],o=d.slice(1).join("_");return n[o]||(n[o]=[]),n[o].push({id:l.id,action:u}),n},{}),t=Object.keys(r).reduce((n,l)=>(n[l]=r[l].sort((d,u)=>{const o=["view","create","edit","delete"];return o.indexOf(d.action)-o.indexOf(u.action)}),n),{});console.log("Sorted Grouped Permissions:",t),j(t)}},v=e=>{p("permissions",i.permissions.includes(e)?i.permissions.filter(r=>r!==e):[...i.permissions,e])},b=e=>{p(e.target.name,e.target.value)},N=e=>{e.preventDefault(),h(`/roles-permission-update/${a.id}`,{onSuccess:()=>{console.log("Role updated successfully!")},onError:()=>{console.log("Error updating role.")}})};return!a||!c?s.jsx("div",{children:"Loading..."}):s.jsx(C,{children:s.jsxs("form",{onSubmit:N,className:"px-[9rem]",children:[s.jsx("div",{className:"form mt-9",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"role_name",children:"Role Name"}),s.jsx("input",{type:"text",name:"role_name",value:i.role_name,onChange:b,className:`form-control ${m.role_name?"is-invalid":" w-full"}`,required:!0}),m.role_name&&s.jsx("div",{className:"invalid-feedback",children:m.role_name})]})}),s.jsx("div",{className:"form-group",children:Object.entries(f).map(([e,r])=>s.jsxs("div",{className:"flex space-x-2",children:[s.jsx("h3",{className:"w-[7rem]",children:e.charAt(0).toUpperCase()+e.slice(1)}),s.jsx("div",{style:{marginLeft:"20px"},className:"flex space-x-[4rem]",children:r.map(t=>s.jsxs("div",{className:"space-x-2",children:[s.jsx("input",{type:"checkbox",name:"permissions[]",value:t.id,checked:i.permissions.includes(t.id),onChange:()=>v(t.id)}),s.jsx("label",{children:t.action.charAt(0).toUpperCase()+t.action.slice(1)})]},t.id))})]},e))}),s.jsx("button",{type:"submit",className:"p-2 mt-4 text-white rounded btn bg-slate-900",children:"Update Role"})]})})};export{O as default};
