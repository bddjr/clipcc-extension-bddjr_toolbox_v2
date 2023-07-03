---
sidebar_position: 21
---
# 获取Scratch变量

get scratch var

![img](img\get_scratch_var\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
type: String  
name: String  

:::caution
如果找不到角色或变量，会报错
:::


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.get_scratch_var`,
        messageId: `${category_id}.get_scratch_var`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            type: {
                type: type.ParameterType.STRING,
                default: 'var',
                menu: scratch_var_type_menu
            },
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                switch( args.type ){
                    case 'list':
                        var a = get_var_obj_from_sprite_name(
                            util,
                            args.sprite_type,
                            args.sprite_name,
                            'list',
                            args.name
                        );
                        if( a === undefined )
                            throw `Can not get list from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                        return JSON.stringify(a.value);
                    case 'var':
                        var a = get_var_obj_from_sprite_name(
                            util,
                            args.sprite_type,
                            args.sprite_name,
                            '',
                            args.name
                        );
                        if( a === undefined )
                            throw `Can not get variable from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                        return a.value;
                }
                throw 'Not allowed variable type!';
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
