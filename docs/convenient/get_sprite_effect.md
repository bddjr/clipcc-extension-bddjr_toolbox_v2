---
sidebar_position: 27
---
# 获取角色的特效

get sprite effect 

![img](img\get_sprite_effect\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
effect_name: String  


:::caution
如果找不到角色或找不到克隆体，会报错。  
:::


***
## 返回类型 (正常情况下)
Number


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.get_sprite_effect`,
        messageId: `${category_id}.get_sprite_effect`,
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
            effect_name: {
                type: type.ParameterType.STRING,
                default: 'color',
                menu: sprite_effect_names_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !sprite_effect_names.includes( args.effect_name ) ){
                    throw `Not allowed info name ${args.effect_name}`;
                }
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).effects[ args.effect_name ];
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
