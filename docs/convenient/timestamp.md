---
sidebar_position: 9
---
# 时间戳

timestamp

![img](img\timestamp\image.png)  


***
## 返回类型
Number


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.timestamp`,
        messageId: `${category_id}.timestamp`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> Date.now()
    },
```
