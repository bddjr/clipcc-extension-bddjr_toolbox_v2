const { type, api } = require('clipcc-extension');

const {
    my_log_block_error,
    returnType,
} = require('../myjs/tools.js');

const {
    myTypeMenu, make_menus
} = require('../myjs/menus.js');

/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
    {//2.0.0
        opcode: `${category_id}.new_RegExp`,
        messageId: `${category_id}.new_RegExp`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '^#[0-9a-fA-F]{6}$'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'g'
            },
        },
        function: (args,util)=>{
            try{
                return new RegExp( args.v1, args.v2 ) ;
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.test`,
        messageId: `${category_id}.test`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: undefined,
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '#00a5e6'
            },
        },
        function: (args,util)=>{
            try{
                return args.v1.test( args.v2 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.exec`,
        messageId: `${category_id}.exec`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: undefined,
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '#00a5e6'
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'string',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    args.v1.exec( args.v2 ),
                    args.return_type,
                    false
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.search`,
        messageId: `${category_id}.search`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'World'
            }
        },
        function: (args,util)=>{
            try{
                return args.v1.search( args.v2 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.replace`,
        messageId: `${category_id}.replace`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World! Hello World!'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'World'
            },
            v3: {
                type: type.ParameterType.STRING,
                default: 'ClipCC'
            }
        },
        function: (args,util)=>{
            try{
                return args.v1.replace( args.v2, args.v3 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.replaceAll`,
        messageId: `${category_id}.replaceAll`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World! Hello World!'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'World'
            },
            v3: {
                type: type.ParameterType.STRING,
                default: 'ClipCC'
            }
        },
        function: (args,util)=>{
            try{
                return args.v1.replaceAll( args.v2, args.v3 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.split`,
        messageId: `${category_id}.split`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'apple banana cat'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '" "'
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let v2 = args.v2;
                if( typeof v2 === 'string' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                return returnType(
                    args.v1.split( v2 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
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

]);}
