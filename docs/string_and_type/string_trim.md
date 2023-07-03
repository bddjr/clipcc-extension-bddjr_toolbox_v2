---
sidebar_position: 26
---
# 字符串trim

string trim

![img](img\string_trim\image.png)  

用于去除字符串的头尾空白符

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
        opcode: `${category_id}.string_trim`,
        messageId: `${category_id}.string_trim`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '    Hello World!    '
            },
            menu: {
                type: type.ParameterType.STRING,
                default: 'trim',
                menu: make_menus(
                    `${category_id}.string_trim.menu`,
                    'trim',
                    'trimStart',
                    'trimEnd'
                ),
            },
        },
        function: (args,util)=>{
            try{
                if( ['trim', 'trimStart', 'trimEnd'].includes( args.menu ) ){
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
