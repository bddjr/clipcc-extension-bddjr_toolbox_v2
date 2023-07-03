const { type, api } = require('clipcc-extension');

const {
    my_log_block_error,
    for_json_get_keys,
    returnType,
} = require('../myjs/tools.js');

const {
    keymodeMenu,
    myTypeMenu,
    setOperatorMenu,
    make_menus
} = require('../myjs/menus.js');


/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
    {//2.0.0
        opcode: `${category_id}.get`,
        messageId: `${category_id}.get`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":{"key2":"value"}}'
            },
            keymode: {
                type: type.ParameterType.STRING,
                default: '.',
                menu: keymodeMenu
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'key.key2',
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );
                let lastkey;
                let lastjson;

                // 不包含的keymode会抛出错误
                let keyslist = for_json_get_keys( args.keymode, args.key );

                if( typeof keyslist === 'number' ){
                    lastkey = keyslist;
                    lastjson = thisjson;
                    thisjson = thisjson[ keyslist ];
                }else if( args.keymode === 'Array' ){
                    for( let i of keyslist ){
                        if( (+i)<0 && Array.isArray(thisjson) ){
                            // 兼容数组负数下标取值
                            i = thisjson.length + (+i);
                        }
                        lastkey = i;
                        lastjson = thisjson;
                        thisjson = thisjson[ i ];
                    }

                }else{ // args.keymode === '.'
                    if( Array.isArray( keyslist ) ){
                        for( let i of keyslist ){
                            if( Array.isArray( i ) ){
                                if( Array.isArray(thisjson) && (+i[0])<0 ){
                                    // 兼容数组负数下标取值
                                    i[0] = thisjson.length + (+i[0]);
                                }
                                lastkey = i[0];
                                lastjson = thisjson;
                                thisjson = thisjson[ i[0] ];
                                if( i[1] ==='?.' && !thisjson )
                                    break;
                            }else{
                                if( Array.isArray(thisjson) && (+i)<0 ){
                                    // 兼容数组负数下标取值
                                    i = thisjson.length + (+i);
                                }
                                lastkey = i;
                                lastjson = thisjson;
                                thisjson = thisjson[ i ];
                            }
                        }
                    }else{ // typeof keyslist === 'string'
                        if( Array.isArray(thisjson) && (+keyslist)<0 ){
                            // 兼容数组负数下标取值
                            keyslist = thisjson.length + (+keyslist);
                        }
                        lastkey = keyslist;
                        lastjson = thisjson;
                        thisjson = thisjson[ keyslist ];
                    }
                }

                return returnType(
                    // 防止返回prototype里的函数
                    lastjson.hasOwnProperty(lastkey) ? thisjson : undefined ,
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
//======================================================================================================================
    {//2.0.1
        opcode: `${category_id}.set_value`,
        messageId: `${category_id}.set_value`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":{"key2":"value"}}'
            },
            keymode: {
                type: type.ParameterType.STRING,
                default: '.',
                menu: keymodeMenu
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'key.key2',
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"Hello World!"',
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );
                let globaljson = thisjson;

                // 不包含的keymode会抛出错误
                let keyslist = for_json_get_keys( args.keymode, args.key );

                let setValue = args.v2;
                if( typeof setValue === 'string' ){
                    try{
                        setValue = JSON.parse( setValue );
                    }catch{}
                }

                let setKey;

                if( typeof keyslist === 'number' )
                    setKey = keyslist;
                else if( args.keymode === 'Array' ){
                    for( let i=0 ; i< keyslist.length-1 ; i++ ){
                        if( (+i)<0 && Array.isArray(thisjson) ){
                            // 兼容数组负数下标取值
                            i = thisjson.length + (+i);
                        }
                        thisjson = thisjson[ keyslist[i] ];
                    }
                    setKey = keyslist.slice(-1);
                }else{ // args.keymode === '.'
                    if( Array.isArray( keyslist ) ){
                        for( let i of keyslist ){
                            if( Array.isArray( i ) ){
                                if( Array.isArray(thisjson) && (+i[0])<0 ){
                                    // 兼容数组负数下标取值
                                    i[0] = thisjson.length + (+i[0]);
                                }
                                thisjson = thisjson[ i[0] ];
                                if( i[1] ==='?.' && !thisjson )
                                    break;
                            }else{
                                if( Array.isArray(thisjson) && (+i)<0 ){
                                    // 兼容数组负数下标取值
                                    i = thisjson.length + (+i);
                                }
                                setKey = i ;
                            }
                        }
                    }else{ // typeof keyslist === 'string'
                        if( Array.isArray(thisjson) && (+keyslist)<0 ){
                            // 兼容数组负数下标取值
                            keyslist = thisjson.length + (+keyslist);
                        }
                        setKey = keyslist;
                    }
                }
                if( Array.isArray(thisjson) && (+setKey)<0 ){
                    // 兼容数组负数下标取值
                    setKey = thisjson.length + (+setKey);
                }
                switch( args.operator ){
                    case '=':
                        thisjson[setKey] = setValue;
                        break;
                    case '+=':
                        thisjson[setKey] += setValue;
                        break;
                    case '-=':
                        thisjson[setKey] -= setValue;
                        break;
                    case '*=':
                        thisjson[setKey] *= setValue;
                        break;
                    case '/=':
                        thisjson[setKey] /= setValue;
                        break;
                    case '%=':
                        thisjson[setKey] %= setValue;
                        break;
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }
                return returnType( globaljson, args.return_type );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
//======================================================================================================================
    {//2.0.0
        opcode: `${category_id}.get_keys`,
        messageId: `${category_id}.get_keys`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"k1":"v1","k2":"v2"}'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: 'keys',
                menu: make_menus(
                    `${category_id}.get_keys.menu`,
                    'keys',
                    'values',
                    'entries'
                )
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                if(
                    ![
                        'keys',
                        'values',
                        'entries'
                    ].includes(args.v2)
                ) throw 'Not allowed function name!';

                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );

                return returnType( Object[ args.v2 ]( thisjson ), args.return_type );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
