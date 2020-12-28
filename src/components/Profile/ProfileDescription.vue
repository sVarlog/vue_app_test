<template>
    <div class="page-account__content">
        <div class="page-account__avatar">
            <div class="avatar-none bgColor-7" >
                {{char}}
            </div>
            <svg class="avatarCheck" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#11D900" stroke="white"/>
            </svg>
            <svg class="avatarGarland" width="55" height="11" viewBox="0 0 55 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 1C19.5634 9 36.4366 9 53 1" stroke="#555E69" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"/>
                <rect x="4" y="4" width="3" height="3" rx="1.5" fill="#78D2FF"/>
                <rect x="8" y="5" width="3" height="3" rx="1.5" fill="#4BB34B"/>
                <rect x="12" y="6" width="3" height="3" rx="1.5" fill="#FFD54F"/>
                <rect x="16" y="7" width="3" height="3" rx="1.5" fill="#FF4F72"/>
                <rect x="20" y="8" width="3" height="3" rx="1.5" fill="#4BB34B"/>
                <rect x="24" y="8" width="3" height="3" rx="1.5" fill="#FF4F72"/>
                <rect x="28" y="8" width="3" height="3" rx="1.5" fill="#FFD54F"/>
                <rect x="32" y="8" width="3" height="3" rx="1.5" fill="#78D2FF"/>
                <rect x="36" y="7" width="3" height="3" rx="1.5" fill="#4BB34B"/>
                <rect x="40" y="6" width="3" height="3" rx="1.5" fill="#FF4F72"/>
                <rect x="44" y="5" width="3" height="3" rx="1.5" fill="#FFD54F"/>
                <rect x="48" y="4" width="3" height="3" rx="1.5" fill="#FF4F72"/>
                <rect x="52" y="3" width="3" height="3" rx="1.5" fill="#78D2FF"/>
                <rect y="2" width="3" height="3" rx="1.5" fill="#FF4F72"/>
            </svg>
        </div>
        
        <div class="page-account__nik">
            {{getProfileDescr.name}}
        </div>
        <div class="page-account__info">
            <span>{{getProfileDescr.publish}} Публикаций</span>
            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="3" height="3" rx="1.5" fill="#BDBDBD"/>
            </svg>
            <span>{{getProfileDescr.friends}} Друзей</span>
        </div>
        <div class="page-account__price">
            {{getProfileDescr.descr}}
        </div>
        
        <!-- <ProfileButtons /> -->
        <!-- login -->
        <div class="page-account__buttonSetting" v-if="getLoginSubscribe === 'my_profile'">
            <a href="#" class="page-account__btnSettings">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2244 6.41585L14.9474 6.13823C14.8364 5.79825 14.6988 5.46663 14.5364 5.14718L15.2434 4.04749C15.3697 3.851 15.3419 3.59304 15.1769 3.42799L13.1874 1.43853C13.0223 1.27348 12.7644 1.24572 12.5679 1.37198L11.4682 2.07895C11.1488 1.91657 10.8171 1.77902 10.4772 1.66798L10.1995 0.390944C10.15 0.162767 9.94791 0 9.71441 0H6.90098C6.66748 0 6.46541 0.162767 6.41585 0.390944L6.13823 1.66798C5.79825 1.77902 5.46663 1.91657 5.14718 2.07895L4.04749 1.37198C3.851 1.24572 3.59304 1.27348 3.42799 1.43853L1.43853 3.42799C1.27348 3.59304 1.24572 3.851 1.37198 4.04749L2.07895 5.14718C1.91657 5.46663 1.77902 5.79825 1.66798 6.13823L0.390944 6.41585C0.162767 6.46554 0 6.66748 0 6.90098V9.71441C0 9.94791 0.162767 10.1498 0.390944 10.1995L1.66798 10.4772C1.77902 10.8171 1.91657 11.1488 2.07895 11.4682L1.37198 12.5679C1.24572 12.7644 1.27348 13.0223 1.43853 13.1874L3.42799 15.1769C3.59304 15.3419 3.851 15.3697 4.04749 15.2434L5.14718 14.5364C5.46663 14.6988 5.79825 14.8364 6.13823 14.9474L6.41585 16.2244C6.46541 16.4526 6.66748 16.6154 6.90098 16.6154H9.71441C9.94791 16.6154 10.15 16.4526 10.1995 16.2244L10.4772 14.9474C10.8171 14.8364 11.1488 14.6988 11.4682 14.5364L12.5679 15.2434C12.7644 15.3697 13.0223 15.342 13.1874 15.1769L15.1769 13.1874C15.3419 13.0223 15.3697 12.7644 15.2434 12.5679L14.5364 11.4682C14.6988 11.1488 14.8364 10.8171 14.9474 10.4772L16.2244 10.1995C16.4526 10.1498 16.6154 9.94791 16.6154 9.71441V6.90098C16.6154 6.66748 16.4526 6.46554 16.2244 6.41585ZM11.2866 8.30769C11.2866 9.95019 9.95019 11.2866 8.30769 11.2866C6.66519 11.2866 5.32883 9.95019 5.32883 8.30769C5.32883 6.66519 6.66519 5.32883 8.30769 5.32883C9.95019 5.32883 11.2866 6.66519 11.2866 8.30769Z" fill="#469BFC"/>
                </svg>
                Изменить профиль
            </a>
            
            <a @click.prevent="btnClick('gift')" class="gift">
                <img v-bind:src="require(`@/img/accountImgs/changeProfileGift.svg`)" alt="gift">
                <div class="giftNotification">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="12" rx="6" fill="#EA4E3D"/>
                    </svg>
                </div>
            </a>

            <a href="moneyPage.html" class="wallet">
                <img v-bind:src="require(`@/img/accountImgs/changeProfileWallet.svg`)" alt="wallet">
            </a>

            <div class="share" @click="btnClick('share')">
                <img v-bind:src="require(`@/img/accountImgs/changeProfileShare.svg`)" alt="share">
            </div>
        </div>

        <!-- no subscribe -->
        <div class="page-account__buttonSetting" v-else-if="getLoginSubscribe === 'no_subscribe'">
            <a href="makeFriendCard.html" class="page-account_buttonFriens">
                <span class="free">Free</span>
                Подружиться
            </a>
        </div>

        <!-- subscribe -->
        <div class="page-account__buttonSetting subscribe" v-else-if="getLoginSubscribe === 'subscribe'">
            <router-link v-bind:to="'chats/' + getProfileDescr.id" class="page-account_authorized">
                <img v-bind:src="require(`@/img/accountImgs/accountSendIcon.svg`)" alt="send">
                Написать
            </router-link>

            <a href="#" class="page-account_authorized">
                <img v-bind:src="require(`@/img/accountImgs/accountMoneyIcon.svg`)" alt="money">
                Подарить
            </a>
            
            <a @click.prevent="btnClick('unsubscr')" class="page-account_logout">
                <img v-bind:src="require(`@/img/accountImgs/accountLogoutIcon.svg`)" alt="gift">
            </a>
        </div>

        <!-- test buttons -->
        <div class="testButtons">
            <button style="font-weight: 600; padding: 0 5px;" @click="changeProfile('profile')">Профиль</button>
            <button style="font-weight: 600; padding: 0 5px;" @click="changeProfile('no_subscr')">Отписавшийся</button>
            <button style="font-weight: 600; padding: 0 5px;" @click="changeProfile('subscr')">Подписавшийся</button>
        </div>

    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
