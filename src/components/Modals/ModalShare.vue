<template>
        <transition name="modal-fade">
            <div v-bind:class="['modal', 'modalShare', status ? 'active' : '']">
                <div class="modalWrapp"></div>
                <div class="modalContent">
                    <h2>Поделиться</h2>
                    <ul>
                        <li>
                            <a href="#"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                                        fill="#2375B5"></path>
                                    <path
                                        d="M27.6026 20.4164L30.1965 17.6957C31.0025 16.8503 31.4553 15.7036 31.4553 14.508C31.4553 13.3124 31.0025 12.1658 30.1965 11.3204C29.3905 10.475 28.2973 10 27.1574 10C26.0175 10 24.9243 10.475 24.1183 11.3204L21.5245 14.0411C20.7184 14.8865 20.2656 16.0331 20.2656 17.2287C20.2656 17.8207 20.3768 18.4069 20.5928 18.9539C20.8088 19.5008 21.1254 19.9978 21.5245 20.4164C21.9236 20.835 22.3973 21.1671 22.9188 21.3936C23.4402 21.6202 23.9991 21.7368 24.5635 21.7368C25.7034 21.7368 26.7966 21.2618 27.6026 20.4164ZM25.6375 12.7644C26.0598 12.3235 26.6317 12.0763 27.2275 12.077C27.8234 12.0778 28.3947 12.3264 28.816 12.7683C29.2374 13.2103 29.4744 13.8095 29.4751 14.4345C29.4758 15.0595 29.2401 15.6593 28.8197 16.1023L26.0839 18.9718C25.6616 19.4127 25.0898 19.6599 24.4939 19.6592C23.898 19.6585 23.3268 19.4099 22.9054 18.9679C22.4841 18.526 22.247 17.9268 22.2463 17.3018C22.2457 16.6767 22.4813 16.077 22.9017 15.634L25.6375 12.7644Z"
                                        fill="white"></path>
                                    <path
                                        d="M18.3365 30.1356L20.9304 27.415C21.7364 26.5696 22.1894 25.423 22.1894 24.2274C22.1895 23.0318 21.7368 21.8851 20.9309 21.0396C20.1249 20.1941 19.0318 19.7191 17.8919 19.719C16.752 19.7189 15.6588 20.1938 14.8527 21.0391L12.2588 23.7598C11.4528 24.6052 11 25.7519 11 26.9475C11 27.5395 11.1112 28.1257 11.3272 28.6726C11.5431 29.2196 11.8597 29.7165 12.2588 30.1351C12.6579 30.5537 13.1317 30.8858 13.6532 31.1123C14.1746 31.3389 14.7335 31.4555 15.2979 31.4555C16.4378 31.4555 17.531 30.9805 18.337 30.1351L18.3365 30.1356ZM16.3714 22.4837C16.7937 22.0428 17.3655 21.7956 17.9614 21.7963C18.5573 21.797 19.1286 22.0456 19.5499 22.4876C19.9713 22.9295 20.2083 23.5287 20.209 24.1537C20.2097 24.7788 19.974 25.3785 19.5536 25.8215L16.8178 28.6911C16.3955 29.132 15.8237 29.3792 15.2278 29.3785C14.6319 29.3777 14.0606 29.1291 13.6393 28.6872C13.2179 28.2452 12.9809 27.646 12.9802 27.021C12.9795 26.396 13.2152 25.7962 13.6356 25.3532L16.3714 22.4837Z"
                                        fill="white"></path>
                                    <path
                                        d="M19.3298 24.2119L24.5495 18.7371C24.643 18.639 24.7171 18.5226 24.7677 18.3945C24.8183 18.2664 24.8443 18.1291 24.8443 17.9905C24.8443 17.8518 24.8183 17.7145 24.7677 17.5864C24.7171 17.4583 24.643 17.3419 24.5495 17.2438C24.456 17.1458 24.345 17.068 24.2229 17.0149C24.1008 16.9619 23.9699 16.9346 23.8377 16.9346C23.7055 16.9346 23.5746 16.9619 23.4524 17.0149C23.3303 17.068 23.2193 17.1458 23.1259 17.2438L17.9062 22.7187C17.8127 22.8168 17.7385 22.9331 17.688 23.0613C17.6374 23.1894 17.6113 23.3267 17.6113 23.4653C17.6113 23.604 17.6374 23.7413 17.688 23.8694C17.7385 23.9975 17.8127 24.1139 17.9062 24.2119C18.095 24.41 18.351 24.5212 18.618 24.5212C18.7502 24.5212 18.8811 24.4939 19.0032 24.4408C19.1254 24.3878 19.2363 24.31 19.3298 24.2119Z"
                                        fill="white"></path>
                                </svg> <span>Ссылка</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                                        fill="#30C305"></path>
                                    <g clip-path="url(#clip022)">
                                        <path
                                            d="M11.3 12H29.7C30.9708 12 31.9885 12.895 31.9885 14L32 32L27.4 28H11.3C10.0293 28 9 27.105 9 26V14C9 12.895 10.0293 12 11.3 12ZM23.95 21H26.25V19H23.95V21ZM19.35 21H21.65V19H19.35V21ZM14.75 21H17.05V19H14.75V21Z"
                                            fill="white"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip022">
                                            <rect width="23" height="20" fill="white" transform="matrix(-1 0 0 1 32 11)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg> <span>SMS</span>
                            </a>
                        </li>
                    </ul>
                    <div class="cancel modalClose">Отмена</div>
                </div>
            </div>
        </transition>
</template>

<script>
export default {
    name: 'ModalShare',
    data() {
        return {
            status: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.status = true
        }, 0)
    },
}
</script>

<style scoped>
.modalShare .modalContent{
    background: #F5F4F2;
}
.modalShare .modalContent h2{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #1D1D1F;
    text-align: center;
}
.modalShare .modalContent ul {
    display: flex;
    list-style: none;
    padding: 0 7px 15px;
    margin-top: 15px;
}
.modalShare .modalContent ul > li > a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
}
.modalShare .modalContent ul > li > a > span{
    margin-top: 5px;
    font-family: 'Gilroy';
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #4D4D4D;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.modalShare .modalClose{
    background: #FFFFFF;
    border-radius: 30.5px;
    padding: 22px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #1D1D1F;
    text-align: center;
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