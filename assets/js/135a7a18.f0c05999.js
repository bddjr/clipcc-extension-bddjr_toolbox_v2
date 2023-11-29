"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6065],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,d=u["".concat(l,".").concat(y)]||u[y]||s[y]||o;return t?n.createElement(d,i(i({ref:r},m),{},{components:t})):n.createElement(d,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8795:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:7},i="\u6700\u5927\u9879\u6216\u6700\u5c0f\u9879",c={unversionedId:"array/max_or_min",id:"array/max_or_min",title:"\u6700\u5927\u9879\u6216\u6700\u5c0f\u9879",description:"maxormin",source:"@site/docs/array/max_or_min.md",sourceDirName:"array",slug:"/array/max_or_min",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/max_or_min",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/array/max_or_min.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u53bb\u91cd",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/deduplication"},next:{title:"\u5012\u5e8f",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/reverse"}},l={},p=[{value:"\u8f93\u5165\u7c7b\u578b",id:"\u8f93\u5165\u7c7b\u578b",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],m={toc:p},u="wrapper";function s(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,n.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6700\u5927\u9879\u6216\u6700\u5c0f\u9879"},"\u6700\u5927\u9879\u6216\u6700\u5c0f\u9879"),(0,a.kt)("p",null,"max_or_min"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(8168).Z,width:"642",height:"148"}),"  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8f93\u5165\u7c7b\u578b"},"\u8f93\u5165\u7c7b\u578b"),(0,a.kt)("p",null,"v1\uff1aString | Object(Array)",(0,a.kt)("br",{parentName:"p"}),"\n","mxx\uff1aString",(0,a.kt)("br",{parentName:"p"}),"\n","return_type\uff1aString  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/categorys/array.js"',title:'"/categorys/array.js"'},"    {//2.0.0\n        opcode: `${category_id}.max_or_min`,\n        messageId: `${category_id}.max_or_min`,\n        categoryId: category_id,\n        type: type.BlockType.REPORTER,\n        param: {\n            v1: {\n                type: type.ParameterType.STRING,\n                default: '[999,123,456,654,15,30,664]'\n            },\n            mxx: {\n                type: type.ParameterType.STRING,\n                default: 'max',\n                menu: make_menus(\n                    `${category_id}.max_or_min.menu`,\n                    'max',\n                    'min'\n                )\n            },\n            return_type: {\n                type: type.ParameterType.STRING,\n                default: 'ScratchType',\n                menu: myTypeMenu\n            },\n        },\n        function: (args,util)=>{\n            try{\n                if( !['max', 'min'].includes( args.mxx ) )\n                    throw 'Not allowed function name!';\n\n                let v1 = args.v1;\n                if( typeof v1 !== 'object' )\n                    v1 = JSON.parse( v1 );\n\n                return returnType(\n                    Math[ args.mxx ].apply( null, v1 ),\n                    args.return_type\n                );\n\n            }catch(e){\n                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );\n            }\n        },\n    },\n")))}s.isMDXComponent=!0},8168:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image-1bfe225d0d1bc69ce717ea425b14e553.png"}}]);