const { type, api } = require('clipcc-extension');

const {
    my_log_block_error, returnType
} = require('../myjs/tools');

const {
    myTypeMenu
} = require('../myjs/menus');

/**@param {string} category_id*/
module.exports = ( category_id )=>{ api.addBlocks([
//===========================================================
    {//2.0.0
        opcode: `${category_id}.new_Set`,
        messageId: `${category_id}.new_Set`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'strings'
            },
        },
        function: (args,util)=>{
            try{
                return new Set(args.v1);
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.size`,
        messageId: `${category_id}.size`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
        },
        function: (args,util)=>{
            try{
                return args.v1.size;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.add`,
        messageId: `${category_id}.add`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 !== 'object' )
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                
                args.v1.add(v2);
                return args.v1;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.clear`,
        messageId: `${category_id}.clear`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
        },
        function: (args,util)=>{
            try{
                args.v1.clear();
                return args.v1;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.delete`,
        messageId: `${category_id}.delete`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 !== 'object' )
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                
                args.v1.delete(v2);
                return args.v1;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.delete_success`,
        messageId: `${category_id}.delete_success`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 !== 'object' )
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                
                return args.v1.delete(v2);
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.has`,
        messageId: `${category_id}.has`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 !== 'object' )
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                
                return args.v1.has(v2);
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.to_array`,
        messageId: `${category_id}.to_array`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    Array.from( args.v1 ),
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.entries_to_array`,
        messageId: `${category_id}.entries_to_array`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    Array.from( args.v1.entries() ),
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },

]);}
