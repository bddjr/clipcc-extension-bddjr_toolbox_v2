---
sidebar_position: 1
---

# 积木错误捕捉专用工具

my log block error

当积木发生错误被捕捉时，通常会调用这个积木打印并返回错误信息。

***
## 源码
```js title="/myjs/tools.js"
//2.0.0

/**
 * 这个列表只会有一个字符串元素
 *  */
var err_msg = [''];

module.exports.err_msg = err_msg;

//===========================================================
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
