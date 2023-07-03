---
sidebar_position: 11
---
# 转为字符串类型

string   

![img](img\string\image.png)  

***
## 输入类型
v：any（不建议Object）  

***
## 返回类型
始终为 String  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.string`,
        messageId: `${category_id}.string`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'string'
            }
        },
        function: (args,util)=> String( args.v )
    },
```