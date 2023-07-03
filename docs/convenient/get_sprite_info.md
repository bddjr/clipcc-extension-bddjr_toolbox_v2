---
sidebar_position: 24
---
# 获取角色的信息

get sprite info

![img](img\get_sprite_info\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
info_name: String

:::caution
如果找不到角色，会报错。  
:::


***
## 返回类型 (正常情况下)
String | Number | Boolean


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.get_sprite_info`,
        messageId: `${category_id}.get_sprite_info`,
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

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );

                if( args.info_name === 'name' ){
                    return target.sprite.name;
                }
                return target[ args.info_name ];

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
