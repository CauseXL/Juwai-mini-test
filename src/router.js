import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // base: '/lp/minitest/',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/questions',
        name: 'questions',
        component: () => import(/* webpackChunkName: "question" */ './views/Questions.vue'),
    },
    {
        path: '/result',
        name: 'result',
        component: () => import(/* webpackChunkName: "result" */ './views/Result.vue'),
    },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});
