---
sidebar_position: 3
---
# exec

exec

![img](img\exec\image.png)  


***
## 输入类型
v1：RegExp  
v2：String  


***
## 使用示例
:::caution
重复使用同一个正则表达式对象会重复推导下一个结果，得到的可能不是你想要的结果！  
如果你每次只需要检查第一个，请不要复用同一个正则表达式对象，应当每次都创建一个新的对象。
:::

![2](img\exec\2.png)  


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.exec`,
        messageId: `${category_id}.exec`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined,
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '#00a5e6'
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'string',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    args.v1.exec( args.v2 ),
                    args.return_type,
                    false
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
