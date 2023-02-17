"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const o={id:"this",title:"this"},a="Webhooks class",i={unversionedId:"api-reference/webhooks/this",id:"api-reference/webhooks/this",title:"this",description:"This is the webhooks class that is instantiated by the WhatsApp class. The webhooks class object can be referenced with >.webhooks to access the member functions.",source:"@site/docs/api-reference/webhooks/this.md",sourceDirName:"api-reference/webhooks",slug:"/api-reference/webhooks/this",permalink:"/api-reference/webhooks/this",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/webhooks/this.md",tags:[],version:"current",frontMatter:{id:"this",title:"this"},sidebar:"mainSidebar",previous:{title:".video",permalink:"/api-reference/messages/video"},next:{title:".is_started",permalink:"/api-reference/webhooks/is_started"}},c={},l=[{value:"Example:",id:"example",level:2},{value:"Arguements",id:"arguements",level:2},{value:"Returns",id:"returns",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"webhooks-class"},"Webhooks class"),(0,s.kt)("p",null,"This is the webhooks class that is instantiated by the WhatsApp class. The webhooks class object can be referenced with <<SDK_NAMESPACE>>.webhooks to access the member functions."),(0,s.kt)("h2",{id:"example"},"Example:"),(0,s.kt)("p",null,"Start the web server and print out the response status code, request headers, and if it exists, the body."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { WhatsApp } from \'WhatsApp\';\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nasync function custom_callback( status_code, req_headers, body, resp, err )\n{\n    console.log(\n        `Incoming webhook response status code: ${ status_code }\\n\\nHeaders:\n        ${ JSON.stringify( req_headers ) }`\n    );\n\n    // Send a 200 so the webhooks service knows you received the message\n    if( resp )\n    {\n        if( body )\n            console.log( `Body: ${ JSON.stringify( body ) }` );\n\n        resp.writeHead( status_code, { "Content-Type": "text/plain" } );\n        resp.end();\n    }\n\n    if( err )\n    {\n        console.log( `ERROR: ${ err }` );\n        resp.end();\n    }\n}\n\nwa.webhooks.start( custom_callback );\n')),(0,s.kt)("h2",{id:"arguements"},"Arguements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"config")," : ",(0,s.kt)("a",{parentName:"li",href:"../types/wa_config_type"},"WA_Config_Type")," \u2014 SDK configuration object."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"user_agent")," : string \u2014 the user-agent header parameter to send in responses.")),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("p",null,"Object \u2014 Webhooks class instance."))}h.isMDXComponent=!0}}]);