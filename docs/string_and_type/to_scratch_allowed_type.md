---
sidebar_position: 13
---
# 转成 Scratch 允许的类型

to scratch allowed type   

![img](img\to_scratch_allowed_type\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
String | Number(Finite) | Boolean


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.to_scratch_allowed_type`,
        messageId: `${category_id}.to_scratch_allowed_type`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: ' '
            }
        },
        function: (args,util)=> to_scratch_type( args.v )
    },
```
