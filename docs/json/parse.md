---
sidebar_position: 6
---
# parse

parse

![img](img\parse\image.png)  


***
## 输入类型
v1：String  


***
## 返回类型
:::danger
Object类型不能保存到作品！
:::

Object


***
## 使用示例
![2](img\parse\2.png)  
![3](img\parse\3.png)  
![4](img\parse\4.png)  


***
## 源码
```js title="/categorys/json.js"
    {//2.0.0
        opcode: `${category_id}.parse`,
        messageId: `${category_id}.parse`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":"value"}'
            },
        },
        function: (args,util)=>{
            try{
                return JSON.parse( args.v1 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
```
