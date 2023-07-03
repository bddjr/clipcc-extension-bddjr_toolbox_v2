---
sidebar_position: 2
---
# console log

console

![img](img\console\image.png)  


***
## 输入类型
String | any


***
## 效果展示
![2](img/console/2.png)  
![3](img/console/3.png)  
![4](img/console/4.png)  


***
## 源码
```js title="/categorys/debug.js"
    {//2.0.1
        opcode: `${category_id}.console`,
        messageId: `${category_id}.console`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            type: {
                type: type.ParameterType.STRING,
                default: 'log',
                menu: make_menus(
                    `${category_id}.console.menu`,
                    'log',
                    'error',
                    'debug',
                    'info',
                    'warn'
                )
            },
            v: {
                type: type.ParameterType.STRING,
                default: '"%cHello World!","color: green"'
            }
        },
        function: (args,util)=>{
            if( ![
              'log',
              'error',
              'debug',
              'info',
              'warn'
            ].includes( args.type ) ){
                return
            }

            let v = args.v;
            if( typeof v !== 'object' ){
                try{
                    v = JSON.parse(`[${v}]`);
                    console[ args.type ]( ...v );
                    return;
                }catch{}
            }
            console[ args.type ]( v );
        }
    },
```
