const { type, api } = require('clipcc-extension');

/**@type {*}*/
const vm = api.getVmInstance();

const {
    my_log_block_error,
    get_sprite_target
} = require('../myjs/tools');

const {
    setOperatorMenu,
    sprite_type_menu,
    sprites_name_menu
} = require('../myjs/menus');


/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
    {//2.0.1
        opcode: `${category_id}.clear_all`,
        messageId: `${category_id}.clear_all`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        function: (args,util)=>{
            Reflect.deleteProperty(
                vm ,
                'bddjr_toolbox_v2_temp_var'
            );
        }
    },
//===========================================================
    {//2.0.1
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
                if( !vm.bddjr_toolbox_v2_temp_var ){ //undefined
                    vm.bddjr_toolbox_v2_temp_var = {}
                }
                switch( args.operator ){
                    case '=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] = args.v;
                        break;
                    case '+=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] += args.v;
                        break;
                    case '-=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] -= args.v;
                        break;
                    case '*=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] *= args.v;
                        break;
                    case '/=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] /= args.v;
                        break;
                    case '%=':
                        vm.bddjr_toolbox_v2_temp_var[ args.name ] %= args.v;
                        break;
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.2
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
                if( vm.bddjr_toolbox_v2_temp_var?.hasOwnProperty( args.name ) ){
                    return vm.bddjr_toolbox_v2_temp_var[ args.name ];
                }
                //return undefined
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.1
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
                if( vm.bddjr_toolbox_v2_temp_var ){ // !== undefined
                    Reflect.deleteProperty(
                        vm.bddjr_toolbox_v2_temp_var ,
                        args.name
                    );
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.1
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
                return !!vm.bddjr_toolbox_v2_temp_var?.hasOwnProperty( args.name );
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
                Reflect.deleteProperty(
                    get_sprite_target( util, args.sprite_type, args.sprite_name ) ,
                    'bddjr_toolbox_v2_temp_var'
                );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.1
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
                if( !target.bddjr_toolbox_v2_temp_var ){ //undefined
                    target.bddjr_toolbox_v2_temp_var = {}
                }
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
                    default:
                        throw `${args.operator} is not allowed operator!`;
                }
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.2
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
                let tv = get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var;
                if( tv?.hasOwnProperty( args.name ) ){
                    return tv[ args.name ]
                }
                //return undefined
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.1
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
                if( !target.bddjr_toolbox_v2_temp_var ){ // !== undefined
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
    {//2.0.1
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
                return !!get_sprite_target( util, args.sprite_type, args.sprite_name ).bddjr_toolbox_v2_temp_var?.hasOwnProperty( args.name );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },

]);}
