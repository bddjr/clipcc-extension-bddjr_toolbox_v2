---
sidebar_position: 7
---
# match

match

![img](img\match\image.png)  


***
## 输入类型
v：String  
type：String  
RegExp：RegExp | String  
max_length：Number | any  
return_type：String


***
## 使用示例
![2](img\match\2.png)  


***
## 源码
```js title="/categorys/reg_exp.js"
    {//2.0.0
        opcode: `${category_id}.match`,
        messageId: `${category_id}.match`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '#00a5e6#00a5e6#00a5e6'
            },
            type: {
                type: type.ParameterType.STRING,
                default: 'match',
                menu: make_menus(
                    `${category_id}.match.menu`,
                    'match',
                    'begin',
                    'ending',
                    'begin&ending',
                    'match&begin',
                    'match&ending',
                    'match&begin&ending'
                )
            },
            RegExp: {
                type: type.ParameterType.STRING,
                default: '#00a5e6'
            },
            max_length: {
                type: type.ParameterType.NUMBER,
                default: 'Infinity'
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let v = String(args.v);

                let ML = args.max_length;
                if( ML ==='' ){
                    ML = Infinity;
                }else{
                    ML = (+ML);
                    if( ML<0 || Number.isNaN(ML) ){
                        ML = Infinity;
                    }
                }

                let RE = args.RegExp;

                const MATCH = v.match( RE );
                if( args.type === 'match' ){
                    return returnType(
                        MATCH ? MATCH.slice(0, ML) : [] ,
                        args.return_type
                    );
                }

                let RETURN = [];

                let i = 0;
                switch( args.type ){
                    case 'begin':
                        while( RE.test(v) && i<ML ){
                            RETURN[i] = RE.lastIndex - MATCH[i].length;
                            i++;
                        }
                        break;
                    case 'ending':
                        while( RE.test(v) && i<ML ){
                            RETURN[i] = RE.lastIndex;
                            i++;
                        }
                        break;
                    case 'begin&ending':
                        while( RE.test(v) && i<ML ){
                            RETURN[i] = [
                                RE.lastIndex - MATCH[i].length ,
                                RE.lastIndex
                            ]
                            i++;
                        }
                        break;
                    case 'match&begin':
                        while( RE.test(v) && i<ML ){
                            RETURN[i] = [
                                MATCH[i] ,
                                RE.lastIndex - MATCH[i].length
                            ]
                            i++;
                        }
                        break;
                    case 'match&ending':
                        while( RE.test(v) && i<ML ){
                            RETURN[i] = [
                                MATCH[i] ,
                                RE.lastIndex
                            ]
                            i++;
                        }
                        break;
                    case 'match&begin&ending':
                        while( RE.test(v) && i<ML ){
                            RETURN[i] = [
                                MATCH[i] ,
                                RE.lastIndex - MATCH[i].length ,
                                RE.lastIndex
                            ]
                            i++;
                        }
                        break;
                }
                return returnType(
                    RETURN ,
                    args.return_type
                );
                
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```
