"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"video",title:".video"},i="WhatsApp.messages.video()",s={unversionedId:"api-reference/messages/video",id:"api-reference/messages/video",title:".video",description:"Send an existing self-hosted or Meta hosted video file. Supported video formats:",source:"@site/docs/api-reference/messages/video.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/video",permalink:"/api-reference/messages/video",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/video.md",tags:[],version:"current",frontMatter:{id:"video",title:".video"},sidebar:"mainSidebar",previous:{title:".text",permalink:"/api-reference/messages/text"},next:{title:"this",permalink:"/api-reference/webhooks/this"}},l={},p=[{value:"Example:",id:"example",level:2},{value:"Arguements",id:"arguements",level:2},{value:"Returns",id:"returns",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappmessagesvideo"},"WhatsApp.messages.video()"),(0,a.kt)("p",null,"Send an existing self-hosted or Meta hosted video file. Supported video formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MP4"),(0,a.kt)("li",{parentName:"ul"},"3GP")),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"Send a Meta-hosted message and then send an externally hosted video file to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { WhatsApp } from \'WhatsApp\';\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst meta_hosted_video =\n{\n    "id" : "123456asdfg",\n    "caption" : "My video file",\n    "filename" : "example.mp4"\n};\n\nconst self_hosted_video =\n{\n    "link" : new URL( "https://example.com/example_1234.mp4" ).href,\n    "caption" : "My video file",\n    "filename" : "example.mp4"\n};\n\nawait wa.messages.video( meta_hosted_video, 12345678901 );\nwa.messages.video( self_hosted_video, 12345678901 );\n')),(0,a.kt)("h2",{id:"arguements"},"Arguements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"../types/video_media_object"},"Video_Media_Object")," \u2014 the object describing the video file to send."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"recipient")," : number \u2014 the recipient's phone number with country code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"reply_message_id")," : string (optional) \u2014 the received WhatsApp message Id to reply back to.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise \u2014 Server response object on success."))}m.isMDXComponent=!0}}]);