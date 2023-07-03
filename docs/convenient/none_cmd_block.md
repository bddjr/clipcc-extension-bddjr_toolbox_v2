---
sidebar_position: 3
---
# 无效的命令积木

none cmd block

![img](img\none_cmd_block\image.png)  


***
## 输入类型
v：any  


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.none_cmd_block`,
        messageId: `${category_id}.none_cmd_block`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: ' '
            },
        },
        function: undefined //特性
    },
```
