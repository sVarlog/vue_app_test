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
        
        <ProfileButtons />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ProfileButtons from '@/components/Profile/ProfileButtons';
export default {
    name: 'ProfileDescription',
    data() {
        return {
            char: 'K'
        }
    },
    computed: mapGetters(['getProfileDescr']),
    components: {
        // ProfileAvatar,
        ProfileButtons
    },
}
</script>

<style scoped>
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
</style>