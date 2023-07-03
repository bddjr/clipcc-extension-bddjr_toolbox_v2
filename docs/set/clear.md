---
sidebar_position: 4
---
# 清空

clear

![img](img\clear\image.png)  


***
## 输入类型
v1: Object(Set)  

***
## 返回类型 (正常情况下)
Object(Set)


***
## 使用示例
![2](img\clear\2.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.clear`,
        messageId: `${category_id}.clear`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
        },
        function: (args,util)=>{
            try{
                args.v1.clear();
                return args.v1;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
