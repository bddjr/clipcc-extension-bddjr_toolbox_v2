---
sidebar_position: 8
---
# 是Finite

is Finite  

检测输入内容是不是有限数。  

![img](img\is_Finite\image.png)  

***
## 输入类型
v：Number | any  

***
## 返回类型
始终为 Boolean  


***
## 使用示例
![finite](img\is_Finite\finite.png)  
![infinity](img\is_Finite\infinity.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.is_Finite`,
        messageId: `${category_id}.is_Finite`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: undefined
            }
        },
        function: (args,util)=> Number.isFinite( args.v )
    },
```