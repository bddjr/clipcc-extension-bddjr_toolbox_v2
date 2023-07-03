---
sidebar_position: 5
---
# 删除

delete

![img](img\delete\image.png)  


***
## 输入类型
v1: Object(Set)  
v2: String | any  

***
## 返回类型 (正常情况下)
Object(Set)


***
## 使用示例
![2](img\delete\2.png)  
![3](img\delete\3.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.delete`,
        messageId: `${category_id}.delete`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
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
                
                args.v1.delete(v2);
                return args.v1;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
