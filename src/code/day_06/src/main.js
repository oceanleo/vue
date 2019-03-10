// console.log('OK');

import './css/index.css';

import 'bootstrap/dist/css/bootstrap.css';

//class 关键字 是ES6的新语法，用来实现ES6中面向对象编程方式
// class Person {
//使用 static 关键字可以定义静态属性  可以直接通过类名 直接访问属性
// static info = {name: 'zs', age: 20}

// }

//与Java C# 实现面向对象编程方式一样
// var p1 = new Person();

// console.log(Person.info);

//ES6语法webpack不能识别，需要使用babel转换语法
//需要安装 1  babel-core babel-loader babel-plugin-transform-runtime
//需要安装 2  babel-preset-env babel-preset-stage-0
// 添加loader 过滤不需要处理的js
// 添加 .babelrc 配置文件


//ES6之前对象创建方式
// function Animal(name) {
//     this.name = name;
// }
//
// var a1 = new Animal('小花');
//
// console.log(a1.name);


//导入vue 包，实际导入的是vue.runtime.js
// import Vue from 'vue';

// 指定导入的文件 忽略了 .js后缀
import Vue from '../node_modules/vue/dist/vue';

//导入包，使用的webpack.config.js 中的包的别名
// import Vue from 'vue';

//导入vue 模板  需要添加 Loader vue-loader vue-template-compiler
// import login from './login.vue';


// 找包规则
// 1 找项目中有没有 node_modules 文件夹
// 2 在modules 中根据包名，找对应的vue文件夹
// 3 在vue文件夹中 找一个叫做package.json 的包配置文件
// 4 在package.json文件中 查找一个main 的属性【main属性指定了这个包在被加载的时候的入口文件】
// new Vue({
//     el: '#app',
//     data: {
//         msg: '123'
//     },
//     render: c => c(login)
// });

// node 中向外暴露成员的方式：
// module.exports = {}

// ES6中 通过 import 模块名称 from '模块标识符'

// 在ES6中 使用export default 和 export 向外暴露成员

// 在Node 中 使用 var 名称 = require('模块标识符')
// module.exports 和exports 暴露成员
// {}里面接收和名称必须和导入的模块定义的名称相同 别名使用 as
// import m1, {title as title123, content} from './js/test'

// console.log(m1);
// console.log(title123 + ' --- ' + content);

import app from './app.vue';


import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import account from './account.vue';
// import goodslist from './goodslist.vue';

// import register from './register.vue';

import router from './router'

new Vue({
    el: '#app2',
    data: {},
    router,
    render: c => c(app)
});





