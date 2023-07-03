---
sidebar_position: 3
---
# 查找首个对应元素

indexOf

![img](img\indexOf\image.png)  


***
## 输入类型
v1：String | Object(Array)  
v2：String | any  


***
## 返回类型
Number


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.indexOf`,
        messageId: `${category_id}.indexOf`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"banana"'
            },
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                return v1.indexOf(v2);

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
