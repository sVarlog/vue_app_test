<template>
    <div class="page-account__avatar">
        <div class="avatar-none bgColor-7" >
            {{char}}
        </div>
        <svg class="avatarCheck" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#11D900" stroke="white"/>
        </svg>
        <svg class="avatarGarland" width="55" height="11" viewBox="0 0 55 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1C19.5634 9 36.4366 9 53 1" stroke="#555E69" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"/>
            <rect x="4" y="4" width="3" height="3" rx="1.5" fill="#78D2FF"/>
            <rect x="8" y="5" width="3" height="3" rx="1.5" fill="#4BB34B"/>
            <rect x="12" y="6" width="3" height="3" rx="1.5" fill="#FFD54F"/>
            <rect x="16" y="7" width="3" height="3" rx="1.5" fill="#FF4F72"/>
            <rect x="20" y="8" width="3" height="3" rx="1.5" fill="#4BB34B"/>
            <rect x="24" y="8" width="3" height="3" rx="1.5" fill="#FF4F72"/>
            <rect x="28" y="8" width="3" height="3" rx="1.5" fill="#FFD54F"/>
            <rect x="32" y="8" width="3" height="3" rx="1.5" fill="#78D2FF"/>
            <rect x="36" y="7" width="3" height="3" rx="1.5" fill="#4BB34B"/>
            <rect x="40" y="6" width="3" height="3" rx="1.5" fill="#FF4F72"/>
            <rect x="44" y="5" width="3" height="3" rx="1.5" fill="#FFD54F"/>
            <rect x="48" y="4" width="3" height="3" rx="1.5" fill="#FF4F72"/>
            <rect x="52" y="3" width="3" height="3" rx="1.5" fill="#78D2FF"/>
            <rect y="2" width="3" height="3" rx="1.5" fill="#FF4F72"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'ProfileAvatar',
    props: ['char']
}
</script>

<style scoped>
.page-account__avatar {
    width: 92px;
    height: 92px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #CBCBCB;
    z-index: 2;
}
.page-account__avatar .verity {
    position: absolute;
    right: 8px;
    bottom: 4px;
}
.page-account__avatar .avatarCheck{
    position: absolute;
    right: 3px;
    bottom: 4px;
}
.page-account__avatar .avatarGarland{
    position: absolute;
    top: 10px;
}
.page-account__avatar .avatar-none {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(270deg, #7BC862 0.01%, #ABEA96 100%);
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 54px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>