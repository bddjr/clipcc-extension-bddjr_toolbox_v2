const { type, api } = require('clipcc-extension');

/**@type {any}*/
const vm = api.getVmInstance();

const {
    my_log_block_error,
    returnType,
    to_scratch_boolean,
    get_var_obj_from_sprite_name,
    to_scratch_type,
    get_sprite_target,
} = require('../myjs/tools.js');

const {
    sprite_type_menu,
    scratch_var_type_menu,
    setOperatorMenu,
    sprite_info_menu,
    allowed_sprite_info_names,
    set_sprite_info_menu,
    allowed_set_sprite_info_names,
    sprite_effect_names,
    sprite_effect_names_menu,
    sprite_costume_info_names_menu,
    sprite_costume_info_names,
    sprite_sound_info_names_menu,
    sprite_sound_info_names,
    sprites_name_menu
} = require('../myjs/menus.js');


/** @param {string} category_id */
module.exports = ( category_id )=>{ api.addBlocks([
//===========================================================
    {//2.0.0
        opcode: `${category_id}.ternary_operator`,
        messageId: `${category_id}.ternary_operator`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            b: {
                type: type.ParameterType.BOOLEAN
            },
            t: {
                type: type.ParameterType.STRING,
                default: 'is true'
            },
            f: {
                type: type.ParameterType.STRING,
                default: 'is false'
            },
        },
        function: (args,util)=> to_scratch_boolean(args.b) ? args.t : args.f
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.clipboard_writeText`,
        messageId: `${category_id}.clipboard_writeText`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            v1: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            },
        },
        function: (args,util)=>{
            try{
                // 仅表示成功创建对象。由于该函数是异步执行，所以无法直接返回是否成功复制。
                return !!window.navigator?.clipboard?.writeText( String(args.v1) );
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.none_cmd_block`,
        messageId: `${category_id}.none_cmd_block`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: ' '
            },
        },
        function: undefined //特性
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.never_gonna_give_you_start`,
        messageId: `${category_id}.never_gonna_give_you_start`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        function: ()=>false
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.never_gonna_let_you_stop`,
        messageId: `${category_id}.never_gonna_let_you_stop`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        function: undefined //特性
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.hat_when_is_true`,
        messageId: `${category_id}.hat_when_is_true`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        param:{
            b: {
                type: type.ParameterType.BOOLEAN
            },
        },
        function: (args,util)=> to_scratch_boolean(args.b)
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.hat_when_becomes_true`,
        messageId: `${category_id}.hat_when_becomes_true`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        param:{
            b: {
                type: type.ParameterType.BOOLEAN
            },
        },
        function: (args,util)=>{
            try{
                const block = util.target.blocks._blocks[ util.currentBlock.id ];
                //修复直接在积木栏单击会报错的问题
                if (block === undefined) return;

                let bool = to_scratch_boolean( args.b );

                if(bool !== block.bddjr_toolbox_v2_HatOldValue){
                    // 如果不存在，会返回undefined，因此只需把这个放在前面，无需检查是否存在这个键。
                    if( block.bddjr_toolbox_v2_HatOldValue === false ){
                        block.bddjr_toolbox_v2_HatOldValue = bool;
                        return true;
                    }
                    block.bddjr_toolbox_v2_HatOldValue = bool;
                }
            }catch(e){
                my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
            return false;
        }
    },
//===========================================================
    {//2.0.0  bug：如果值不断变化，并不会不断触发。不打算修复。
        opcode: `${category_id}.hat_when_change`,
        messageId: `${category_id}.hat_when_change`,
        categoryId: category_id,
        type: type.BlockType.HAT,
        param:{
            v: {
                type: type.ParameterType.STRING,
                default: ' '
            },
        },
        function: (args,util)=>{
            try{
                const block = util.target.blocks._blocks[ util.currentBlock.id ];
                //修复直接在积木栏单击会报错的问题
                if (block === undefined) return;

                if( args.v !== block.bddjr_toolbox_v2_HatOldValue ){
                    // 原值也可能是 undefined ，所以要真正判断是否存在
                    if(block.hasOwnProperty("bddjr_toolbox_v2_HatOldValue")){
                        block.bddjr_toolbox_v2_HatOldValue = args.v;
                        return true;
                    }
                    block.bddjr_toolbox_v2_HatOldValue = args.v;
                }
            }catch(e){
                my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e );
            }
            return false;
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.timestamp`,
        messageId: `${category_id}.timestamp`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> Date.now()
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.userAgent`,
        messageId: `${category_id}.userAgent`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> navigator.userAgent
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.html_language`,
        messageId: `${category_id}.html_language`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: ()=> navigator.language
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.onLine`,
        messageId: `${category_id}.onLine`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: ()=> navigator.onLine
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.block_id`,
        messageId: `${category_id}.block_id`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> util.currentBlock.id
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.isStage`,
        messageId: `${category_id}.isStage`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: (args,util)=> util.target.isStage
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.clone_number`,
        messageId: `${category_id}.clone_number`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util) => {
            // 角色本体始终在0的位置
            if( util.target.isOriginal ){
                return 0
            }
            // 这个不能缓存，会出bug
            const Clones = util.target.sprite.clones;
            for(let i in Clones){
                if (Clones[i].id === util.target.id){
                    return i
                }
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.sprite_clone_counter`,
        messageId: `${category_id}.sprite_clone_counter`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
        },
        function: (args,util) => {
            try{
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.clones.length -1
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.project_clone_counter`,
        messageId: `${category_id}.project_clone_counter`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        function: (args,util)=> util.runtime._cloneCounter
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.isOriginal`,
        messageId: `${category_id}.isOriginal`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: (args,util)=> util.target.isOriginal
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.is_clone`,
        messageId: `${category_id}.is_clone`,
        categoryId: category_id,
        type: type.BlockType.BOOLEAN,
        function: (args,util)=> !util.target.isOriginal
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.change_broadcast_msg_name`,
        messageId: `${category_id}.change_broadcast_msg_name`,
        categoryId: category_id,
        type: undefined,
        param:{
            v1:{
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: ()=>{
                    const a = [];
                    for( let i of Object.values(vm.runtime.targets[0].variables) ){
                        if(i.type === 'broadcast_msg'){
                            a.push([i.name, i.id])
                        }
                    }

                    if( a.length <1 ){
                        return [['','']];
                    }
                    return a;
                }
            },
            v2:{
                type: type.ParameterType.STRING,
                default: 'msg_name',
            }
        },
        function: (args,util)=>{
            let var_obj = util.runtime.targets[0].variables[ args.v1 ];
            let v2 = String(args.v2);
            if(
              var_obj !== undefined //这个消息存在
              &&
              v2 !== '' //v2不是空字符串
              &&
              var_obj.type === 'broadcast_msg' //防止错误输入造成风险
              &&
              window.confirm("你确定要修改广播名称吗？") //弹窗确认
            ){
                var_obj.value = var_obj.name = v2;
                return true;
            }
            return false;
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_scratch_var`,
        messageId: `${category_id}.get_scratch_var`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            type: {
                type: type.ParameterType.STRING,
                default: 'var',
                menu: scratch_var_type_menu
            },
            name: {
                type: type.ParameterType.STRING,
                default: 'variable name'
            },
        },
        function: (args,util)=>{
            try{
                let a;
                switch( args.type ){
                    case 'list':
                        a = get_var_obj_from_sprite_name(
                            util,
                            args.sprite_type,
                            args.sprite_name,
                            'list',
                            args.name
                        );
                        if( a === undefined )
                            throw `Can not get list from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                        return JSON.stringify(a.value);
                    case 'var':
                        a = get_var_obj_from_sprite_name(
                            util,
                            args.sprite_type,
                            args.sprite_name,
                            '',
                            args.name
                        );
                        if( a === undefined )
                            throw `Can not get variable from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                        return a.value;
                }
                throw 'Not allowed variable type!';
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.set_scratch_var`,
        messageId: `${category_id}.set_scratch_var`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
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
                let a = get_var_obj_from_sprite_name(
                    util,
                    args.sprite_type,
                    args.sprite_name,
                    '',
                    args.name
                );
                if( a === undefined ){
                    throw `Can not set variable from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                }

                let v = a.value;
                switch( args.operator ){
                    case '=':
                        v = args.v;
                        break;
                    case '+=':
                        v += args.v;
                        break;
                    case '-=':
                        v -= args.v;
                        break;
                    case '*=':
                        v *= args.v;
                        break;
                    case '/=':
                        v /= args.v;
                        break;
                    case '%=':
                        v %= args.v;
                        break;
                }
                
                a.value = to_scratch_type( v );

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.set_scratch_list`,
        messageId: `${category_id}.set_scratch_list`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
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
                default: 'list name'
            },
            v: {
                type: type.ParameterType.STRING,
                default: '["hello","world"]'
            },
        },
        function: (args,util)=>{
            try{
                let a = get_var_obj_from_sprite_name(
                    util,
                    args.sprite_type,
                    args.sprite_name,
                    'list',
                    args.name
                );
                if( a === undefined )
                    throw `Can not set variable from sprite_type:${args.sprite_type} sprite_name:${args.sprite_name} name:${args.name}`;
                
                let input_value = args.v;
                if( typeof input_value !== 'object' )
                    input_value = JSON.parse(input_value);

                const set_value = [];
                for(let i of input_value){
                    set_value.push(
                        to_scratch_type( i )
                    );
                }

                a.value = set_value;

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_info`,
        messageId: `${category_id}.get_sprite_info`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            info_name: {
                type: type.ParameterType.STRING,
                default: 'id',
                menu: sprite_info_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !allowed_sprite_info_names.includes(args.info_name) ){
                    throw `Not allowed info name ${args.info_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );

                if( args.info_name === 'name' ){
                    return target.sprite.name;
                }
                return target[ args.info_name ];

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_info_clone`,
        messageId: `${category_id}.get_sprite_info_clone`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            clone_number: {
                type: type.ParameterType.NUMBER,
                default: '0',
            },
            info_name: {
                type: type.ParameterType.STRING,
                default: 'id',
                menu: sprite_info_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !allowed_sprite_info_names.includes(args.info_name) ){
                    throw `Not allowed info name ${args.info_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.clones[ args.clone_number ];

                if( args.info_name === 'name' ){
                    return target.sprite.name;
                }
                if( args.info_name === 'effects' ){
                    return JSON.stringify( target.effects );
                }
                return target[ args.info_name ];

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.set_sprite_info`,
        messageId: `${category_id}.set_sprite_info`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            info_name: {
                type: type.ParameterType.STRING,
                default: 'size',
                menu: set_sprite_info_menu
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            set: {
                type: type.ParameterType.STRING,
                default: '100',
            },
        },
        function: (args,util)=>{
            try{
                if( !allowed_set_sprite_info_names.includes(args.info_name) ){
                    throw `Not allowed info name ${args.info_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                let IN = args.info_name;
                let SET = args.set;

                if( ['draggable', 'visible'].includes( IN ) ){
                    // 布尔值
                    target[ IN ] = to_scratch_boolean( SET );
                }else if( ['direction', 'size', 'tempo', 'volume', 'x', 'y'].includes( IN ) ){
                    // 数
                    switch( args.operator ){
                        case '=':
                            target[ IN ] = (+SET);
                            break;
                        case '+=':
                            target[ IN ] += (+SET);
                            break;
                        case '-=':
                            target[ IN ] -= (+SET);
                            break;
                        case '*=':
                            target[ IN ] *= (+SET);
                            break;
                        case '/=':
                            target[ IN ] /= (+SET);
                            break;
                        case '%=':
                            target[ IN ] %= (+SET);
                            break;
                    }
                }else if( IN === 'effects' ){
                    // 特效
                    if( typeof SET !== 'object' ){
                        SET = JSON.parse( SET );
                    }
                    for( let i of sprite_effect_names ){
                        if( SET[i] !== undefined ){
                            target.effects[i] = Number( SET[i] );
                        }
                    }
                }

                target.updateAllDrawableProperties(); //让scratch更新渲染

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_effect`,
        messageId: `${category_id}.get_sprite_effect`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            effect_name: {
                type: type.ParameterType.STRING,
                default: 'color',
                menu: sprite_effect_names_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !sprite_effect_names.includes( args.effect_name ) ){
                    throw `Not allowed info name ${args.effect_name}`;
                }
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).effects[ args.effect_name ];
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.set_sprite_effect`,
        messageId: `${category_id}.set_sprite_effect`,
        categoryId: category_id,
        type: type.BlockType.COMMAND,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            effect_name: {
                type: type.ParameterType.STRING,
                default: 'color',
                menu: sprite_effect_names_menu
            },
            operator: {
                type: type.ParameterType.STRING,
                default: '=',
                menu: setOperatorMenu
            },
            set: {
                type: type.ParameterType.STRING,
                default: '100',
            },
        },
        function: (args,util)=>{
            try{
                if( !sprite_effect_names.includes( args.effect_name ) ){
                    throw `Not allowed info name ${args.effect_name}`;
                }

                let target = get_sprite_target( util, args.sprite_type, args.sprite_name );
                switch( args.operator ){
                    case '=':
                        target.effects[ args.effect_name ] = Number(args.set);
                        break;
                    case '+=':
                        target.effects[ args.effect_name ] += Number(args.set);
                        break;
                    case '-=':
                        target.effects[ args.effect_name ] -= Number(args.set);
                        break;
                    case '*=':
                        target.effects[ args.effect_name ] *= Number(args.set);
                        break;
                    case '/=':
                        target.effects[ args.effect_name ] /= Number(args.set);
                        break;
                    case '%=':
                        target.effects[ args.effect_name ] %= Number(args.set);
                        break;
                }

                target.updateAllDrawableProperties(); //让scratch更新渲染

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_costume_info`,
        messageId: `${category_id}.get_sprite_costume_info`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            n: {
                type: type.ParameterType.NUMBER,
                default: '1',
            },
            name: {
                type: type.ParameterType.STRING,
                default: 'size',
                menu: sprite_costume_info_names_menu
            },
        },
        function: (args,util)=>{
            try{
                if( !sprite_costume_info_names.includes( args.name ) ){
                    throw `Not allowed info name ${args.name}`;
                }

                let r = get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.costumes_[ args.n -1 ][ args.name ];
                if( typeof r === 'object' ){
                    return JSON.stringify(r)
                }
                return r

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_costumes_counter`,
        messageId: `${category_id}.get_sprite_costumes_counter`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
        },
        function: (args,util) => {
            try{
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.costumes_.length
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_sound_info`,
        messageId: `${category_id}.get_sprite_sound_info`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param:{
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
            n: {
                type: type.ParameterType.NUMBER,
                default: '1',
            },
            name: {
                type: type.ParameterType.STRING,
                default: 'duration',
                menu: sprite_sound_info_names_menu
            },
        },
        function: (args,util)=>{
            try{
                let sprite = get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite;
                let sound = sprite.sounds[ args.n -1 ];

                if( sprite_sound_info_names[0].includes( args.name ) ){
                    return sound[ args.name ]
                }

                let SP = sprite.soundBank.soundPlayers[ sound.soundId ];
                if( sprite_sound_info_names[1].includes( args.name ) ){
                    return SP.buffer[ args.name ]
                }
                if( sprite_sound_info_names[2].includes( args.name ) ){
                    return SP[ args.name ]
                }

                throw `Not allowed info name ${args.name}`;

            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },
//===========================================================
    {//2.0.0
        opcode: `${category_id}.get_sprite_sounds_counter`,
        messageId: `${category_id}.get_sprite_sounds_counter`,
        categoryId: category_id,
        type: type.BlockType.REPORTER,
        param: {
            sprite_type: {
                type: type.ParameterType.STRING,
                default: 'stage',
                menu: sprite_type_menu
            },
            sprite_name: {
                type: type.ParameterType.STRING,
                default: '',
                // @ts-ignore
                menu: sprites_name_menu
            },
        },
        function: (args,util) => {
            try{
                return get_sprite_target( util, args.sprite_type, args.sprite_name ).sprite.sounds.length
            }catch(e){
                return my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
            }
        }
    },

]);}
