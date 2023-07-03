---
sidebar_position: 5
---
# 角色所有临时变量

sprite temp var

![img](img\sprite_temp_var\image.png)  


***
## 输入类型
sprite_type: string  
sprite_name: string | number  
return_type: String  


***
## 源码
```js title="/categorys/debug.js"
    {//2.0.1
        opcode: `${category_id}.sprite_temp_var`,
        messageId: `${category_id}.sprite_temp_var`,
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
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var ,
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
