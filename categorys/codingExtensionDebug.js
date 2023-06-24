// 写扩展时测试用的

const { type, api } = require('clipcc-extension');
const vm = api.getVmInstance();

const {
    my_log_block_error
} = require('../myjs/tools.js');

/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
//===========================================================
    {//2.0.0
        opcode: `${category_id}.printvm`,
        messageId: `print vm`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        function: (args,util)=>{
            console.log('vm')
            console.log( api.getVmInstance() )
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.printutil`,
        messageId: `print util`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        function: (args,util)=>{
            console.log('util')
            console.log(util)
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.eval`,
        messageId: `eval[v]`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v:{
                type: type.ParameterType.STRING,
                default: ' '
            }
        },
        function: (args,util)=>{
            try{
                return eval(args.v)
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },

]);}
