import{W as Q,R as y,r as j,b as m,j as e}from"./app-bBQMqR6O.js";import{N as q}from"./notyf.min-DLu_xjpT.js";import{A as $}from"./AdminLayout-BHjzgd9T.js";import{R as B}from"./quill.snow-BBNGSvd_.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const _=new q,U=({customer_dets:f,qt:n,qt_acc:x,qt_his:p})=>{new Date().toISOString().split("T")[0];const{data:r,setData:d,put:N,processing:u,errors:o}=Q({quotation_no:n.quotation_no,quotation_date:n.quotation_date,customer_name:"",customer_details:n.customer_id,mobile_no:"",email:"",status:n.status,Billing_address:n.address,message:n.message,product_details:p||[{product_id:"",p_qty:"",price:"",amount:""}],tax_details:x||[{tax_id:"",tax_value:"",tax_name:""}]}),[b,v]=y.useState(p||[]),[h,w]=y.useState(x||[]),C={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{align:[]}],["link","image"],["clean"]]},P=a=>{d("message",a)},c=a=>{d(a.target.name,a.target.value)};j.useEffect(()=>{const a=async()=>{try{const t=await m.get("/getproduct");v(t.data)}catch(t){console.error("Failed to fetch products",t)}},s=async()=>{try{const t=await m.get("/gettaxoptions");w(t.data)}catch(t){console.error("Failed to fetch tax options",t)}};a(),s()},[]);const A=()=>{d("product_details",[...r.product_details,{product_id:"",p_qty:"",price:"",amount:""}])},S=()=>{d("tax_details",[...r.tax_details,{tax_id:"",tax_value:""}])},k=(a,s)=>{const t=b.find(i=>i.product_id===parseInt(s)),l=[...r.product_details];l[a]={...l[a],product_id:s,price:t?t.price:0,amount:t?t.price*l[a].p_qty:0},d("product_details",l)},E=(a,s)=>{const t=[...r.product_details];t[a].p_qty=s,t[a].amount=t[a].price*s,d("product_details",t)},g=(a,s)=>{const t=h.find(i=>i.id===parseInt(s)),l=[...r.tax_details];l[a]={...l[a],tax_id:s,tax_name:t.name,tax_value:t?t.percent:0},d("tax_details",l)};new Date().toISOString().split("T")[0];const O=a=>{const s=r.product_details.filter((t,l)=>l!==a);d("product_details",s)},T=a=>{const s=r.tax_details.filter((t,l)=>l!==a);d("tax_details",s)},D=a=>{a.preventDefault(),N(`/Quotation/${n.quotation_id}`,{onSuccess:()=>_.success("Quotation updated successfully!"),onError:s=>{_.error("Failed to updated Quotation. Please check your inputs.")}})};return j.useEffect(()=>{r.customer_details&&m.get(`/Get-Customer/${r.customer_details}`).then(a=>{const s=a.data,t=typeof s.address=="string"&&s.address.trim()!==""?(()=>{try{const l=JSON.parse(s.address);return Array.isArray(l)?l.map(i=>i.address).join(", "):"Invalid Address Format"}catch{return"Invalid Address Format"}})():Array.isArray(s.address)?s.address.map(l=>l.address).join(", "):"No Address";d(l=>({...l,customer_name:`${s.first_name} ${s.last_name}`,Billing_address:t,mobile_no:s.mobile_no,email:s.email}))}).catch(a=>console.error("Failed to fetch service partner details",a))},[r.customer_details]),e.jsx($,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Edit Quotation"}),e.jsxs("form",{onSubmit:D,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation No"}),e.jsx("input",{type:"text",name:"quotation_no",readOnly:!0,value:r.quotation_no,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),o.quotation_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.quotation_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Quotation Date"}),e.jsx("input",{type:"date",name:"quotation_date",value:r.quotation_date,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Client Id"}),o.quotation_date&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.quotation_date})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Service Partner"}),e.jsxs("select",{name:"customer_details",value:r.customer_details,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"---Select----"}),f.map(a=>e.jsx("option",{value:a.user_id,children:a.first_name+" "+a.last_name},a.user_id))]}),o.customer_details&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.customer_details})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Mobile No"}),e.jsx("input",{type:"text",name:"mobile_no",value:r.mobile_no,readOnly:!0,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),o.mobile_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.mobile_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",readOnly:!0,value:r.email,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),o.email&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Status"}),e.jsxs("select",{name:"status",value:r.status,onChange:c,className:"w-full border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"1",children:"Open"}),e.jsx("option",{value:"0",children:"Close"}),e.jsx("option",{value:"2",children:"Pending"})]}),o.Billing_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.Billing_address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Billing Address"}),e.jsx("textarea",{type:"text",name:"Billing_address",readOnly:!0,value:r.Billing_address,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Mobile No"}),o.Billing_address&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.Billing_address})]}),e.jsxs("div",{className:"col-span-1 md:col-span-2",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Message"}),e.jsx(B,{value:r.message,onChange:P,modules:C,theme:"snow",placeholder:"Enter message here..."}),o.message&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:o.message})]}),e.jsx("h2",{className:"mb-1 text-2xl font-bold text-gray-600 md:col-span-2",children:"Product Details"}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"button",onClick:A,className:"px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:u?"Processing...":"Add New Product"})}),e.jsx("div",{className:"overflow-x-auto w-full col-span-1 md:col-span-2",children:e.jsxs("table",{className:"table-auto w-full border-collapse border border-gray-300",id:"tab_product_detail",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Product"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Quantity"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Price"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Amount"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Action"})]})}),e.jsx("tbody",{children:r.product_details.map((a,s)=>e.jsxs("tr",{id:`row_id_${s}`,children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsxs("select",{name:`product_id[${s}]`,value:a.product_id,onChange:t=>k(s,t.target.value),className:"w-full border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select Product"}),b.map(t=>e.jsxs("option",{value:t.product_id,children:[t.item_name," - ",t.price]},t.product_id))]})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx("input",{type:"number",name:`p_qty[${s}]`,value:a.p_qty,onChange:t=>E(s,t.target.value),className:"w-full border border-gray-300 rounded-lg",placeholder:"Enter Quantity"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx("input",{type:"text",value:a.price,readOnly:!0,className:"w-full border border-gray-300 rounded-lg"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx("input",{type:"text",value:a.amount,readOnly:!0,className:"w-full border border-gray-300 rounded-lg"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsxs("span",{className:"text-red-600 cursor-pointer",onClick:()=>O(s),children:[e.jsx("i",{className:"fa fa-trash"})," Delete"]})})]},s))})]})}),e.jsx("h2",{className:"mb-1 text-2xl font-bold text-gray-600 md:col-span-2",children:"Tax Details"}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"button",onClick:S,className:"px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:"Add New Tax"})}),e.jsx("div",{className:"overflow-x-auto w-full col-span-1 md:col-span-2",children:e.jsxs("table",{className:"table-auto w-full border-collapse border border-gray-300",id:"tab_tax_detail",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Tax"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Value (%)"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Action"})]})}),e.jsx("tbody",{children:r.tax_details.map((a,s)=>e.jsxs("tr",{id:`tax_row_id_${s}`,children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsxs("select",{name:`tax_id[${s}]`,value:a.tax_id,onChange:t=>g(s,t.target.value,a.tax_value),className:"w-full border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select Tax"}),h.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx("input",{type:"number",name:`tax_value[${s}]`,value:a.tax_value,onChange:t=>g(s,a.tax_id,t.target.value),className:"w-full border border-gray-300 rounded-lg",placeholder:"Enter Tax Value"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsxs("span",{className:"text-red-600 cursor-pointer",onClick:()=>T(s),children:[e.jsx("i",{className:"fa fa-trash"})," Delete"]})})]},s))})]})}),e.jsx("div",{className:"col-span-1 md:col-span-2",children:e.jsx("button",{type:"submit",disabled:u,className:"px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50",children:u?"Processing...":"Update Quotation"})})]})]})})};export{U as default};
