<template>
    <keep-alive>
        <transition name="modal-fade">
            <div v-bind:class="['modal', 'reasonComplainModal', state ? 'active' : 'false']">
                <div class="modalWrapp">
                    <div class="modalContent">
                        <div class="row">
                            <div class="backToForms">
                                <img v-bind:src="require(`@/img/icons/authBlueArrowToLeftIcon.svg`)" alt="left">
                            </div>
                            <h2>Сообщить</h2>
                            <div class="modalClose">
                                <img v-bind:src="require(`@/img/icons/authBlueArrowToLeftIcon.svg`)" alt="alt">
                            </div>
                        </div>
                        <div class="underline"></div>
                        <div class="content show">
                            <span>Выберите причину</span>
                            <p class="showForm">Пожаловаться на аккаунт</p>
                            <p class="showForm">Пожаловаться на контент</p>
                        </div>
                        <form class="complainAccount">
                            <p>Причина жалобы: Пожаловаться на аккаунт</p>
                            <div class="underline"></div>
                            <p>Описание жалобы (необязательно)</p>
                            <textarea name="description" placeholder="Расскажите как можно подробнее"></textarea>
                            <span class="numberCur">0/200</span>
                            <label class="img">
                                <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8214 0.74707H3.17857C1.69924 0.74707 0.5 1.94631 0.5 3.42564V15.9256C0.5 17.4049 1.69924 18.6042 3.17857 18.6042H22.8214C24.3008 18.6042 25.5 17.4049 25.5 15.9256V3.42564C25.5 1.94631 24.3008 0.74707 22.8214 0.74707ZM23.7143 15.9256C23.7143 16.4187 23.3145 16.8185 22.8214 16.8185H3.17857C2.68544 16.8185 2.2857 16.4187 2.2857 15.9256V15.4024L5.85714 11.831L8.79734 14.7712C9.14597 15.1197 9.71119 15.1197 10.0598 14.7712L17.4643 7.36669L23.7143 13.6167V15.9256H23.7143ZM23.7143 11.0917L18.0955 5.47297C17.7469 5.12439 17.1817 5.12439 16.833 5.47297L9.42858 12.8774L6.48838 9.93718C6.13975 9.5886 5.57453 9.5886 5.2259 9.93718L2.2857 12.8774V3.42564C2.2857 2.93251 2.68544 2.53277 3.17857 2.53277H22.8214C23.3146 2.53277 23.7143 2.93251 23.7143 3.42564V11.0917H23.7143Z" fill="#828282"></path></svg>
                                <input type="file">
                                <div class="text">0/1</div>
                            </label>
                            <button class="sendComplain">Отправить</button>
                        </form>
                        <form class="complainContent">
                            <p>Причина жалобы: Пожаловаться на контент</p>
                            <div class="underline"></div>
                            <p>Описание жалобы (необязательно)</p>
                            <textarea name="description" placeholder="Расскажите как можно подробнее"></textarea>
                            <span class="numberCur">0/200</span>
                            <label class="img">
                                <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8214 0.74707H3.17857C1.69924 0.74707 0.5 1.94631 0.5 3.42564V15.9256C0.5 17.4049 1.69924 18.6042 3.17857 18.6042H22.8214C24.3008 18.6042 25.5 17.4049 25.5 15.9256V3.42564C25.5 1.94631 24.3008 0.74707 22.8214 0.74707ZM23.7143 15.9256C23.7143 16.4187 23.3145 16.8185 22.8214 16.8185H3.17857C2.68544 16.8185 2.2857 16.4187 2.2857 15.9256V15.4024L5.85714 11.831L8.79734 14.7712C9.14597 15.1197 9.71119 15.1197 10.0598 14.7712L17.4643 7.36669L23.7143 13.6167V15.9256H23.7143ZM23.7143 11.0917L18.0955 5.47297C17.7469 5.12439 17.1817 5.12439 16.833 5.47297L9.42858 12.8774L6.48838 9.93718C6.13975 9.5886 5.57453 9.5886 5.2259 9.93718L2.2857 12.8774V3.42564C2.2857 2.93251 2.68544 2.53277 3.17857 2.53277H22.8214C23.3146 2.53277 23.7143 2.93251 23.7143 3.42564V11.0917H23.7143Z" fill="#828282"></path></svg>
                                <input type="file">
                                <div class="text">0/1</div>
                            </label>
                            <button class="sendComplain">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </transition>
    </keep-alive>
