---
sidebar_position: 1
---
# 从键取值

get

![img](img\get\image.png)  


***
## 输入类型
v1：String | Object  
keymode：String  
key：String  
return_type：String


***
## 使用示例
![2](img\get\2.png)  
![3](img\get\3.png)  
![4](img\get\4.png)  
![5](img\get\5.png)  
![6](img\get\6.png)  
![7](img\get\7.png)  

:::caution
如果使用 `.` 模式输入键，请确保键不含 `.` 或 `?`  
:::


***
## 源码
```js title="/categorys/json.js"
    {//2.0.2
        opcode: `${category_id}.get`,
        messageId: `${category_id}.get`,
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
                let lastkey;
                let lastjson;

                // 不包含的keymode会抛出错误
                let keyslist = for_json_get_keys( args.keymode, args.key );

                if( typeof keyslist === 'number' ){
                    lastkey = keyslist;
                    lastjson = thisjson;
                    thisjson = thisjson[ keyslist ];
                }else if( args.keymode === 'Array' ){
                    for( let i of keyslist ){
                        if( (+i)<0 && Array.isArray(thisjson) ){
                            // 兼容数组负数下标取值
                            i = thisjson.length + (+i);
                        }
                        lastkey = i;
                        lastjson = thisjson;
                        thisjson = thisjson[ i ];
                    }

                }else{ // args.keymode === '.'
                    if( Array.isArray( keyslist ) ){
                        for( let i of keyslist ){
                            if( Array.isArray( i ) ){
                                if( (+i[0])<0 && Array.isArray(thisjson)  ){
                                    // 兼容数组负数下标取值
                                    i[0] = thisjson.length + (+i[0]);
                                }
                                lastkey = i[0];
                                lastjson = thisjson;
                                thisjson = thisjson[ i[0] ];
                                if( i[1] ==='?.' && !thisjson )
                                    break;
                            }else{
                                if( (+i)<0 && Array.isArray(thisjson) ){
                                    // 兼容数组负数下标取值
                                    i = thisjson.length + (+i);
                                }
                                lastkey = i;
                                lastjson = thisjson;
                                thisjson = thisjson[ i ];
                            }
                        }
                    }else{ // typeof keyslist === 'string'
                        if( (+keyslist)<0 && Array.isArray(thisjson) ){
                            // 兼容数组负数下标取值
                            keyslist = thisjson.length + (+keyslist);
                        }
                        lastkey = keyslist;
                        lastjson = thisjson;
                        thisjson = thisjson[ keyslist ];
                    }
                }

                return returnType(
                    // 防止返回prototype里的函数
                    Object.hasOwn( lastjson, lastkey ) ? thisjson : undefined ,
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
```
