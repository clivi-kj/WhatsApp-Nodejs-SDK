"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={id:"text",title:".text"},o="WhatsApp.messages.text()",i={unversionedId:"api-reference/messages/text",id:"api-reference/messages/text",title:".text",description:"Send a WhatsApp text message.",source:"@site/docs/api-reference/messages/text.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/text",permalink:"/api-reference/messages/text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/text.md",tags:[],version:"current",frontMatter:{id:"text",title:".text"},sidebar:"mainSidebar",previous:{title:".template",permalink:"/api-reference/messages/template"},next:{title:".video",permalink:"/api-reference/messages/video"}},p={},l=[{value:"Example:",id:"example",level:2},{value:"Arguements",id:"arguements",level:2},{value:"Returns",id:"returns",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappmessagestext"},"WhatsApp.messages.text()"),(0,a.kt)("p",null,"Send a WhatsApp text message."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"Send a text message to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { WhatsApp } from \'WhatsApp\';\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst message =\n{\n    "body": "MESSAGE_CONTENT",\n    "preview_url": false\n};\n\nwa.messages.text( message, 12345678901 );\n')),(0,a.kt)("h2",{id:"arguements"},"Arguements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"../types/text_object"},"Text_Object")," \u2014 the object describing the text to send."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"recipient")," : number \u2014 the recipient's phone number with country code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"reply_message_id")," : string (optional) \u2014 the received WhatsApp message Id to reply back to.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise \u2014 Server response object on success."))}u.isMDXComponent=!0}}]);