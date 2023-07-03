---
sidebar_position: 12
---
# 转为数类型

number   

![img](img\number\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
:::danger
可能会因为不当操作而产生NaN！NaN不能保存到作品！
:::

始终为 Number  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.number`,
        messageId: `${category_id}.number`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '123456'
            }
        },
        function: (args,util)=> Number( args.v )
    },
```