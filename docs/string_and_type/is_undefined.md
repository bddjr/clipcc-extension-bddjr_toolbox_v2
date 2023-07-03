---
sidebar_position: 9
---
# 是undefined

is undefined  

检测输入内容是不是undefined。  

![img](img\is_undefined\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
始终为 Boolean  


***
## 使用示例
![undefined](img\is_undefined\undefined.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.is_undefined`,
        messageId: `${category_id}.is_undefined`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: undefined
            }
        },
        function: (args,util)=> ( args.v === undefined )
    },
```