import VueRouter from 'vue-router';

import account from './account.vue';
import goodslist from './goodslist.vue';

import register from './register.vue';
import login from './login.vue';

var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register}
            ]
        },
        {path: '/goodslist', component: goodslist}
    ]
});

export default router;