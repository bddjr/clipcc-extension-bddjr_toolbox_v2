---
sidebar_position: 20
---
# 修改广播消息名称

change broadcast msg name

![img](img\change_broadcast_msg_name\image.png)  

这个积木只能使用鼠标点击触发，且会弹窗询问是否更改。

***
## 源码
```js title="/categorys/convenient.js"
    {//2.0.0
        opcode: `${category_id}.change_broadcast_msg_name`,
        messageId: `${category_id}.change_broadcast_msg_name`,
        categoryId: category_id,
        type: undefined,
        param:{
            v1:{
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: ()=>{
                    const a = [];
                    for( let i of Object.values(vm.runtime.targets[0].variables) ){
                        if(i.type === 'broadcast_msg'){
                            a.push([i.name, i.id])
                        }
                    }

                    if( a.length <1 ){
                        return [['','']];
                    }
                    return a;
                }
            },
            v2:{
                type: type.ParameterType.STRING,
                default: 'msg_name',
            }
        },
        function: (args,util)=>{
            let var_obj = util.runtime.targets[0].variables[ args.v1 ];
            let v2 = String(args.v2);
            if(
              var_obj !== undefined //这个消息存在
              &&
              v2 !== '' //v2不是空字符串
              &&
              var_obj.type === 'broadcast_msg' //防止错误输入造成风险
              &&
              window.confirm("你确定要修改广播名称吗？") //弹窗确认
            ){
                var_obj.value = var_obj.name = v2;
                return true;
            }
            return false;
        }
    },
```
