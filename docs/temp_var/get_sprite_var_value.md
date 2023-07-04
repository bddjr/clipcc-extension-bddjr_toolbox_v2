---
sidebar_position: 8
---
# 获取角色临时变量

get sprite var value

![img](img\get_sprite_var_value\image.png)  


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
any | undefined  


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.2
        opcode: `${category_id}.get_sprite_var_value`,
        messageId: `${category_id}.get_sprite_var_value`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
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
                let tv = get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var;
                if( tv && Object.hasOwn( tv, args.name ) ){
                    return tv[ args.name ]
                }
                //return undefined
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
