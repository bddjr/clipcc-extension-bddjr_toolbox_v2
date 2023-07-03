---
sidebar_position: 24
---
# 整数toString

integer toString

![img](img\integer_toString\image.png)  


***
## 输入类型
v：Number | any  
count：Number | any  


***
## 返回类型 (正常情况下)
String


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.integer_toString`,
        messageId: `${category_id}.integer_toString`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '500'
            },
            count: {
                type: type.ParameterType.NUMBER,
                default: '36'
            },
        },
        function: (args,util)=> {
            try{
                return Number( args.v ).toString( args.count );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
```