import ModalHide from '@/js/ModalHide';
export default {
    name: 'ProfileDescription',
    data() {
        return {
            char: 'K'
        }
    },
    computed: mapGetters(['getProfileDescr', 'getLoginSubscribe']),
    methods: {
        ...mapMutations([
            'SHOW_MODAL_GIFT', 
            'HIDE_MODAL_GIFT',
            'SHOW_MODAL_SHARE', 
            'HIDE_MODAL_SHARE',
            'USER_PROFILE_PROFILE',
            'USER_PROFILE_NO_SUBSCR',
            'USER_PROFILE_SUBSCRIBE',
            'SHOW_MODAL_UNSUBSCRIBE',
            'HIDE_MODAL_UNSUBSCRIBE'
        ]),
        async btnClick(type) {
            if (type === 'gift') {
                await this.SHOW_MODAL_GIFT();
                await ModalHide('.modalGift', this.HIDE_MODAL_GIFT);
            } else if (type === 'share') {
                await this.SHOW_MODAL_SHARE();
                await ModalHide('.modalShare', this.HIDE_MODAL_SHARE);
            } else if (type === 'unsubscr') {
                await this.SHOW_MODAL_UNSUBSCRIBE();
                await ModalHide('.modalLogout', this.HIDE_MODAL_UNSUBSCRIBE);
            }
        },
        // test methods
        changeProfile(type) {
            if (type === 'profile') {
                this.USER_PROFILE_PROFILE();
            } else if (type === 'no_subscr') {
                this.USER_PROFILE_NO_SUBSCR();
            } else if (type === 'subscr') {
                this.USER_PROFILE_SUBSCRIBE();
            }
        }
    }
}
</script>

