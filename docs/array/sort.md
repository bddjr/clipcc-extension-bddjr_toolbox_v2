---
sidebar_position: 14
---
# sort 排序

sort

![img](img\sort\image.png)  


***
## 输入类型
v1：String | Object(Array)  
type：String  
keymode: String  
key: String  
return_type：String  


***
## 使用示例
![2](img\sort\2.png)  
![3](img\sort\3.png)  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.sort`,
        messageId: `${category_id}.sort`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[{"name":"XiaoMing","score":98},{"name":"XiaoHong","score":92},{"name":"LiHua","score":95}]'
            },
            type: {
                type: type.ParameterType.STRING,
                default: 'down',
                menu: make_menus(
                    `${category_id}.sort.menu`,
                    'null',
                    'up',
                    'down'
                )
            },
            keymode: {
                type: type.ParameterType.STRING,
                default: '.',
                menu: keymodeMenu
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'score',
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let v = args.v1;
                if( typeof v !== 'object' )
                    v = JSON.parse( v );

                switch( args.type ){
                    case 'null':
                        return returnType(
                            v.sort() ,
                            args.return_type
                        );

                    case 'up':
                        if(args.key === ''){
                            return returnType(
                                v.sort((a,b)=>{
                                    return a-b;
                                }) ,
                                args.return_type
                            );
                        }
                        // 不包含的keymode会抛出错误
                        var keyslist = for_json_get_keys( args.keymode, args.key );
                        return returnType(
                            v.sort((a,b)=>{
                                return (
                                    get_value_for_sort( b, args.keymode, keyslist )
                                    -
                                    get_value_for_sort( a, args.keymode, keyslist )
                                );
                            }) ,
                            args.return_type
                        );

                    case 'down':
                        if(args.key === ''){
                            return returnType(
                                v.sort((a,b)=>{
                                    return b-a;
                                }) ,
                                args.return_type
                            );
                        }
                        // 不包含的keymode会抛出错误
                        var keyslist = for_json_get_keys( args.keymode, args.key );
                        return returnType(
                            v.sort((a,b)=>{
                                return (
                                    get_value_for_sort( b, args.keymode, keyslist )
                                    -
                                    get_value_for_sort( a, args.keymode, keyslist )
                                );
                            }) ,
                            args.return_type
                        );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```


```js title="/categorys/array.js"
function get_value_for_sort( thisjson, keymode, keyslist ){
    if( typeof keyslist === 'number' ){
        return thisjson[ keyslist ];
    }

    if( keymode === 'Array' ){
        for( let i of keyslist ){
            if( (+i)<0 && Array.isArray(thisjson) ){
                // 兼容数组负数下标取值
                i = thisjson.length + (+i);
            }
            thisjson = thisjson[ i ];
        }

    }else{ // keymode === '.'
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
                    if( Array.isArray(thisjson) && (+i)<0 ){
                        // 兼容数组负数下标取值
                        i = thisjson.length + (+i);
                    }
                    thisjson = thisjson[ i ];
                }
            }
        }else{ // typeof keyslist === 'string'
            if( Array.isArray(thisjson) && (+keyslist)<0 ){
                // 兼容数组负数下标取值
                keyslist = thisjson.length + (+keyslist);
            }
            thisjson = thisjson[ keyslist ];
        }
    }
    return thisjson
}
```
