const { type, api } = require('clipcc-extension');

const {
    my_log_block_error,
    to_scratch_type,
    to_scratch_boolean,
} = require('../myjs/tools.js');

const {
    make_menus
} = require('../myjs/menus.js');


/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
    {//2.0.0
        opcode: `${category_id}.double_quotation_marks`,
        messageId: `${category_id}.double_quotation_marks`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function: (args,util)=>{
            try{
                return JSON.stringify( String(args.v) );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
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
//===========================================================
    {//2.0.0
        opcode: `${category_id}.typeof`,
        messageId: `${category_id}.typeof`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: undefined,
            }
        },
        function: (args,util)=> typeof args.v
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.is_array`,
        messageId: `${category_id}.is_array`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: undefined,
            }
        },
        function: (args,util)=> Array.isArray( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.is_NaN`,
        messageId: `${category_id}.is_NaN`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.NUMBER,
                default: '0'
            }
        },
        function: (args,util)=> Number.isNaN( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.string`,
        messageId: `${category_id}.string`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'string'
            }
        },
        function: (args,util)=> String( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.number`,
        messageId: `${category_id}.number`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '123456'
            }
        },
        function: (args,util)=> Number( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.to_scratch_allowed_type`,
        messageId: `${category_id}.to_scratch_allowed_type`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: ' '
            }
        },
        function: (args,util)=> to_scratch_type( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.string_slice`,
        messageId: `${category_id}.string_slice`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '-1'
            },
        },
        function: (args,util)=> String( args.v ).slice(
            args.n1 ,
            args.n2==='' ? undefined : args.n2
        )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.return_for_reporter`,
        messageId: `${category_id}.return`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function: (args,util)=> args.v
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.return_for_reporter_color`,
        messageId: `${category_id}.return`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.COLOR,
                default: '#4c97ff'
            }
        },
        function: (args,util)=> args.v
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.return_for_boolean`,
        messageId: `${category_id}.return`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function: (args,util)=> args.v
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.to_scratch_boolean`,
        messageId: `${category_id}.to_scratch_boolean`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'false'
            }
        },
        function: (args,util)=> to_scratch_boolean( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.to_js_boolean`,
        messageId: `${category_id}.to_js_boolean`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'false'
            }
        },
        function: (args,util)=> Boolean( args.v )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.==`,
        messageId: '[v1] == [v2]',
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'abc'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'ABC'
            },
        },
        function: (args,util)=> ( args.v1 == args.v2 )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.!=`,
        messageId: '[v1] != [v2]',
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'abc'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'ABC'
            },
        },
        function: (args,util)=> ( args.v1 != args.v2 )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.===`,
        messageId: '[v1] === [v2]',
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'abc'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'ABC'
            },
        },
        function: (args,util)=> ( args.v1 === args.v2 )
    },
//===========================================================
    {
        opcode: `${category_id}.!==`,
        messageId: '[v1] !== [v2]',
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'abc'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'ABC'
            },
        },
        function: (args,util)=> ( args.v1 !== args.v2 )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.integer_toString`,
        messageId: `${category_id}.integer_toString`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '500'
            },
            count: {
                type: type.ParameterType.NUMBER,
                default: '36'
            },
        },
        function: (args,util)=> {
            try{
                return Number(args.v).toString( args.count );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.string_parseInt`,
        messageId: `${category_id}.string_parseInt`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'dw'
            },
            count: {
                type: type.ParameterType.NUMBER,
                default: '36'
            },
        },
        function: (args,util)=>{
            if( args.count =='' ) return Number.parseInt( args.v );
            return Number.parseInt( args.v, args.count )
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.string_trim`,
        messageId: `${category_id}.string_trim`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '    Hello World!    '
            },
            menu: {
                type: type.ParameterType.STRING,
                default: 'trim',
                menu: make_menus(
                    `${category_id}.string_trim.menu`,
                    'trim',
                    'trimStart',
                    'trimEnd'
                ),
            },
        },
        function: (args,util)=>{
            try{
                if( ['trim', 'trimStart', 'trimEnd'].includes( args.menu ) ){
                    // @ts-ignore
                    return String( args.v )[ args.menu ]();
                }
                throw 'Not allowed function name';
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
//===========================================================
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
//===========================================================
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
//===========================================================
    {//2.0.0
        opcode: `${category_id}.to_upper_or_lower_case`,
        messageId: `${category_id}.to_upper_or_lower_case`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            menu: {
                type: type.ParameterType.STRING,
                default: 'toUpperCase',
                menu: make_menus(
                    `${category_id}.to_upper_or_lower_case.menu`,
                    'toUpperCase',
                    'toLowerCase'
                ),
            },
        },
        function: (args,util)=>{
            try{
                if( ['toUpperCase', 'toLowerCase'].includes( args.menu ) ){
                    // @ts-ignore
                    return String( args.v )[ args.menu ]();
                }
                throw 'Not allowed function name';
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.charCodeAt`,
        messageId: `${category_id}.charCodeAt`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            }
        },
        function: (args,util)=>{
            try{
                let n1 = Number( args.n1 );
                if( n1 <0 ){
                    let s = String( args.v );
                    return s.charCodeAt( s.length + n1 );
                }
                return String( args.v ).charCodeAt( args.n1 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.string_fromCharCode`,
        messageId: `${category_id}.string_fromCharCode`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            n1: {
                type: type.ParameterType.NUMBER,
                default: '97'
            }
        },
        function: (args,util)=> String.fromCharCode( args.n1 )
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.repeat`,
        messageId: `${category_id}.repeat`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: '哦'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '2'
            }
        },
        function: (args,util)=> String( args.v ).repeat( args.n1 )
    },

]);}
