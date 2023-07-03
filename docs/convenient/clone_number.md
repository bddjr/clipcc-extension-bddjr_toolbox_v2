---
sidebar_position: 15
---
# 克隆体编号

clone number

![img](img\clone_number\image.png)  

:::caution
如果删除了中间的克隆体，那么后面的克隆体检测到的编号会跟着变化
:::


***
## 返回类型
Number


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.clone_number`,
        messageId: `${category_id}.clone_number`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util) => get_clone_number(util.target)
    },
```
