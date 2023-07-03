---
sidebar_position: 10
---
# 角色临时变量存在

sprite var exist

![img](img\sprite_var_exist\image.png)  


***
## 输入类型
sprite_type: string  
sprite_name: string | number  
name: String  

:::caution
如果找不到角色，会报错。  
:::


***
## 返回类型 (正常情况下)
Boolean


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.1
        opcode: `${category_id}.sprite_var_exist`,
        messageId: `${category_id}.sprite_var_exist`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
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
                return !!get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var?.hasOwnProperty( args.name );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
