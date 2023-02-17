"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=s.createContext({}),u=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?s.createElement(f,o(o({ref:t},p),{},{components:r})):s.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=r(7462),n=(r(7294),r(3905));const a={id:"status",title:".status"},o="WhatsApp.messages.status()",c={unversionedId:"api-reference/messages/status",id:"api-reference/messages/status",title:".status",description:"Mark a message as read.",source:"@site/docs/api-reference/messages/status.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/status",permalink:"/api-reference/messages/status",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/status.md",tags:[],version:"current",frontMatter:{id:"status",title:".status"},sidebar:"mainSidebar",previous:{title:".location",permalink:"/api-reference/messages/location"},next:{title:".sticker",permalink:"/api-reference/messages/sticker"}},i={},u=[{value:"Example:",id:"example",level:2},{value:"Arguements",id:"arguements",level:2},{value:"Returns",id:"returns",level:2}],p={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"whatsappmessagesstatus"},"WhatsApp.messages.status()"),(0,n.kt)("p",null,"Mark a message as read."),(0,n.kt)("h2",{id:"example"},"Example:"),(0,n.kt)("p",null,"Listen for incoming message webhook events and mark as message as read once received."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { WhatsApp } from 'WhatsApp';\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nasync function custom_callback( status_code, req_headers, body, resp, err )\n{\n    // Send a 200 so the webhooks service knows you received the message\n    if( resp )\n    {\n        resp.writeHead( status_code );\n        resp.end();\n    }\n\n    // Mark message as read\n    if( body?.entry[ 0 ].changes[ 0 ].field == \"messages\" && body.entry[ 0 ].changes[ 0 ].value.messages )\n    {\n        message_status_read( body.entry[ 0 ].changes[ 0 ].value.messages[ 0 ].id );\n    }\n}\n\nwa.webhooks.start( custom_callback );\n")),(0,n.kt)("h2",{id:"arguements"},"Arguements"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,n.kt)("a",{parentName:"li",href:"../types/status_object"},"Status_Object")," \u2014 the object describing the message status update.")),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"Promise \u2014 Server response object on success."))}m.isMDXComponent=!0}}]);