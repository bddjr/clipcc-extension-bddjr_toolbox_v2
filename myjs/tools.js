/**@type {string}*/
const extension_id = require('./extension_id.js');

const { api } = require('clipcc-extension');
/**@type {any}*/
const vm = api.getVmInstance();


// module.exports = {};

//===========================================================
//2.0.0

const to_scratch_boolean = require('./to_scratch_boolean.js');

module.exports.to_scratch_boolean = to_scratch_boolean;

//===========================================================
//2.0.0

/**
 * 这个列表只会有一个字符串元素
 *  */
var err_msg = [''];

module.exports.err_msg = err_msg;

//===========================================================
//2.0.0

/**
 * my_log_block_error( util.currentBlock.id, util.currentBlock.opcode, e )
 * @param {string} block_id 
 * @param {string} block_opcode
 */
function my_log_block_error(block_id, block_opcode, error){
    const err_str = 
`ClipCCExtensionBlockError
{"extension":"${extension_id}",
"blockid":${JSON.stringify(block_id)},
"opcode":${JSON.stringify(block_opcode)},
"time":"${Date.now()}",
"error":${JSON.stringify(error.toString())}}`
    ;
    err_msg[0] = err_str;
    console.error( err_str );
    console.error( error );
    return err_str;
}

module.exports.my_log_block_error = my_log_block_error;

//===========================================================
//2.0.0

/** 目前已知 scratch 变量保存的内容仅接受字符串、布尔值、整数、浮点数 */
function to_scratch_type(v){
    switch( typeof v ){
        case 'string':
          case 'boolean':
            return v;
        case 'number':
            if( !Number.isFinite(v) || Number.isNaN(v) )
                break;
            return v;
        case 'object':
            try{
                return JSON.stringify(v);
            }catch{
                break;
            }
    }
    return String(v);
}

module.exports.to_scratch_type = to_scratch_type;

//===========================================================
//2.0.0

/**
 * 
 * @param {string} keymode  '.' 'list'
 * @param {string|number} keystr  'key.key2'
 * @returns {any[]|string|number} 如果 keymode 是 '.' ，最后一项是字符串，前面的是列表，单个键返回的只是字符串。如果 keymode 是 'list' ，全是字符串。
 */
function for_json_get_keys( keymode, keystr ){
    if( typeof keystr === 'number' )
        return keystr;
    if( keymode === '.' ){
        if( !keystr.includes('.') )
            return keystr;

        const outkeys = [];
        let myslice_start = 0;    
        for( let i = 0 ; i < keystr.length ; i++ ){
            if( keystr[i] !== '.' ) continue;
            if( keystr[i-1] === '?' ){
                outkeys.push([
                    keystr.slice( myslice_start , i-1 ),
                    '?.',
                ]);
            }else{
                outkeys.push([
                    keystr.slice( myslice_start , i ),
                    '.',
                ]);
            }
            myslice_start = i+1 ;
        }
        outkeys.push( keystr.slice( myslice_start , keystr.length ) );
        return outkeys;
    }
    if( keymode === 'Array' ){
        let thiskeystr = keystr.trim();
        if( thiskeystr[0] !== '[' )
            thiskeystr = '[' + thiskeystr;
        if( thiskeystr.slice(-1) !== ']' )
            thiskeystr += ']';
        return JSON.parse( thiskeystr );
    }
    throw 'Not allowed keymode!';
}

module.exports.for_json_get_keys = for_json_get_keys;

//===========================================================
//2.0.0

/**
 * 
 * @param {any} v  value
 * @param {string} t  typename in myTypeMenu
 * @param {boolean} b  if t==='string' try JSON.stringify(v)
 */
function returnType( v, t , b=true ){
    switch( t ){
        case 'default':
            return v;
        case 'ScratchType':
            return to_scratch_type(v);
        case 'string':
            if( b && (typeof v === 'object') ){
                try{
                    return JSON.stringify(v);
                }catch{}
            }
            return String(v);
        case 'boolean':
            return Boolean(v);
        case 'number':
            return Number(v);
        case 'integer':
            return Number.parseInt(v);
        case 'ScratchBoolean':
            return to_scratch_boolean(v);
    }
    throw 'Not allowed type name!';
}

module.exports.returnType = returnType;

//===========================================================
//2.0.0

