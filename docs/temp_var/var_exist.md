---
sidebar_position: 5
---
# 全局临时变量存在

var exist

![img](img\var_exist\image.png)  


***
## 输入类型
name: String  


***
## 返回类型 (正常情况下)
Boolean


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.2
        opcode: `${category_id}.var_exist`,
        messageId: `${category_id}.var_exist`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                return !!(
                    vm.bddjr_toolbox_v2_temp_var
                    &&
                    Object.hasOwn( vm.bddjr_toolbox_v2_temp_var, args.name )
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
