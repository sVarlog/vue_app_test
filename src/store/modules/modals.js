export default {
    state: {
        modalSetting: {
            status: false
        },
        modalShare: {
            status: false
        },
        modalGift: {
            status: false
        },
        chatsNotification: {
            status: false
        }
    },
    actions: {
        SHOW_MODAL_SETTINGS({commit}) {
            commit('SHOW_MODAL_SETTINGS');
        },
        HIDE_MODAL_SETTINGS({commit}) {
            commit('HIDE_MODAL_SETTINGS');
        },
        SHOW_MODAL_SHARE({ commit }) {
            commit('SHOW_MODAL_SHARE');
        },
        HIDE_MODAL_SHARE({ commit }) {
            commit('HIDE_MODAL_SHARE');
        },
        SHOW_MODAL_GIFT({commit}) {
            commit('SHOW_MODAL_GIFT');
        },
        HIDE_MODAL_GIFT({commit}) {
            commit('HIDE_MODAL_GIFT');
        },
        SHOW_MODAL_NOTIFICATION({ commit }) {
            commit('SHOW_MODAL_NOTIFICATION');
        },
        HIDE_MODAL_NOTIFICATION({ commit }) {
            commit('HIDE_MODAL_NOTIFICATION');
        },
    },
    mutations: {
        SHOW_MODAL_SETTINGS: (state) => {
            state.modalSetting.status = true;
        },
        HIDE_MODAL_SETTINGS: (state) => {
            state.modalSetting.status = false;
        },
        SHOW_MODAL_SHARE: (state) => {
            state.modalShare.status = true;
        },
        HIDE_MODAL_SHARE: (state) => {
            state.modalShare.status = false;
        },
        SHOW_MODAL_GIFT: (state) => {
            state.modalGift.status = true;
        },
        HIDE_MODAL_GIFT: (state) => {
            state.modalGift.status = false;
        },
        SHOW_MODAL_NOTIFICATION: (state) => {
            state.chatsNotification.status = true;
        },
        HIDE_MODAL_NOTIFICATION: (state) => {
            state.chatsNotification.status = false;
        }
    },
    getters: {
        allModals(state) {
            return state;
        },
        giftModal(state) {
            return state.modalGift;
        }
    },
}