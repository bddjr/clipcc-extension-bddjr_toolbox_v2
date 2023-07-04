---
sidebar_position: 3
---
# 获取全局临时变量

get value

![img](img\get_value\image.png)  


***
## 输入类型
name: String  


***
## 返回类型 (正常情况下)
any | undefined  


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.2
        opcode: `${category_id}.get_value`,
        messageId: `${category_id}.get_value`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                if(
                  vm.bddjr_toolbox_v2_temp_var
                  &&
                  Object.hasOwn( vm.bddjr_toolbox_v2_temp_var, args.name )
                ){
                    return vm.bddjr_toolbox_v2_temp_var[ args.name ];
                }
                //return undefined
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
