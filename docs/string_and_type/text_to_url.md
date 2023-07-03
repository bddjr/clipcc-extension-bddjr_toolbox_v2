---
sidebar_position: 27
---
# 文本转链接

text to url

![img](img\text_to_url\image.png)  


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
        opcode: `${category_id}.text_to_url`,
        messageId: `${category_id}.text_to_url`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'https://codingclip.com'
            },
            menu: {
                type: type.ParameterType.STRING,
                default: 'encodeURIComponent',
                menu: make_menus(
                    `${category_id}.text_to_url.menu`,
                    'encodeURIComponent',
                    'escape',
                    'encodeURI'
                ),
            },
        },
        function: (args,util)=>{
            try{
                if( ['encodeURIComponent', 'escape', 'encodeURI'].includes( args.menu ) ){
                    // @ts-ignore
                    return window[ args.menu ]( args.v );
                }
                throw 'Not allowed function name';
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
```
