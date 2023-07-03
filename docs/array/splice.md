---
sidebar_position: 11
---
# splice

splice

![img](img\splice\image.png)  


***
## 输入类型
v1：String | Object  
n1：Number | any  
n2：Number | any  
v2：String | Object  
return_type：String  


***
## 使用示例
![2](img\splice\2.png)  
![3](img\splice\3.png)  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.splice`,
        messageId: `${category_id}.splice`,
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
                default: '2'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"clipcc","yes"'
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
                if( typeof v2 === 'string' ){
                    try{
                        v2 = JSON.parse( `[${v2}]` );
                    }catch{}
                }

                v1.splice(
                    args.n1, args.n2,
                    ...v2
                )

                return returnType(
                    v1,
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
