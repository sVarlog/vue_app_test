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
        },
        modalComplain: {
            status: false
        },
        modalReasonComplain: {
            status: false
        },
        modalUnsubscribe: {
            status: false
        }
    },
    actions: {},
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
        },
        SHOW_MODAL_COMPLAIN: (state) => {
            state.modalComplain.status = true;
        },
        HIDE_MODAL_COMPLAIN: (state) => {
            state.modalComplain.status = false;
        },
        SHOW_MODAL_REASON_COMPLAIN: (state) => {
            state.modalReasonComplain.status = true;
        },
        HIDE_MODAL_REASON_COMPLAIN: (state) => {
            state.modalReasonComplain.status = false;
        },
        SHOW_MODAL_UNSUBSCRIBE: (state) => {
            state.modalUnsubscribe.status = true;
        },
        HIDE_MODAL_UNSUBSCRIBE: (state) => {
            state.modalUnsubscribe.status = false;
        },
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