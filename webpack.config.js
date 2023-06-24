const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const fs = require('fs');

const info = require('./info.json');


// 检查扩展 id 合规
console.log('Checking extension ID\n/^[a-z0-9_\\.]+$/.test( info.id )');

if( !/^[a-z0-9_\.]+$/.test( info.id ) ){
    throw 'Extension ID format not allowed, please check ./info.json';
}

console.log('Extension ID check passed.');



// 写入 ./myjs/extension_id.js
console.log('Writing ./myjs/extension_id.js');

let extension_id_js_PATH = './myjs/extension_id.js';
let extension_id_js = fs.readFileSync( extension_id_js_PATH ).toString();

// 生成要写入的数据
let extension_id_js_WriteData = (
    extension_id_js.slice(
        0 ,
        extension_id_js.lastIndexOf('=') +1
    ) + JSON.stringify( info.id )
);

// 如果要写入的数据与当前数据不一致，则写入。
if( extension_id_js !== extension_id_js_WriteData ){
    fs.writeFileSync(
        extension_id_js_PATH ,
        extension_id_js_WriteData
    );
}

console.log('Write completed.');



module.exports = {
    // 用来压成一行的
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            //允许多进程并发运行
	    	parallel: true,    
            //配置
	    	terserOptions: {
	    		output:{
                    comments: false
                }
	    	},
            //不留注释
	    	extractComments: false,
	    })],
    },
    //使用这个模式才能做到有效压缩
    mode: 'production', //process.env.NODE_ENV === 'production' ? 'production' : 'development',

    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        module: true,
        library: {
            type: 'commonjs2'
        },
    },
    experiments: {
        outputModule: true
    },
    externals: {
        'clipcc-extension': 'ClipCCExtension'
    },
    externalsType: 'global',
    plugins: [
        new CopyWebpackPlugin({ patterns: [
            // icon
            {
                from: path.join(__dirname, info.icon),
                to: path.join(__dirname, 'build', info.icon),
            },
            // inset_icon
            {
                from: path.join(__dirname, info.inset_icon),
                to: path.join(__dirname, 'build', info.inset_icon),
            },
            // info.json
            {
                from: path.join(__dirname, 'info.json'),
                to: path.join(__dirname, 'build/info.json'),
                // 压缩JSON
                transform: ( content )=> JSON.stringify( JSON.parse( content.toString() ) )
            },
            // locales/*
            {
                
                from: path.join(__dirname, 'locales'),
                to: path.join(__dirname, 'build/locales'),
                // 补全JSON的键
                transform: ( content )=>{
                    const inputjson = JSON.parse( content.toString() );
                    const outjson = {};
                    for( let i in inputjson ){
                        outjson[`${info.id}.${i}`] = inputjson[i];
                    }
                    return JSON.stringify( outjson );
                }
            },
        ] }),
        new ZipWebpackPlugin({
            path: path.join(__dirname, 'dist'),
            filename: `${info.id}@${info.version}`,
            extension: 'ccx'
        }),
    ]
}
