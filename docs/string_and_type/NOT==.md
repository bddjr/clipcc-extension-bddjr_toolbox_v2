---
sidebar_position: 23
---
# ！==

!==

弱类型判断不等（会尝试转为相同类型判断）

![img](img\NOT==\image.png)  


***
## 输入类型
v1：any  
v2：any  


***
## 返回类型
Boolean


***
## 使用示例
![2](img\NOT==\2.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {
        opcode: `${category_id}.!==`,
        messageId: '[v1] !== [v2]',
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'abc'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'ABC'
            },
        },
        function: (args,util)=> ( args.v1 !== args.v2 )
    },
```
