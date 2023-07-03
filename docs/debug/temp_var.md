---
sidebar_position: 4
---
# 全局所有临时变量

temp var

![img](img\temp_var\image.png)  


***
## 输入类型
return_type: String  


***
## 源码
```js title="/categorys/debug.js"
    {//2.0.1
        opcode: `${category_id}.temp_var`,
        messageId: `${category_id}.temp_var`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    vm.bddjr_toolbox_v2_temp_var ,
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
```
