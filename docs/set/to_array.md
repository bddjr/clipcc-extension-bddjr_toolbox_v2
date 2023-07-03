---
sidebar_position: 8
---
# 转成数组

to array

![img](img\to_array\image.png)  


***
## 输入类型
v1: Object(Set)  
return_type: String  


***
## 使用示例
![2](img\to_array\2.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.to_array`,
        messageId: `${category_id}.to_array`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    Array.from( args.v1 ),
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
