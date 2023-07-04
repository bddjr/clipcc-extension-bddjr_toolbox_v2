---
sidebar_position: 6
---

# 给JSON取键

for json get keys

:::caution
已禁止读取或写入 `__proto__` 。
:::


***
## 源码
```js title="/myjs/to_scratch_boolean.js"
//2.0.2

/**
 * 
 * @param {string} keymode  '.' 'list'
 * @param {string|number} keystr  'key.key2'
 * @returns {any[]|string|number} 如果 keymode 是 '.' ，最后一项是字符串，前面的是列表，单个键返回的只是字符串。如果 keymode 是 'list' ，全是字符串。
 */
function for_json_get_keys( keymode, keystr ){
    if( typeof keystr === 'number' )
        return keystr;

    let anti__proto__ = "Can not get or set __proto__ !";
    if( keymode === '.' ){
        if( !keystr.includes('.') ){
            if( keystr == '__proto__' ){
                throw anti__proto__;
            }
            return keystr;
        }
        const outkeys = [];
        let myslice_start = 0;    
        for( let i = 0 ; i < keystr.length ; i++ ){
            if( keystr[i] !== '.' ){
                continue;
            }
            if( keystr[i-1] === '?' ){
                let key = keystr.slice( myslice_start , i-1 );
                if( key == '__proto__' ){
                    throw anti__proto__;
                }
                outkeys.push([
                    key,
                    '?.',
                ]);
            }else{
                let key = keystr.slice( myslice_start , i );
                if( key == '__proto__' ){
                    throw anti__proto__;
                }
                outkeys.push([
                    key,
                    '.',
                ]);
            }
            myslice_start = i+1 ;
        }
        let key = keystr.slice( myslice_start );
        if( key == '__proto__' ){
            throw anti__proto__;
        }
        outkeys.push( key );

        return outkeys;
    }
    if( keymode === 'Array' ){
        let thiskeystr = keystr.trim();
        if( thiskeystr[0] !== '[' )
            thiskeystr = '[' + thiskeystr;
        if( thiskeystr.slice(-1) !== ']' )
            thiskeystr += ']';
        let outkeys = JSON.parse( thiskeystr );
        if( outkeys.includes('__proto__') ){
            throw anti__proto__;
        }
        return outkeys;
    }
    throw 'Not allowed keymode!';
}

module.exports.for_json_get_keys = for_json_get_keys;
```
