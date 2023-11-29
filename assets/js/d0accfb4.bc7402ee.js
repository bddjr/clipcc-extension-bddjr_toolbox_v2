"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,p(p({ref:t},l),{},{components:r})):n.createElement(g,p({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},p="\u89d2\u8272\u6240\u6709\u4e34\u65f6\u53d8\u91cf",o={unversionedId:"debug/sprite_temp_var",id:"debug/sprite_temp_var",title:"\u89d2\u8272\u6240\u6709\u4e34\u65f6\u53d8\u91cf",description:"sprite temp var",source:"@site/docs/debug/sprite_temp_var.md",sourceDirName:"debug",slug:"/debug/sprite_temp_var",permalink:"/clipcc-extension-bddjr_toolbox_v2/debug/sprite_temp_var",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/debug/sprite_temp_var.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5168\u5c40\u6240\u6709\u4e34\u65f6\u53d8\u91cf",permalink:"/clipcc-extension-bddjr_toolbox_v2/debug/temp_var"}},c={},s=[{value:"\u8f93\u5165\u7c7b\u578b",id:"\u8f93\u5165\u7c7b\u578b",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u89d2\u8272\u6240\u6709\u4e34\u65f6\u53d8\u91cf"},"\u89d2\u8272\u6240\u6709\u4e34\u65f6\u53d8\u91cf"),(0,a.kt)("p",null,"sprite temp var"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:r(2799).Z,width:"556",height:"52"}),"  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8f93\u5165\u7c7b\u578b"},"\u8f93\u5165\u7c7b\u578b"),(0,a.kt)("p",null,"sprite_type: string",(0,a.kt)("br",{parentName:"p"}),"\n","sprite_name: string | number",(0,a.kt)("br",{parentName:"p"}),"\n","return_type: String  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/categorys/debug.js"',title:'"/categorys/debug.js"'},"    {//2.0.1\n        opcode: `${category_id}.sprite_temp_var`,\n        messageId: `${category_id}.sprite_temp_var`,\n        categoryId: category_id,\n        type: type.BlockType.REPORTER,\n        param: {\n            sprite_type: {\n                type: type.ParameterType.STRING,\n                default: 'thisClone',\n                menu: sprite_type_menu\n            },\n            sprite_name: {\n                type: type.ParameterType.STRING,\n                default: '',\n                // @ts-ignore\n                menu: sprites_name_menu\n            },\n            return_type: {\n                type: type.ParameterType.STRING,\n                default: 'ScratchType',\n                menu: myTypeMenu\n            },\n        },\n        function: (args,util)=>{\n            try{\n                return returnType(\n                    get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var ,\n                    args.return_type\n                );\n            }catch(e){\n                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )\n            }\n        }\n    },\n")))}d.isMDXComponent=!0},2799:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);