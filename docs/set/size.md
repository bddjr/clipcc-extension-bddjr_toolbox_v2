---
sidebar_position: 2
---
# 大小 (长度)

size

![img](img\size\image.png)  


***
## 输入类型
v1: Object(Set)  

***
## 返回类型 (正常情况下)
Number


***
## 使用示例
![2](img\size\2.png)  
![3](img\size\3.png)  
![4](img\size\4.png)  
![5](img\size\5.png)  


***
## 源码
```js title="/categorys/set.js"
    {//2.0.0
        opcode: `${category_id}.size`,
        messageId: `${category_id}.size`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
        },
        function: (args,util)=>{
            try{
                return args.v1.size;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
