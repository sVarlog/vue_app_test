<template>
    <keep-alive>
        <transition name="modal-fade">
            <div v-bind:class="['modal', 'modalSetting', state ? 'active' : 'false']">
                <div class="modalWrapp"></div>
                <div class="modalContent">
                    <div class="line"></div>
                    <div class="mainMenu">
                        <a href="#" class="settingItem">
                            <div class="imgWrapp friends">
                                <img v-bind:src="require(`@/img/accountImgs/settingIcon3.svg`)" alt="">
                            </div>
                            Мои друзья
                        </a>
                        <a href="#" class="settingItem">
                            <div class="imgWrapp settings">
                                <img v-bind:src="require(`@/img/accountImgs/settingIcon4.svg`)" alt="">
                            </div>
                            Настройки
                        </a>
                        <a href="moneyPage.html" class="settingItem">
                            <div class="imgWrapp money">
                                <img v-bind:src="require(`@/img/accountImgs/settingIcon5.svg`)" alt="">
                            </div>
                            Деньги
                        </a>
                        <a href="#" class="settingItem">
                            <div class="imgWrapp subscribes">
                                <img v-bind:src="require(`@/img/accountImgs/settingIcon2.svg`)" alt="">
                            </div>
                            Подписки
                        </a>
                        <a href="supportPage.html" class="settingItem">
                            <div class="imgWrapp help">
                                <img v-bind:src="require(`@/img/accountImgs/settingIcon1.svg`)" alt="">
                            </div>
                            Помощь и поддержка
                        </a>
                    </div>
                    <div class="anotherMenu">
                        <p>FRIENDSONLY В СОЦСЕТЯХ</p>
                        <a href="http://t.me/friendsonly_me" target="_blank" class="menuItem">
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="39" height="39" rx="19.5" fill="#F3F4F4"/>
                                <path d="M17.2269 22.8789L25.0094 28.7548C25.8975 29.2556 26.5384 28.9962 26.7596 27.9123L29.9275 12.6566C30.2518 11.3278 29.4319 10.7249 28.5822 11.1191L9.98043 18.4492C8.7107 18.9697 8.71827 19.6936 9.74902 20.0161L14.5226 21.5389L25.5741 14.4137C26.0958 14.0903 26.5747 14.264 26.1817 14.6206" fill="url(#paint0_linear)"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="22.86" y1="18.866" x2="25.9851" y2="25.8334" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B4B5B9"/>
                                        <stop offset="1" stop-color="#B4B5B9"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <a href="#" class="menuItem bold">Партнерская программа</a>
                        <a href="howItWork.html" class="menuItem bold">Как это работает?</a>
                        <a href="legalPage.html" class="menuItem bold">Юридическая информация</a>
                        <span>2020. Looplab Ltd</span>
                    </div>
                </div>
            </div>
        </transition>
    </keep-alive>
</template>

<script>
export default {
    name: 'ModalSettings',
    data() {
        return {
            state: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.state = true
        }, 0);
    },
    beforeDestroy() {
        this.state = false
    },
}
</script>

<style scoped>
.modalSetting .mainMenu{
    display: flex;
    flex-direction: column;
}
.modalSetting .mainMenu .settingItem{
    display: flex;
    align-items: center;
    margin-bottom: 19px;
    font-family: 'Gilroy';
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: #1d1d1f;
}
.modalSetting .mainMenu .settingItem .imgWrapp{
    width: 27px;
    height: 27px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 13px;
}
.modalSetting .mainMenu .settingItem .imgWrapp img{
    width: 100%;
    height: 100%;
}
/*  */
.modalSetting .mainMenu .settingItem .imgWrapp.friends,
.modalSetting .mainMenu .settingItem .imgWrapp.settings{
    background: #4892F3;
    padding: 6px;
}
.modalSetting .mainMenu .settingItem .imgWrapp.money{
    padding: 6px 5px;
    background: #36CC76;
}
.modalSetting .mainMenu .settingItem .imgWrapp.subscribes{
    background: #F19A37;
    padding: 5.2px;
}
.modalSetting .mainMenu .settingItem .imgWrapp.help{
    background: #C672FF;
    padding: 6px 8px;
}
/*  */
.modalSetting .anotherMenu{
    display: flex;
    flex-direction: column;
}
.modalSetting .anotherMenu a{
    color: #BBBCC1;
    margin-bottom: 10px;
    font-family: 'Gilroy';
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
}
.modalSetting .anotherMenu p{
    color: #8F9097;
    margin-bottom: 10px;
    font-family: 'Gilroy';
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.025em;
}
.modalSetting .anotherMenu span{
    color: #BBBCC1;
    margin-bottom: 10px;
    font-family: 'Gilroy';
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
}
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}
</style>