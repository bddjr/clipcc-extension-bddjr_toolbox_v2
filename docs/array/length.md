---
sidebar_position: 2
---
# 长度

length

![img](img\length\image.png)  


***
## 输入类型
v1：String | Object(Array)  


***
## 返回类型
Number


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.length`,
        messageId: `${category_id}.length`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            }
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                return v1.length;

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
