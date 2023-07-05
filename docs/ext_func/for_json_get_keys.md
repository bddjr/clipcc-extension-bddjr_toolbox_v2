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
//2.0.3

/**
 * 
 * @param {string} keymode  '.' 'list'
 * @param {string|number|Array} keystr  'key.key2'
 * @returns {any[]|string|number} 如果 keymode 是 '.' ，最后一项是字符串，前面的是列表，单个键返回的只是字符串。如果 keymode 是 'list' ，全是字符串。
 */
function for_json_get_keys( keymode, keystr ){
    if( typeof keystr === 'number' )
        return keystr;

    let anti__proto__ = "Can not get or set __proto__ !";
    if( keymode === '.' ){
        if( Array.isArray( keystr ) ){
            // 是数组，那么执行检查
            for(let i of keystr){
                if( Array.isArray( i ) ){
                    if(
                      i.length !== 2
                       ||
                      !['number','string'].includes( i[0] )
                       ||
                      !['.','?.'].includes( i[1] )
                    ){
                        throw "Not allowed keystr Array format";
                    }
                    if( i[0] == '__proto__' ){
                        throw anti__proto__;
                    }
                }else if( typeof i === 'string' ){
                    if( i == '__proto__' ){
                        throw anti__proto__;
                    }
                }else{
                    throw "Not allowed keystr type!";
                }
            }
            // 检查了，没问题
            return keystr;
        }
        if( typeof keystr !== 'string' ){
            throw "Not allowed keystr type!";
        }
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
        let outkeys;
        if( Array.isArray( keystr ) ){
            outkeys = keystr;
        }else if( typeof keystr === 'string' ){
            let thiskeystr = keystr.trim();
            if( thiskeystr[0] !== '[' )
                thiskeystr = '[' + thiskeystr;
            if( thiskeystr.slice(-1) !== ']' )
                thiskeystr += ']';
            outkeys = JSON.parse( thiskeystr );
        }else{
            throw "Not allowed keystr type!";
        }
        for(let i of outkeys){
            if( !['number','string'].includes( typeof i ) ){
                throw "Not allowed keystr Array format";
            }
            if( i == '__proto__' ){
                throw anti__proto__;
            }
        }
        // 检查了，没问题
        return outkeys;
    }
    throw 'Not allowed keymode!';
}

module.exports.for_json_get_keys = for_json_get_keys;
```
