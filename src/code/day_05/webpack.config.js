//webpack 的配置文件 node 中模块的操作

//引用项目模块 路径
const path = require('path');

const webpack = require('webpack');
//在内存中生成html的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//暴露了一个配置对象
module.exports = {
    // 输入，要打包的文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出 打包好的文件输出到哪里
    output: {
        //输出路径
        path: path.join(__dirname, './dist'),
        //输出文件名
        filename: 'bundle.js'
    },
    // dev-server 第二种配置方式
    devServer: {
        open: true,                 //自动打开浏览器
        port: 80,                   //启动时候的运行端口
        contentBase: 'src',         //指定托管根目录
        hot: true                   //热更新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //创建一个在内存中生成html的插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    //这个节点用于配置所有的第三方模块加载器
    module: {
        //配置规则
        rules: [
            // test 配置的文件 use 使用的第三方loader处理器
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
};
