---
sidebar_position: 33
---
# instanceof

instanceof

![img](img\instanceof\image.png)  


***
## 输入类型
v1：Object | any  
v2：String  


***
## 返回类型 (正常情况下)
Boolean


***
## 使用示例
![2](img\instanceof\2.png)  
![3](img\instanceof\3.png)  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.1
        opcode: `${category_id}.instanceof`,
        messageId: `${category_id}.instanceof`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'Set'
            },
        },
        function: (args,util)=>{
            try{
                // @ts-ignore
                return args.v1 instanceof window[ args.v2 ];
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
```
