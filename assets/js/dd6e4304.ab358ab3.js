"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),y=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=y(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=y(n),u=o,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var y=2;y<s;y++)i[y]=n[y];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>y});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:5},i="\u5220\u9664\u5c5e\u6027",a={unversionedId:"json/deleteProperty",id:"json/deleteProperty",title:"\u5220\u9664\u5c5e\u6027",description:"deleteProperty",source:"@site/docs/json/deleteProperty.md",sourceDirName:"json",slug:"/json/deleteProperty",permalink:"/clipcc-extension-bddjr_toolbox_v2/json/deleteProperty",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/json/deleteProperty.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u68c0\u6d4b\u6709\u952e",permalink:"/clipcc-extension-bddjr_toolbox_v2/json/hasOwnProperty"},next:{title:"parse",permalink:"/clipcc-extension-bddjr_toolbox_v2/json/parse"}},l={},y=[{value:"\u8f93\u5165\u7c7b\u578b",id:"\u8f93\u5165\u7c7b\u578b",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],p={toc:y},c="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5220\u9664\u5c5e\u6027"},"\u5220\u9664\u5c5e\u6027"),(0,o.kt)("p",null,"deleteProperty"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(7146).Z,width:"747",height:"163"}),"  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u8f93\u5165\u7c7b\u578b"},"\u8f93\u5165\u7c7b\u578b"),(0,o.kt)("p",null,"v1\uff1aString | Object",(0,o.kt)("br",{parentName:"p"}),"\n","keymode\uff1aString",(0,o.kt)("br",{parentName:"p"}),"\n","key\uff1aString",(0,o.kt)("br",{parentName:"p"}),"\n","return_type\uff1aString  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/categorys/json.js"',title:'"/categorys/json.js"'},"    {//2.0.2\n        opcode: `${category_id}.deleteProperty`,\n        messageId: `${category_id}.deleteProperty`,\n        categoryId: category_id,\n        type: type.BlockType.REPORTER,\n        param: {\n            v1: {\n                type: type.ParameterType.STRING,\n                default: '{\"key\":{\"key2\":\"value\"}}'\n            },\n            keymode: {\n                type: type.ParameterType.STRING,\n                default: '.',\n                menu: keymodeMenu\n            },\n            key: {\n                type: type.ParameterType.STRING,\n                default: 'key.key2',\n            },\n            return_type: {\n                type: type.ParameterType.STRING,\n                default: 'ScratchType',\n                menu: myTypeMenu\n            },\n        },\n        function: (args,util)=>{\n            try{\n                let thisjson = args.v1;\n                if( typeof thisjson !== 'object' )\n                    thisjson = JSON.parse( thisjson );\n\n                let globaljson = thisjson;\n\n                // \u4e0d\u5305\u542b\u7684keymode\u4f1a\u629b\u51fa\u9519\u8bef\n                let keyslist = for_json_get_keys( args.keymode, args.key );\n\n                let setKey;\n\n                if( typeof keyslist === 'number' )\n                    setKey = keyslist;\n                else if( args.keymode === 'Array' ){\n                    for( let i=0 ; i< keyslist.length-1 ; i++ ){\n                        if( (+i)<0 && Array.isArray(thisjson) ){\n                            // \u517c\u5bb9\u6570\u7ec4\u8d1f\u6570\u4e0b\u6807\u53d6\u503c\n                            i = thisjson.length + (+i);\n                        }\n                        thisjson = thisjson[ keyslist[i] ];\n                    }\n                    setKey = keyslist.slice(-1);\n                }else{ // args.keymode === '.'\n                    if( Array.isArray( keyslist ) ){\n                        for( let i of keyslist ){\n                            if( Array.isArray( i ) ){\n                                if( (+i[0])<0 && Array.isArray(thisjson) ){\n                                    // \u517c\u5bb9\u6570\u7ec4\u8d1f\u6570\u4e0b\u6807\u53d6\u503c\n                                    i[0] = thisjson.length + (+i[0]);\n                                }\n                                thisjson = thisjson[ i[0] ];\n                                if( i[1] ==='?.' && !thisjson )\n                                    break;\n                            }else{\n                                if( (+i)<0 && Array.isArray(thisjson) ){\n                                    // \u517c\u5bb9\u6570\u7ec4\u8d1f\u6570\u4e0b\u6807\u53d6\u503c\n                                    i = thisjson.length + (+i);\n                                }\n                                setKey = i ;\n                            }\n                        }\n                    }else{ // typeof keyslist === 'string'\n                        if( (+keyslist)<0 && Array.isArray(thisjson) ){\n                            // \u517c\u5bb9\u6570\u7ec4\u8d1f\u6570\u4e0b\u6807\u53d6\u503c\n                            keyslist = thisjson.length + (+keyslist);\n                        }\n                        setKey = keyslist;\n                    }\n                }\n                if( (+setKey)<0 && Array.isArray(thisjson) ){\n                    // \u517c\u5bb9\u6570\u7ec4\u8d1f\u6570\u4e0b\u6807\u53d6\u503c\n                    setKey = thisjson.length + (+setKey);\n                }\n                Reflect.deleteProperty( thisjson, setKey );\n                return returnType( globaljson, args.return_type );\n\n            }catch(e){\n                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )\n            }\n        },\n    },\n")))}d.isMDXComponent=!0},7146:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-3d42c2765a25818cab9f8a06edc58d80.png"}}]);