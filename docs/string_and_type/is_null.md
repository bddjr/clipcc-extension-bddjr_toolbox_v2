---
sidebar_position: 10
---
# 是null

is null  

检测输入内容是不是null。  

![img](img\is_null\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
始终为 Boolean  


***
## 使用示例
![null](img\is_null\null.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.is_null`,
        messageId: `${category_id}.is_null`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: undefined
            }
        },
        function: (args,util)=> ( args.v === null )
    },
```