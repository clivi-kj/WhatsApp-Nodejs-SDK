"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),f=o,y=l["".concat(p,".").concat(f)]||l[f]||d[f]||s;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={id:"project_setup",title:"Project setup"},a="Set up your Node.js Project",i={unversionedId:"project_setup",id:"project_setup",title:"Project setup",description:"Learn the basics for setting up the WhatsApp Business Platform SDK for your Node.js project and important details about the SDK.",source:"@site/docs/project_setup.md",sourceDirName:".",slug:"/project_setup",permalink:"/project_setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/project_setup.md",tags:[],version:"current",frontMatter:{id:"project_setup",title:"Project setup"},sidebar:"mainSidebar",previous:{title:"Receiving Messages",permalink:"/receiving_messages"},next:{title:"this",permalink:"/api-reference/whatsapp/this"}},p={},c=[{value:"Start a new project",id:"start-a-new-project",level:2},{value:"Installation",id:"installation",level:3}],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-your-nodejs-project"},"Set up your Node.js Project"),(0,o.kt)("p",null,"Learn the basics for setting up the WhatsApp Business Platform SDK for your Node.js project and important details about the SDK."),(0,o.kt)("h2",{id:"start-a-new-project"},"Start a new project"),(0,o.kt)("p",null,"If you new to using the WhatsApp Business Platform Node.js SDK, first follow the provided ",(0,o.kt)("a",{parentName:"p",href:"/"},"quickstart")," for steps to send your first message and perform basic project setup and configuration."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can quickly install the Square Node.js SDK as follows:"),(0,o.kt)("p",null,"Copy\nnpm install square\nImportant\nThis SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications."),(0,o.kt)("p",null,"TypeScript support\nTypeScript is a superset of JavaScript, offering static typing and other features to identify potential bugs in your code. TypeScript programs compile to JavaScript, which can then be executed by Node.js. For more information, see Node.js with TypeScript."),(0,o.kt)("p",null,"The Square Node.js SDK fully supports TypeScript and provides TypeScript declaration files for Square APIs. These files help you type-check Square SDK usage in your code, while also providing hints and code completion for IDEs that are compatible with TypeScript."),(0,o.kt)("p",null,"Node.js Express and BigInt\nThe SDK sometimes returns a response that includes a value that is a BigInt. When this response is sent to a client from the server, typically using Express, it throws an error because BigInt.prototype.toJSON does not exist. MDN has a guide for working around this issue."))}d.isMDXComponent=!0}}]);