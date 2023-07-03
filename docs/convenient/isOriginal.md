---
sidebar_position: 18
---
# 是原角色 (不是克隆体)

isOriginal

![img](img\isOriginal\image.png)  


***
## 返回类型
Boolean


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.isOriginal`,
        messageId: `${category_id}.isOriginal`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: (args,util)=> util.target.isOriginal
    },
```
