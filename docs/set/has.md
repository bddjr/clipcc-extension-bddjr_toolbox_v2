---
sidebar_position: 7
---
# 含

has

![img](img\has\image.png)  


***
## 输入类型
v1: Object(Set)  
v2: String | any  


***
## 返回类型 (正常情况下)
Boolean


***
## 使用示例
![2](img\has\2.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.has`,
        messageId: `${category_id}.has`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }
                
                return args.v1.has(v2);
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
