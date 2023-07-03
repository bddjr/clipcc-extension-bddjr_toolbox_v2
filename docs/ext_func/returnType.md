---
sidebar_position: 3
---

# 返回指定类型

returnType

用于返回指定类型的内容到 Scratch


***
## 源码
```js title="/myjs/tools.js"
//2.0.0

/**
 * 
 * @param {any} v  value
 * @param {string} t  typename in myTypeMenu
 * @param {boolean} b  if t==='string' try JSON.stringify(v)
 */
function returnType( v, t , b=true ){
    switch( t ){
        case 'default':
            return v;
        case 'ScratchType':
            return to_scratch_type(v);
        case 'string':
            if( b && (typeof v === 'object') ){
                try{
                    return JSON.stringify(v);
                }catch{}
            }
            return String(v);
        case 'boolean':
            return Boolean(v);
        case 'number':
            return Number(v);
        case 'integer':
            return Number.parseInt(v);
        case 'ScratchBoolean':
            return to_scratch_boolean(v);
    }
    throw 'Not allowed type name!';
}

module.exports.returnType = returnType;
```
