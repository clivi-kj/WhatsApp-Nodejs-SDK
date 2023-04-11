"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[5878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const p={id:"TemplateObject",title:"TemplateObject"},o="Template Object",c={unversionedId:"api-reference/types/TemplateObject",id:"api-reference/types/TemplateObject",title:"TemplateObject",description:"The object describing a WhatsApp message template to use and the components to dynamically fill the parameters of that template with.",source:"@site/docs/api-reference/types/template_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/TemplateObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/TemplateObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/template_object.md",tags:[],version:"current",frontMatter:{id:"TemplateObject",title:"TemplateObject"},sidebar:"mainSidebar",previous:{title:"StickerMediaObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/StickerMediaObject"},next:{title:"TextObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/TextObject"}},l={},i=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}],s={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"template-object"},"Template Object"),(0,a.kt)("p",null,"The object describing a WhatsApp message template to use and the components to dynamically fill the parameters of that template with."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "TEMPLATE_NAME",\n    "language": {\n        "policy": "deterministic",\n        "code": "LANGUAGE_AND_LOCALE_CODE"\n    },\n    "components": [\n        {\n            "type": "header",\n            "parameters": [\n                {\n                "type": "image",\n                "image": {\n                    "link": "http(s)://URL"\n                }\n                }\n            ]\n        },\n        {\n            "type": "body",\n            "parameters": [\n                {\n                    "type": "text",\n                    "text": "TEXT_STRING"\n                },\n                {\n                    "type": "currency",\n                    "currency": {\n                        "fallback_value": "VALUE",\n                        "code": "USD",\n                        "amount_1000": 1000\n                    }\n                },\n                {\n                    "type": "date_time",\n                    "date_time": {\n                        "fallback_value": "MONTH DAY, YEAR"\n                    }\n                }\n            ]\n        },\n        {\n        "type": "button",\n        "sub_type": "quick_reply",\n        "index": "0",\n        "parameters": [\n            {\n                "type": "payload",\n                "payload": "PAYLOAD"\n            }\n        ]\n        },\n        {\n            "type": "button",\n            "sub_type": "quick_reply",\n            "index": "1",\n            "parameters": [\n                {\n                "type": "payload",\n                "payload": "PAYLOAD"\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," : string \u2014 name of the template."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"language")," : ",(0,a.kt)("a",{parentName:"li",href:"language_object"},"LanguageObject")," \u2014 specifies the language the template may be rendered in."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"components")," : ",(0,a.kt)("a",{parentName:"li",href:"component_object"},"ComponentObject"),"[] (optional) \u2014 array of components objects containing the parameters of the message.")))}u.isMDXComponent=!0}}]);