/**
 * 
 * @param {object} util 
 * @param {string} sprite_type  stage sprite thisSprite thisClone id drawableID
 * @param {string} sprite_name  name id drawableID
 * @returns {any} object
 */
function get_sprite_target( util, sprite_type, sprite_name ){
    // 简单的取值
    switch( sprite_type ){
        case 'stage':
            // 背景始终在角色列表的第0个位置
            return util.runtime.targets[0];
        case 'thisSprite':
            // 本体始终在克隆体列表的第0个位置
            return util.target.sprite.clones[0];
        case 'thisClone':
            return util.target;
    }

    // 接下来的肯定要用这个
    if(util.bddjr_toolbox_v2_sprite_number_cache === undefined){
        // 没有缓存的对象就创建
        util.bddjr_toolbox_v2_sprite_number_cache = {
            name: {
                /* 说明格式
                Stage: {
                    number: 0,
                    id: "|2On|0TzTO[DRM@?5DX.",
                    drawableID: 0,
                },
                */
            },
            id: {
                /* 说明格式
                "|2On|0TzTO[DRM@?5DX.": {
                    number: 0,
                    name: "Stage",
                    drawableID: 0,
                },
                */
            },
            drawableID: {
                /* 说明格式
                0: {
                    number: 0,
                    name: "Stage",
                    id: "|2On|0TzTO[DRM@?5DX.",
                },
                */
            },
        }
    }

    /**number_cache */
    const NC = util.bddjr_toolbox_v2_sprite_number_cache;

    let return_target;
    let return_target_number;

    switch( sprite_type ){
        case 'sprite':
            if(
              NC.name !== undefined
              &&
              NC.name[ sprite_name ] !== undefined
            ){
                // 读缓存
                if(
                  util.runtime.targets[
                    NC.name[ sprite_name ].number
                  ].sprite.name === sprite_name
                ){
                    // 有缓存的对象，有对应名称的缓存，直接返回
                    return util.runtime.targets[
                        NC.name[ sprite_name ].number
                    ];
                }
                // 对不上？依据缓存名称删除对应id与drawableID的缓存，再删除对应name的缓存。
                Reflect.deleteProperty(
                    NC.id ,
                    NC.name[ sprite_name ]?.id
                );
                Reflect.deleteProperty(
                    NC.drawableID ,
                    NC.name[ sprite_name ]?.drawableID
                );
                Reflect.deleteProperty(
                    NC.name ,
                    sprite_name
                );
            }
            // 重新查找
            for( let i in util.runtime.targets ){
                let J = util.runtime.targets[i];
                if(
                  J.sprite.name === sprite_name
                  &&
                  !J.isStage //用的是sprite模式，所以肯定不能是背景
                ){
                    // 找到了，将要返回的值设置为这个对象，然后退出循环
                    return_target_number = i;
                    return_target = J;
                    break;
                }
            }
            // 退出switch
            break;
        case 'id':
            if(
              NC.id !== undefined
              &&
              NC.id[ sprite_name ] !== undefined
            ){
                // 读缓存
                if(
                  util.runtime.targets[
                    NC.id[ sprite_name ].number
                  ].id === sprite_name
                ){
                    // 有缓存的对象，有对应名称的缓存，直接返回
                    return util.runtime.targets[
                        NC.id[ sprite_name ].number
                    ];
                }
                // 对不上？依据缓存名称删除对应name与drawableID的缓存，再删除对应id的缓存。
                Reflect.deleteProperty(
                    NC.name ,
                    NC.id[ sprite_name ]?.name
                );
                Reflect.deleteProperty(
                    NC.drawableID ,
                    NC.id[ sprite_name ]?.drawableID
                );
                Reflect.deleteProperty(
                    NC.id ,
                    sprite_name
                );
            }
            // 重新查找
            for( let i in util.runtime.targets ){
                let J = util.runtime.targets[i];
                if(J.id === sprite_name){
                    // 找到了，将要返回的值设置为这个对象，然后退出循环
                    return_target_number = i;
                    return_target = J;
                    break;
                }
            }
            // 退出switch
            break;
        case 'drawableID':
            if(
              NC.drawableID !== undefined
              &&
              NC.drawableID[ sprite_name ] !== undefined
            ){
                // 读缓存
                if(
                  util.runtime.targets[
                    NC.drawableID[ sprite_name ].number
                  ].drawableID === sprite_name
                ){
                    // 有缓存的对象，有对应名称的缓存，直接返回
                    return util.runtime.targets[
                        NC.drawableID[ sprite_name ].number
                    ];
                }
                // 对不上？依据缓存名称删除对应name与id的缓存，再删除对应drawableID的缓存。
                Reflect.deleteProperty(
                    NC.name ,
                    NC.drawableID[ sprite_name ]?.name
                );
                Reflect.deleteProperty(
                    NC.id ,
                    NC.drawableID[ sprite_name ]?.id
                );
                Reflect.deleteProperty(
                    NC.drawableID ,
                    sprite_name
                );
            }
            // 重新查找
            for( let i in util.runtime.targets ){
                let J = util.runtime.targets[i];
                if(J.drawableID === sprite_name){
                    // 找到了，将要返回的值设置为这个对象，然后退出循环
                    return_target_number = i;
                    return_target = J;
                    break;
                }
            }
            // 退出switch
            break;
    }

    if(return_target === undefined){
        // 找不到？抛出错误
        throw `Can not get sprite target from type:${sprite_type} name:${sprite_name}`;
    }

    // 加入缓存
    if(return_target.isOriginal){
        // 不是克隆体才会缓存名称
        NC.name[ return_target.sprite.name ] = {
            number: return_target_number,
            id: return_target.id,
            drawableID: return_target.drawableID,
        }    
    }
    NC.id[ return_target.id ] = {
        number: return_target_number,
        drawableID: return_target.drawableID,
        // 不是克隆体才会缓存名称，null从逻辑上不会导致故障
        name: return_target.isOriginal ? return_target.sprite.name : null
    }
    NC.drawableID[ return_target.drawableID ] = {
        number: return_target_number,
        id: return_target.id,
        // 不是克隆体才会缓存名称，null从逻辑上不会导致故障
        name: return_target.isOriginal ? return_target.sprite.name : null
    }

    return return_target;
}

