<template>
    <div class="page-account__content">
        <ProfileAvatar 
            v-bind:char="char"
        />
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
import ProfileAvatar from '@/components/Profile/ProfileAvatar';
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
        ProfileAvatar,
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
</style>