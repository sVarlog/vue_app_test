export default {
    state: {
        posts: [
            {id: 0, img: 'accountImgs/accountImg3.jpg', descr: '', views: '14223'},
            {id: 1, img: 'accountImgs/accountImg1.jpg', tag: {name: 'paid', text: '500₽', icon: "🔒"}, descr: 'The Engineering', views: '35'},
            {id: 2, img: 'accountImgs/accountImg2.jpg', descr: 'The Engineering of Ghost И что опя...', views: '14223'},
            {id: 3, img: 'accountImgs/accountImg3.jpg', descr: 'Test description', views: '1422322'},
            {id: 4, img: 'accountImgs/accountImg1.jpg', tag: {name: 'friends', text: 'Для друзей', icon: "👋"}, descr: 'Another test descr', views: '13235'},
            {id: 5, img: 'accountImgs/accountImg2.jpg', tag: {name: 'friends', text: 'Для друзей', icon: "👋"}, descr: 'The Engineering of Ghost И что опя...', views: '14223'},
        ]
    },
    actions: {},
    mutations: {},
    getters: {
        allPosts(state) {
            return state.posts;
        }
    },
}