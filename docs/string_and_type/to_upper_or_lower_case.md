---
sidebar_position: 29
---
# 转大小写

to upper or lower case

![img](img\to_upper_or_lower_case\image.png)  


***
## 输入类型
v：String | any  
menu：String  


***
## 返回类型 (正常情况下)
String


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.to_upper_or_lower_case`,
        messageId: `${category_id}.to_upper_or_lower_case`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            menu: {
                type: type.ParameterType.STRING,
                default: 'toUpperCase',
                menu: make_menus(
                    `${category_id}.to_upper_or_lower_case.menu`,
                    'toUpperCase',
                    'toLowerCase'
                ),
            },
        },
        function: (args,util)=>{
            try{
                if( ['toUpperCase', 'toLowerCase'].includes( args.menu ) ){
                    // @ts-ignore
                    return String( args.v )[ args.menu ]();
                }
                throw 'Not allowed function name';
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
```
