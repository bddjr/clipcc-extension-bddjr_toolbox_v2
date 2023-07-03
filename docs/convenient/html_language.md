---
sidebar_position: 11
---
# html语言

html language

![img](img\html_language\image.png)  


***
## 返回类型
String


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.html_language`,
        messageId: `${category_id}.html_language`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> navigator.language
    },
```
