(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6485:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}async function a(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let a=window.getSelection(),o=window.document.createRange();a.removeAllRanges(),o.selectNode(t),a.addRange(o);let i=!1;try{i=window.document.execCommand("copy")}finally{a.removeAllRanges(),window.document.body.removeChild(t)}if(!i)throw n()}async function o(e){try{await t(e)}catch(t){try{await a(e)}catch(e){throw e||t||n()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=o},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9779)}])},9779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(5893),o=t(7294),i=t(6467),s=t.n(i),c=t(6485),l=t.n(c);let r=e=>{let{text:n}=e,[t,i]=(0,o.useState)(!1),s=async()=>{try{await l()(n),i(!0)}catch(e){console.error("Failed to copy text to clipboard",e)}};return(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:s,children:t?"Copied!":"Copy to Clipboard"})})};function u(e){let{navigateToPage:n}=e,[t,i]=(0,o.useState)(0),[c,l]=(0,o.useState)(""),[u,p]=(0,o.useState)(""),[d,m]=(0,o.useState)(""),[g,h]=(0,o.useState)("HrMail"),[y,_]=(0,o.useState)(""),v=[{title:"Generate Hr Mail",type:"HrMail"},{title:"Generate Job Message",type:"JobMessage"},{title:"Generate Job Referal",type:"JobReferal"}],x=e=>{h(e.target.value),console.log(e.target.value)};function b(e,n){let{name:t,value:a}=e.target;n(e.target.value)}let f=async()=>{"HrMail"===g?_("\n    Subject: Application for ".concat(u||"MERN-Stack"," Developer Position - Vipul Jangid\n    \n    Dear Hiring Manager,\n    \n    I'm reaching out to express my interest in the ").concat(u||"MERN-Stack"," Developer role at ").concat(d,". With over a year of experience in React, Node.js, and MongoDB, I'm keen to contribute to your team's success.\n    \n    In my previous roles, I've built and deployed various web applications using the ").concat(u||"MERN-Stack",", focusing on responsive UIs and scalable backend solutions.\n    \n    I'm excited about the opportunity to bring my skills to ").concat(d," and am available for an interview at your convenience. Please find my resume attached.\n    \n    Thank you for considering my application.\n    \n    Best regards,\n    Vipul Jangid\n    vipulsuthar011@gmail.com")):"JobMessage"===g?_("Dear ".concat(c,",\n\n    I hope you're doing well.\n    \n    I'm reaching out to inquire if there are any openings for ").concat(u," developers in your company. I'm eager to apply my skills and experience to a suitable role.\n    \n    Looking forward to your response.\n    \n    Best regards,\n    Vipul Jangid\n    vipulsuthar011@gmail.com")):"JobReferal"===g&&_("Excited to Explore Opportunities at ".concat(d||" your company","\n\n    Hi ").concat(c,",\n    \n    Hope you're doing well! I noticed your current role at ").concat(d," and I'm excited to explore opportunities there relevant to my background. \n    \n    I have experience in web development with Next.js, React.js, Node.js, and JavaScript. \n    \n    I believe my skills would enable me to contribute positively towards the company mission of product development and technical consulting. \n    \n    Are you currently accepting applicants? Thank you for your time.\n    \n    Sincerely,\n    \n    Vipul Jangid\n    vipulsuthar011@gmail.com\n      "))};return(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsxs)("main",{className:s().main,children:[(0,a.jsx)("h1",{className:s().title,children:"Choose Options:"}),(0,a.jsx)("p",{className:"mt-4 mb-2",children:"Chosse below Options for specific task:-"}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("input",{className:s().input,placeholder:"Name",name:"name",onChange:e=>b(e,l)}),(0,a.jsx)("input",{className:s().input,placeholder:"Position",name:"position",onChange:e=>b(e,p)}),(0,a.jsx)("input",{className:s().input,placeholder:"Company",name:"company`",onChange:e=>b(e,m)})]}),(0,a.jsx)("select",{className:s().select,onChange:x,children:null==v?void 0:v.map((e,n)=>(0,a.jsx)("option",{value:null==e?void 0:e.type,className:s().options,children:null==e?void 0:e.title},n))}),console.log(g),(0,a.jsx)("div",{className:s().submitBtn,onClick:f,children:"Submit"})]}),(0,a.jsxs)("div",{className:"text-left",children:["    ",(0,a.jsx)(r,{text:y})]}),(0,a.jsx)("textarea",{className:s().output,rows:8,value:y})]})}function p(){let[e,n]=(0,o.useState)("index"),t=e=>{n(e)};return(0,a.jsx)(a.Fragment,{children:"index"===e&&(0,a.jsx)(u,{navigateToPage:t})})}},6467:function(e){e.exports={container:"Pages_container__SbWhT",main:"Pages_main__5_Vsf",title:"Pages_title__5_zk8",description:"Pages_description__Vsj9E",code:"Pages_code__vzNOX",input:"Pages_input__ERy13",options:"Pages_options__nzZbc",select:"Pages_select__Ei_Z_",output:"Pages_output__LYcm7",submitBtn:"Pages_submitBtn__WO1Oa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);