const { type, api } = require('clipcc-extension');
/**@type {any}*/
const vm = api.getVmInstance();

const {
    err_msg
} = require('../myjs/tools');

const {
    make_menus
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
    {//2.0.0
        opcode: `${category_id}.vm_toJSON`,
        messageId: `${category_id}.vm_toJSON`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> vm.toJSON()
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.console`,
        messageId: `${category_id}.console`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            type: {
                type: type.ParameterType.STRING,
                default: 'log',
                menu: make_menus(
                    '', //`${category_id}.console.menu`,
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
                }catch{}
            }

            console[ args.type ]( ...v );
        }
    },

]);}
