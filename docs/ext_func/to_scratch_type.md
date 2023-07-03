---
sidebar_position: 4
---

# 转为Scratch接受的类型

to scratch type


***
## 源码
```js title="/myjs/tools.js"
//2.0.1

/** 目前已知 scratch 变量保存的内容仅接受字符串、布尔值、有限数 */
function to_scratch_type(v){
    switch( typeof v ){
        case 'string':
          case 'boolean':
            return v;
        case 'number':
            if( Number.isFinite(v) )
                return v;
            break;
        case 'object':
            try{
                return JSON.stringify(v);
            }catch{}
            break;
    }
    return String(v);
}

module.exports.to_scratch_type = to_scratch_type;
```
