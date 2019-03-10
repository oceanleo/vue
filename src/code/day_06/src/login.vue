<template>
    <div>
        <div>
            <h3>这是 login.vue 页面 --- {{msg}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: '123'
            }
        },
        methods: {
            show() {
                console.log('调用了vue 中的show方法');
            }
        }
    }
</script>

<!--scoped 作用域 当前组件-->
<style scoped>
    div {
        color: red;
    }
</style>