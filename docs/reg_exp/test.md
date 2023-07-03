---
sidebar_position: 2
---
# test

test

![img](img\test\image.png)  


***
## 输入类型
v1：RegExp  
v2：String  


***
## 返回类型 (正常情况下)
Boolean


***
## 使用示例
:::caution
重复使用同一个正则表达式对象会重复推导下一个结果，得到的可能不是你想要的结果！  
如果你每次只需要检查有没有，请不要复用同一个正则表达式对象，应当每次都创建一个新的对象。
:::

![2](img\test\2.png)  


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.test`,
        messageId: `${category_id}.test`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined,
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '#00a5e6'
            },
        },
        function: (args,util)=>{
            try{
                return args.v1.test( args.v2 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
