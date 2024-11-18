import{W as g,r as c,b as u,j as e}from"./app-bBQMqR6O.js";import{N as _}from"./notyf.min-DLu_xjpT.js";import{A as f}from"./AdminLayout-BHjzgd9T.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const m=new _,P=({service_centers:x,distribter:i,callAlloc:n})=>{function b(t){const l=new Date(t);return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`}const{data:a,setData:d,post:p,processing:o,errors:r}=g({call_no:n.call_no,serial_no:n.serial_no,customer_name:n.customer_name,address:n.address,phone:n.phone,phone_two:n.phone_two,service_partner:n.service_partner,pin:n.pin,distributer_name1:n.distributer,source_material:n.source_material,model:n.model,purchase:b(n.purchase),reason:n.reason,service_partner_address:"",service_partner_pin:"",service_partner_contact1:"",service_partner_contact2:"",service_partner_pan:"",distributer_name:"",distributer_address:"",distributer_pin:"",distributer_contact1:"",distributer_contact2:"",distributer_pan:""}),s=t=>{d(t.target.name,t.target.value)};c.useEffect(()=>{a.service_partner&&u.get(`/Get-Service/${a.service_partner}`).then(t=>{d(l=>({...l,service_partner_address:t.data.address,service_partner_pin:t.data.pin,service_partner_contact2:t.data.con1,service_partner_contact1:t.data.con2,service_partner_pan:t.data.pan}))}).catch(t=>{console.error("Failed to fetch service partner details",t)})},[a.service_partner]),c.useEffect(()=>{a.distributer_name1&&u.get(`/Get-Distributer/${a.distributer_name1}`).then(t=>{d(l=>({...l,distributer_name:t.data.name,distributer_address:t.data.address,distributer_pin:t.data.pin,distributer_contact1:t.data.con1,distributer_contact2:t.data.con2,distributer_pan:t.data.pan}))}).catch(t=>{console.error("Failed to fetch distributor details",t)})},[a.distributer_name1]);const h=t=>{t.preventDefault(),p("/Call-Allocation",{onSuccess:()=>{m.success("Call Allocation added successfully!")},onError:()=>{m.error("Failed to add call allocation. Please check your inputs.")}})};return e.jsx(f,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Call Allocation"}),e.jsxs("form",{onSubmit:h,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Serial No"}),e.jsx("input",{type:"text",name:"serial_no",readOnly:!0,value:a.serial_no,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter serial no"}),r.name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Call No"}),e.jsx("input",{type:"text",name:"call_no",readOnly:!0,value:a.call_no,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter call no"}),r.name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Customer Name"}),e.jsx("input",{type:"text",name:"customer_name",value:a.customer_name,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Customer Name"}),r.customer_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.customer_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Customer Address"}),e.jsx("input",{type:"text",name:"address",value:a.address,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Customer Address"}),r.address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Customer Pincode"}),e.jsx("input",{type:"text",name:"pin",value:a.pin,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Pincode"}),r.pin&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.pin})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Phone Number 1"}),e.jsx("input",{type:"text",name:"phone",value:a.phone,onChange:t=>{const{value:l}=t.target;(l===""||/^\d{0,10}$/.test(l))&&s(t)},className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Phone Number",maxLength:10}),r.phone&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.phone})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Phone Number 2"}),e.jsx("input",{type:"text",name:"phone_two",value:a.phone_two,onChange:t=>{const{value:l}=t.target;(l===""||/^\d{0,10}$/.test(l))&&s(t)},className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Phone Number",maxLength:10}),r.phone_two&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.phone_two})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner"}),e.jsxs("select",{name:"service_partner",value:a.service_partner,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"---Select----"}),x.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),r.service_partner&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner Address"}),e.jsx("input",{type:"text",name:"service_partner_address",value:a.service_partner_address,onChange:s,readOnly:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Service Partner Address"}),r.service_partner_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner_address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner Pin"}),e.jsx("input",{type:"text",readOnly:!0,name:"service_partner_pin",value:a.service_partner_pin,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Service Partner Pin"}),r.service_partner_pin&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner_pin})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner Contact No 1"}),e.jsx("input",{type:"text",name:"service_partner_contact1",value:a.service_partner_contact1,onChange:s,readOnly:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Service Partner Contact No 1"}),r.service_partner_contact1&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner_contact1})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner Contact No 2"}),e.jsx("input",{type:"text",readOnly:!0,name:"service_partner_contact2",value:a.service_partner_contact2,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Service Partner Conatct No 2"}),r.service_partner_contact2&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner_contact2})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner Pan No"}),e.jsx("input",{type:"text",readOnly:!0,name:"service_partner_pan",value:a.service_partner_pan,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Service Partner Pan No."}),r.service_partner_pan&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.service_partner_pan})]}),e.jsx("br",{}),e.jsx("label",{htmlFor:"",children:"Distributor Details"}),e.jsx("br",{}),e.jsx("hr",{}),e.jsx("hr",{}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"User Name"}),e.jsxs("select",{name:"distributer_name1",value:a.distributer_name1,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"---Select----"}),i.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),r.distributer_name1&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_name1})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"User Name"}),e.jsxs("select",{name:"distributer_name1",value:a.distributer_name1,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"---Select----"}),i.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),r.distributer_name1&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_name1})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Distributor Name"}),e.jsx("input",{type:"text",readOnly:!0,name:"distributer_name",value:a.distributer_name,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Distributor Name"}),r.distributer_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Distributor Address"}),e.jsx("input",{type:"text",readOnly:!0,name:"distributer_address",value:a.distributer_address,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Distributor Address"}),r.distributer_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Distributor Pin"}),e.jsx("input",{type:"text",readOnly:!0,name:"distributer_pin",value:a.distributer_pin,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Distributor  Pin"}),r.distributer_pin&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_pin})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Distributor Contatct No 1"}),e.jsx("input",{type:"text",readOnly:!0,name:"distributer_contact1",value:a.distributer_contact1,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Distributor  Conatact No 1"}),r.distributer_contact1&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_contact1})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Distributor Contatct No 2"}),e.jsx("input",{type:"text",readOnly:!0,name:"distributer_contact2",value:a.distributer_contact2,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Distributor Contact No 2"}),r.distributer_contact2&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_contact2})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Distributor Pan"}),e.jsx("input",{type:"text",readOnly:!0,name:"distributer_pan",value:a.distributer_pan,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Distributor Pan No"}),r.distributer_pan&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.distributer_pan})]}),e.jsx("br",{}),e.jsx("hr",{}),e.jsx("label",{htmlFor:"",children:"Product Details"})," ",e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Source Of Material"}),e.jsx("input",{type:"text",name:"source_material",value:a.source_material,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Source Of Material"}),r.source_material&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.source_material})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Model Number"}),e.jsx("input",{type:"text",name:"model",value:a.model,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Model Number"}),r.model&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.model})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Date Of Purchase"}),e.jsx("input",{type:"date",name:"purchase",value:a.purchase,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Date Of Purchase"}),r.purchase&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.purchase})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Reason"}),e.jsx("input",{type:"text",name:"reason",value:a.reason,onChange:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Reason"}),r.reason&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:r.reason})]}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:o,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:o?"Processing...":"Submit"})})]})]})})};export{P as default};