---
sidebar_position: 2
---
# "字符串" 转成 字符串

remove double quotes  

让带英文双引号的单行字符串变成普通的字符串。  

![img](img\remove_double_quotes\image.png)  

***
## 输入类型
v：String | any  

***
## 返回类型
始终为 String  


***
## 源码
```js title="/categorys/string_and_type.js"
    {//2.0.0
        opcode: `${category_id}.remove_double_quotes`,
        messageId: `${category_id}.remove_double_quotes`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '"Hello\\nWorld!"'
            }
        },
        function: (args,util)=>{
            try{
                return String( JSON.parse( String(args.v) ) );
            }catch{
                return String(args.v);
            }
        },
    },
```