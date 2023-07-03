---
sidebar_position: 4
---
# 删除全局临时变量

delete var

![img](img\delete_var\image.png)  


***
## 输入类型
name: String  


***
## 源码
```js title="/categorys/temp_var.js"
    {//2.0.1
        opcode: `${category_id}.delete_var`,
        messageId: `${category_id}.delete_var`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                if( vm.bddjr_toolbox_v2_temp_var ){ // !== undefined
                    Reflect.deleteProperty(
                        vm.bddjr_toolbox_v2_temp_var ,
                        args.name
                    );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
