---
sidebar_position: 9
---
# 删除角色临时变量

delete sprite var

![img](img\delete_sprite_var\image.png)  


***
## 输入类型
sprite_type: string  
sprite_name: string | number  
name: String  

:::caution
如果找不到角色，会报错。  
:::


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.1
        opcode: `${category_id}.delete_sprite_var`,
        messageId: `${category_id}.delete_sprite_var`,
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
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                if( !target.bddjr_toolbox_v2_temp_var ){ // !== undefined
                    Reflect.deleteProperty(
                        target.bddjr_toolbox_v2_temp_var ,
                        args.name
                    );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
