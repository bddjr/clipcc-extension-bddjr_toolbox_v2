---
sidebar_position: 9
---
# 扁平化

flat

![img](img\flat\image.png)  


***
## 输入类型
v1：String | Object(Array)  
n1：Number | any  
return_type：String  


***
## 使用示例
![2](img\flat\2.png)  
***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.flat`,
        messageId: `${category_id}.flat`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[["apple"], ["banana", ["cat"]]]'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '1'
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
                    v1.flat( args.n1==='' ? undefined : args.n1 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
