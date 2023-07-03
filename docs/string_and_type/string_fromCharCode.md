---
sidebar_position: 31
---
# 编码转字符

string fromCharCode

![img](img\string_fromCharCode\image.png)  


***
## 输入类型
n1：Number | any  


***
## 返回类型
:::danger
可能会因为不当操作而产生奇怪的字符！一些奇怪的字符可能不能保存到作品！
:::

String


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.string_fromCharCode`,
        messageId: `${category_id}.string_fromCharCode`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            n1: {
                type: type.ParameterType.NUMBER,
                default: '97'
            }
        },
        function: (args,util)=> String.fromCharCode( args.n1 )
    },
```
