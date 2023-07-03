---
sidebar_position: 4
---
# 检测有键

hasOwnProperty

![img](img\hasOwnProperty\image.png)  


***
## 输入类型
v1：String | Object  
key：String | Number | any


***
## 返回类型
Boolean


***
## 源码
```js title="/categorys/json.js"
    {//2.0.0
        opcode: `${category_id}.hasOwnProperty`,
        messageId: `${category_id}.hasOwnProperty`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":"value"}'
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'key'
            },
        },
        function: (args,util)=>{
            try{
                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );

                return thisjson.hasOwnProperty( args.key );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
```
