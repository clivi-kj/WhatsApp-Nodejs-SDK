"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[8430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"this",title:"this"},o="Two-step verification class",s={unversionedId:"api-reference/twoStepVerification/this",id:"api-reference/twoStepVerification/this",title:"this",description:"This is the two-step verification class that is instantiated by the WhatsApp class. The two-step verification class object can be referenced with >.twoStepVerification to access the member functions.",source:"@site/docs/api-reference/twoStepVerification/this.md",sourceDirName:"api-reference/twoStepVerification",slug:"/api-reference/twoStepVerification/this",permalink:"/WhatsApp-Nodejs-SDK/api-reference/twoStepVerification/this",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/twoStepVerification/this.md",tags:[],version:"current",frontMatter:{id:"this",title:"this"},sidebar:"mainSidebar",previous:{title:".video",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/video"},next:{title:".setPin",permalink:"/WhatsApp-Nodejs-SDK/api-reference/twoStepVerification/setPin"}},c={},p=[{value:"Example:",id:"example",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],l={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"two-step-verification-class"},"Two-step verification class"),(0,i.kt)("p",null,"This is the two-step verification class that is instantiated by the WhatsApp class. The two-step verification class object can be referenced with <<SDK_NAMESPACE>>.twoStepVerification to access the member functions."),(0,i.kt)("h2",{id:"example"},"Example:"),(0,i.kt)("p",null,"Set the two-step verification pin to ",(0,i.kt)("inlineCode",{parentName:"p"},"123456"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import WhatsApp from 'whatsapp';\n\nconst senderNumberId = 12345678901234567890;\nconst wa = new WhatsApp( senderNumberId );\n\nwa.twoStepVerification.setPin( 123456 );\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," : ",(0,i.kt)("a",{parentName:"li",href:"../types/WAConfigType"},"WAConfigType")," \u2014 SDK configuration object."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpsClient")," : RequesterClass \u2014 the HTTPS requester class object, including the HTTP client instance to make requests with.")),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"Object \u2014 Two-step verification class instance."))}f.isMDXComponent=!0}}]);