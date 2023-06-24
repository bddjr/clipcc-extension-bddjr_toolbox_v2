const { type, api } = require('clipcc-extension');

/**@param {string} category_id*/
module.exports = ( category_id )=>{ api.addBlocks([
    // 创建一个不能被程序触发的积木，点击它就会直接跳转到github仓库地址。
    {//2.0.0
        opcode: `${category_id}.jumptogithub`,
        messageId: `${category_id}.jumptogithub`,
        categoryId: category_id,
        type: undefined,
        function: (args,util)=>{
            if(window.confirm("你确定要跳转到github吗？")){ //弹窗确认
                window.open("https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2");
            }
        },
    },
]);}
