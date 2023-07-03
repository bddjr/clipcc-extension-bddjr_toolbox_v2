---
sidebar_position: 16
---
# 转成 Scratch 布尔值

to scratch boolean

使用 Scratch 的方式将内容转为布尔值

![img](img\to_scratch_boolean\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
Boolean


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.to_scratch_boolean`,
        messageId: `${category_id}.to_scratch_boolean`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'false'
            }
        },
        function: (args,util)=> to_scratch_boolean( args.v )
    },
```
