---
sidebar_position: 3
---
# 获取所有键或所有值

get keys

![img](img\get_keys\image.png)  


***
## 输入类型
v1：String | Object  
v2：String  
return_type：String  


***
## 源码
```js title="/categorys/json.js"
    {//2.0.0
        opcode: `${category_id}.get_keys`,
        messageId: `${category_id}.get_keys`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"k1":"v1","k2":"v2"}'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'keys',
                menu: make_menus(
                    `${category_id}.get_keys.menu`,
                    'keys',
                    'values',
                    'entries'
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
                if(
                    ![
                        'keys',
                        'values',
                        'entries'
                    ].includes(args.v2)
                ) throw 'Not allowed function name!';

                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );

                return returnType( Object[ args.v2 ]( thisjson ), args.return_type );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
```
