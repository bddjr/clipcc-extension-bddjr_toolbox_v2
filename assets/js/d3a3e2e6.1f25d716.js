"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=o,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||c;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={sidebar_position:5},a="\u8f6c\u4e3aScratch\u5e03\u5c14\u503c",l={unversionedId:"ext_func/to_scratch_boolean",id:"ext_func/to_scratch_boolean",title:"\u8f6c\u4e3aScratch\u5e03\u5c14\u503c",description:"to scratch boolean",source:"@site/docs/ext_func/to_scratch_boolean.md",sourceDirName:"ext_func",slug:"/ext_func/to_scratch_boolean",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/to_scratch_boolean",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/ext_func/to_scratch_boolean.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8f6c\u4e3aScratch\u63a5\u53d7\u7684\u7c7b\u578b",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/to_scratch_type"},next:{title:"\u7ed9JSON\u53d6\u952e",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/for_json_get_keys"}},i={},s=[{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8f6c\u4e3ascratch\u5e03\u5c14\u503c"},"\u8f6c\u4e3aScratch\u5e03\u5c14\u503c"),(0,o.kt)("p",null,"to scratch boolean"),(0,o.kt)("p",null,"\u4f7f\u7528 Scratch \u7684\u65b9\u5f0f\u5c06\u5185\u5bb9\u8f6c\u4e3a\u5e03\u5c14\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/myjs/to_scratch_boolean.js"',title:'"/myjs/to_scratch_boolean.js"'},"/** Copy from https://github.com/Clipteam/clipcc-vm/blob/master/src/util/cast.js#L49 */\nmodule.exports = (value)=>{\n    // Already a boolean?\n    if (typeof value === 'boolean') {\n        return value;\n    }\n    if (typeof value === 'string') {\n        // These specific strings are treated as false in Scratch.\n        if ((value === '') ||\n            (value === '0') ||\n            (value.toLowerCase() === 'false')) {\n            return false;\n        }\n        // All other strings treated as true.\n        return true;\n    }\n    // Coerce other values and numbers.\n    return Boolean(value);\n}\n")))}f.isMDXComponent=!0}}]);