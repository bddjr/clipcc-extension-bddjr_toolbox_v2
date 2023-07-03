---
sidebar_position: 19
---
# 是克隆体

is_clone

![img](img\is_clone\image.png)  


***
## 返回类型
Boolean


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.is_clone`,
        messageId: `${category_id}.is_clone`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: (args,util)=> !util.target.isOriginal
    },
```
