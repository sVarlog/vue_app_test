<template>
    <div class="openChat">
        <CustomHeader v-bind:title="filterPersonData().name" pageType="message" v-bind:status="filterPersonData().status"/>
        
        <div class="background">
            <div class="blur"></div>
            <img v-bind:src="require(`@/img/messageBg.jpg`)">
        </div>
        <div class="messageInner">
            <div class="date">вторник</div>
            <div class="message to">
                <div class="text">Может я не успею</div>
                <div class="time">11:49</div>
                <div class="status">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75626 1.32789C9.656 1.22359 9.49457 1.22359 9.39601 1.32789L3.56064 7.39852L1.15615 4.89885C1.05589 4.79455 0.894456 4.79455 0.795897 4.89885C0.695639 5.00315 0.695639 5.17109 0.795897 5.27362L3.56064 8.14983L9.75626 1.70266C9.85651 1.60013 9.85651 1.43042 9.75626 1.32789Z" fill="#19A839"/>
                        <path d="M12.9277 0.970773C12.8275 0.866473 12.666 0.866473 12.5675 0.970773L6.20703 7.58765C6.10677 7.69195 6.10677 7.85989 6.20703 7.96242C6.25631 8.01369 6.32258 8.04021 6.38715 8.04021C6.45173 8.04021 6.518 8.01369 6.56728 7.96242L12.9277 1.34555C13.0263 1.24301 13.0263 1.07331 12.9277 0.970773Z" fill="#19A839"/>
                    </svg>
                </div>
            </div>
            <div class="message to">
                <div class="text">Успеваю?</div>
                <div class="time">11:49</div>
                <div class="status">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75626 1.32789C9.656 1.22359 9.49457 1.22359 9.39601 1.32789L3.56064 7.39852L1.15615 4.89885C1.05589 4.79455 0.894456 4.79455 0.795897 4.89885C0.695639 5.00315 0.695639 5.17109 0.795897 5.27362L3.56064 8.14983L9.75626 1.70266C9.85651 1.60013 9.85651 1.43042 9.75626 1.32789Z" fill="#19A839"/>
                        <path d="M12.9277 0.970773C12.8275 0.866473 12.666 0.866473 12.5675 0.970773L6.20703 7.58765C6.10677 7.69195 6.10677 7.85989 6.20703 7.96242C6.25631 8.01369 6.32258 8.04021 6.38715 8.04021C6.45173 8.04021 6.518 8.01369 6.56728 7.96242L12.9277 1.34555C13.0263 1.24301 13.0263 1.07331 12.9277 0.970773Z" fill="#19A839"/>
                    </svg>
                </div>
            </div>
            <div class="message from">
                <div class="text">
                    Да <br>
                    Я жду тогда
                </div>
                <div class="time">11:49</div>
            </div>
            <div class="message from">
                <div class="text">
                    Ты на такси?
                </div>
                <div class="time">11:49</div>
            </div>
            <div class="message to">
                <div class="text">Спасибо!</div>
                <div class="time">11:50</div>
                <div class="status">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75626 1.32789C9.656 1.22359 9.49457 1.22359 9.39601 1.32789L3.56064 7.39852L1.15615 4.89885C1.05589 4.79455 0.894456 4.79455 0.795897 4.89885C0.695639 5.00315 0.695639 5.17109 0.795897 5.27362L3.56064 8.14983L9.75626 1.70266C9.85651 1.60013 9.85651 1.43042 9.75626 1.32789Z" fill="#19A839"/>
                        <path d="M12.9277 0.970773C12.8275 0.866473 12.666 0.866473 12.5675 0.970773L6.20703 7.58765C6.10677 7.69195 6.10677 7.85989 6.20703 7.96242C6.25631 8.01369 6.32258 8.04021 6.38715 8.04021C6.45173 8.04021 6.518 8.01369 6.56728 7.96242L12.9277 1.34555C13.0263 1.24301 13.0263 1.07331 12.9277 0.970773Z" fill="#19A839"/>
                    </svg>
                </div>
            </div>
            <div class="message to">
                <div class="text">Да</div>
                <div class="time">11:50</div>
                <div class="status">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75626 1.32789C9.656 1.22359 9.49457 1.22359 9.39601 1.32789L3.56064 7.39852L1.15615 4.89885C1.05589 4.79455 0.894456 4.79455 0.795897 4.89885C0.695639 5.00315 0.695639 5.17109 0.795897 5.27362L3.56064 8.14983L9.75626 1.70266C9.85651 1.60013 9.85651 1.43042 9.75626 1.32789Z" fill="#19A839"/>
                        <path d="M12.9277 0.970773C12.8275 0.866473 12.666 0.866473 12.5675 0.970773L6.20703 7.58765C6.10677 7.69195 6.10677 7.85989 6.20703 7.96242C6.25631 8.01369 6.32258 8.04021 6.38715 8.04021C6.45173 8.04021 6.518 8.01369 6.56728 7.96242L12.9277 1.34555C13.0263 1.24301 13.0263 1.07331 12.9277 0.970773Z" fill="#19A839"/>
                    </svg>
                </div>
            </div>
            <div class="message from twoRows">
                <div class="text">
                    Давай пропуск закажу заедешь к клинике прям
                </div>
                <div class="time">11:49</div>
            </div>
            <div class="message to">
                <div class="text">Да без б</div>
                <div class="time">16:22</div>
                <div class="status">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75626 1.32789C9.656 1.22359 9.49457 1.22359 9.39601 1.32789L3.56064 7.39852L1.15615 4.89885C1.05589 4.79455 0.894456 4.79455 0.795897 4.89885C0.695639 5.00315 0.695639 5.17109 0.795897 5.27362L3.56064 8.14983L9.75626 1.70266C9.85651 1.60013 9.85651 1.43042 9.75626 1.32789Z" fill="#19A839"/>
                        <path d="M12.9277 0.970773C12.8275 0.866473 12.666 0.866473 12.5675 0.970773L6.20703 7.58765C6.10677 7.69195 6.10677 7.85989 6.20703 7.96242C6.25631 8.01369 6.32258 8.04021 6.38715 8.04021C6.45173 8.04021 6.518 8.01369 6.56728 7.96242L12.9277 1.34555C13.0263 1.24301 13.0263 1.07331 12.9277 0.970773Z" fill="#19A839"/>
                    </svg>
                </div>
            </div>
            <div class="message to">
                <div class="text">Спасибо тебе большое!</div>
                <div class="time">16:22</div>
                <div class="status">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75626 1.32789C9.656 1.22359 9.49457 1.22359 9.39601 1.32789L3.56064 7.39852L1.15615 4.89885C1.05589 4.79455 0.894456 4.79455 0.795897 4.89885C0.695639 5.00315 0.695639 5.17109 0.795897 5.27362L3.56064 8.14983L9.75626 1.70266C9.85651 1.60013 9.85651 1.43042 9.75626 1.32789Z" fill="#19A839"/>
                        <path d="M12.9277 0.970773C12.8275 0.866473 12.666 0.866473 12.5675 0.970773L6.20703 7.58765C6.10677 7.69195 6.10677 7.85989 6.20703 7.96242C6.25631 8.01369 6.32258 8.04021 6.38715 8.04021C6.45173 8.04021 6.518 8.01369 6.56728 7.96242L12.9277 1.34555C13.0263 1.24301 13.0263 1.07331 12.9277 0.970773Z" fill="#19A839"/>
                    </svg>
                </div>
            </div>
            <div class="message from twoRows invoice">
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.4979 6.46943C48.0289 2.5765 44.3028 0 40.1419 0H9.99999C4.47715 0 0 4.47715 0 10V48C0 53.5229 4.47715 58 10 58H40.1419C44.3028 58 48.0289 55.4235 49.4979 51.5306L56.6677 32.5306C57.5264 30.2552 57.5264 27.7448 56.6677 25.4694L49.4979 6.46943Z" fill="url(#paint0_linear)"/>
                    <path d="M38.75 37.65C38.75 40.3833 37.85 42.6333 36.05 44.4C34.25 46.1667 31.9167 47.2167 29.05 47.55V52H25.9V47.6C23.1667 47.4 20.8333 46.65 18.9 45.35C17 44.05 15.6167 42.3 14.75 40.1L18.75 37.8C19.8833 40.9 22.2667 42.65 25.9 43.05V30.95C24.4 30.4167 23.1833 29.9333 22.25 29.5C21.35 29.0333 20.4 28.4167 19.4 27.65C18.4 26.8833 17.65 25.95 17.15 24.85C16.6833 23.7167 16.45 22.4167 16.45 20.95C16.45 18.25 17.35 16.05 19.15 14.35C20.95 12.65 23.2 11.6667 25.9 11.4V7H29.05V11.45C31.05 11.7167 32.8333 12.4167 34.4 13.55C35.9667 14.6833 37.1833 16.2167 38.05 18.15L34.15 20.35C33.1833 17.9167 31.4833 16.4667 29.05 16V27.5C30.5833 28.0667 31.8 28.5667 32.7 29C33.6 29.4333 34.5833 30.05 35.65 30.85C36.7167 31.6167 37.5 32.5667 38 33.7C38.5 34.8333 38.75 36.15 38.75 37.65ZM21.05 20.95C21.05 22.2167 21.4333 23.25 22.2 24.05C22.9667 24.85 24.2 25.6 25.9 26.3V15.95C24.4333 16.15 23.25 16.7 22.35 17.6C21.4833 18.4667 21.05 19.5833 21.05 20.95ZM29.05 42.95C30.65 42.7167 31.8833 42.1333 32.75 41.2C33.65 40.2333 34.1 39.0667 34.1 37.7C34.1 36.3333 33.6833 35.25 32.85 34.45C32.05 33.6167 30.7833 32.8333 29.05 32.1V42.95Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="58" y1="0" x2="0" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#36CC76"/>
                    <stop offset="1" stop-color="#36CC76" stop-opacity="0.6"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div class="text">
                    Счет успешно <br> оплачен на сумму: <br> 50 000руб
                </div>
                <div class="time">11:49</div>
            </div>
            <div class="message from twoRows invoice invoiceWBtn">
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.4979 6.46943C48.0289 2.5765 44.3028 0 40.1419 0H9.99999C4.47715 0 0 4.47715 0 10V48C0 53.5229 4.47715 58 10 58H40.1419C44.3028 58 48.0289 55.4235 49.4979 51.5306L56.6677 32.5306C57.5264 30.2552 57.5264 27.7448 56.6677 25.4694L49.4979 6.46943Z" fill="url(#paint0_linear)"/>
                    <path d="M38.75 37.65C38.75 40.3833 37.85 42.6333 36.05 44.4C34.25 46.1667 31.9167 47.2167 29.05 47.55V52H25.9V47.6C23.1667 47.4 20.8333 46.65 18.9 45.35C17 44.05 15.6167 42.3 14.75 40.1L18.75 37.8C19.8833 40.9 22.2667 42.65 25.9 43.05V30.95C24.4 30.4167 23.1833 29.9333 22.25 29.5C21.35 29.0333 20.4 28.4167 19.4 27.65C18.4 26.8833 17.65 25.95 17.15 24.85C16.6833 23.7167 16.45 22.4167 16.45 20.95C16.45 18.25 17.35 16.05 19.15 14.35C20.95 12.65 23.2 11.6667 25.9 11.4V7H29.05V11.45C31.05 11.7167 32.8333 12.4167 34.4 13.55C35.9667 14.6833 37.1833 16.2167 38.05 18.15L34.15 20.35C33.1833 17.9167 31.4833 16.4667 29.05 16V27.5C30.5833 28.0667 31.8 28.5667 32.7 29C33.6 29.4333 34.5833 30.05 35.65 30.85C36.7167 31.6167 37.5 32.5667 38 33.7C38.5 34.8333 38.75 36.15 38.75 37.65ZM21.05 20.95C21.05 22.2167 21.4333 23.25 22.2 24.05C22.9667 24.85 24.2 25.6 25.9 26.3V15.95C24.4333 16.15 23.25 16.7 22.35 17.6C21.4833 18.4667 21.05 19.5833 21.05 20.95ZM29.05 42.95C30.65 42.7167 31.8833 42.1333 32.75 41.2C33.65 40.2333 34.1 39.0667 34.1 37.7C34.1 36.3333 33.6833 35.25 32.85 34.45C32.05 33.6167 30.7833 32.8333 29.05 32.1V42.95Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="58" y1="0" x2="0" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#36CC76"/>
                    <stop offset="1" stop-color="#36CC76" stop-opacity="0.6"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div class="text">
                    Вам выставлен счет на сумму: 50 000руб
                </div>
                <div class="time">11:49</div>
            </div>
            <button class="message from twoRows invoice invoiceBtn">
                Оплатить
            </button>
        </div>

        <div class="bottomSendForm">
            <button class="attachment">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0832 10.0833H11.9166V0.91668C11.9166 0.410403 11.5062 0 10.9999 0C10.4937 0 10.0833 0.410403 10.0833 0.91668V10.0833H0.91668C0.410403 10.0833 0 10.4937 0 10.9999C0 11.5062 0.410403 11.9166 0.91668 11.9166H10.0833V21.0833C10.0833 21.5895 10.4937 21.9999 11 21.9999C11.5063 21.9999 11.9167 21.5895 11.9167 21.0833V11.9166H21.0833C21.5896 11.9166 22 11.5062 22 10.9999C22 10.4937 21.5895 10.0833 21.0832 10.0833Z" fill="#2F80ED"/>
                </svg>
            </button>
            <input type="text" placeholder="Сообщение...">
            <button class="send">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 2L2.5 1.5L15 6.40039L25 12.4004L4.5 11.9004L1.5 2Z" fill="#2F80ED"/>
                    <path d="M24.7375 11.3277C24.4806 10.7835 24.0523 10.3441 23.522 10.0805L3.76094 0.269478C2.45917 -0.377609 0.892687 0.180621 0.26201 1.51626C-0.0592884 2.19678 -0.0862977 2.98473 0.187683 3.68672L3.6239 12.499L0.187683 21.3123C-0.347541 22.6948 0.310913 24.2607 1.65836 24.8098C1.96303 24.934 2.28771 24.9985 2.61555 25C3.0122 25 3.40373 24.9082 3.76094 24.7313L23.5219 14.9175C24.8238 14.2706 25.368 12.6634 24.7375 11.3277ZM3.00054 23.1163C2.56655 23.3318 2.04442 23.1456 1.83433 22.7003C1.72726 22.4735 1.71836 22.2108 1.80972 21.9769L5.15514 13.3947H22.5817L3.00054 23.1163ZM5.15519 11.6033L1.80977 3.02116C1.67053 2.67906 1.75698 2.28401 2.02539 2.03586C2.2852 1.77611 2.6775 1.71517 3.00054 1.88449L22.5817 11.6033H5.15519Z" fill="#2F80ED"/>
                    <path d="M5 13H24L17 17L1 24L5 13Z" fill="#2F80ED"/>
                    <rect x="3" y="12" width="22" height="1" fill="#FAFAFA"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import CustomHeader from '@/components/CustomHeader';

export default {
    name: 'OpenChat',
    props: ['id'],
    components: {
        CustomHeader
    },
    computed: mapGetters(['getMessages']),
    methods: {
        filterPersonData() {
            return this.getMessages.dialogs.with.find((mId) => {return mId.id === +this.$router.currentRoute.params.id})
        }
    },
}
</script>

<style scoped>
.openChat{
    height: 100%;
    max-height: 100%;
    padding-top: 51px;
    padding-bottom: 51px;
}
.background{
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
}
.background .blur{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
.background img{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
}
.messageInner{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 13px;
    padding-right: 13px;
    padding-bottom: 15px;
    margin-top: auto;
}
.date{
    background: rgba(0, 0, 0, 0.2);
    border-radius: 35px;
    padding-left: 11px;
    padding-right: 11px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 12.5px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.message{
    border-radius: 15px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #1D1D1F;
    padding-top: 7px;
    padding-bottom: 5px;
    padding-left: 13px;
    padding-right: 13px;
    margin-bottom: 10px;
    display: flex;
    max-width: 265px;
    display: flex;
    align-items: flex-end;
    position: relative;
}
.message.to{
    align-self: flex-end;
    border-bottom-right-radius: 0;
    background: #E7FECB;
    padding-bottom: 6px;
}
.message.to .time{
    margin-left: 5px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.02em;
    color: #19A839;
    margin-bottom: -3px;
}
.message.to .status{
    display: flex;
    align-items: flex-end;
    margin-left: 3px;
    margin-bottom: -3px;
}
.message.from{
    align-self: flex-start;
    border-bottom-left-radius: 0;
    background: #FFFFFF;
}
.message.from .time{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.02em;
    color: #808080;
    margin-left: 12px;
    margin-bottom: -3px;
}
.message.from.twoRows .time{
    position: absolute;
    right: 12px;
    bottom: 5px;
}
.message.from.invoice{
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 255px;
}
.message.from.invoice svg{
    width: 58px;
    min-width: 58px;
    height: 58px;
    min-height: 58px;
}
.message.from.invoice .text{
    margin-left: 10px;
}
.message.invoiceWBtn{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.message.invoiceBtn{
    width: 100%;
    border-radius: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    outline: 0;
    border: 0;
    margin-top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #2F80ED;
}
.bottomSendForm{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 51px;
    z-index: 3;
    background: #fafafa;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
}
.bottomSendForm button{
    outline: 0;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bottomSendForm input{
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    background: #FFFFFF;
    border: 0.5px solid #D6D6D6;
    box-sizing: border-box;
    border-radius: 35px;
    height: 32px;
    padding-left: 10px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1D1D1F;
    outline: 0;
}
.bottomSendForm input::placeholder{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #B8B8B8;
}
</style>