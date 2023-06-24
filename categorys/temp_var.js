const { type, api } = require('clipcc-extension');

const {
    my_log_block_error,
    get_sprite_target
} = require('../myjs/tools');

const {
    setOperatorMenu,
    sprite_type_menu,
    sprites_name_menu
} = require('../myjs/menus');


//2.0.0
function clear_all_var( util ){
    util.bddjr_toolbox_v2_temp_var = {}
}

//2.0.0
function if_undefined_clear( util ){
    if( util.bddjr_toolbox_v2_temp_var === undefined ){
        clear_all_var(util)
    }
}

//2.0.0
/**
 * 
 * @param {string} sprite_type 
 * @param {string} sprite_name 
 */
function clear_sprite_all( util, sprite_type, sprite_name ){
    get_sprite_target( util, sprite_type, sprite_name ).bddjr_toolbox_v2_temp_var = {}
}

//2.0.0
function if_undefined_clear_sprite( target ){
    if( target.bddjr_toolbox_v2_temp_var === undefined ){
        target.bddjr_toolbox_v2_temp_var = {}
    }
}



/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
    {//2.0.0
        opcode: `${category_id}.clear_all`,
        messageId: `${category_id}.clear_all`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        function: (args,util)=> clear_all_var(util)
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.set_value`,
        messageId: `${category_id}.set_value`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            v: {
                type: type.ParameterType.STRING,
                default: 'value'
            },
        },
        function: (args,util)=>{
            try{
                if_undefined_clear(util);
                switch( args.operator ){
                    case '=':
                        util.bddjr_toolbox_v2_temp_var[ args.name ] = args.v;
                        break;
                    case '+=':
                        util.bddjr_toolbox_v2_temp_var[ args.name ] += args.v;
                        break;
                    case '-=':
                        util.bddjr_toolbox_v2_temp_var[ args.name ] -= args.v;
                        break;
                    case '*=':
                        util.bddjr_toolbox_v2_temp_var[ args.name ] *= args.v;
                        break;
                    case '/=':
                        util.bddjr_toolbox_v2_temp_var[ args.name ] /= args.v;
                        break;
                    case '%=':
                        util.bddjr_toolbox_v2_temp_var[ args.name ] %= args.v;
                        break;
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_value`,
        messageId: `${category_id}.get_value`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                if( util.bddjr_toolbox_v2_temp_var === undefined ){
                    return undefined
                }
                return util.bddjr_toolbox_v2_temp_var[ args.name ];
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.delete_var`,
        messageId: `${category_id}.delete_var`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                if( util.bddjr_toolbox_v2_temp_var !== undefined ){
                    Reflect.deleteProperty(
                        util.bddjr_toolbox_v2_temp_var ,
                        args.name
                    );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.var_exist`,
        messageId: `${category_id}.var_exist`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        param: {
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                if( util.bddjr_toolbox_v2_temp_var === undefined ){
                    return false
                }
                return util.bddjr_toolbox_v2_temp_var.hasOwnProperty( args.name );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.clear_sprite_all`,
        messageId: `${category_id}.clear_sprite_all`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
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
        },
        function: (args,util)=>{
            try{
                clear_sprite_all( util, args.sprite_type, args.sprite_name );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.set_sprite_var_value`,
        messageId: `${category_id}.set_sprite_var_value`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
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
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            v: {
                type: type.ParameterType.STRING,
                default: 'value'
            },
        },
        function: (args,util)=>{
            try{
                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                if_undefined_clear_sprite( target );
                switch( args.operator ){
                    case '=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] = args.v;
                        break;
                    case '+=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] += args.v;
                        break;
                    case '-=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] -= args.v;
                        break;
                    case '*=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] *= args.v;
                        break;
                    case '/=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] /= args.v;
                        break;
                    case '%=':
                        target.bddjr_toolbox_v2_temp_var[ args.name ] %= args.v;
                        break;
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_var_value`,
        messageId: `${category_id}.get_sprite_var_value`,
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
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                if( target.bddjr_toolbox_v2_temp_var === undefined ){
                    return undefined
                }
                return target.bddjr_toolbox_v2_temp_var[ args.name ];
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.delete_sprite_var`,
        messageId: `${category_id}.delete_sprite_var`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
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
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                if( target.bddjr_toolbox_v2_temp_var !== undefined ){
                    Reflect.deleteProperty(
                        target.bddjr_toolbox_v2_temp_var ,
                        args.name
                    );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.sprite_var_exist`,
        messageId: `${category_id}.sprite_var_exist`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
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
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                if( target.bddjr_toolbox_v2_temp_var === undefined ){
                    return false
                }
                return target.bddjr_toolbox_v2_temp_var.hasOwnProperty( args.name );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },

]);}
