---
sidebar_position: 1
---
# 结尾加入

push

![img](img\push\image.png)  


***
## 输入类型
v1：String | Object(Array)  
v2：String | any  
return_type：String  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.push`,
        messageId: `${category_id}.push`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"doge"'
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
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                v1.push(v2)
                return returnType( v1, args.return_type );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