module.exports.get_sprite_target = get_sprite_target;

//===========================================================
//2.0.0

/**
 * 
 * @param {object} target 
 * @param {string} type  '' 'list' 'broadcast_msg'
 * @param {*} name 
 * @returns {any} object
 */
function get_var_obj_from_target( target, type, name ){
    const vars = target.variables;
    if( target.bddjr_toolbox_v2_var_id_cache === undefined ){
        // 没有这个缓存变量，那么初始化它
        target.bddjr_toolbox_v2_var_id_cache = {
            // type对应键
            '': {
                //varname: id
            },
            list: {
                //varname: id
            }
        }
    }else{
        // 有这个缓存变量，那么检查名称与类型是否对上
        const idcache = target.bddjr_toolbox_v2_var_id_cache;
        let cache_this_id = idcache[ type ][ name ];
        if( cache_this_id !== undefined ){
            // 找得到这个值
            if(
              vars[ cache_this_id ].name === name
              &&
              vars[ cache_this_id ].type === type
            ){
                // 对上了，直接返回
                return vars[ cache_this_id ];
            }
            // 没对上，删掉缓存
            Reflect.deleteProperty(
                idcache[ type ] ,
                name
            );
        }
    }
    // 没能成功返回缓存，那么重新生成并缓存。
    for( let i of Object.values(vars) ){
        if(
          i.name === name
          &&
          i.type === type
        ){
            // 找到了，生成缓存并返回
            target.bddjr_toolbox_v2_var_id_cache[ type ][ name ] = i.id;
            return i;
        }
    }
}

module.exports.get_var_obj_from_target = get_var_obj_from_target;

//===========================================================
//2.0.0

/**
 * @param {object} util 
 * @param {string} sprite_type  stage sprite thisSprite thisClone id drawableID
 * @param {string} sprite_name  name id drawableID
 * @param {string} type  '' 'list' 'broadcast_msg'
 * @param {string} name 
 * @returns {any} object
 */
function get_var_obj_from_sprite_name( util, sprite_type, sprite_name, type, name ){
    return get_var_obj_from_target(
        get_sprite_target( util, sprite_type, sprite_name ),
        type,
        name
    );
}

module.exports.get_var_obj_from_sprite_name = get_var_obj_from_sprite_name;

