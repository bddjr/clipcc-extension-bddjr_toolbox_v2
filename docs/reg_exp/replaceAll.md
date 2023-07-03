---
sidebar_position: 6
---
# replaceAll

replaceAll

![img](img\replaceAll\image.png)  


***
## 输入类型
v1：String  
v2：String | RegExp  
v3：String


***
## 返回类型 (正常情况下)
String


***
## 使用示例
![2](img\replaceAll\2.png)  

:::caution
输入的正则表达式后面必须包含 g 关键字！下方这张图为错误示范
:::
![3](img\replaceAll\3.png)  


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.replaceAll`,
        messageId: `${category_id}.replaceAll`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World! Hello World!'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'World'
            },
            v3: {
                type: type.ParameterType.STRING,
                default: 'ClipCC'
            }
        },
        function: (args,util)=>{
            try{
                return args.v1.replaceAll( args.v2, args.v3 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
