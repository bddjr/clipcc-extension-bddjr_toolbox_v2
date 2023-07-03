---
sidebar_position: 23
---
# 设置Scratch列表

set scratch list

![img](img\set_scratch_list\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
type: String  
name: String  
operator: String  
v: String | Object(Array)  

:::caution
如果找不到角色或列表，会报错。  
列表设置的结果会强制转为安全类型。
:::


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.set_scratch_list`,
        messageId: `${category_id}.set_scratch_list`,
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
            name: {
                type: type.ParameterType.STRING,
                default: 'list name'
            },
            v: {
                type: type.ParameterType.STRING,
                default: '["hello","world"]'
            },
        },
        function: (args,util)=>{
            try{
                let a = get_var_obj_from_sprite_name(
                    util,
                    args.sprite_type,
                    args.sprite_name,
                    'list',
                    args.name
                );
                if( a === undefined )
                    throw `Can not set variable from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                
                let input_value = args.v;
                if( typeof input_value !== 'object' )
                    input_value = JSON.parse(input_value);

                const set_value = [];
                for(let i of input_value){
                    set_value.push(
                        to_scratch_type( i )
                    );
                }

                a.value = set_value;

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
