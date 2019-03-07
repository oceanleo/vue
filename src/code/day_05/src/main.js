import $ from 'jquery'

// webpack 默认只能处理js类型的文件
// 如果处理非js文件，需要用去添加加载器
//1 需要安装 style-loader css-loader
//2 打开webpack.config.js 新增一个配置节点 module 有一个rules属性，是数组，数组中存放了第三方文件的匹配规则
import './css/index.css'

$(function () {
    $('li:odd').css('backgroundColor', 'orange');
    $('li:even').css('backgroundColor', 'yellow');
});