---
sidebar_position: 14
---
# 字符串截取

string slice   

![img](img\string_slice\image.png)  

***
## 输入类型
v：始终转为String  
n1：Number | any  
n2：Number | any

***
## 返回类型
String


***
## 使用示例
![2](img\string_slice\2.png)  
![3](img\string_slice\3.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.string_slice`,
        messageId: `${category_id}.string_slice`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '-1'
            },
        },
        function: (args,util)=> String( args.v ).slice(
            args.n1 ,
            args.n2==='' ? undefined : args.n2
        )
    },
```

