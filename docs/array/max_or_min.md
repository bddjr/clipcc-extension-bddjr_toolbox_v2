---
sidebar_position: 7
---
# 最大项或最小项

max_or_min

![img](img\max_or_min\image.png)  


***
## 输入类型
v1：String | Object(Array)  
mxx：String  
return_type：String  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.max_or_min`,
        messageId: `${category_id}.max_or_min`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[999,123,456,654,15,30,664]'
            },
            mxx: {
                type: type.ParameterType.STRING,
                default: 'max',
                menu: make_menus(
                    `${category_id}.max_or_min.menu`,
                    'max',
                    'min'
                )
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                if( !['max', 'min'].includes( args.mxx ) )
                    throw 'Not allowed function name!';

                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                return returnType(
                    Math[ args.mxx ].apply( null, v1 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
