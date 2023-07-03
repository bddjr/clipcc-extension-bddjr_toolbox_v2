---
sidebar_position: 10
---
# 填充

fill

![img](img\fill\image.png)  


***
## 输入类型
v1：String | Object(Array)  
v2：String  
n1：Number | any  
n2：Number | any  
return_type：String  


***
## 使用示例
![2](img\fill\2.png)  
![3](img\fill\3.png)  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.fill`,
        messageId: `${category_id}.fill`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"clipcc"'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '2'
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

                return returnType(
                    v1.fill(
                        v2,
                        args.n1==='' ? undefined : args.n1 ,
                        args.n2==='' ? undefined : args.n2 ,
                    ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
