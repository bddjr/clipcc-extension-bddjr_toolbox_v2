---
sidebar_position: 30
---
# 获取角色的造型数量

get sprite costumes counter

![img](img\get_sprite_costumes_counter\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  


:::caution
如果找不到角色，会报错。
:::


***
## 返回类型 (正常情况下)
Number


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.get_sprite_costumes_counter`,
        messageId: `${category_id}.get_sprite_costumes_counter`,
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
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.costumes_.length
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
