<template>
    <keep-alive>
        <transition name="modal-fade">
            <div v-bind:class="['modal', 'modalLogout', status ? 'active' : '']">
                <div class="modalWrapp">
                    <div class="modalContent">
                        <div class="contentWrapp">
                        <p>Вы уверены что хотите отменить <br> дружбу?</p>
                        <div class="greyLine"></div>
                        <a href="#" class="deleteFriend">Да</a>
                    </div>
                    <button class="cancel modalClose">Отмена</button>
                    </div>
                </div>
            </div>
        </transition>
    </keep-alive>
</template>

<script>
export default {
    name: 'UnsubscribeModal',
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
.modal .modalContent{
    background: transparent;
}
.modalLogout .modalWrapp{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 25px;
}
.modalLogout .contentWrapp{
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 6px;
    background: #fff;
    border-radius: 14px;
    padding-top: 17px;
    text-align: center;
}
.modalLogout .contentWrapp p{
    margin-bottom: 17px;
    width: 100%;
}
.modalLogout .contentWrapp .deleteFriend{
    border-top: 1px solid #EBEBEB;
    width: 99%;
    margin: auto;
    padding-top: 17px;
    padding-bottom: 17px;
    display: block;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    color: #4892F3;
    outline: none;
}
.modalLogout .modalClose{
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
.modal .modalClose {
    width: calc(100% - 20px);
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