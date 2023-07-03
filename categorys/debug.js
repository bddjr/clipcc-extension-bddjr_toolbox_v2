const { type, api } = require('clipcc-extension');

/**@type {any}*/
const vm = api.getVmInstance();

const {
    err_msg,
    my_log_block_error,
    returnType,
    get_sprite_target
} = require('../myjs/tools');

const {
    make_menus,
    myTypeMenu,
    sprite_type_menu,
    sprites_name_menu
} = require('../myjs/menus');

/**@param {string} category_id*/
module.exports = ( category_id )=>{ api.addBlocks([
    {//2.0.0
        opcode: `${category_id}.err_msg`,
        messageId: `${category_id}.err_msg`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> err_msg[0]
    },
//===========================================================
    {//2.0.1
        opcode: `${category_id}.console`,
        messageId: `${category_id}.console`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            type: {
                type: type.ParameterType.STRING,
                default: 'log',
                menu: make_menus(
                    `${category_id}.console.menu`,
                    'log',
                    'error',
                    'debug',
                    'info',
                    'warn'
                )
            },
            v: {
                type: type.ParameterType.STRING,
                default: '"%cHello World!","color: green"'
            }
        },
        function: (args,util)=>{
            if( ![
              'log',
              'error',
              'debug',
              'info',
              'warn'
            ].includes( args.type ) ){
                return
            }

            let v = args.v;
            if( typeof v !== 'object' ){
                try{
                    v = JSON.parse(`[${v}]`);
                    console[ args.type ]( ...v );
                    return;
                }catch{}
            }
            console[ args.type ]( v );
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.vm_toJSON`,
        messageId: `${category_id}.vm_toJSON`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> vm.toJSON()
    },
//===========================================================
    {//2.0.1
        opcode: `${category_id}.temp_var`,
        messageId: `${category_id}.temp_var`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            return_type: {
                type: type.ParameterType.STRING,
                default: 'ScratchType',
                menu: myTypeMenu
            },
        },
        function: (args,util)=>{
            try{
                return returnType(
                    vm.bddjr_toolbox_v2_temp_var ,
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.1
        opcode: `${category_id}.sprite_temp_var`,
        messageId: `${category_id}.sprite_temp_var`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'thisClone',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
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
                    get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var ,
                    args.return_type
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },

]);}
