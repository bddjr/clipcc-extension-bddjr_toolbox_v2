---
sidebar_position: 17
---
# 转成 JavaScript 布尔值

to js boolean

![img](img\to_js_boolean\image.png)  

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
        opcode: `${category_id}.to_js_boolean`,
        messageId: `${category_id}.to_js_boolean`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'false'
            }
        },
        function: (args,util)=> Boolean( args.v )
    },
```