//======================================================================================================================
    {//2.0.0
        opcode: `${category_id}.hasOwnProperty`,
        messageId: `${category_id}.hasOwnProperty`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":"value"}'
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'key'
            },
        },
        function: (args,util)=>{
            try{
                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );

                return thisjson.hasOwnProperty( args.key );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
//======================================================================================================================
    {//2.0.1
        opcode: `${category_id}.deleteProperty`,
        messageId: `${category_id}.deleteProperty`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":{"key2":"value"}}'
            },
            keymode: {
                type: type.ParameterType.STRING,
                default: '.',
                menu: keymodeMenu
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'key.key2',
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let thisjson = args.v1;
                if( typeof thisjson !== 'object' )
                    thisjson = JSON.parse( thisjson );

                let globaljson = thisjson;

                // 不包含的keymode会抛出错误
                let keyslist = for_json_get_keys( args.keymode, args.key );

                let setKey;

                if( typeof keyslist === 'number' )
                    setKey = keyslist;
                else if( args.keymode === 'Array' ){
                    for( let i=0 ; i< keyslist.length-1 ; i++ ){
                        if( (+i)<0 && Array.isArray(thisjson) ){
                            // 兼容数组负数下标取值
                            i = thisjson.length + (+i);
                        }
                        thisjson = thisjson[ keyslist[i] ];
                    }
                    setKey = keyslist.slice(-1);
                }else{ // args.keymode === '.'
                    if( Array.isArray( keyslist ) ){
                        for( let i of keyslist ){
                            if( Array.isArray( i ) ){
                                if( Array.isArray(thisjson) && (+i[0])<0 ){
                                    // 兼容数组负数下标取值
                                    i[0] = thisjson.length + (+i[0]);
                                }
                                thisjson = thisjson[ i[0] ];
                                if( i[1] ==='?.' && !thisjson )
                                    break;
                            }else{
                                if( Array.isArray(thisjson) && (+i)<0 ){
                                    // 兼容数组负数下标取值
                                    i = thisjson.length + (+i);
                                }
                                setKey = i ;
                            }
                        }
                    }else{ // typeof keyslist === 'string'
                        if( Array.isArray(thisjson) && (+keyslist)<0 ){
                            // 兼容数组负数下标取值
                            keyslist = thisjson.length + (+keyslist);
                        }
                        setKey = keyslist;
                    }
                }
                if( Array.isArray(thisjson) && (+setKey)<0 ){
                    // 兼容数组负数下标取值
                    setKey = thisjson.length + (+setKey);
                }
                Reflect.deleteProperty( thisjson, setKey );
                return returnType( globaljson, args.return_type );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
//======================================================================================================================
    {//2.0.0
        opcode: `${category_id}.parse`,
        messageId: `${category_id}.parse`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '{"key":"value"}'
            },
        },
        function: (args,util)=>{
            try{
                return JSON.parse( args.v1 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },
//======================================================================================================================
    {//2.0.0
        opcode: `${category_id}.stringify`,
        messageId: `${category_id}.stringify`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
        },
        function: (args,util)=>{
            try{
                return JSON.stringify( args.v1 );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        },
    },

]);}
