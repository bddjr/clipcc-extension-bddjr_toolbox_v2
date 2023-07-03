---
sidebar_position: 2
---
# 设置全局临时变量

set value

![img](img\set_value\image.png)  


***
## 输入类型
name: String  
operator: String  
v: any  


***
## 使用示例
![2](img\set_value\2.png)  
![3](img\set_value\3.png)  



***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.1
        opcode: `${category_id}.set_value`,
        messageId: `${category_id}.set_value`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
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
                if( !vm.bddjr_toolbox_v2_temp_var ){ //undefined
                    vm.bddjr_toolbox_v2_temp_var = {}
                }
                switch( args.operator ){
                    case '=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] = args.v;
                        break;
                    case '+=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] += args.v;
                        break;
                    case '-=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] -= args.v;
                        break;
                    case '*=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] *= args.v;
                        break;
                    case '/=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] /= args.v;
                        break;
                    case '%=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] %= args.v;
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
