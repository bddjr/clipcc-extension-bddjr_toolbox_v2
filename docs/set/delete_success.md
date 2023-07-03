---
sidebar_position: 6
---
# 删除成功

delete_success

![img](img\delete_success\image.png)  

:::tip
此操作会执行删除。  
如果删除之前存在这项，返回`true`，否则`false`。  
:::

***
## 输入类型
v1: Object(Set)  
v2: String | any  

***
## 返回类型 (正常情况下)
Boolean


***
## 使用示例
![2](img\delete_success\2.png)  
![3](img\delete_success\3.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.delete_success`,
        messageId: `${category_id}.delete_success`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }
                
                return args.v1.delete(v2);
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
