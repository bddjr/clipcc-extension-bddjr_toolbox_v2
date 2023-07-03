---
sidebar_position: 4
---
# search

search

![img](img\search\image.png)  


***
## 输入类型
v1：String  
v2：String | RegExp  


***
## 返回类型 (正常情况下)
Number


***
## 使用示例
![2](img\search\2.png)  


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.search`,
        messageId: `${category_id}.search`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'World'
            }
        },
        function: (args,util)=>{
            try{
                return args.v1.search( args.v2 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
