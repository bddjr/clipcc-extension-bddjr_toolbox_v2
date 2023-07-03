---
sidebar_position: 6
---
# split

split

![img](img\split\image.png)  


***
## 输入类型
v1：String  
v2：String | RegExp  
return_type：String


***
## 使用示例
:::note
以下示例是使用正则表达式分割的场景
:::
![2](img\split\2.png)  
![3](img\split\3.png)  


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.split`,
        messageId: `${category_id}.split`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'apple banana cat'
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
                let v2 = args.v2;
                if( typeof v2 === 'string' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                return returnType(
                    args.v1.split( v2 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
