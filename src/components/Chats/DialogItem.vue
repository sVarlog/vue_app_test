<template>
    <router-link :to="{name: 'DialogId', params: {id: message.id}}" class="item">
        <div class="left">
            <div class="avatar">
                {{message.avatar.initials}}
                <div v-bind:class="['online', message.status.online ? 'active' : '']"></div>
            </div>
        </div>
        <div class="right">
            <div class="content">
                <!-- {{message}} -->
                <h2>{{message.name}}</h2>
                <p>Спасибо</p>
            </div>
            <div class="messageData active">
                <span class="time">17:12</span>
                <span class="mess">9</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'DialogItem',
    props: ['message']
}
</script>

<style scoped>
.chatContent .item{
    margin-top: 12px;
    display: flex;
    text-decoration: none;
}
.chatContent .item .left .avatar{
    background: #cecece;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    position: relative;
}
.chatContent .item .left .online.active{
    background: #11D900;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    position: absolute;
    height: 15px;
    width: 15px;
    bottom: 0;
    right: 0;
}
/*  */
.chatContent .item:nth-child(1) .left .avatar{
    background: linear-gradient(270deg, #7BC862 0.01%, #ABEA96 100%);
}
.chatContent .item:nth-child(2) .left .avatar {
    background: linear-gradient(270deg, #A695E7 0%, #BDABFE 100%);
}
.chatContent .item:nth-child(3) .left .avatar {
    background: linear-gradient(270deg, #6EC9CB 0%, #82E9EB 100%);
}
.chatContent .item:nth-child(4) .left .avatar {
    background: linear-gradient(270deg, #FAA774 0%, #F6BC98 100%);
}
.chatContent .item:nth-child(5) .left .avatar {
    background: linear-gradient(270deg, #E17076 0%, #FF969B 100%);
}
.chatContent .item:nth-child(6) .left .avatar {
    background: linear-gradient(270deg, #6EC9CB 0%, #82E9EB 100%);
}
.chatContent .item:nth-child(7) .left .avatar {
    background: linear-gradient(270deg, #FAA774 0%, #F6BC98 100%);
}
.chatContent .item:nth-child(8) .left .avatar {
    background: linear-gradient(270deg, #E17076 0%, #FF969B 100%);
}
/*  */
.chatContent .item .right{
    margin-left: 9px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ececec;
}
.chatContent .item .right .content{
    margin-top: 3px;
    width: 75%;
    max-width: 75%;
    margin-bottom: 10px;
}
.chatContent .item .right .content h2{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #1D1D1F;
}
.chatContent .item .right .content p{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #828282;
}
.chatContent .item .right .messageData{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 25%;
    margin-top: 3px;
    margin-bottom: 10px;
}
.chatContent .item .right .messageData{
    color: #BDBDBD;
    font-family: 'Gilroy';
}
.chatContent .item .right .messageData.active{
    color: #4892F3;
}
.chatContent .item .right .messageData .time{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #BDBDBD;
    margin-bottom: 2px;
}
.chatContent .item .right .messageData.active .time{
    color: #4892F3;
}
.chatContent .item .right .messageData .mess{
    background: #4892F3;
    border-radius: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #F7F7F7;
    padding-left: 5px;
    padding-right: 5px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>