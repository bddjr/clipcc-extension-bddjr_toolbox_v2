---
sidebar_position: 7
---
# 当 布尔值 变成立

hat when becomes true

![img](img\hat_when_becomes_true\image.png)  

检测到布尔值发生变化且变成立时，才会向Scratch发送成立。  

***
## 输入类型
b: Boolean | any  


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.hat_when_becomes_true`,
        messageId: `${category_id}.hat_when_becomes_true`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        param:{
            b: {
                type: type.ParameterType.BOOLEAN
            },
        },
        function: (args,util)=>{
            try{
                const block = util.target.blocks._blocks[ util.currentBlock.id ];
                //修复直接在积木栏单击会报错的问题
                if (block === undefined) return;

                let bool = to_scratch_boolean( args.b );

                if(bool !== block.bddjr_toolbox_v2_HatOldValue){
                    // 如果不存在，会返回undefined，因此只需把这个放在前面，无需检查是否存在这个键。
                    if( block.bddjr_toolbox_v2_HatOldValue === false ){
                        block.bddjr_toolbox_v2_HatOldValue = bool;
                        return true;
                    }
                    block.bddjr_toolbox_v2_HatOldValue = bool;
                }
            }catch(e){
                my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
            return false;
        }
    },
```
