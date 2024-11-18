import{W as X,r as o,j as e}from"./app-bBQMqR6O.js";import{N as L}from"./notyf.min-DLu_xjpT.js";import{A as $}from"./AdminLayout-BHjzgd9T.js";import{R as I}from"./quill.snow-BBNGSvd_.js";import"./Dropdown-BP-MPy4X.js";import"./index-BtE-ENE6.js";import"./index-CYmrYT0Q.js";const r=new L,Y=({prd:n})=>{console.log(n);const{data:d,setData:g,patch:T,processing:h,errors:s}=X({product_id:n.product_code,item_name:n.item_name,model_no:n.model_no,brand:n.brand_id,product_category:n.category_id,price:n.price,unit:n.unit_id,image:"",product_desc:n.specification}),[u,b]=o.useState([]),[x,y]=o.useState([]),[p,f]=o.useState([]),[C,P]=o.useState(!1),[_,U]=o.useState(!1),[v,F]=o.useState(!1),[j,S]=o.useState(""),[N,E]=o.useState(""),[w,k]=o.useState("");o.useEffect(()=>{const t=async()=>{try{const m=await(await fetch("/brands")).json();b(m)}catch{r.error("Failed to load brands")}},a=async()=>{try{const m=await(await fetch("/categories")).json();y(m)}catch{r.error("Failed to load categories")}},l=async()=>{try{const m=await(await fetch("/unit")).json();f(m)}catch{r.error("Failed to load units")}};t(),a(),l()},[]);const B=t=>{g("image",t.target.files[0])},c=t=>{g(t.target.name,t.target.value)},A=t=>{t.preventDefault(),T(`/Product-List/${n.product_id}`,{onSuccess:()=>{r.success("Product updated successfully!")},onError:()=>{r.error("Failed to update product. Please check your inputs.")}})},D=async()=>{if(j)try{const t=await fetch("/brands",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify({name:j})});if(t.ok){const a=await t.json();b([...u,a]),S(""),r.success("Brand added successfully")}else r.error("Failed to add brand")}catch{r.error("Error adding brand")}},M=async t=>{try{(await fetch(`/brands/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")}})).ok?(b(u.filter(l=>l.cat_id!==t)),r.success("Brand removed successfully")):r.error("Failed to delete brand")}catch{r.error("Error deleting brand")}},O=async()=>{if(N)try{const t=await fetch("/categories",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify({name:N})});if(t.ok){const a=await t.json();y([...x,a]),E(""),r.success("Category added successfully")}else r.error("Failed to add category")}catch{r.error("Error adding category")}},R=async t=>{try{(await fetch(`/categories/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")}})).ok?(y(x.filter(l=>l.cat_id!==t)),r.success("Category removed successfully")):r.error("Failed to delete category")}catch{r.error("Error deleting category")}},q=async()=>{if(w)try{const t=await fetch("/unit",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify({name:w})});if(t.ok){const a=await t.json();f([...p,a]),k(""),r.success("Unit added successfully")}else r.error("Failed to add unit")}catch{r.error("Error adding unit")}},K=async t=>{try{(await fetch(`/unit/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")}})).ok?(f(p.filter(l=>l.cat_id!==t)),r.success("Unit removed successfully")):r.error("Failed to delete unit")}catch{r.error("Error deleting unit")}};return e.jsx($,{children:e.jsxs("div",{className:"max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"mb-6 text-2xl font-bold text-gray-800",children:"Edit Product"}),e.jsx("h2",{className:"mb-1 text-2xl font-bold text-gray-600",children:"Product Information"}),e.jsxs("form",{onSubmit:A,className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Product ID"}),e.jsx("input",{type:"text",name:"product_id",readOnly:!0,value:d.product_id,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg",placeholder:"Enter Product Id"}),s.product_id&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.product_id})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Item Name"}),e.jsx("input",{type:"text",name:"item_name",value:d.item_name,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Item Name"}),s.item_name&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.item_name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Model Number"}),e.jsx("input",{type:"text",name:"model_no",value:d.model_no,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter Model Number"}),s.model_no&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.model_no})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Brand"}),e.jsxs("select",{name:"brand",value:d.brand,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select a brand"}),u.map(t=>e.jsx("option",{value:t.cat_id,children:t.title},t.cat_id))]}),s.brand&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.brand}),e.jsx("button",{type:"button",onClick:()=>P(!C),className:"mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg",children:"Manage Brands"}),C&&e.jsxs("div",{className:"mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"mb-2 font-bold",children:"Manage Brands"}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("input",{type:"text",value:j,onChange:t=>S(t.target.value),placeholder:"New Brand Name",className:"flex-grow px-2 py-1 border border-gray-300 rounded-lg"}),e.jsx("button",{type:"button",onClick:D,className:"ml-2 px-3 py-1 text-sm text-white bg-green-600 rounded-lg",children:"Add"})]}),e.jsx("ul",{children:u.map(t=>e.jsxs("li",{className:"flex items-center justify-between py-1",children:[e.jsx("span",{children:t.title}),e.jsx("button",{type:"button",onClick:()=>M(t.cat_id),className:"px-2 py-1 text-sm text-white bg-red-600 rounded-lg",children:"Delete"})]},t.cat_id))})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Product Category"}),e.jsxs("select",{name:"product_category",value:d.product_category,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select a Category"}),x.map(t=>e.jsx("option",{value:t.cat_id,children:t.title},t.cat_id))]}),e.jsx("button",{type:"button",onClick:()=>U(!_),className:"mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg",children:"Manage Categories"}),_&&e.jsxs("div",{className:"mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"mb-2 font-bold",children:"Manage Categories"}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("input",{type:"text",value:N,onChange:t=>E(t.target.value),placeholder:"New Category Name",className:"flex-grow px-2 py-1 border border-gray-300 rounded-lg"}),e.jsx("button",{type:"button",onClick:O,className:"ml-2 px-3 py-1 text-sm text-white bg-green-600 rounded-lg",children:"Add"})]}),e.jsx("ul",{children:x.map(t=>e.jsxs("li",{className:"flex items-center justify-between py-1",children:[e.jsx("span",{children:t.title}),e.jsx("button",{type:"button",onClick:()=>R(t.cat_id),className:"px-2 py-1 text-sm text-white bg-red-600 rounded-lg",children:"Delete"})]},t.cat_id))})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Price"}),e.jsx("input",{type:"number",name:"price",value:d.price,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg",placeholder:"Enter Price"}),s.price&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.price})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Unit"}),e.jsxs("select",{name:"unit",value:d.unit,onChange:c,className:"w-full px-4 py-2 border border-gray-300 rounded-lg",children:[e.jsx("option",{value:"",children:"Select a Unit"}),p.map(t=>e.jsx("option",{value:t.cat_id,children:t.title},t.cat_id))]}),e.jsx("button",{type:"button",onClick:()=>F(!v),className:"mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg",children:"Manage Units"}),v&&e.jsxs("div",{className:"mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"mb-2 font-bold",children:"Manage Units"}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("input",{type:"text",value:w,onChange:t=>k(t.target.value),placeholder:"New Unit Name",className:"flex-grow px-2 py-1 border border-gray-300 rounded-lg"}),e.jsx("button",{type:"button",onClick:q,className:"ml-2 px-3 py-1 text-sm text-white bg-green-600 rounded-lg",children:"Add"})]}),e.jsx("ul",{children:p.map(t=>e.jsxs("li",{className:"flex items-center justify-between py-1",children:[e.jsx("span",{children:t.title}),e.jsx("button",{type:"button",onClick:()=>K(t.cat_id),className:"px-2 py-1 text-sm text-white bg-red-600 rounded-lg",children:"Delete"})]},t.cat_id))})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Image"}),e.jsx("input",{type:"file",name:"image",onChange:B,className:"w-full border border-gray-300 rounded-lg"}),s.image&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.image})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Product Description"}),e.jsx(I,{theme:"snow",value:d.product_desc,onChange:t=>g("product_desc",t),placeholder:"Enter Product Description"}),s.product_desc&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:s.product_desc})]}),e.jsx("div",{className:"md:col-span-2",children:e.jsx("button",{type:"submit",className:`w-full px-4 py-2 text-white rounded-lg ${h?"bg-gray-400":"bg-blue-600"}`,disabled:h,children:h?"Processing...":"Update Product"})})]})]})})};export{Y as default};