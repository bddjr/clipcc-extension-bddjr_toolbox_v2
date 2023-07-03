---
sidebar_position: 6
---
# 去重

deduplication

![img](img\deduplication\image.png)  


***
## 输入类型
v1：String | Object(Array)  
return_type：String  


***
## 源码
```js title="/categorys/array.js"
    {//2.0.0
        opcode: `${category_id}.deduplication`,
        messageId: `${category_id}.deduplication`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","apple","banana","banana","cat","cat"]'
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                return returnType(
                    Array.from( new Set(v1) ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
```


```js title="/myjs/tools.js"
//2.0.0

/**
 * 
 * @param {any} v  value
 * @param {string} t  typename in myTypeMenu
 * @param {boolean} b  if t==='string' try JSON.stringify(v)
 */
function returnType( v, t , b=true ){
    switch( t ){
        case 'default':
            return v;
        case 'ScratchType':
            return to_scratch_type(v);
        case 'string':
            if( b && (typeof v === 'object') ){
                try{
                    return JSON.stringify(v);
                }catch{}
            }
            return String(v);
        case 'boolean':
            return Boolean(v);
        case 'number':
            return Number(v);
        case 'integer':
            return Number.parseInt(v);
        case 'ScratchBoolean':
            return to_scratch_boolean(v);
    }
    throw 'Not allowed type name!';
}

module.exports.returnType = returnType;
```


```js title="/myjs/tools.js"
//2.0.1

/**
 * my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
 * @param {string} block_id 
 * @param {string} block_opcode
 */
function my_log_block_error(block_id, block_opcode, error){
    let err_str = 'ClipCCExtensionBlockError\n' + (
        err_msg[0] =
`{"extension":"${extension_id}",
"blockid":${JSON.stringify(block_id)},
"opcode":${JSON.stringify(block_opcode)},
"time":${Date.now()},
"error":${JSON.stringify(error.toString())}}`
    );
    console.error( err_str );
    console.error( error );
    return err_str;
}

module.exports.my_log_block_error = my_log_block_error;
```
