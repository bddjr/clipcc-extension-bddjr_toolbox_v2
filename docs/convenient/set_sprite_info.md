---
sidebar_position: 26
---
# 设置角色的信息

set sprite info

![img](img\set_sprite_info\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
info_name: String  
operator: String  
set: String | Number | Boolean | any  


:::caution
如果找不到角色或找不到克隆体，会报错。  
:::


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.set_sprite_info`,
        messageId: `${category_id}.set_sprite_info`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
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
                default: 'size',
                menu: set_sprite_info_menu
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            set: {
                type: type.ParameterType.STRING,
                default: '100',
            },
        },
        function: (args,util)=>{
            try{
                if( !allowed_set_sprite_info_names.includes(args.info_name) ){
                    throw `Not allowed info name ${args.info_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                let IN = args.info_name;
                let SET = args.set;

                if( ['draggable', 'visible'].includes( IN ) ){
                    // 布尔值
                    target[ IN ] = to_scratch_boolean( SET );
                }else if( ['direction', 'size', 'tempo', 'volume', 'x', 'y'].includes( IN ) ){
                    // 数
                    switch( args.operator ){
                        case '=':
                            target[ IN ] = (+SET);
                            break;
                        case '+=':
                            target[ IN ] += (+SET);
                            break;
                        case '-=':
                            target[ IN ] -= (+SET);
                            break;
                        case '*=':
                            target[ IN ] *= (+SET);
                            break;
                        case '/=':
                            target[ IN ] /= (+SET);
                            break;
                        case '%=':
                            target[ IN ] %= (+SET);
                            break;
                        default:
                            throw `${args.operator} is not allowed operator!`;
                    }
                }else if( IN === 'effects' ){
                    // 特效
                    if( typeof SET !== 'object' ){
                        SET = JSON.parse( SET );
                    }
                    for( let i of sprite_effect_names ){
                        if( SET[i] !== undefined ){
                            target.effects[i] = Number( SET[i] );
                        }
                    }
                }

                target.updateAllDrawableProperties(); //让scratch更新渲染

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
