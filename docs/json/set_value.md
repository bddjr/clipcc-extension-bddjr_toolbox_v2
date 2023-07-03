---
sidebar_position: 2
---
# 从键设值

set value

![img](img\set_value\image.png)  


***
## 输入类型
v1：String | Object  
keymode：String  
key：String  
operator：String  
v2：String | Object | any  
return_type：String  


***
## 使用示例
![2](img\set_value\2.png)  


***
## 源码
```js title="/categorys/json.js"
    {//2.0.1
        opcode: `${category_id}.set_value`,
        messageId: `${category_id}.set_value`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":{"key2":"value"}}'
            },
            keymode: {
                type: type.ParameterType.STRING,
                default: '.',
                menu: keymodeMenu
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'key.key2',
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"Hello World!"',
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );
                let globaljson = thisjson;

                // 不包含的keymode会抛出错误
                let keyslist = for_json_get_keys( args.keymode, args.key );

                let setValue = args.v2;
                if( typeof setValue === 'string' ){
                    try{
                        setValue = JSON.parse( setValue );
                    }catch{}
                }

                let setKey;

                if( typeof keyslist === 'number' )
                    setKey = keyslist;
                else if( args.keymode === 'Array' ){
                    for( let i=0 ; i< keyslist.length-1 ; i++ ){
                        if( (+i)<0 && Array.isArray(thisjson) ){
                            // 兼容数组负数下标取值
                            i = thisjson.length + (+i);
                        }
                        thisjson = thisjson[ keyslist[i] ];
                    }
                    setKey = keyslist.slice(-1);
                }else{ // args.keymode === '.'
                    if( Array.isArray( keyslist ) ){
                        for( let i of keyslist ){
                            if( Array.isArray( i ) ){
                                if( Array.isArray(thisjson) && (+i[0])<0 ){
                                    // 兼容数组负数下标取值
                                    i[0] = thisjson.length + (+i[0]);
                                }
                                thisjson = thisjson[ i[0] ];
                                if( i[1] ==='?.' && !thisjson )
                                    break;
                            }else{
                                setKey = i ;
                            }
                        }
                    }else{ // typeof keyslist === 'string'
                        if( Array.isArray(thisjson) && (+keyslist)<0 ){
                            // 兼容数组负数下标取值
                            keyslist = thisjson.length + (+keyslist);
                        }
                        setKey = keyslist;
                    }
                }
                if( Array.isArray(thisjson) && (+setKey)<0 ){
                    // 兼容数组负数下标取值
                    setKey = thisjson.length + (+setKey);
                }
                switch( args.operator ){
                    case '=':
                        thisjson[setKey] = setValue;
                        break;
                    case '+=':
                        thisjson[setKey] += setValue;
                        break;
                    case '-=':
                        thisjson[setKey] -= setValue;
                        break;
                    case '*=':
                        thisjson[setKey] *= setValue;
                        break;
                    case '/=':
                        thisjson[setKey] /= setValue;
                        break;
                    case '%=':
                        thisjson[setKey] %= setValue;
                        break;
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }
                return returnType( globaljson, args.return_type );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
```
