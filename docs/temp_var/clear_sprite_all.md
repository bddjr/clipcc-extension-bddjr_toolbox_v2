---
sidebar_position: 6
---
# 清除角色临时变量

clear sprite all

![img](img\clear_sprite_all\image.png)  


***
## 输入类型
sprite_type: string  
sprite_name: string | number  

:::caution
如果找不到角色，会报错。  
:::


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.0
        opcode: `${category_id}.clear_sprite_all`,
        messageId: `${category_id}.clear_sprite_all`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'thisClone',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
        },
        function: (args,util)=>{
            try{
                Reflect.deleteProperty(
                    get_sprite_target( util, args.sprite_type, args.sprite_name ) ,
                    'bddjr_toolbox_v2_temp_var'
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
