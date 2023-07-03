---
sidebar_position: 1
---
# 清除所有全局临时变量

clear all

![img](img\clear_all\image.png)  


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.1
        opcode: `${category_id}.clear_all`,
        messageId: `${category_id}.clear_all`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        function: (args,util)=>{
            Reflect.deleteProperty(
                vm ,
                'bddjr_toolbox_v2_temp_var'
            );
        }
    },
```
