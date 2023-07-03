const { type, api } = require('clipcc-extension');

//===========================================================
//2.0.1

/**
 * @param {String} name 
 * @param {String} link 
 */
function jumpto(name, link){
    if(window.confirm(`你确定要跳转到${name}吗？\n${link}`)){ //弹窗确认
        window.open(link);
    }
}

//===========================================================

/**@param {string} category_id*/
module.exports = ( category_id )=>{ api.addBlocks([
    // 创建不能被程序触发的积木，鼠标点击才能触发。
    {//2.0.1
        opcode: `${category_id}.jumptogithub`,
        messageId: `${category_id}.jumptogithub`,
        categoryId: category_id,
        type: undefined,
        function: ()=> jumpto(
            'Github',
            "https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2/"
        ),
    },
    {//2.0.1
        opcode: `${category_id}.doc`,
        messageId: `${category_id}.doc`,
        categoryId: category_id,
        type: undefined,
        function: ()=> jumpto(
            '文档',
            "https://btbv2.ccext.bddjr.cn"
        ),
    },
]);}
