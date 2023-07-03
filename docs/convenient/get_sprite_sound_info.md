---
sidebar_position: 31
---
# 获取角色的声音信息

get sprite sound info

![img](img\get_sprite_sound_info\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
n: Number | any  
name: String  


:::caution
如果找不到角色，或者找不到声音，会报错。  
此处查找下标从 1 开始
:::


***
## 返回类型 (正常情况下)
:::danger
undefined类型不能保存到作品！
:::

String | Number | undefined


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.get_sprite_sound_info`,
        messageId: `${category_id}.get_sprite_sound_info`,
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
            n: {
                type: type.ParameterType.NUMBER,
                default: '1',
            },
            name: {
                type: type.ParameterType.STRING,
                default: 'duration',
                menu: sprite_sound_info_names_menu
            },
        },
        function: (args,util)=>{
            try{
                let sprite = get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite;
                let sound = sprite.sounds[ args.n -1 ];

                if( sprite_sound_info_names[0].includes( args.name ) ){
                    return sound[ args.name ]
                }

                let SP = sprite.soundBank.soundPlayers[ sound.soundId ];
                if( sprite_sound_info_names[1].includes( args.name ) ){
                    return SP.buffer[ args.name ]
                }
                if( sprite_sound_info_names[2].includes( args.name ) ){
                    return SP[ args.name ]
                }

                throw `Not allowed info name ${args.name}`;

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
