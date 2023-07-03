---
sidebar_position: 8
---
# 倒序

reverse

![img](img\reverse\image.png)  


***
## 输入类型
v1：String | Object(Array)  
return_type：String  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.reverse`,
        messageId: `${category_id}.reverse`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[999,123,456,654,15,30,664]'
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                return returnType(
                    v1.reverse(),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
