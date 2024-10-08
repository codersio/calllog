import{r,b as I,j as t}from"./app-DFTNfJ2u.js";import{H as R,N as H,h as M,i as W}from"./Nav-CWswFE9u.js";import{d as z}from"./index-B_-yfxRH.js";import{N as G}from"./notyf.min-DLu_xjpT.js";import{h as J,E as L}from"./html2canvas.esm-8SOmlUCe.js";import"./index-BjoqcNMp.js";new G;const V=({user:x,user_type:p,project:j,employee:h,usrrr:d,notif:g,tasks:N})=>{const u=r.useRef(null),_=()=>{const e=new Date;return e.setDate(1),e.toISOString().split("T")[0]},v=e=>{z.Inertia.get(route("report.export"),{timesheets:JSON.stringify(e)})},k=()=>{const e=u.current;e&&J(e,{scale:2}).then(c=>{const O=c.toDataURL("image/png"),m=new L("p","mm","a4"),f=m.internal.pageSize.getWidth(),P=c.height*f/c.width;m.addImage(O,"PNG",0,0,f,P),m.save("timesheet.pdf")})},y=_(),S=new Date().toISOString().split("T")[0],[a,D]=r.useState(y),[l,E]=r.useState(S),[b,C]=r.useState([]),[s,T]=r.useState(""),[n,w]=r.useState(""),[o,F]=r.useState("");r.useEffect(()=>{a&&l&&i()},[a,l,s,n,o]);const i=()=>{I.get("/reports",{params:{startDate:a,endDate:l,projectTitle:s||void 0,employeeName:n||void 0,taskName:o||void 0}}).then(e=>{C(e.data)}).catch(e=>console.error("Error fetching timesheets:",e))};return r.useEffect(()=>{a&&l&&s&&i()},[s]),r.useEffect(()=>{a&&l&&s&&n&&i()},[n]),r.useEffect(()=>{a&&l&&s&&n&&o&&i()},[o]),t.jsxs("div",{className:"w-[83%] absolute right-0 ",children:[t.jsx(R,{user:x,notif:g}),t.jsx(H,{user_type:p,usrrr:d}),t.jsxs("div",{className:"flex py-5 space-x-2",children:[t.jsx("input",{type:"date",value:a,onChange:e=>D(e.target.value)}),t.jsx("input",{type:"date",value:l,onChange:e=>E(e.target.value)}),d===1&&t.jsxs(t.Fragment,{children:[t.jsxs("select",{value:s,onChange:e=>T(e.target.value),children:[t.jsx("option",{value:"",children:"Select project"}),j.map(e=>t.jsx("option",{value:e.title,children:e.title},e.title))]}),t.jsxs("select",{value:n,onChange:e=>w(e.target.value),children:[t.jsx("option",{value:"",children:"Select Employee"}),h.map(e=>t.jsx("option",{value:e.name,children:e.name},e.name))]}),t.jsxs("select",{value:o,onChange:e=>F(e.target.value),children:[t.jsx("option",{value:"",children:"Select Teask"}),N.map(e=>t.jsx("option",{value:e.task_name,children:e.task_name},e.task_name))]})]}),t.jsxs("div",{className:"flex justify-end w-full pr-8",children:[t.jsx("button",{type:"button",onClick:()=>v(b),className:"text-green-900 text-[1.5rem]",children:t.jsx(M,{})}),t.jsx("button",{onClick:k,className:" text-red-600 rounded text-[1.5rem]",children:t.jsx(W,{})})]})]}),t.jsxs("table",{ref:u,className:"w-[100%] absolute right-8 overflow-hidden px-5",children:[t.jsx("thead",{className:"w-full px-8",children:t.jsxs("tr",{className:"border p-2 text-left bg-[#465584] text-white",children:[d===1&&t.jsx("th",{className:"p-2 text-left border",children:"Employee Name"}),t.jsx("th",{className:"p-2 text-left border",children:"Project Title"}),t.jsx("th",{className:"p-2 text-left border",children:"Task Name"}),t.jsx("th",{className:"p-2 text-left border",children:"Date"}),t.jsx("th",{className:"p-2 text-left border",children:"Time Spent(hours)"}),t.jsx("th",{className:"p-2 text-left border",children:"Description"})]})}),t.jsx("tbody",{children:b.map((e,c)=>t.jsxs("tr",{children:[d===1&&t.jsx("td",{style:{color:e.time_number>8?"green":e.time_number<0?"red":"black",backgroundColor:e.time_number>8?"#e0f7e0":(e.time_number<0,"#f7e0e0")},className:"p-2 text-left border border-blue-400",children:e.name}),t.jsx("td",{style:{color:e.time_number>8?"green":e.time_number<0?"red":"black",backgroundColor:e.time_number>8?"#e0f7e0":(e.time_number<0,"#f7e0e0")},className:"p-2 text-left border border-blue-400",children:e.title}),t.jsx("td",{style:{color:e.time_number>8?"green":e.time_number<0?"red":"black",backgroundColor:e.time_number>8?"#e0f7e0":(e.time_number<0,"#f7e0e0")},className:"p-2 text-left border border-blue-400",children:e.task_name}),t.jsx("td",{style:{color:e.time_number>8?"green":e.time_number<0?"red":"black",backgroundColor:e.time_number>8?"#e0f7e0":(e.time_number<0,"#f7e0e0")},className:"p-2 text-left border border-blue-400",children:e.date}),t.jsx("td",{style:{color:e.time_number>8?"green":e.time_number<0?"red":"black",backgroundColor:e.time_number>8?"#e0f7e0":(e.time_number<0,"#f7e0e0")},className:"p-2 text-left border border-blue-400",children:e.time_number}),t.jsx("td",{style:{color:e.time_number>8?"green":e.time_number<0?"red":"black",backgroundColor:e.time_number>8?"#e0f7e0":(e.time_number<0,"#f7e0e0")},className:"p-2 text-left border border-blue-400",children:e.description})]},c))})]})]})};export{V as default};
