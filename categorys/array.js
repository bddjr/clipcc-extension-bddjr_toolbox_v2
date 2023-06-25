const { type, api } = require('clipcc-extension');

const {
    my_log_block_error,
    returnType,
    for_json_get_keys,
} = require('../myjs/tools.js');

const {
    myTypeMenu,
    make_menus,
    keymodeMenu
} = require('../myjs/menus.js');


function get_value_for_sort( thisjson, keymode, keyslist ){
    if( typeof keyslist === 'number' ){
        return thisjson[ keyslist ];
    }

    if( keymode === 'Array' ){
        for( let i of keyslist ){
            if( (+i)<0 && Array.isArray(thisjson) ){
                // 兼容数组负数下标取值
                i = thisjson.length + (+i);
            }
            thisjson = thisjson[ i ];
        }

    }else{ // keymode === '.'
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
                    thisjson = thisjson[ i ];
                }
            }
        }else{ // typeof keyslist === 'string'
            if( Array.isArray(thisjson) && (+keyslist)<0 ){
                // 兼容数组负数下标取值
                keyslist = thisjson.length + (+keyslist);
            }
            thisjson = thisjson[ keyslist ];
        }
    }
    return thisjson
}


/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
//===========================================================
    {//2.0.0
        opcode: `${category_id}.push`,
        messageId: `${category_id}.push`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"doge"'
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

                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                v1.push(v2)
                return returnType( v1, args.return_type );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.length`,
        messageId: `${category_id}.length`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            }
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                return v1.length;

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.indexOf`,
        messageId: `${category_id}.indexOf`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"banana"'
            },
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                return v1.indexOf(v2);

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.lastIndexOf`,
        messageId: `${category_id}.lastIndexOf`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat","apple"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                let v2 = args.v2;
                if( typeof v2 !== 'object' )
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}

                return v1.lastIndexOf(v2);

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.includes`,
        messageId: `${category_id}.includes`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"apple"'
            },
        },
        function: (args,util)=>{
            try{
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                return v1.includes(v2);

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.slice`,
        messageId: `${category_id}.slice`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '-1'
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
                    v1.slice(
                        args.n1 ,
                        args.n2==='' ? undefined : args.n2
                    ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
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
//===========================================================
    {//2.0.0
        opcode: `${category_id}.max_or_min`,
        messageId: `${category_id}.max_or_min`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[999,123,456,654,15,30,664]'
            },
            mxx: {
                type: type.ParameterType.STRING,
                default: 'max',
                menu: make_menus(
                    `${category_id}.max_or_min.menu`,
                    'max',
                    'min'
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
                if( !['max', 'min'].includes( args.mxx ) )
                    throw 'Not allowed function name!';

                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                return returnType(
                    Math[ args.mxx ].apply( null, v1 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.reverse`,
        messageId: `${category_id}.reverse`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[999,123,456,654,15,30,664]'
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
                    v1.reverse(),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.flat`,
        messageId: `${category_id}.flat`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[["apple"], ["banana", ["cat"]]]'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '1'
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
                    v1.flat( args.n1==='' ? undefined : args.n1 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.fill`,
        messageId: `${category_id}.fill`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"clipcc"'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '2'
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

                let v2 = args.v2;
                try{
                    v2 = JSON.parse( v2 );
                }catch{}

                return returnType(
                    v1.fill(
                        v2,
                        args.n1==='' ? undefined : args.n1 ,
                        args.n2==='' ? undefined : args.n2 ,
                    ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.splice`,
        messageId: `${category_id}.splice`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            n1: {
                type: type.ParameterType.NUMBER,
                default: '0'
            },
            n2: {
                type: type.ParameterType.NUMBER,
                default: '2'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '"clipcc","yes"'
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

                let v2 = args.v2;
                if( typeof v2 === 'string' ){
                    try{
                        v2 = JSON.parse( `[${v2}]` );
                    }catch{}
                }

                v1.splice(
                    args.n1, args.n2,
                    ...v2
                )

                return returnType(
                    v1,
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.concat`,
        messageId: `${category_id}.concat`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
            },
            v2: {
                type: type.ParameterType.STRING,
                default: '["clipcc","yes"],["sey","ccpilc"]'
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

                let v2 = args.v2;
                if( typeof v2 !== 'object' ){
                    if( typeof v2 === 'string' )
                        v2 = `[${v2}]`;
                    try{
                        v2 = JSON.parse( v2 );
                    }catch{}
                }

                return returnType(
                    v1.concat( ...v2 ),
                    args.return_type
                );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.join`,
        messageId: `${category_id}.join`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '["apple","banana","cat"]'
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
                let v1 = args.v1;
                if( typeof v1 !== 'object' )
                    v1 = JSON.parse( v1 );

                let v2 = args.v2;
                try{
                    v2 = JSON.parse( v2 );
                }catch{}

                return v1.join( v2 );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.sort`,
        messageId: `${category_id}.sort`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: '[{"name":"XiaoMing","score":98},{"name":"XiaoHong","score":92},{"name":"LiHua","score":95}]'
            },
            type: {
                type: type.ParameterType.STRING,
                default: 'down',
                menu: make_menus(
                    `${category_id}.sort.menu`,
                    'null',
                    'up',
                    'down'
                )
            },
            keymode: {
                type: type.ParameterType.STRING,
                default: '.',
                menu: keymodeMenu
            },
            key: {
                type: type.ParameterType.STRING,
                default: 'score',
            },
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                let v = args.v1;
                if( typeof v !== 'object' )
                    v = JSON.parse( v );

                switch( args.type ){
                    case 'null':
                        return returnType(
                            v.sort() ,
                            args.return_type
                        );

                    case 'up':
                        if(args.key === ''){
                            return returnType(
                                v.sort((a,b)=>{
                                    return a-b;
                                }) ,
                                args.return_type
                            );
                        }
                        // 不包含的keymode会抛出错误
                        var keyslist = for_json_get_keys( args.keymode, args.key );
                        return returnType(
                            v.sort((a,b)=>{
                                return (
                                    get_value_for_sort( b, args.keymode, keyslist )
                                    -
                                    get_value_for_sort( a, args.keymode, keyslist )
                                );
                            }) ,
                            args.return_type
                        );

                    case 'down':
                        if(args.key === ''){
                            return returnType(
                                v.sort((a,b)=>{
                                    return b-a;
                                }) ,
                                args.return_type
                            );
                        }
                        // 不包含的keymode会抛出错误
                        var keyslist = for_json_get_keys( args.keymode, args.key );
                        return returnType(
                            v.sort((a,b)=>{
                                return (
                                    get_value_for_sort( b, args.keymode, keyslist )
                                    -
                                    get_value_for_sort( a, args.keymode, keyslist )
                                );
                            }) ,
                            args.return_type
                        );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode , e );
            }
        },
    },

]);}
