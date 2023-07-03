---
sidebar_position: 7
---
# 是NaN

is NaN  

检测输入内容是不是NaN。  

![img](img\is_NaN\image.png)  

***
## 输入类型
v：Number | any  

***
## 返回类型
始终为 Boolean  


***
## 使用示例
![NaN](img\is_NaN\NaN.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.is_NaN`,
        messageId: `${category_id}.is_NaN`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: undefined
            }
        },
        function: (args,util)=> Number.isNaN( args.v )
    },
```