import{W as v,r as u,j as e}from"./app-bBQMqR6O.js";import{N as _}from"./notyf.min-DLu_xjpT.js";import{A as C}from"./AdminLayout-BHjzgd9T.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const p=new _,I=({client:s})=>{const{data:r,setData:m,put:g,processing:b,errors:l,reset:h}=v({client_id:(s==null?void 0:s.client_id)||"",first_name:(s==null?void 0:s.first_name)||"",middle_name:(s==null?void 0:s.middle_name)||"",last_name:(s==null?void 0:s.last_name)||"",gender:(s==null?void 0:s.gender)||"male",dob:(s==null?void 0:s.dob)||"",phone:(s==null?void 0:s.phone)||"",mobile_no:(s==null?void 0:s.mobile_no)||"",addresses:(s==null?void 0:s.address)||"",city:(s==null?void 0:s.city)||"",state:(s==null?void 0:s.state)||"",pin:(s==null?void 0:s.pincode)||"",alt_mobile:(s==null?void 0:s.alt_mobile)||"",image:(s==null?void 0:s.image)||"",email:(s==null?void 0:s.email)||"",password:""}),[c,n]=u.useState(""),[a,f]=u.useState({});u.useEffect(()=>{s!=null&&s.image?n(s.image):n("")},[s]);const y=d=>{const o=d.target.files[0];o&&(m("image",o),n(URL.createObjectURL(o)))},t=d=>{m(d.target.name,d.target.value)},x=d=>{m("gender",d.target.value)},j=()=>{const d={};return["first_name","last_name","addresses","city","state","pin","mobile_no","email","dob","gender"].forEach(i=>{r[i]||(d[i]=`${i.replace("_"," ")} is required.`)}),f(d),Object.keys(d).length===0},N=d=>{d.preventDefault(),j()&&g(`/Employee/${s.user_id}`,{onSuccess:()=>{p.success("Employee updated successfully!"),h()},onError:()=>{p.error("Failed to update Employee. Please check your inputs.")}})};return e.jsx(C,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsxs("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:[s?"Update":"Add"," Employee"]}),e.jsxs("form",{onSubmit:N,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Client Id"}),e.jsx("input",{type:"text",name:"client_id",readOnly:!0,value:r.client_id,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),l.client_id&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.client_id})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"First Name"}),e.jsx("input",{type:"text",name:"first_name",value:r.first_name,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter First Name"}),a.first_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.first_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Middle Name"}),e.jsx("input",{type:"text",name:"middle_name",value:r.middle_name,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Middle Name"}),l.middle_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.middle_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Last Name"}),e.jsx("input",{type:"text",name:"last_name",value:r.last_name,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Last Name"}),a.last_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.last_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Gender"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"male",checked:r.gender==="male",onChange:x,className:"mr-2"}),"Male"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"female",checked:r.gender==="female",onChange:x,className:"mr-2"}),"Female"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"other",checked:r.gender==="other",onChange:x,className:"mr-2"}),"Other"]})]}),a.gender&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.gender})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Date of Birth"}),e.jsx("input",{type:"date",name:"dob",value:r.dob,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"}),a.dob&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.dob})]}),e.jsx("h2",{className:"mb-1 text-2xl font-bold text-gray-600 md:col-span-2",children:"Address Information"}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Address"}),e.jsx("input",{type:"text",name:"addresses",value:r.addresses,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Address"}),a.addresses&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.addresses})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"City"}),e.jsx("input",{type:"text",name:"city",value:r.city,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter City"}),a.city&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.city})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"State"}),e.jsx("input",{type:"text",name:"state",value:r.state,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter State"}),a.state&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.state})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Pin Code"}),e.jsx("input",{type:"text",name:"pin",value:r.pin,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Pin Code"}),a.pin&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.pin})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Mobile Number"}),e.jsx("input",{type:"text",name:"mobile_no",value:r.mobile_no,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile Number"}),a.mobile_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.mobile_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Alternative Mobile Number"}),e.jsx("input",{type:"text",name:"alt_mobile",value:r.alt_mobile,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Alternative Mobile Number"}),a.alt_mobile&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:a.alt_mobile})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Profile Image"}),e.jsx("input",{type:"file",name:"image",accept:"image/*",onChange:y,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"}),l.image&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:l.image}),c&&e.jsx("img",{src:c,alt:"Profile Preview",className:"mb-2 w-24 h-24 object-cover rounded-full"})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:b,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:b?"Processing...":s?"Update Client":"Add Client"})})]})]})})};export{I as default};