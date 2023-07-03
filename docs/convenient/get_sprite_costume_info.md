---
sidebar_position: 29
---
# 获取角色的造型信息

get sprite costume info

![img](img\get_sprite_costume_info\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
n: Number | any  
name: String  


:::caution
如果找不到角色，或者找不到造型，会报错。  
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
        opcode: `${category_id}.get_sprite_costume_info`,
        messageId: `${category_id}.get_sprite_costume_info`,
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
                default: 'size',
                menu: sprite_costume_info_names_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !sprite_costume_info_names.includes( args.name ) ){
                    throw `Not allowed info name ${args.name}`;
                }

                let r = get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.costumes_[ args.n -1 ][ args.name ];
                if( typeof r === 'object' ){
                    return JSON.stringify(r)
                }
                return r

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
