"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||y[d]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},c="\u7ed3\u5c3e\u52a0\u5165",p={unversionedId:"array/push",id:"array/push",title:"\u7ed3\u5c3e\u52a0\u5165",description:"push",source:"@site/docs/array/push.md",sourceDirName:"array",slug:"/array/push",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/push",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/array/push.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u7ec4",permalink:"/clipcc-extension-bddjr_toolbox_v2/category/\u6570\u7ec4"},next:{title:"\u957f\u5ea6",permalink:"/clipcc-extension-bddjr_toolbox_v2/array/length"}},i={},l=[{value:"\u8f93\u5165\u7c7b\u578b",id:"\u8f93\u5165\u7c7b\u578b",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],u={toc:l},s="wrapper";function y(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ed3\u5c3e\u52a0\u5165"},"\u7ed3\u5c3e\u52a0\u5165"),(0,a.kt)("p",null,"push"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:r(5612).Z,width:"667",height:"157"}),"  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8f93\u5165\u7c7b\u578b"},"\u8f93\u5165\u7c7b\u578b"),(0,a.kt)("p",null,"v1\uff1aString | Object(Array)",(0,a.kt)("br",{parentName:"p"}),"\n","v2\uff1aString | any",(0,a.kt)("br",{parentName:"p"}),"\n","return_type\uff1aString  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/categorys/array.js"',title:'"/categorys/array.js"'},"    {//2.0.0\n        opcode: `${category_id}.push`,\n        messageId: `${category_id}.push`,\n        categoryId: category_id,\n        type: type.BlockType.REPORTER,\n        param: {\n            v1: {\n                type: type.ParameterType.STRING,\n                default: '[\"apple\",\"banana\",\"cat\"]'\n            },\n            v2: {\n                type: type.ParameterType.STRING,\n                default: '\"doge\"'\n            },\n            return_type: {\n                type: type.ParameterType.STRING,\n                default: 'ScratchType',\n                menu: myTypeMenu\n            },\n        },\n        function: (args,util)=>{\n            try{\n                let v1 = args.v1;\n                if( typeof v1 !== 'object' )\n                    v1 = JSON.parse( v1 );\n\n                let v2 = args.v2;\n                if( typeof v2 !== 'object' ){\n                    try{\n                        v2 = JSON.parse( v2 );\n                    }catch{}\n                }\n\n                v1.push(v2)\n                return returnType( v1, args.return_type );\n\n            }catch(e){\n                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );\n            }\n        },\n    },\n")))}y.isMDXComponent=!0},5612:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-d1dab9351b99f37603d1e57ce4ddebc1.png"}}]);