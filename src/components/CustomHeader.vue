<template>
    <header v-if="pageType === 'message'" class="header">
        <a @click="$router.go(-1)" class="back"><img v-bind:src="require(`@/img/icons/authBlueArrowToLeftIcon.svg`)" alt="">Назад</a>
        <div class="heading">
            <h2>{{title}}</h2>
            <span v-bind:class="['online', status.online ? 'active' : '']">{{status.lastSeen}}</span>
        </div>
        <router-link to="/" class="profileIcon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 39.8502C31.0457 39.8502 40 30.9294 40 19.9251C40 8.92077 31.0457 0 20 0C8.9543 0 0 8.92077 0 19.9251C0 30.9294 8.9543 39.8502 20 39.8502Z" fill="#828282"/>
                <path d="M20.0004 22.0226C23.3224 22.0226 26.0154 19.3396 26.0154 16.03C26.0154 12.7205 23.3224 10.0375 20.0004 10.0375C16.6784 10.0375 13.9854 12.7205 13.9854 16.03C13.9854 19.3396 16.6784 22.0226 20.0004 22.0226Z" fill="#BDBDBD"/>
                <path d="M19.9997 39.9999C24.9049 39.9999 29.3831 38.1857 32.7982 35.1954C31.5485 29.2958 26.2929 24.8688 19.9997 24.8688C13.7064 24.8688 8.4508 29.2958 7.20117 35.1954C10.6162 38.1857 15.0944 39.9999 19.9997 39.9999Z" fill="#BDBDBD"/>
            </svg>
        </router-link>
    </header>

    <header v-else-if="pageType === 'profile_login'" class="header profile_login">
        <a v-if="getLoginSubscribe !== 'my_profile'" @click="$router.go(-1)" class="back"><img v-bind:src="require(`@/img/icons/authBlueArrowToLeftIcon.svg`)" alt="">Назад</a>
        <div class="nameBlock">
            <div class="name">{{title}} <img v-bind:src="require(`@/img/icons/checkIcon.svg`)" alt="check"></div>
            <div v-bind:class="['active', 'online']">{{status}}</div>
        </div>
        <span v-if="getLoginSubscribe === 'my_profile'" class="acMenu" @click="btnClick('settings')">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="17" height="2" rx="1" fill="#469BFC"/>
                <rect y="5" width="17" height="2" rx="1" fill="#469BFC"/>
                <rect y="10" width="17" height="2" rx="1" fill="#469BFC"/>
            </svg>
        </span>
        <div v-else class="complainMenu" @click="btnClick('complain')">
            <img v-bind:src="require(`@/img/accountImgs/menuIcon2.svg`)" alt="menu">
        </div>
    </header>

    <header v-else class="header">
        <a v-if="backType === 'change'" href="#" class="change">Изменить</a>
        <div class="heading">
            <h2>{{title}}</h2>
        </div>
    </header>
</template>

<script>
import ModalHide from '@/js/ModalHide';
import {mapMutations, mapGetters} from 'vuex';
export default {
    name: 'CustomHeader',
    props: ['title', 'backType', 'pageType', 'status'],
    computed: mapGetters(['getLoginSubscribe']),
    methods: {
        ...mapMutations([
            'SHOW_MODAL_SETTINGS',
            'HIDE_MODAL_SETTINGS',
            'SHOW_MODAL_COMPLAIN',
            'HIDE_MODAL_COMPLAIN'
        ]),
        async btnClick(type) {
            if (type === 'settings') {
                await this.SHOW_MODAL_SETTINGS();
                await ModalHide('.modalSetting', this.HIDE_MODAL_SETTINGS);
            } else if (type === 'complain') {
                await this.SHOW_MODAL_COMPLAIN();
                await ModalHide('.complainModal', this.HIDE_MODAL_COMPLAIN);
            }
        }
    },
}
</script>

<style scoped>
.header{
    background: #FAFAFA;
    border-bottom: 1px solid #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 51px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
}
.header a.back{
    display: flex;
    align-items: center;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15.6px;
    text-decoration: none;
    position: absolute;
    left: 12px;
    color: #4892F3;
}
.header a.change {
    position: absolute;
    width: 90px;
    height: 51px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    padding-left: 14px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #4892F3;
    text-decoration: none;
}
.header .heading{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header .heading h2{
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #1D1D1F;
}
.header .profileIcon{
    position: absolute;
    right: 12px;
    height: 40px;
    width: 40px;
    top: calc(50% - 20px);
}
.header .heading span.online {
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #707579;   
    margin-top: -3px;
}
.header .heading span.online.active{
    color: #468ADE;
}
/* profile header */
.header.profile_login .nameBlock{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header.profile_login .name{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1D1D1F;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header.profile_login .name img{
    margin-left: 5px;
}
.header.profile_login .acMenu,
.header.profile_login .complainMenu{
    position: absolute;
    width: 90px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
}
.header.profile_login .acMenu svg{
    width: 24px;
    height: auto;
    position: absolute;
    right: 12px;
}
.header.profile_login .complainMenu img{
    position: absolute;
    right: 26px;
    height: 16px;
    top: calc(50% - 8px);
}
.header.profile_login .online{
    text-align: center;
    font-family: 'Gilroy';
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #707579;
}
.header.profile_login .online.active{
    color: #468ade;
}
/*  */
</style>