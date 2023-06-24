/**@type {string}*/
const extension_id = require('./extension_id.js');

const { api } = require('clipcc-extension');

/**@type {any}*/
const vm = api.getVmInstance();

// module.exports = {};

//===========================================================
//2.0.0

/**
 * 这是用来生成静态菜单的，动态菜单不能用这个格式生成！
 * @param {string} id  'author.extension.block.menu'
 */
function make_menus( id, ...names ){
    const a = [];
    for( let i of names ){
        if( i === undefined ) continue;
        if( Array.isArray(i) ){
            a.push({
                messageId: i[0],
                value: i[1]
            });
        }else{
            a.push({
                messageId: id ? `${id}.${i}` : i ,
                value: i
            });
        }
    }
    return a;
}

module.exports.make_menus = make_menus;

//===========================================================
//2.0.0

/**
 * 获取角色名称列表的动态菜单。请直接将名称填入menu，而不要作为函数运行
 */
function sprites_name_menu(){
    // 此处运用Set的特性，快速生成想要的数组
    const names = new Set;
    for(let i of vm.runtime.targets){
        names.add( i.sprite.name );
    }
    return Array.from( names.entries() );
}

module.exports.sprites_name_menu = sprites_name_menu;

//===========================================================
//2.0.0

const myTypeMenu = make_menus(
    `${extension_id}.typemenu`,
    'default',
    'ScratchType',
    'string',
    'boolean',
    'number',
    'integer',
    'ScratchBoolean'
);

module.exports.myTypeMenu = myTypeMenu;

//===========================================================
//2.0.0

const keymodeMenu = make_menus(
    '',
    '.',
    [
        `${extension_id}.keymodemenu.Array`,
        'Array'
    ]
);

module.exports.keymodeMenu = keymodeMenu;

//===========================================================
//2.0.0

const setOperatorMenu = make_menus(
    '',
    '=',
    '+=',
    '-=',
    '*=',
    '/=',
    '%='
);

module.exports.setOperatorMenu = setOperatorMenu;

//===========================================================
//2.0.0

const allowed_sprite_info_names = [
    'name',
    'id',
    'drawableID',
    'effects',
    'direction',
    'rotationStyle',
    'size',
    'tempo',
    'volume',
    'x',
    'y',
    'deprecatedCache',
    'draggable',
    'dragging',
    'isOriginal',
    'visible',
    'isStage'
];

module.exports.allowed_sprite_info_names = allowed_sprite_info_names;

//===========================================================
//2.0.0

const sprite_info_menu = make_menus(
    `${extension_id}.sprite_info_menu`,
    ...allowed_sprite_info_names
);

module.exports.sprite_info_menu = sprite_info_menu;

//===========================================================
//2.0.0

const allowed_set_sprite_info_names = [
    'effects',
    'direction',
    'rotationStyle',
    'size',
    'tempo',
    'volume',
    'x',
    'y',
    'draggable',
    'visible'
];

module.exports.allowed_set_sprite_info_names = allowed_set_sprite_info_names;

//===========================================================
//2.0.0

const set_sprite_info_menu = make_menus(
    `${extension_id}.sprite_info_menu`,
    ...allowed_set_sprite_info_names
);

module.exports.set_sprite_info_menu = set_sprite_info_menu;

//===========================================================
//2.0.0

const sprite_costume_info_names = [
    "assetId",
    "bitmapResolution",
    "dataFormat",
    "md5",
    "name",
    "rotationCenterX",
    "rotationCenterY",
    "size",
    "skinId"
];

module.exports.sprite_costume_info_names = sprite_costume_info_names;

//===========================================================
//2.0.0

const sprite_costume_info_names_menu = make_menus(
    `${extension_id}.sprite_costume_info_names_menu`,
    ...sprite_costume_info_names
);

module.exports.sprite_costume_info_names_menu = sprite_costume_info_names_menu;

//===========================================================
//2.0.0

const sprite_sound_info_names = [
    [ //target.sprite.sounds
        "assetId",
        "dataFormat",
        "format",
        "md5",
        "name",
        "rate",
        "sampleCount",
        "soundId"
    ],
    [ //target.sprite.soundBank.soundPlayers[ target.sprite.sounds[ args.n -1 ].soundId ].buffer
        'duration',
        'length',
        'numberOfChannels',
        'sampleRate'
    ],
    [ //target.sprite.soundBank.soundPlayers[ target.sprite.sounds[ args.n -1 ].soundId ]
        'initialized',
        'isPlaying',
        'playbackRate',
        'startingUntil',
        'isStarting'
    ]
];

module.exports.sprite_sound_info_names = sprite_sound_info_names;
//===========================================================
//2.0.0

const sprite_sound_info_names_menu = make_menus(
    `${extension_id}.sprite_sound_info_names_menu`,
    ...sprite_sound_info_names[0],
    ...sprite_sound_info_names[1],
    ...sprite_sound_info_names[2]
);

module.exports.sprite_sound_info_names_menu = sprite_sound_info_names_menu;

//===========================================================
//2.0.0

const sprite_effect_names = [
    "color",
    "fisheye",
    "whirl",
    "pixelate",
    "mosaic",
    "brightness",
    "ghost"
];

module.exports.sprite_effect_names = sprite_effect_names;

//===========================================================
//2.0.0

const sprite_effect_names_menu = make_menus(
    `${extension_id}.sprite_effect_names_menu`,
    ...sprite_effect_names
);

module.exports.sprite_effect_names_menu = sprite_effect_names_menu;

//===========================================================
//2.0.0

const sprite_type_menu = make_menus(
    `${extension_id}.sprite_type_menu`,
    'stage',
    'sprite',
    'thisSprite',
    'thisClone',
    'id',
    'drawableID'
);

module.exports.sprite_type_menu = sprite_type_menu;

//===========================================================
//2.0.0

const scratch_var_type_menu = make_menus(
    `${extension_id}.scratch_var_type_menu`,
    'var',
    'list'
);

module.exports.scratch_var_type_menu = scratch_var_type_menu;

