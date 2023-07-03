---
sidebar_position: 12
---
# 连接

concat

![img](img\concat\image.png)  


***
## 输入类型
v1：String | Object(Array)  
v2：String | Object(Array)  
return_type：String  


***
## 使用示例
![2](img\concat\2.png)  
![3](img\concat\3.png)  
![4](img\concat\4.png)  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.1
        opcode: `${category_id}.concat`,
        messageId: `${category_id}.concat`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '["clipcc","yes"],["sey","ccpilc"]'
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
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse(`[${v2}]`);
                    }catch{}
                }

                return returnType(
                    v1.concat( ...v2 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
