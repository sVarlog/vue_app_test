export default {
    state: {
        userTestProfile: 'my_profile',
        profileHeader: {
            header: '@mayer_kira',
            status: 'В сети',
        },
        profileDescr: {
            name: 'Кира Майер',
            publish: '9',
            friends: '3K',
            id: 7,
            descr: 'Здесь я буду публиковать все то, что вы не увидите в Инстаграм Здесь я буду публиковать все то, что вы не увидите в Инстаграм. ЭТО ТЕСТОВОЕ ОПИСАНИЕ, ОНО ВЫВОДИТСЯ В ЗАВИСИМОСТИ ОТ ВХОДЯЩЕГО КОНТЕНТА'
        },
        profileBanner: {
            img: 'accountImgs/AccountBackground.jpg'
        },
        gift: {
            giftState: {
                friends: 18500,
            },
            progressItems: {
                0: 0,
                1: 7000,
                2: 27000,
                3: 97000,
                4: 247000
            }
        },
        profileMessages: {
            notification: false,
            dialogs: {
                with: [
                    {id: 0, name: "Таксист Наушники забыл", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'ТН'}},
                    {id: 1, name: "Таксист", status: {online: false, lastSeen: 'Вчера в 13:30'}, avatar: {img: 'none', bg: 'green', initials: 'Т'}},
                    {id: 2, name: "Дмитрий", status: {online: false, lastSeen: '22.12.2020 в 12:26'}, avatar: {img: 'none', bg: 'green', initials: 'Д'}},
                    {id: 3, name: "Водитель Uber", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'ВU'}},
                    {id: 4, name: "Иван Иванов", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'ИИ'}},
                    {id: 5, name: "Иван Петров", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'ИП'}},
                    {id: 6, name: "Support", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'S'}},
                    {id: 7, name: "@mayer_kira", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'MK'}},
                    {id: 8, name: "Магазин Одежды", status: {online: true, lastSeen: 'online'}, avatar: {img: 'none', bg: 'green', initials: 'Sh'}},
                ],
                dialog: [
                    {id: 0}
                ]
            }
        }
    },
    actions: {
        REMOVE_MODAL_NOTIFICATION({ commit }) {
            commit('REMOVE_MODAL_NOTIFICATION');
        }
    },
    mutations: {
        REMOVE_MODAL_NOTIFICATION: (state) => {
            state.profileMessages.notification = true
        },
        CHANGE_PROFILE_STATUS_NO_SUBSCRIBE: (state) => {
            state.userTestProfile = 'login_no_subscribe';
        },
        // userTestProfile
        USER_PROFILE_PROFILE: (state) => {
            state.userTestProfile = 'my_profile';
        },
        USER_PROFILE_NO_SUBSCR: (state) => {
            state.userTestProfile = 'no_subscribe';
        },
        USER_PROFILE_SUBSCRIBE: (state) => {
            state.userTestProfile = 'subscribe';
        }
    },
    getters: {
        getProfileHeader(state) {
            return state.profileHeader;
        },
        getProfileDescr(state) {
            return state.profileDescr;
        },
        getProfileBanner(state) {
            return state.profileBanner;
        },
        getGifts(state) {
            return state.gift;
        },
        getMessages(state) {
            return state.profileMessages;
        },
        getLoginSubscribe(state) {
            return state.userTestProfile;
        }
    },
}