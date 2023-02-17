"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,b=d["".concat(c,".").concat(u)]||d[u]||s[u]||i;return r?a.createElement(b,o(o({ref:t},m),{},{components:r})):a.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={id:"header_object",title:"Header_Object"},o="Header Object",l={unversionedId:"api-reference/types/header_object",id:"api-reference/types/header_object",title:"Header_Object",description:"The object describing the content displayed in the header of a message.",source:"@site/docs/api-reference/types/header_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/header_object",permalink:"/api-reference/types/header_object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/header_object.md",tags:[],version:"current",frontMatter:{id:"header_object",title:"Header_Object"},sidebar:"mainSidebar",previous:{title:"Email_Object",permalink:"/api-reference/types/email_object"},next:{title:"Image_Media_Object",permalink:"/api-reference/types/image_media_object"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}],m={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"header-object"},"Header Object"),(0,n.kt)("p",null,"The object describing the content displayed in the header of a message."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "text",\n    "text": "header-content"\n}\n')),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"type"),' : "document", "image", "text", or "video" \u2014 header type you would like to use.',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"text")," can be used with list messages, reply buttons, and multi-product messages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"video")," can be used with reply buttons."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"image")," can be used with reply buttons."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"document")," can be used with reply buttons."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"document")," : ",(0,n.kt)("a",{parentName:"li",href:"document_media_object"},"Document_Media_Object")," (optional) \u2014 the media object for this document. Required if type is ",(0,n.kt)("em",{parentName:"li"},"document"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"image")," : ",(0,n.kt)("a",{parentName:"li",href:"image_media_object"},"Image_Media_Object")," (optional) \u2014 the media object for this image. Required if type is ",(0,n.kt)("em",{parentName:"li"},"image"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"text")," : string (optional) \u2014 text for the header. Formatting allows emojis, but not markdown. Maximum length: 60 characters."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"video")," : ",(0,n.kt)("a",{parentName:"li",href:"video_media_object"},"Video_Media_Object")," (optional) \u2014 the media object for this video. Required if type is ",(0,n.kt)("em",{parentName:"li"},"video"),".")))}s.isMDXComponent=!0}}]);