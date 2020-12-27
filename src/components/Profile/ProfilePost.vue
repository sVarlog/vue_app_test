<template>
    <li class="list">
        <div v-if="post.tag" class="price">
            <span v-bind:class="[getClasses(post.tag.name),'priceText']">{{post.tag.text}}</span> {{post.tag.icon}}
        </div>
        <img class="listImage" v-bind:src="require(`@/img/${post.img}`)" alt="">
        <div class="description">
            <div class="text">{{post.descr}}</div>
            <div class="videoPlay">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                </svg>
                {{changeNums(post.views)}}
            </div>
        </div>
        <div class="listWrapp"></div>
    </li>
</template>

<script>
export default {
    name: 'ProfilePost',
    props: ['post'],
    methods: {
        changeNums(num) {
            return num.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")
        },
        getClasses(tagType) {
            if (tagType === 'friends') {
                return ['priceFriends']
            } else {
                return '';
            }
        }
    },
}
</script>

<style scoped>
li.list{
    margin-right: 2px;
    margin-left: 2px;
    margin-bottom: 4px;
    border-radius: 5px;
    overflow: hidden;
    height: 205px;
    position: relative;
    width: calc(33.3% - 4px);
}
li.list .listImage{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
}
li.list .listWrapp{
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, rgba(0, 0, 0, 0.2) 82.81%, rgba(0, 0, 0, 0.8) 100%);
    z-index: 1;
    border-radius: 5px;
    overflow: hidden;
}
li.list.hidden .listWrapp{
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    overflow: hidden;
}
li.list .price{
    position: absolute;
    right: 4px;
    top: 4px;
    padding-left: 5px;
    padding-right: 5px;
    background: rgba(0,0,0,.3);
    border-radius: 8.5px;
    color: #fff;
    font-family: 'Gilroy';
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
    z-index: 2;
    display: flex;
    align-items: center;
    padding-top: 2px;
    padding-bottom: 2px;
}
li.list .price.priceFriends{
    font-size: 11px;
}
li.list .price img{
    margin-top: -2px;
}
li.list .price .priceText{
    margin-right: 3px;
}
li.list .price.priceFriends img{
    margin-top: 0;
}
li.list .description{
    position: absolute;
    left: 5px;
    bottom: 8px;
    z-index: 2;
}
li.list .description .videoPlay{
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 13px;
    font-family: 'Gilroy';
    color: #fff;
}
li.list .description .videoPlay svg{
    margin-right: 5px;
}
li.list.hidden .description .videoPlay{
    display: none;
}
li.list .description .text{
    color: #fff;
    font-family: 'Gilroy';
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    margin-bottom: 3px;
}
</style>