---
sidebar_position: 13
---
# 积木id

block id

![img](img\block_id\image.png)  

输出这个积木本身的id

***
## 返回类型
String


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.block_id`,
        messageId: `${category_id}.block_id`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> util.currentBlock.id
    },
```
