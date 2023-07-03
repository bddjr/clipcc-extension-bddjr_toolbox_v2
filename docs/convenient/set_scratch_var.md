---
sidebar_position: 22
---
# 设置Scratch变量

set scratch var

![img](img\set_scratch_var\image.png)  

***
## 输入类型
sprite_type: string  
sprite_name: string | number  
type: String  
name: String  
operator: String  
v: String | Number(Finite) | Boolean  

:::caution
如果找不到角色或变量，会报错。  
变量设置的结果会强制转为安全类型。
:::


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.set_scratch_var`,
        messageId: `${category_id}.set_scratch_var`,
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
                default: 'variable name'
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            v: {
                type: type.ParameterType.STRING,
                default: 'value'
            },
        },
        function: (args,util)=>{
            try{
                let a = get_var_obj_from_sprite_name(
                    util,
                    args.sprite_type,
                    args.sprite_name,
                    '',
                    args.name
                );
                if( a === undefined ){
                    throw `Can not set variable from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                }

                let v = a.value;
                switch( args.operator ){
                    case '=':
                        v = args.v;
                        break;
                    case '+=':
                        v += args.v;
                        break;
                    case '-=':
                        v -= args.v;
                        break;
                    case '*=':
                        v *= args.v;
                        break;
                    case '/=':
                        v /= args.v;
                        break;
                    case '%=':
                        v %= args.v;
                        break;
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }
                
                a.value = to_scratch_type( v );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
