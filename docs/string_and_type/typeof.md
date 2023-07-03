---
sidebar_position: 3
---
# 输入的类型

typeof  

获取输入内容的类型。  

![img](img\typeof\image.png)  

***
## 输入类型
v：any  

***
## 返回类型
始终为 String  


***
## 使用示例
![string](img\typeof\string.png)  
![number](img\typeof\number.png)  
![boolean](img\typeof\boolean.png)  
![object](img\typeof\object.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.typeof`,
        messageId: `${category_id}.typeof`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: undefined,
            }
        },
        function: (args,util)=> typeof args.v
    },
```