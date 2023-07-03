---
sidebar_position: 28
---
# 链接转文本

url to text

![img](img\url_to_text\image.png)  


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
        opcode: `${category_id}.url_to_text`,
        messageId: `${category_id}.url_to_text`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'https%3A%2F%2Fcodingclip.com'
            },
            menu: {
                type: type.ParameterType.STRING,
                default: 'decodeURIComponent',
                menu: make_menus(
                    `${category_id}.url_to_text.menu`,
                    'decodeURIComponent',
                    'unescape',
                    'decodeURI'
                ),
            },
        },
        function: (args,util)=>{
            try{
                if( ['decodeURIComponent', 'unescape', 'decodeURI'].includes( args.menu ) ){
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
