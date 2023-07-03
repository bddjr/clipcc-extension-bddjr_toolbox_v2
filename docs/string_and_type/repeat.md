---
sidebar_position: 32
---
# 重复字符串

repeat

![img](img\repeat\image.png)  


***
## 输入类型
v：String | any  
n1：Number | any  


***
## 返回类型
String


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.1
        opcode: `${category_id}.repeat`,
        messageId: `${category_id}.repeat`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '我爱你！'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '520'
            }
        },
        function: (args,util)=> String( args.v ).repeat( args.n1 )
    },
```
