const { Extension, type, api } = require('clipcc-extension');
//const gui = api.getGuiInstance();
//const vm = api.getVmInstance();

// 编辑器返回对象，播放器返回null
//const Block = api.getBlockInstance();

/**@type {string}*/
const extension_id = require('./myjs/extension_id.js');

/**
 * require for import category
 * @param {string} category_name
 */
function myRFIC( category_name ){//2.0.0
    return require(`./categorys/${category_name}.js`);
}

const categorys = {//2.0.0
    // 仅供编写扩展时的调试，请在写完后注释掉下面这行。
    //codingExtensionDebug: myRFIC('codingExtensionDebug'),

    help: myRFIC('help'),
    string_and_type: myRFIC('string_and_type'),
    json: myRFIC('json'),
    array: myRFIC('array'),
    reg_exp: myRFIC('reg_exp'),
    convenient: myRFIC('convenient'),
    temp_var: myRFIC('temp_var'),
    set: myRFIC('set'),
    debug: myRFIC('debug'),
};


function my_onUninit(){//2.0.0
    for( let i in categorys ){
        api.removeCategory(`${extension_id}.${i}`);
    }
}

module.exports = class extends Extension {
    onUninit(){//2.0.0
        my_onUninit();
    }

    onInit() {//2.0.0
        // 修复再次加载作品导致积木重复的bug
        my_onUninit();

        for( let i in categorys ){
            let category_id = `${extension_id}.${i}`;
            api.addCategory({
                categoryId: category_id, 
                messageId: category_id,
                color: '#00a5e6',
            });
            categorys[i]( category_id );
        }
    }
}
