---
sidebar_position: 25
---
# 获取克隆体的信息

get sprite info clone

![img](img\get_sprite_info_clone\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
clone_number: Number | String  
info_name: String  

:::caution
如果找不到角色或找不到克隆体，会报错。  
:::


***
## 返回类型 (正常情况下)
String | Number | Boolean


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.get_sprite_info_clone`,
        messageId: `${category_id}.get_sprite_info_clone`,
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
            clone_number: {
                type: type.ParameterType.NUMBER,
                default: '0',
            },
            info_name: {
                type: type.ParameterType.STRING,
                default: 'id',
                menu: sprite_info_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !allowed_sprite_info_names.includes(args.info_name) ){
                    throw `Not allowed info name ${args.info_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.clones[ args.clone_number ];

                if( args.info_name === 'name' ){
                    return target.sprite.name;
                }
                if( args.info_name === 'effects' ){
                    return JSON.stringify( target.effects );
                }
                return target[ args.info_name ];

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
