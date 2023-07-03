---
sidebar_position: 13
---
# 并为字符串

join

![img](img\join\image.png)  


***
## 输入类型
v1：String | Object(Array)  
v2：String  
return_type: String  


***
## 返回类型
String


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.join`,
        messageId: `${category_id}.join`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '" "'
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

                let v2 = args.v2;
                try{
                    v2 = JSON.parse( v2 );
                }catch{}

                return v1.join( v2 );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