</template>

<script>
const initFormStep = () => {
    let wrapp = document.querySelector('.reasonComplainModal '),
        choseBtns = wrapp.querySelectorAll('.showForm'),
        forms = wrapp.querySelectorAll('form'),
        textContent = wrapp.querySelector('.content'),
        backBtn = wrapp.querySelector('.backToForms');

    const show = (n) => {
        forms[n].classList.add('show');
        textContent.classList.remove('show');
        backBtn.classList.add('active');
    };

    const hide = () => {
        forms.forEach(el => el.classList.remove('show'));
        textContent.classList.add('show');
        backBtn.classList.remove('active');
    };

    backBtn.addEventListener('click', hide);

    choseBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            show(i);
        });
    });
};

export default {
    name: 'ReasonComplainModal',
    data() {
        return {
            state: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.state = true;
            initFormStep();
        }, 0);
    },
}
</script>

<style scoped>
.reasonComplainModal .modalContent p{
    margin-bottom: 25px;
    margin-top: 5px;
}
.reasonComplainModal .modalContent .content{
    display: none;
    z-index: -1;
    opacity: 0;
}
.reasonComplainModal .modalContent .content.show{
    display: block;
    z-index: 1;
    opacity: 1;
}
.reasonComplainModal .modalContent .row{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.reasonComplainModal .modalContent .row .backToForms{
    width: 10%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    z-index: -1;
    opacity: 0;
}
.reasonComplainModal .modalContent .row .backToForms.active{
    z-index: 1;
    opacity: 1;
}
.reasonComplainModal .modalContent .row h2{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1D1D1F;
    text-align: center;
    position: relative;
}
.reasonComplainModal .modalContent .row .modalClose{
    width: 10%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
}
.reasonComplainModal .modalContent .row .modalClose img{
    transform: rotate(-90deg);
    margin-right: 5px;
}
.reasonComplainModal .modalContent .underline{
    width: calc(100% + 30px);
    margin-left: -15px;
    height: 1px;
    background: #ECECEC;
    margin-top: 20px;
    margin-bottom: 20px;
}
.reasonComplainModal .modalContent span{
    font-family: 'Gilroy';
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: block;
    color: #BDBDBD;
}
.reasonComplainModal .modalContent form{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 23px;
    color: #1D1D1F;
    margin-top: 20px;
    z-index: -1;
    opacity: 0;
    display: none;
    position: relative;
}
.reasonComplainModal .modalContent form.show{
    z-index: 1;
    opacity: 1;
    display: block;
}
.reasonComplainModal .modalContent form textarea{
    height: 30px;
    resize: none;
    width: 100%;
    margin-bottom: 50px;
    padding-top: 10px;
    border: 0;
    outline: 0;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
}
.reasonComplainModal .modalContent form textarea::placeholder{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
}
.reasonComplainModal .modalContent form .sendComplain{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    background: linear-gradient(90deg, #01C99B 0%, #4792F1 100%);
    border-radius: 10px;
    padding: 10px;
    color: #FFFFFF;
    border: 0;
    width: 100%;
}
.reasonComplainModal .modalContent form .numberCur{
    position: absolute;
    top: 150px;
    right: 15px;
}
.reasonComplainModal .modalContent form label.img{
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    display: block;
    position: relative;
    background: #E0E0E0;
    border-radius: 10px;
    margin-bottom: 40px;
}
.reasonComplainModal .modalContent form label.img input{
    opacity: 0;
}
.reasonComplainModal .modalContent form label.img svg{
    position: absolute;
    width: 26px;
    height: 19px;
    left: calc(50% - 13px);
    top: calc(50% - 13px);
}
.reasonComplainModal .modalContent form label.img .text{
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #828282;
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