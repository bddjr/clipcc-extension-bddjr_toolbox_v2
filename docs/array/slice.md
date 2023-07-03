---
sidebar_position: 5
---
# 截取

slice

![img](img\slice\image.png)  


***
## 输入类型
v1：String | Object(Array)  
n1：Number | any  
n2：Number | any  
return_type：String  


***
## 使用示例
![2](img\slice\2.png)  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.slice`,
        messageId: `${category_id}.slice`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '-1'
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
                    v1.slice(
                        args.n1 ,
                        args.n2==='' ? undefined : args.n2
                    ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
