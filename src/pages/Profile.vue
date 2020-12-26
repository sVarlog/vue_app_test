<template>
    <div>
        <ProfileHeader 
            v-bind:title="profileHeader.header"
            v-bind:status="profileHeader.status"
        />
        <div class="page-account__poster">
            <img ref="poster" src="../img/accountImgs/AccountBackground.jpg" alt="">
        </div>
        <ProfileDescription 
            v-bind:descr="profileDescr.descr"
            v-bind:name="profileDescr.name"
            v-bind:publish="profileDescr.publish"
            v-bind:friends="profileDescr.friends"
        />
        <ul>
            <ProfilePost 
                v-for="post of ProfilePosts"
                v-bind:key="post.id"
                v-bind:post="post"
            />
        </ul>
        <BottomMenu />
    </div>
</template>

<script>
    import ProfileHeader from '@/components/ProfileHeader';
    import ProfileDescription from '@/components/ProfileDescription';
    import ProfilePost from '@/components/ProfilePost';
    import BottomMenu from '@/components/BottomMenu';
    export default {
        name: 'Profile',
        components: {
            ProfileHeader,
            ProfileDescription,
            ProfilePost,
            BottomMenu
        },
        data() {
            return {
                profileHeader: {
                    header: '@mayer_kira',
                    status: 'В сети',
                },
                profileDescr: {
                    name: 'Кира Майер',
                    publish: '9',
                    friends: '3K',
                    descr: 'Здесь я буду публиковать все то, что вы не увидите в Инстаграм Здесь я буду публиковать все то, что вы не увидите в Инстаграм. ЭТО ТЕСТОВОЕ ОПИСАНИЕ, ОНО ВЫВОДИТСЯ В ЗАВИСИМОСТИ ОТ ВХОДЯЩЕГО КОНТЕНТА'
                },
                ProfilePosts: [
                    {id: 0, img: 'accountImgs/accountImg3.jpg', descr: '', views: '14223'},
                    {id: 1, img: 'accountImgs/accountImg1.jpg', tag: {name: 'paid', text: '500₽', icon: "🔒"}, descr: 'The Engineering', views: '35'},
                    {id: 2, img: 'accountImgs/accountImg2.jpg', descr: 'The Engineering of Ghost И что опя...', views: '14223'},
                    {id: 3, img: 'accountImgs/accountImg3.jpg', descr: 'Test description', views: '1422322'},
                    {id: 4, img: 'accountImgs/accountImg1.jpg', tag: {name: 'friends', text: 'Для друзей', icon: "👋"}, descr: 'Another test descr', views: '13235'},
                    {id: 5, img: 'accountImgs/accountImg2.jpg', tag: {name: 'friends', text: 'Для друзей', icon: "👋"}, descr: 'The Engineering of Ghost И что опя...', views: '14223'},
                ]
            }
        }
    }
</script>

<style scoped>
.page-account__poster {
    height: 197px;
    position: relative;
    overflow: hidden;
}
.page-account__poster img{
    width: 100%;
}
.page-account__poster:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 672px;
    background: linear-gradient(179.87deg, rgba(255, 255, 255, 0.15) 0.12%, rgba(255, 255, 255, 0.15) 7.35%, #FFFFFF 26.1%);
    top: 0;
    left: 0;
    right: 0;
}
ul{
    margin-right: 2px;
    margin-left: 2px;
    display: flex;
    flex-wrap: wrap;
}
</style>