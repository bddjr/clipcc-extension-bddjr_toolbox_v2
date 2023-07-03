---
sidebar_position: 1
---
# BTBv2 错误消息

err msg

![img](img\err_msg\image.png)  


***
## 返回类型
String

***
## 源码
```js title="/categorys/debug.js"
    {//2.0.0
        opcode: `${category_id}.err_msg`,
        messageId: `${category_id}.err_msg`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> err_msg[0]
    },
```
