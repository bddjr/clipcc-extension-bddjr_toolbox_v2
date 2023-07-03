---
sidebar_position: 8
---
# 当 输入值 变了

hat when change

![img](img\hat_when_change\image.png)  

当输入值发生变化时触发事件（类型不同也会触发）  

:::caution
如果每一帧都在变化，并不会继续触发
:::


***
## 输入类型
v: any  


***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0  bug：如果值不断变化，并不会不断触发。不打算修复。
        opcode: `${category_id}.hat_when_change`,
        messageId: `${category_id}.hat_when_change`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        param:{
            v: {
                type: type.ParameterType.STRING,
                default: ' '
            },
        },
        function: (args,util)=>{
            try{
                const block = util.target.blocks._blocks[ util.currentBlock.id ];
                //修复直接在积木栏单击会报错的问题
                if (block === undefined) return;

                if( args.v !== block.bddjr_toolbox_v2_HatOldValue ){
                    // 原值也可能是 undefined ，所以要真正判断是否存在
                    if(block.hasOwnProperty("bddjr_toolbox_v2_HatOldValue")){
                        block.bddjr_toolbox_v2_HatOldValue = args.v;
                        return true;
                    }
                    block.bddjr_toolbox_v2_HatOldValue = args.v;
                }
            }catch(e){
                my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
            return false;
        }
    },
```
