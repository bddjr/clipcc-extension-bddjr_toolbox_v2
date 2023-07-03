---
sidebar_position: 2
---
# 剪贴板写入文本

clipboard writeText

![img](img\clipboard_writeText\image.png)  


***
## 输入类型
v1：String | any  


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.clipboard_writeText`,
        messageId: `${category_id}.clipboard_writeText`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
        },
        function: (args,util)=>{
            try{
                // 仅表示成功创建对象。由于该函数是异步执行，所以无法直接返回是否成功复制。
                return !!window.navigator?.clipboard?.writeText?.( String(args.v1) );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
```
