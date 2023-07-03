---
sidebar_position: 10
---
# userAgent

userAgent

![img](img\userAgent\image.png)  


***
## 返回类型
String


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.userAgent`,
        messageId: `${category_id}.userAgent`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> navigator.userAgent
    },
```
