import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/post.js';
import modals from './modules/modals.js';
import profileDescr from './modules/profile.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    getters: {},

    modules: {
        post,
        profileDescr,
        modals
    }
})