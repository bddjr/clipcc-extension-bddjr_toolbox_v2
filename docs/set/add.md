---
sidebar_position: 3
---
# 加入

add

![img](img\add\image.png)  


***
## 输入类型
v1: Object(Set)  

***
## 返回类型 (正常情况下)
Object(Set)


***
## 使用示例
![2](img\add\2.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.add`,
        messageId: `${category_id}.add`,
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
                if( typeof v2 !== 'object' )
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                
                args.v1.add(v2);
                return args.v1;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
