---
sidebar_position: 16
---
# 角色克隆体总数

sprite clone counter

![img](img\sprite_clone_counter\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  


***
## 返回类型 (正常情况下)
Number


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.sprite_clone_counter`,
        messageId: `${category_id}.sprite_clone_counter`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
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
        },
        function: (args,util) => {
            try{
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.clones.length -1
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
