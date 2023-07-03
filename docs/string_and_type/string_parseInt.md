---
sidebar_position: 25
---
# parseInt

string parseInt

![img](img\string_parseInt\image.png)  


***
## 输入类型
v：Number | String  
count：Number | any  


***
## 返回类型
:::danger
可能会因为不当操作而产生NaN！NaN不能保存到作品！
:::

Number


***
## 使用示例
![2](img\string_parseInt\2.png)  

***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.string_parseInt`,
        messageId: `${category_id}.string_parseInt`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'dw'
            },
            count: {
                type: type.ParameterType.NUMBER,
                default: '36'
            },
        },
        function: (args,util)=>{
            return Number.parseInt(
                args.v,
                args.count ==='' ? undefined : args.count
            );
        }
    },
```
