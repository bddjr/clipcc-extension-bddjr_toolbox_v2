---
sidebar_position: 17
---
# 项目克隆体总数

project clone counter

![img](img\project_clone_counter\image.png)  


***
## 返回类型
Number


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.project_clone_counter`,
        messageId: `${category_id}.project_clone_counter`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> util.runtime._cloneCounter
    },
```
