var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 80,
        contentBase: 'src',
        hot: true
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            // limit是限制引用图片和大小，如果图片小于limit，会转成base64格式字符串，否则不会转换
            // name 使用原图片名称，注意图片名称相同  hash:8 使用hash前8位
            {test: /\.(png|jpg|gif|bmp|jpeg)$/, use: 'url-loader?limit=66750&&name=[hash:8]-[name].[ext]'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: {
            // 'vue$': 'vue/dist/vue'
        }
    }
};