---
sidebar_position: 6
---
# 当 布尔值 是成立

hat when is true

![img](img\hat_when_is_true\image.png)  

直接向Scratch输出布尔值，让Scratch判断是否触发。  

:::caution
如果一直成立，单击绿旗时会再触发一次
:::


***
## 输入类型
b: Boolean | any  


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.hat_when_is_true`,
        messageId: `${category_id}.hat_when_is_true`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        param:{
            b: {
                type: type.ParameterType.BOOLEAN
            },
        },
        function: (args,util)=> to_scratch_boolean(args.b)
    },
```