<style scoped>
/* test styles */
.testButtons{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
.testButtons button{
    margin-left: 5px;
    margin-right: 5px;
}
/* teste end */
.page-account__content {
    border-radius: 15px 15px 0 0;
    margin-top: -83px;
    padding-top: 41px;
    position: relative;
}
.page-account__content:after {
    border-radius: 15px 15px 0 0;
    content: '';
    width: 100%;
    height: 80px;
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    background-color: #fff;
    z-index: 1;
}
.page-account__price {
    padding: 0 10px;
    margin-bottom: 10px;
    text-align: center;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #1D1D1F;
    position: relative;
    z-index: 3;
    margin-top: 9px;
}
.page-account__info {
    padding: 0 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    position: relative;
    z-index: 2;
    font-size: 15px;
    line-height: 18px;
    color: #BDBDBD;
    font-family: Gilroy;
}
.page-account__info svg {
    margin: 0 4px;
}
.page-account__nik {
    padding: 0 20px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #1D1D1F;
    margin-bottom: 5px;
    text-align: center;
    position: relative;
    z-index: 2;
    margin-top: 10px;
}
/* avatar */
.page-account__avatar {
    width: 92px;
    height: 92px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #CBCBCB;
    z-index: 2;
}
.page-account__avatar .verity {
    position: absolute;
    right: 8px;
    bottom: 4px;
}
.page-account__avatar .avatarCheck{
    position: absolute;
    right: 3px;
    bottom: 4px;
}
.page-account__avatar .avatarGarland{
    position: absolute;
    top: 10px;
}
.page-account__avatar .avatar-none {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(270deg, #7BC862 0.01%, #ABEA96 100%);
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 54px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* buttons */
.page-account__buttonSetting {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
}
.page-account__buttonSetting .page-account_buttonFriens{
    width: 250px;
    height: 40px;
    position: relative;
    background: linear-gradient(90deg, #01C99B 15.89%, #4892F3 100%);
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.page-account__buttonSetting .page-account_buttonFriens .free{
    background: #EA4E3D;
    border-radius: 8.5px;
    padding-left: 3px;
    padding-right: 3px;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    position: absolute;
    top: -5px;
    right: -5px;
}
.page-account__buttonSetting .share {
    width: 40px;
    height: 40px;
    background: rgba(219, 219, 219, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2.5px;
}
.page-account__buttonSetting .gift {
    width: 40px;
    height: 40px;
    background: rgba(219, 219, 219, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2.5px;
    position: relative;
}
.page-account__buttonSetting .gift .giftNotification{
    position: absolute;
    right: 0;
    top: 0;
}
.page-account__buttonSetting .wallet{
    width: 40px;
    height: 40px;
    background: rgba(219, 219, 219, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2.5px;
}
.page-account__btnSettings {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #1D1D1F;
    text-decoration: none;
    border: 1px solid #ECECEC;
    background: rgba(219, 219, 219, 0.5);
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 205px;
    height: 40px;
    margin: 0 2.5px;
    color: #469BFC;
}
.page-account__btnSettings svg {
    margin-right: 6px;
    margin-left: -3px;
}
/* subscribe */
.page-account_authorized{
    width: 140px;
    height: 40px;
    border-radius: 13px;
    background: #ebecef;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Gilroy';
    font-size: 16px;
    line-height: 19px;
    color: #469BFC;
    margin-right: 2.5px;
    margin-left: 2.5px;
}
.page-account_authorized img{
    margin-right: 5px;
}
.page-account_logout{
    padding: 12px;
    height: 40px;
    max-height: 40px;
    border-radius: 13px;
    background: #ebecef;
    margin-right: 2.5px;
    margin-left: 2.5px;
}
</style>