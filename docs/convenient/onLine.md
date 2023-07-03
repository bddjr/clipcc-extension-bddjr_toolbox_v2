---
sidebar_position: 12
---
# onLine

onLine

![img](img\onLine\image.png)  

调用浏览器的功能检测是否联网（可能不靠谱）

***
## 返回类型
Boolean


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.onLine`,
        messageId: `${category_id}.onLine`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: ()=> navigator.onLine
    },
```
