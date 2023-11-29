"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),y=o,d=s["".concat(u,".").concat(y)]||s[y]||f[y]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const c={sidebar_position:3},a="\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b",i={unversionedId:"ext_func/returnType",id:"ext_func/returnType",title:"\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b",description:"returnType",source:"@site/docs/ext_func/returnType.md",sourceDirName:"ext_func",slug:"/ext_func/returnType",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/returnType",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/ext_func/returnType.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u89d2\u8272\u9009\u62e9\u5668",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/get_sprite_target"},next:{title:"\u8f6c\u4e3aScratch\u63a5\u53d7\u7684\u7c7b\u578b",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/to_scratch_type"}},u={},l=[{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],p={toc:l},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b"},"\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b"),(0,o.kt)("p",null,"returnType"),(0,o.kt)("p",null,"\u7528\u4e8e\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b\u7684\u5185\u5bb9\u5230 Scratch"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/myjs/tools.js"',title:'"/myjs/tools.js"'},"//2.0.0\n\n/**\n * \n * @param {any} v  value\n * @param {string} t  typename in myTypeMenu\n * @param {boolean} b  if t==='string' try JSON.stringify(v)\n */\nfunction returnType( v, t , b=true ){\n    switch( t ){\n        case 'default':\n            return v;\n        case 'ScratchType':\n            return to_scratch_type(v);\n        case 'string':\n            if( b && (typeof v === 'object') ){\n                try{\n                    return JSON.stringify(v);\n                }catch{}\n            }\n            return String(v);\n        case 'boolean':\n            return Boolean(v);\n        case 'number':\n            return Number(v);\n        case 'integer':\n            return Number.parseInt(v);\n        case 'ScratchBoolean':\n            return to_scratch_boolean(v);\n    }\n    throw 'Not allowed type name!';\n}\n\nmodule.exports.returnType = returnType;\n")))}f.isMDXComponent=!0}}]);