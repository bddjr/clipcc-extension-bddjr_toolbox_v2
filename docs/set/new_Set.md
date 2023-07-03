---
sidebar_position: 1
---
# new Set

new Set

![img](img\new_Set\image.png)  


***
## 输入类型
v1: String | Object(Array) | any  

***
## 返回类型 (正常情况下)
:::danger
Object类型不能保存到作品！
:::

Object(Set)


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.new_Set`,
        messageId: `${category_id}.new_Set`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'strings'
            },
        },
        function: (args,util)=>{
            try{
                return new Set(args.v1);
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
