---
sidebar_position: 1
---
# 三元运算符

ternary operator

![img](img\ternary_operator\image.png)  


***
## 输入类型
b：Boolean | any  
t：any  
f：any  


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.ternary_operator`,
        messageId: `${category_id}.ternary_operator`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            b: {
                type: type.ParameterType.BOOLEAN
            },
            t: {
                type: type.ParameterType.STRING,
                default: 'is true'
            },
            f: {
                type: type.ParameterType.STRING,
                default: 'is false'
            },
        },
        function: (args,util)=> to_scratch_boolean(args.b) ? args.t : args.f
    },
```
