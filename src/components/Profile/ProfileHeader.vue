<template>
    <div class="header">
        <div class="nameBlock">
            <div class="name">{{title}} <img v-bind:src="require(`@/img/icons/checkIcon.svg`)" alt="check"></div>
            <div v-bind:class="[stat, 'online']">{{status}}</div>
        </div>
        <span class="acMenu" @click="btnClick">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="17" height="2" rx="1" fill="#469BFC"/>
                <rect y="5" width="17" height="2" rx="1" fill="#469BFC"/>
                <rect y="10" width="17" height="2" rx="1" fill="#469BFC"/>
            </svg>
        </span>
    </div>
</template>

<script>
import ModalHide from '../../js/ModalHide.js';
import {mapActions} from 'vuex';
export default {
    name: 'ProfileHeader',
    data() {
        return {
            stat: 'active'
        }
    },
    methods: {
        ...mapActions([
            'SHOW_MODAL_SETTINGS',
            'HIDE_MODAL_SETTINGS'
        ]),
        async btnClick() {
            await this.SHOW_MODAL_SETTINGS();
            await ModalHide('.modalSetting', this.HIDE_MODAL_SETTINGS);
        }
    },
    props: ['title', 'status']
}
</script>

<style scoped>
.header a.back{
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15.6px;
    text-decoration: none;
}
.header a.back img{
    margin-right: 3px;
}
.header h2{
    font-size: 17px;
    font-weight: 500;
}
.header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 51px;
    background: #FAFAFA;
    z-index: 4;
    border-bottom: 1px solid #ececec;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header a.back{
    color: #4892F3;
    position: absolute;
    left: 12px;
}
.header h2{
    color: #000;
    margin-right: auto;
    font-weight: 600;
    margin-left: auto;
    letter-spacing: 0.02em;
}
.header .nameBlock{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header .name{
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
.header .name img{
    margin-left: 5px;
}
.header .acMenu{
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
.header .acMenu svg{
    width: 24px;
    height: auto;
    position: absolute;
    right: 12px;
}
.header .online{
    text-align: center;
    font-family: 'Gilroy';
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #707579;
}
.header .online.active{
    color: #468ade;
}
</style>