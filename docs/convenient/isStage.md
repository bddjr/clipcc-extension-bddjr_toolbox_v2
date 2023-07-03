---
sidebar_position: 14
---
# 是背景

isStage

![img](img\isStage\image.png)  

检测这个角色或克隆体本身是不是背景

***
## 返回类型
Boolean


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.isStage`,
        messageId: `${category_id}.isStage`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: (args,util)=> util.target.isStage
    },
```
