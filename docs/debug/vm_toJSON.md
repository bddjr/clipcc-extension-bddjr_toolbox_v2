---
sidebar_position: 3
---
# vm.toJSON()

vm toJSON

![img](img\vm_toJSON\image.png)  


***
## 返回类型
String

***
## 源码
```js title="/categorys/debug.js"
    {//2.0.0
        opcode: `${category_id}.vm_toJSON`,
        messageId: `${category_id}.vm_toJSON`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> vm.toJSON()
    },
```
