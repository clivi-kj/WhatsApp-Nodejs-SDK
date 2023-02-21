"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=s,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:s,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={id:"this",title:"this"},i="Messages class",c={unversionedId:"api-reference/messages/this",id:"api-reference/messages/this",title:"this",description:"This is the messages class that is instantiated by the WhatsApp class. The messages class object can be referenced with >.messages to access the member functions.",source:"@site/docs/api-reference/messages/this.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/this",permalink:"/api-reference/messages/this",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/this.md",tags:[],version:"current",frontMatter:{id:"this",title:"this"},sidebar:"mainSidebar",previous:{title:".update_access_token",permalink:"/api-reference/whatsapp/update_access_token"},next:{title:".audio",permalink:"/api-reference/messages/audio"}},o={},l=[{value:"Example:",id:"example",level:2},{value:"Arguements",id:"arguements",level:2},{value:"Returns",id:"returns",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"messages-class"},"Messages class"),(0,s.kt)("p",null,"This is the messages class that is instantiated by the WhatsApp class. The messages class object can be referenced with <<SDK_NAMESPACE>>.messages to access the member functions."),(0,s.kt)("h2",{id:"example"},"Example:"),(0,s.kt)("p",null,"Send a text-only message to the phone number ",(0,s.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { WhatsApp } = require(\'whatsapp\');\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\nwa.messages.text( { "body" : "MESSAGE_CONTENT" }, 12345678901 );\n')),(0,s.kt)("h2",{id:"arguements"},"Arguements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"config")," : ",(0,s.kt)("a",{parentName:"li",href:"../types/wa_config_type"},"WA_Config_Type")," \u2014 SDK configuration object."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"HTTPS_client")," : Requester_Class \u2014 the HTTPS requester class object, including the HTTP client instance to make requests with.")),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("p",null,"Object \u2014 Messages class instance."))}m.isMDXComponent=!0}}]);