<template>
    <transition name="fade">
        <div v-bind:class="['modal', 'modalGift', allModals.modalGift.status ? 'active' : '' ]">
            <div class="modalWrapp"></div>
            <div class="modalContent">
                <div class="line"></div>
                <h2>Ваши достижения</h2>
                <p>Каждый завершенный этап будет награждаться подарками за ваши достижения.</p>
                <p>Достижения работают только в том случае, если ваша подписка стоит свыше или равна 499₽.</p>
                <a href="openMenu.html" class="moreDetails">Подробнее »</a>
                <div class="customSlider">
                    <div class="sliderWrapp">
                        <div class="sliderInner">
                            <div class="item">
                                <img v-bind:src="require(`@/img/accountImgs/achivItem1.png`)" alt="img1">
                                <p>Iphone 12 pro max 256gb) ✅</p>
                            </div>
                            <div class="item">
                                <img v-bind:src="require(`@/img/accountImgs/achivItem2.png`)" alt="img2">
                                <p>Отдых на бали</p>
                            </div>
                            <div class="item">
                                <img v-bind:src="require(`@/img/accountImgs/achivItem3.png`)" alt="img2">
                                <p>Rolex Datejust</p>
                            </div>
                            <div class="item">
                                <img v-bind:src="require(`@/img/accountImgs/achivItem4.png`)" alt="img2">
                                <p>Mercedes-Benz C-Класс</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="progressText"><span class="numbers"> </span> друзей <span class="numberText">(Выполнено)</span></p>
                <div class="progress">
                    <div class="progressWrapp"></div>
                    <div class="progressInner"></div>
                </div>
                <button class="showForm">Получить</button>
                <form action="#" class="itemForm">
                    <div class="textBefore">
                        <input type="text" name="fio" placeholder="ФИО">
                        <input type="number" name="phone" placeholder="Телефон для связи">
                        <input type="text" name="address" placeholder="Адрес доставки">
                        <button class="sendForm">Отправить</button>
                    </div>
                    <p class="textAfter">Скоро подарок будет <br> доставлен или он уже у вас 😎️</p>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
import giftForm from '@/js/GiftForm';
import customSlider from '@/js/CustomSlider';
import {mapGetters} from 'vuex';
export default {
    name: 'ModalGift',
    data() {
        return {
            status: false
        }
    },
    computed: {
        ...mapGetters(['allModals', 'getGifts']),
    },
    methods: {
        initScripts () {
            customSlider('.modalGift .customSlider', '.sliderWrapp', '.sliderInner', '.item', false, 0, 100);
            giftForm(this.getGifts);
        }
    },
    mounted() {
        console.log(this);
        this.initScripts();
    },
    update() {
        console.log('update');
    },
    watch: {
        allModals: function () {
            console.log('test');
        }
    }
}
</script>

<style scoped>
.modalGift .modalContent p{
    width: 100%;
}
.modalGift .modalContent a.moreDetails{
    margin-left: auto;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #469BFC;
    display: flex;
    width: 80px;
    white-space: nowrap;
}
.modalGift .modalContent .sliderWrapp{
    width: 275px;
    margin: auto;
}
.modalGift .modalContent .sliderInner{
    display: flex;
    align-items: center;
    transition: .5s;
    margin-bottom: 10px;
}
.modalGift .modalContent .sliderInner .item{
    width: 275px;
    min-width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modalGift .modalContent .sliderInner .item p{
    text-align: center;
}
.modalGift .modalContent .sliderInner .item img{
    max-width: 275px;
}
.modalGift .modalContent .progressText{
    font-family: 'Gilroy';
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #1d1d1f;
}
.modalGift .modalContent .progress{
    width: 100%;
    height: 4px;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 15px;
}
.modalGift .modalContent .progress .progressWrapp{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #C4C4C4;
    z-index: 1;
}
.modalGift .modalContent .progress .progressInner{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: #469BFC;
    z-index: 2;
}
.modalGift .modalContent .showForm{
    padding: 9px 34px;
    border-radius: 20px;
    background: linear-gradient(90deg, #01C99B 0%, #4892F3 0.01%);
    border: 0;
    outline: 0;
    color: #fff;
    font-family: 'Gilroy';
    font-size: 15px;
    line-height: 18px;
    display: block;
    margin: auto;
}
.modalGift .modalContent .showForm:disabled{
    opacity: .3;
}
.modalGift .modalContent .showForm.hidden{
    display: none;
}
.modalGift .modalContent .itemForm{
    display: none;
    width: 90%;
    margin: auto;
    margin-top: 15px;
}
.modalGift .modalContent .itemForm input{
    width: 100%;
    height: 40px;
    padding-left: 10px;
    outline: none;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Gilroy';
    font-weight: 500;
    color: #1d1d1f;
    margin-bottom: 12px;
}
.modalGift .modalContent .itemForm input::placeholder{
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #888888;
}
.modalGift .modalContent .itemForm button.sendForm{
    background: linear-gradient(90deg, #01C99B 0%, #4892F3 0.01%);
    border-radius: 10px;
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    color: #fff;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
}
.modalGift .modalContent .itemForm.active{
    display: block;
}
.modalGift .modalContent .itemForm.active.confirm{
    margin-top: 0;
}
.modalGift .modalContent .itemForm .textAfter{
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    display: none;
}
.modalGift .modalContent .itemForm.active.confirm .textBefore{
    display: none;
}
.modalGift .modalContent .itemForm.active.confirm .textAfter{
    display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>