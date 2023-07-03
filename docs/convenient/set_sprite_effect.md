---
sidebar_position: 28
---
# 设置角色的特效

set sprite effect 

![img](img\set_sprite_effect\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
effect_name: String  
operator: String  
set: Number | any  


:::caution
如果找不到角色或找不到克隆体，会报错。  
:::


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.set_sprite_effect`,
        messageId: `${category_id}.set_sprite_effect`,
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
            effect_name: {
                type: type.ParameterType.STRING,
                default: 'color',
                menu: sprite_effect_names_menu
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
                if( !sprite_effect_names.includes( args.effect_name ) ){
                    throw `Not allowed info name ${args.effect_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                switch( args.operator ){
                    case '=':
                        target.effects[ args.effect_name ] = Number(args.set);
                        break;
                    case '+=':
                        target.effects[ args.effect_name ] += Number(args.set);
                        break;
                    case '-=':
                        target.effects[ args.effect_name ] -= Number(args.set);
                        break;
                    case '*=':
                        target.effects[ args.effect_name ] *= Number(args.set);
                        break;
                    case '/=':
                        target.effects[ args.effect_name ] /= Number(args.set);
                        break;
                    case '%=':
                        target.effects[ args.effect_name ] %= Number(args.set);
                        break;
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }

                target.updateAllDrawableProperties(); //让scratch更新渲染

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
