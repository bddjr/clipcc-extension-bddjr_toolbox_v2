---
sidebar_position: 15
---
# 返回

return for reporter | return for reporter color | return for boolean

![img](img\return\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
any


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.return_for_reporter`,
        messageId: `${category_id}.return`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function: (args,util)=> args.v
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.return_for_reporter_color`,
        messageId: `${category_id}.return`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.COLOR,
                default: '#4c97ff'
            }
        },
        function: (args,util)=> args.v
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.return_for_boolean`,
        messageId: `${category_id}.return`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function: (args,util)=> args.v
    },
```

