---
sidebar_position: 4
---
# undefined

undefined  

输出 undefined 。  

![img](img\undefined\image.png)  


***
## 返回类型
:::danger
undefined类型不能被存入作品！存入后很可能导致作品无法被再次加载！  
:::

始终为 undefined  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.undefined`,
        messageId: `${category_id}.undefined`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> undefined
    },
```