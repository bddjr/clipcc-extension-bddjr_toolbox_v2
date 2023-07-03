---
sidebar_position: 7
---
# stringify

stringify

![img](img\stringify\image.png)  


***
## 输入类型
v1：Object | String | any  


***
## 返回类型
String


***
## 使用示例
![2](img\stringify\2.png)  


***
## 源码
```js title="/categorys/json.js"
    {//2.0.0
        opcode: `${category_id}.stringify`,
        messageId: `${category_id}.stringify`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
        },
        function: (args,util)=>{
            try{
                return JSON.stringify( args.v1 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
```
