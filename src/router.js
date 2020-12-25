import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/pages/Profile.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Profile
        }
    ]
})