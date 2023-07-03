---
sidebar_position: 5
---
# null

null  

输出 null 。  

![img](img\null\image.png)  


***
## 返回类型
:::danger
null类型不能被存入作品！存入后很可能导致作品无法被再次加载！  
:::

始终为 null  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.null`,
        messageId: `${category_id}.null`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> null
    },
```