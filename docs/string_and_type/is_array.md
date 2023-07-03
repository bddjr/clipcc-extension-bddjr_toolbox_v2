---
sidebar_position: 6
---
# 是数组

is array  

检测输入内容是不是数组。  

![img](img\is_array\image.png)  

***
## 输入类型
v：Object | any  

***
## 返回类型
始终为 Boolean  


***
## 使用示例
![json](img\is_array\json.png)  
![array](img\is_array\array.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.is_array`,
        messageId: `${category_id}.is_array`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: undefined,
            }
        },
        function: (args,util)=> Array.isArray( args.v )
    },
```