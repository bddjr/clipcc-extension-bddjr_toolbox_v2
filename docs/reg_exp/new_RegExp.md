---
sidebar_position: 1
---
# new RegExp

new RegExp

![img](img\new_RegExp\image.png)  


***
## 输入类型
v1：String | RegExp  
v2：String  


***
## 返回类型
:::danger
Object类型不能保存到作品！
:::

Object


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.new_RegExp`,
        messageId: `${category_id}.new_RegExp`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '^#[0-9a-fA-F]{6}$'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'g'
            },
        },
        function: (args,util)=>{
            try{
                return new RegExp( args.v1, args.v2 ) ;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
