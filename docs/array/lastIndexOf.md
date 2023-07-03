---
sidebar_position: 3
---
# 查找最后一个对应元素

lastIndexOf

![img](img\lastIndexOf\image.png)  


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
    {//2.0.1
        opcode: `${category_id}.lastIndexOf`,
        messageId: `${category_id}.lastIndexOf`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat","apple"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
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

                return v1.lastIndexOf(v2);

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
