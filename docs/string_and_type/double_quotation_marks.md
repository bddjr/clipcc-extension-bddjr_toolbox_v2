---
sidebar_position: 1
---
# 转成"字符串"

double quotation marks  

让字符串变成带英文双引号的单行字符串。  

![img](img\double_quotation_marks\image.png)  

***
## 输入类型
v：String | any  

***
## 返回类型 (正常情况下)
始终为 String  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.double_quotation_marks`,
        messageId: `${category_id}.double_quotation_marks`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function: (args,util)=>{
            try{
                return JSON.stringify( String(args.v) );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
