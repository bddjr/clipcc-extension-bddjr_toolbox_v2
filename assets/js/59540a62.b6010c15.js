"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1743],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:6},c="\u53bb\u91cd",i={unversionedId:"array/deduplication",id:"array/deduplication",title:"\u53bb\u91cd",description:"deduplication",source:"@site/docs/array/deduplication.md",sourceDirName:"array",slug:"/array/deduplication",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/deduplication",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/array/deduplication.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u622a\u53d6",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/slice"},next:{title:"\u6700\u5927\u9879\u6216\u6700\u5c0f\u9879",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/max_or_min"}},l={},p=[{value:"\u8f93\u5165\u7c7b\u578b",id:"\u8f93\u5165\u7c7b\u578b",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],s={toc:p},u="wrapper";function d(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53bb\u91cd"},"\u53bb\u91cd"),(0,o.kt)("p",null,"deduplication"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:t(5532).Z,width:"693",height:"144"}),"  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u8f93\u5165\u7c7b\u578b"},"\u8f93\u5165\u7c7b\u578b"),(0,o.kt)("p",null,"v1\uff1aString | Object(Array)",(0,o.kt)("br",{parentName:"p"}),"\n","return_type\uff1aString  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/categorys/array.js"',title:'"/categorys/array.js"'},'    {//2.0.0\n        opcode: `${category_id}.deduplication`,\n        messageId: `${category_id}.deduplication`,\n        categoryId: category_id,\n        type: type.BlockType.REPORTER,\n        param: {\n            v1: {\n                type: type.ParameterType.STRING,\n                default: \'["apple","apple","banana","banana","cat","cat"]\'\n            },\n            return_type: {\n                type: type.ParameterType.STRING,\n                default: \'ScratchType\',\n                menu: myTypeMenu\n            },\n        },\n        function: (args,util)=>{\n            try{\n                let v1 = args.v1;\n                if( typeof v1 !== \'object\' )\n                    v1 = JSON.parse( v1 );\n\n                return returnType(\n                    Array.from( new Set(v1) ),\n                    args.return_type\n                );\n\n            }catch(e){\n                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );\n            }\n        },\n    },\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/myjs/tools.js"',title:'"/myjs/tools.js"'},"//2.0.0\n\n/**\n * \n * @param {any} v  value\n * @param {string} t  typename in myTypeMenu\n * @param {boolean} b  if t==='string' try JSON.stringify(v)\n */\nfunction returnType( v, t , b=true ){\n    switch( t ){\n        case 'default':\n            return v;\n        case 'ScratchType':\n            return to_scratch_type(v);\n        case 'string':\n            if( b && (typeof v === 'object') ){\n                try{\n                    return JSON.stringify(v);\n                }catch{}\n            }\n            return String(v);\n        case 'boolean':\n            return Boolean(v);\n        case 'number':\n            return Number(v);\n        case 'integer':\n            return Number.parseInt(v);\n        case 'ScratchBoolean':\n            return to_scratch_boolean(v);\n    }\n    throw 'Not allowed type name!';\n}\n\nmodule.exports.returnType = returnType;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/myjs/tools.js"',title:'"/myjs/tools.js"'},'//2.0.1\n\n/**\n * my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )\n * @param {string} block_id \n * @param {string} block_opcode\n */\nfunction my_log_block_error(block_id, block_opcode, error){\n    let err_str = \'ClipCCExtensionBlockError\\n\' + (\n        err_msg[0] =\n`{"extension":"${extension_id}",\n"blockid":${JSON.stringify(block_id)},\n"opcode":${JSON.stringify(block_opcode)},\n"time":${Date.now()},\n"error":${JSON.stringify(error.toString())}}`\n    );\n    console.error( err_str );\n    console.error( error );\n    return err_str;\n}\n\nmodule.exports.my_log_block_error = my_log_block_error;\n')))}d.isMDXComponent=!0},5532:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image-376cd1155282529fc07b1896d0c6b4e0.png"}}]);