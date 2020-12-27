import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/pages/Profile.vue';
import Chats from '@/pages/Chats.vue';
import OpenChat from '@/pages/OpenChat.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Profile
        },
        {
            path: '/chats',
            component: Chats
        },
        {
            path: '/chats/:id', 
            name: 'DialogId',
            component: OpenChat, props: true
        }
    ]
})