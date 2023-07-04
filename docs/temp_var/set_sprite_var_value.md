---
sidebar_position: 7
---
# 设置角色临时变量

set sprite var value

![img](img\set_sprite_var_value\image.png)  


***
## 输入类型
sprite_type: string  
sprite_name: string | number  
name: String  
operator: String  
v: any  

:::caution
如果找不到角色，会报错。  
:::


***
## 使用示例
![2](img\set_sprite_var_value\2.png)  
![3](img\set_sprite_var_value\3.png)  



***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.2
        opcode: `${category_id}.set_sprite_var_value`,
        messageId: `${category_id}.set_sprite_var_value`,
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
                if( args.name == '__proto__' ){
                    throw "Can not get or set __proto__ !";
                }
                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                if( !target.bddjr_toolbox_v2_temp_var ){ //undefined
                    target.bddjr_toolbox_v2_temp_var = {}
                }
                switch( args.operator ){
                    case '=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] = args.v;
                        break;
                    case '+=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] += args.v;
                        break;
                    case '-=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] -= args.v;
                        break;
                    case '*=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] *= args.v;
                        break;
                    case '/=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] /= args.v;
                        break;
                    case '%=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] %= args.v;
                        break;
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
