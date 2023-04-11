"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[1774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=i,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||n;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(7462),i=(r(7294),r(3905));const n={id:"AudioMediaObject",title:"AudioMediaObject"},o="Audio Media Object",s={unversionedId:"api-reference/types/AudioMediaObject",id:"api-reference/types/AudioMediaObject",title:"AudioMediaObject",description:"The object required for sending an audio message. Can either be a self-hosted and publicly accessible audio, or an existing Meta-hosted audio file in a supported format. Meta or self hosted options have different object requirements.",source:"@site/docs/api-reference/types/audio_media_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/AudioMediaObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/AudioMediaObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/audio_media_object.md",tags:[],version:"current",frontMatter:{id:"AudioMediaObject",title:"AudioMediaObject"},sidebar:"mainSidebar",previous:{title:"ActionObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/ActionObject"},next:{title:"AddressesObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/addresses_object"}},l={},d=[{value:"Meta Hosted",id:"meta-hosted",level:2},{value:"Example",id:"example",level:3},{value:"Properties",id:"properties",level:3},{value:"Self Hosted",id:"self-hosted",level:2},{value:"Example",id:"example-1",level:3},{value:"Properties",id:"properties-1",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"audio-media-object"},"Audio Media Object"),(0,i.kt)("p",null,"The object required for sending an audio message. Can either be a self-hosted and publicly accessible audio, or an existing Meta-hosted audio file in a supported format. Meta or self hosted options have different object requirements."),(0,i.kt)("h2",{id:"meta-hosted"},"Meta Hosted"),(0,i.kt)("p",null,"This audio file must already exist."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id" : "AUDIO_ID",\n}\n')),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," : string \u2014 the audio file Id. This Id is returned in the response body when the audio file was first uploaded.")),(0,i.kt)("h2",{id:"self-hosted"},"Self Hosted"),(0,i.kt)("p",null,"The audio file must be readily accessible by public addresses."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "link" : new URL( "https://www.example.com" ).href,\n}\n')),(0,i.kt)("h3",{id:"properties-1"},"Properties"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"link")," :  string \u2014 link to the publicly hosted audio.")))}u.isMDXComponent=!0}}]);