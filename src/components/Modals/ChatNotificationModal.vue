<template>
    <transition name="modal-fade">
        <div v-bind:class="['modal', 'notificationModal', status ? 'active' : '']">
            <div class="modalWrapp"></div>
            <div class="modalContent">
                <div class="row">
                    <svg width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.09 35.5959C37.09 33.6685 36.6342 31.7374 35.7716 30.0108C34.9091 28.2856 34.4533 26.3544 34.4533 24.4271V21.0939C34.4533 13.9457 30.7898 7.89719 25.8994 5.94293C26.2437 5.35652 26.4552 4.68284 26.4552 3.9551C26.4552 1.77417 24.681 0 22.5001 0C20.3191 0 18.545 1.77417 18.545 3.9551C18.545 4.68284 18.7564 5.35652 19.1007 5.94293C14.2105 7.8971 10.5469 13.9457 10.5469 21.0939V24.4271C10.5469 26.3545 10.0911 28.2856 9.22852 30.0108C8.36596 31.7374 7.91016 33.6685 7.91016 35.5959C7.91016 36.3246 8.49982 36.9143 9.22852 36.9143H35.7716C36.5003 36.9143 37.09 36.3246 37.09 35.5959ZM21.1817 3.9551C21.1817 3.22771 21.7727 2.63673 22.5001 2.63673C23.2275 2.63673 23.8184 3.22771 23.8184 3.9551C23.8184 4.68249 23.2275 5.27346 22.5001 5.27346C21.7727 5.27346 21.1817 4.68257 21.1817 3.9551Z" fill="#C4C4C4"/>
                        <path d="M37.09 35.5959C37.09 33.6685 36.6342 31.7374 35.7716 30.0108C34.9091 28.2856 34.4533 26.3544 34.4533 24.4271V21.0939C34.4533 13.9457 30.7898 7.89719 25.8994 5.94293C26.2437 5.35652 26.4552 4.68284 26.4552 3.9551C26.4552 1.77417 24.681 0 22.5001 0C20.3191 0 18.545 1.77417 18.545 3.9551C18.545 4.68284 18.7564 5.35652 19.1007 5.94293C14.2105 7.8971 10.5469 13.9457 10.5469 21.0939V24.4271C10.5469 26.3545 10.0911 28.2856 9.22852 30.0108C8.36596 31.7374 7.91016 33.6685 7.91016 35.5959C7.91016 36.3246 8.49982 36.9143 9.22852 36.9143H35.7716C36.5003 36.9143 37.09 36.3246 37.09 35.5959ZM21.1817 3.9551C21.1817 3.22771 21.7727 2.63673 22.5001 2.63673C23.2275 2.63673 23.8184 3.22771 23.8184 3.9551C23.8184 4.68249 23.2275 5.27346 22.5001 5.27346C21.7727 5.27346 21.1817 4.68257 21.1817 3.9551Z" fill="url(#paint0_linear)"/>
                        <path d="M43.8482 18.4464C44.5705 18.3537 45.0816 17.6933 44.989 16.971C44.1637 10.5362 41.2463 5.76744 38.9456 2.89903C38.4898 2.33257 37.6633 2.24371 37.0916 2.69565C36.5238 3.15145 36.4324 3.98184 36.8882 4.54962C38.9791 7.15287 41.6261 11.4801 42.3728 17.3059C42.4619 17.9941 43.0803 18.5337 43.8482 18.4464Z" fill="#C4C4C4"/>
                        <path d="M43.8482 18.4464C44.5705 18.3537 45.0816 17.6933 44.989 16.971C44.1637 10.5362 41.2463 5.76744 38.9456 2.89903C38.4898 2.33257 37.6633 2.24371 37.0916 2.69565C36.5238 3.15145 36.4324 3.98184 36.8882 4.54962C38.9791 7.15287 41.6261 11.4801 42.3728 17.3059C42.4619 17.9941 43.0803 18.5337 43.8482 18.4464Z" fill="url(#paint1_linear)"/>
                        <path d="M1.15158 18.4466C1.91843 18.5337 2.53771 17.9954 2.62701 17.3059C3.37373 11.4801 6.02075 7.15287 8.11159 4.54962C8.56739 3.98184 8.47598 3.15145 7.90821 2.69565C7.34175 2.24371 6.51391 2.33257 6.05423 2.89903C3.75351 5.76753 0.836142 10.5363 0.0108451 16.971C-0.081792 17.6935 0.429294 18.3539 1.15158 18.4466Z" fill="#C4C4C4"/>
                        <path d="M1.15158 18.4466C1.91843 18.5337 2.53771 17.9954 2.62701 17.3059C3.37373 11.4801 6.02075 7.15287 8.11159 4.54962C8.56739 3.98184 8.47598 3.15145 7.90821 2.69565C7.34175 2.24371 6.51391 2.33257 6.05423 2.89903C3.75351 5.76753 0.836142 10.5363 0.0108451 16.971C-0.081792 17.6935 0.429294 18.3539 1.15158 18.4466Z" fill="url(#paint2_linear)"/>
                        <path d="M38.5617 18.4418C39.2814 18.3285 39.7732 17.6552 39.6613 16.9355C38.9223 12.2143 36.7116 8.59399 34.9877 6.38854C34.5384 5.81689 33.7106 5.71134 33.1364 6.16195C32.5634 6.61125 32.4618 7.4391 32.9098 8.01329C34.4419 9.9715 36.4053 13.1812 37.0555 17.3423C37.1665 18.052 37.8297 18.5522 38.5617 18.4418Z" fill="#C4C4C4"/>
                        <path d="M38.5617 18.4418C39.2814 18.3285 39.7732 17.6552 39.6613 16.9355C38.9223 12.2143 36.7116 8.59399 34.9877 6.38854C34.5384 5.81689 33.7106 5.71134 33.1364 6.16195C32.5634 6.61125 32.4618 7.4391 32.9098 8.01329C34.4419 9.9715 36.4053 13.1812 37.0555 17.3423C37.1665 18.052 37.8297 18.5522 38.5617 18.4418Z" fill="url(#paint3_linear)"/>
                        <path d="M11.8669 6.16195C11.2914 5.71265 10.4623 5.81302 10.0156 6.38853C8.29168 8.59398 6.08105 12.2143 5.34206 16.9355C5.23009 17.6551 5.72184 18.3285 6.44158 18.4418C7.17494 18.5526 7.83702 18.0511 7.94794 17.3423C8.59807 13.1812 10.5615 9.97159 12.0936 8.01329C12.5416 7.43909 12.4399 6.61125 11.8669 6.16195Z" fill="#C4C4C4"/>
                        <path d="M11.8669 6.16195C11.2914 5.71265 10.4623 5.81302 10.0156 6.38853C8.29168 8.59398 6.08105 12.2143 5.34206 16.9355C5.23009 17.6551 5.72184 18.3285 6.44158 18.4418C7.17494 18.5526 7.83702 18.0511 7.94794 17.3423C8.59807 13.1812 10.5615 9.97159 12.0936 8.01329C12.5416 7.43909 12.4399 6.61125 11.8669 6.16195Z" fill="url(#paint4_linear)"/>
                        <path d="M26.2131 39.5506H18.7886C19.3346 41.0818 20.7843 42.1873 22.5008 42.1873C24.2173 42.1873 25.6671 41.0819 26.2131 39.5506Z" fill="#C4C4C4"/>
                        <path d="M26.2131 39.5506H18.7886C19.3346 41.0818 20.7843 42.1873 22.5008 42.1873C24.2173 42.1873 25.6671 41.0819 26.2131 39.5506Z" fill="url(#paint5_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="22.5001" y1="0" x2="22.5001" y2="36.9143" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stop-color="#01C89C"/>
                        <stop offset="1" stop-color="#4792F2"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="40.799" y1="2.4076" x2="40.799" y2="18.4557" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stop-color="#01C89C"/>
                        <stop offset="1" stop-color="#4792F2"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="4.20084" y1="2.4076" x2="4.20084" y2="18.4559" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stop-color="#01C89C"/>
                        <stop offset="1" stop-color="#4792F2"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="36.1538" y1="5.88183" x2="36.1538" y2="18.4571" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stop-color="#01C89C"/>
                        <stop offset="1" stop-color="#4792F2"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="8.84957" y1="5.8812" x2="8.84957" y2="18.4572" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stop-color="#01C89C"/>
                        <stop offset="1" stop-color="#4792F2"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="22.5008" y1="39.5506" x2="22.5008" y2="42.1873" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stop-color="#01C89C"/>
                        <stop offset="1" stop-color="#4792F2"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <h2>Включите уведомления</h2>
                </div>
                <div class="firstStep step">
                    <p>Чтобы написать другу, вам обязательно нужно включить уведомления. <br>Выберите удобный для вас способ:</p>
                    <button class="blueBtn">Пуш-уведомление</button>
                    <button data-step="2" class="blueBtn changeStep nextNotificationModal">Ввести Email</button>
                    <button class="blueBtn">
                        В Telegram боте
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z" fill="url(#paint0_linear)"/>
                            <path d="M6.125 10.9375C5.882 10.9375 5.92331 10.8458 5.8395 10.6144L5.125 8.26297L10.625 5.00003" fill="#C8DAEA"/>
                            <path d="M6.125 10.9376C6.3125 10.9376 6.39531 10.8518 6.5 10.7501L7.5 9.7777L6.25263 9.02551" fill="#A9C9DD"/>
                            <path d="M6.2527 9.02567L9.2752 11.2587C9.62014 11.449 9.86901 11.3505 9.95495 10.9385L11.1853 5.14086C11.3112 4.63586 10.9928 4.40673 10.6628 4.55654L3.43839 7.34223C2.94526 7.54004 2.9482 7.81517 3.34851 7.93773L5.20245 8.51642L9.49451 5.80861C9.69714 5.68573 9.88314 5.75173 9.73051 5.88723" fill="url(#paint1_linear)"/>
                            <defs>
                            <linearGradient id="paint0_linear" x1="10.005" y1="2.505" x2="6.255" y2="11.25" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#37AEE2"/>
                            <stop offset="1" stop-color="#1E96C8"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="8.44044" y1="7.50064" x2="9.61091" y2="10.1674" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EFF7FC"/>
                            <stop offset="1" stop-color="white"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div class="secondStep step">
                    <p>Чтобы написать другу, вам обязательно нужно включить уведомления. <br>Выберите удобный для вас способ:</p>
                    <input type="email" placeholder="Email">
                    <div class="row">
                        <button data-step="1" class="prevStep changeStep"><img v-bind:src="require(`@/img/icons/authBlueArrowToLeftIcon.svg`)" alt="arrow"></button>
                        <button data-step="3" class="nextStep changeStep blueBtn">Далее</button>
                    </div>
                </div>
                <div class="lastStep step">
                    <p>Вам только что был отправлен код на 📧 Email, пожалуйста введите его</p>
                    <input type="text" placeholder="Введите код">
                    <div class="row">
                        <button data-step="2" class="prevStep changeStep"><img v-bind:src="require(`@/img/icons/authBlueArrowToLeftIcon.svg`)" alt="arrow"></button>
                        <button class="sendBtn blueBtn modalClose">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import stepsInit from '@/js/ChatNotification.js';
export default {
    name: 'ChatNotificationModal',
    data() {
        return {
            status: false
        }
    },
    mounted() {
        stepsInit();
        setTimeout(() => {
            this.status = true
        }, 0);
    },
}
</script>

<style scoped>
.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}
.modal .modalContent{
    display: flex;
    position: relative;
    border-radius: 14px;
    padding: 15px 23px;
}
.modal.notificationModal .modalContent {
    padding-bottom: 5px;
}
.modal .modalContent .row{
    display: flex;
    align-items: center;
}
.modal .modalContent .row svg{
    margin-right: 10px;
}
.modal.notificationModal .modalContent p{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #1D1D1F;
    margin-top: 13px;
    margin-bottom: 14px;
}
.modal .modalContent .lastStep p{
    font-size: 15px;
    line-height: 19px;
}
.modal.notificationModal .modalContent .blueBtn{
    background: #2E88FD;
    border-radius: 24px;
    margin-bottom: 7px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    outline: 0;
    border: 0;
    height: 48px;
}
.modal .modalContent .firstStep{
    display: flex;
    flex-direction: column;
}
.modal .modalContent .step{
    display: none;
}
.modal .modalContent .step.active{
    display: flex;
    flex-direction: column;
}
.modal .modalContent input{
    width: 100%;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 10px;
    margin-top: 10px;
    outline: 0;
}
.modal .modalContent input::placeholder{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #878A92;
}
.modal .modalContent .secondStep .row,
.modal .modalContent .lastStep .row{
    display: flex;
    align-items: center;
    margin-top: 11px;
    margin-bottom: 43px;
}
.modal .modalContent .secondStep .row .prevStep,
.modal .modalContent .lastStep .row .prevStep{
    width: 48px;
    min-width: 48px;
    height: 48px;
    min-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    border: 1px solid #ECECEC;
    outline: 0;
    border-radius: 10px;
    margin-right: 11px;
}
.modal .modalContent .secondStep .row .nextStep,
.modal .modalContent .lastStep .row .nextStep,
.modal .modalContent .sendBtn {
    width: 100%;
    margin-bottom: 0;
}
.modal .modalContent button:disabled{
    opacity: .3;
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