<template>
    <div class="Wrapp">
        <ProfileHeader 
            v-bind:title="getProfileHeader.header"
            v-bind:status="getProfileHeader.status"
        />
        <div class="pageContent">
            <div class="page-account__poster">
                <img ref="poster" v-bind:src="require(`@/img/${getProfileBanner.img}`)" alt="">
            </div>
            <ProfileDescription />
            <ul>
                <ProfilePost 
                    v-for="post of allPosts"
                    v-bind:key="post.id"
                    v-bind:post="post"
                />
            </ul>
            <ModalShare />
            <ModalSettings v-if="allModals.modalSetting.status"/>
            <ModalGift v-if="allModals.modalGift.status"/>
        </div>
        <BottomMenu active="profile"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ProfileHeader from '@/components/Profile/ProfileHeader';
    import ProfileDescription from '@/components/Profile/ProfileDescription';
    import ProfilePost from '@/components/Profile/ProfilePost';
    import BottomMenu from '@/components/BottomMenu';
    import ModalShare from '@/components/Modals/ModalShare';
    import ModalSettings from '@/components/Modals/ModalSettings';
    import ModalGift from '@/components/Modals/ModalGift';

    export default {
        name: 'Profile',
        components: {
            ProfileHeader,
            ProfileDescription,
            ProfilePost,
            BottomMenu,
            ModalShare,
            ModalSettings,
            ModalGift
        },
        computed: mapGetters(['allPosts', 'getProfileHeader', 'getProfileBanner', 'allModals'])
    }
</script>

<style scoped>
.Wrapp{
    height: 100vh;
    max-height: 100vh;
}
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