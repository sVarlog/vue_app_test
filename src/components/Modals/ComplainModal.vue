<template>
    <keep-alive>
        <transition name="modal-fade">
            <div v-bind:class="['modal', 'complainModal', status ? 'active' : '']">
                <div class="modalWrapp">
                    <div class="modalContent">
                        <div class="btnWrapp">
                            <button @click="btnClick('share')" class="share2">Поделиться</button>
                            <div class="underline"></div>
                            <button @click="btnClick('reason')" class="complainBtn">Пожаловаться</button>
                        </div>
                        <button class="calncel modalClose">Отмена</button>
                    </div>
                </div>
            </div>
        </transition>
    </keep-alive>
</template>

<script>
import ModalHide from '@/js/ModalHide';
import {mapMutations} from 'vuex';
export default {
    name: 'complainModal',
    data() {
        return {
            status: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.status = true;
        }, 0);
    },
    methods: {
        ...mapMutations([
            'HIDE_MODAL_COMPLAIN',
            'SHOW_MODAL_SHARE', 
            'HIDE_MODAL_SHARE',
            'SHOW_MODAL_REASON_COMPLAIN',
            'HIDE_MODAL_REASON_COMPLAIN'
        ]),
        async btnClick(type) {
            if (type === 'share') {
                await this.HIDE_MODAL_COMPLAIN();
                await this.SHOW_MODAL_SHARE();
                await ModalHide('.modalShare', this.HIDE_MODAL_SHARE);
            } else if (type === 'reason') {
                await this.HIDE_MODAL_COMPLAIN();
                await this.SHOW_MODAL_REASON_COMPLAIN();
                await ModalHide('.reasonComplainModal', this.HIDE_MODAL_REASON_COMPLAIN);
            }
        },
    }
}
</script>

<style scoped>
.complainModal .modalWrapp{
    display: flex;
    align-items: flex-end;
}
.complainModal .modalContent{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    background: transparent;
}
.complainModal .btnWrapp{
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 7px;
    border-radius: 14px;
}
.complainModal .btnWrapp .underline{
    display: block;
    width: calc(100% - 10px);
    margin: auto;
    background: #EBEBEB;
    height: 1px;
}
.complainModal .modalClose,
.complainModal .share2{
    padding-top: 17px;
    padding-bottom: 17px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    color: #4892F3;
    background: #fff;
    border-radius: 13px;
    outline: none;
    border: 0;
}
.complainModal .complainBtn{
    padding-top: 17px;
    padding-bottom: 17px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    color: #4892F3;
    background: #fff;
    border-radius: 13px;
    outline: none;
    border: 0;
}
</style>