// 暴露外部对象数据 在一个模块中，只能有一个 export default
var info = {
    name: 'zs',
    age: 20
};

export default info;

// ES6中暴露成员 使用 export 暴露成员只能使用 {title} 形式接收，名称必须相同
export var title = '小星星';
export var content = '哈哈哈哈';