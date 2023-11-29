"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=r.createContext({}),l=function(e){var t=r.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(y.Provider,{value:t},e.children)},_="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,y=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),_=l(n),f=o,u=_["".concat(y,".").concat(f)]||_[f]||p[f]||i;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var y in t)hasOwnProperty.call(t,y)&&(a[y]=t[y]);a.originalType=e,a[_]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6},s="\u7ed9JSON\u53d6\u952e",a={unversionedId:"ext_func/for_json_get_keys",id:"ext_func/for_json_get_keys",title:"\u7ed9JSON\u53d6\u952e",description:"for json get keys",source:"@site/docs/ext_func/for_json_get_keys.md",sourceDirName:"ext_func",slug:"/ext_func/for_json_get_keys",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/for_json_get_keys",draft:!1,editUrl:"https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/tree/doc/docs/ext_func/for_json_get_keys.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u8f6c\u4e3aScratch\u5e03\u5c14\u503c",permalink:"/clipcc-extension-bddjr_toolbox_v2/ext_func/to_scratch_boolean"},next:{title:"\u5b57\u7b26\u4e32\u4e0e\u7c7b\u578b",permalink:"/clipcc-extension-bddjr_toolbox_v2/category/\u5b57\u7b26\u4e32\u4e0e\u7c7b\u578b"}},y={},l=[{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2}],c={toc:l},_="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ed9json\u53d6\u952e"},"\u7ed9JSON\u53d6\u952e"),(0,o.kt)("p",null,"for json get keys"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5df2\u7981\u6b62\u8bfb\u53d6\u6216\u5199\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," \u3002")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/myjs/to_scratch_boolean.js"',title:'"/myjs/to_scratch_boolean.js"'},"//2.0.3\n\n/**\n * \n * @param {string} keymode  '.' 'list'\n * @param {string|number|Array} keystr  'key.key2'\n * @returns {any[]|string|number} \u5982\u679c keymode \u662f '.' \uff0c\u6700\u540e\u4e00\u9879\u662f\u5b57\u7b26\u4e32\uff0c\u524d\u9762\u7684\u662f\u5217\u8868\uff0c\u5355\u4e2a\u952e\u8fd4\u56de\u7684\u53ea\u662f\u5b57\u7b26\u4e32\u3002\u5982\u679c keymode \u662f 'list' \uff0c\u5168\u662f\u5b57\u7b26\u4e32\u3002\n */\nfunction for_json_get_keys( keymode, keystr ){\n    if( typeof keystr === 'number' )\n        return keystr;\n\n    let anti__proto__ = \"Can not get or set __proto__ !\";\n    if( keymode === '.' ){\n        if( Array.isArray( keystr ) ){\n            // \u662f\u6570\u7ec4\uff0c\u90a3\u4e48\u6267\u884c\u68c0\u67e5\n            for(let i of keystr){\n                if( Array.isArray( i ) ){\n                    if(\n                      i.length !== 2\n                       ||\n                      !['number','string'].includes( i[0] )\n                       ||\n                      !['.','?.'].includes( i[1] )\n                    ){\n                        throw \"Not allowed keystr Array format\";\n                    }\n                    if( i[0] == '__proto__' ){\n                        throw anti__proto__;\n                    }\n                }else if( typeof i === 'string' ){\n                    if( i == '__proto__' ){\n                        throw anti__proto__;\n                    }\n                }else{\n                    throw \"Not allowed keystr type!\";\n                }\n            }\n            // \u68c0\u67e5\u4e86\uff0c\u6ca1\u95ee\u9898\n            return keystr;\n        }\n        if( typeof keystr !== 'string' ){\n            throw \"Not allowed keystr type!\";\n        }\n        if( !keystr.includes('.') ){\n            if( keystr == '__proto__' ){\n                throw anti__proto__;\n            }\n            return keystr;\n        }\n        const outkeys = [];\n        let myslice_start = 0;    \n        for( let i = 0 ; i < keystr.length ; i++ ){\n            if( keystr[i] !== '.' ){\n                continue;\n            }\n            if( keystr[i-1] === '?' ){\n                let key = keystr.slice( myslice_start , i-1 );\n                if( key == '__proto__' ){\n                    throw anti__proto__;\n                }\n                outkeys.push([\n                    key,\n                    '?.',\n                ]);\n            }else{\n                let key = keystr.slice( myslice_start , i );\n                if( key == '__proto__' ){\n                    throw anti__proto__;\n                }\n                outkeys.push([\n                    key,\n                    '.',\n                ]);\n            }\n            myslice_start = i+1 ;\n        }\n        let key = keystr.slice( myslice_start );\n        if( key == '__proto__' ){\n            throw anti__proto__;\n        }\n        outkeys.push( key );\n\n        return outkeys;\n    }\n    if( keymode === 'Array' ){\n        let outkeys;\n        if( Array.isArray( keystr ) ){\n            outkeys = keystr;\n        }else if( typeof keystr === 'string' ){\n            let thiskeystr = keystr.trim();\n            if( thiskeystr[0] !== '[' )\n                thiskeystr = '[' + thiskeystr;\n            if( thiskeystr.slice(-1) !== ']' )\n                thiskeystr += ']';\n            outkeys = JSON.parse( thiskeystr );\n        }else{\n            throw \"Not allowed keystr type!\";\n        }\n        for(let i of outkeys){\n            if( !['number','string'].includes( typeof i ) ){\n                throw \"Not allowed keystr Array format\";\n            }\n            if( i == '__proto__' ){\n                throw anti__proto__;\n            }\n        }\n        // \u68c0\u67e5\u4e86\uff0c\u6ca1\u95ee\u9898\n        return outkeys;\n    }\n    throw 'Not allowed keymode!';\n}\n\nmodule.exports.for_json_get_keys = for_json_get_keys;\n")))}p.isMDXComponent=!0}}]);