---
sidebar_position: 30
---
# 获取字符编码

charCodeAt

![img](img\charCodeAt\image.png)  


***
## 输入类型
v：String | any  
n1：Number | any  


***
## 返回类型 (正常情况下)
:::danger
可能会因为不当操作而产生NaN！NaN不能保存到作品！
:::

Number


***
## 使用示例
![2](img\charCodeAt\2.png)  

***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.charCodeAt`,
        messageId: `${category_id}.charCodeAt`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            }
        },
        function: (args,util)=>{
            try{
                let n1 = Number( args.n1 );
                if( n1 <0 ){
                    let s = String( args.v );
                    return s.charCodeAt( s.length + n1 );
                }
                return String( args.v ).charCodeAt( n1 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
```
