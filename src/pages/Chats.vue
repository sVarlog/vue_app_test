<template>
    <div class="chatsPage">
        <CustomHeader title="Чаты" pageType="dialogs" backType="change"/>

        <div class="search">
            <img v-bind:src="require(`@/img/icons/chatSearchIcon.svg`)" alt="search">
            <input @input="input" type="text" placeholder="Поиск" v-model="name">
        </div>

        <DialogNotification v-if="!getMessages.notification" />

        <div class="chatContent">
            <DialogItem v-for="(message) of getMessages.dialogs.with" v-bind:key="message.id" v-bind:message="message"/>
        </div>

        <ChatNotificationModal v-if="allModals.chatsNotification.status"/>

        <BottomMenu active="chats"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CustomHeader from '@/components/CustomHeader';
import BottomMenu from '@/components/BottomMenu';
import DialogNotification from '@/components/Chats/DialogNotification';
import ChatNotificationModal from '@/components/Modals/ChatNotificationModal';
import DialogItem from '@/components/Chats/DialogItem';

export default {
    name: "Chats",
    data() {
        return {
            name: ''
        }
    },
    components: {
        CustomHeader,
        BottomMenu,
        DialogNotification,
        ChatNotificationModal,
        DialogItem
    },
    computed: mapGetters(['getMessages', 'allModals']),
    methods: {
        input() {
            
        }
    },
}
</script>

<style scoped>
.chatsPage{
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
}
.search{
    width: 100%;
    height: 32px;
    margin-top: 14px;
    border-radius: 10px;
    background: #EEEEEF;
    position: relative;
}
.search img{
    position: absolute;
    height: 14px;
    width: 14px;
    left: 9px;
    top: calc(50% - 8px);
}
.search input{
    width: 100%;
    height: 32px;
    border-radius: 10px;
    border: 0;
    background: #EEEEEF;
    outline: 0;
    padding-left: 10px;
}
.search input::placeholder{
    padding-left: 25px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #BDBDBD;
}
/*  */
.chatContent{
    margin-top: 5px;
}
</style>