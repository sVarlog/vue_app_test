<template>
    <div class="page-account__buttonSetting" >
        <a href="#" class="page-account__btnSettings">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2244 6.41585L14.9474 6.13823C14.8364 5.79825 14.6988 5.46663 14.5364 5.14718L15.2434 4.04749C15.3697 3.851 15.3419 3.59304 15.1769 3.42799L13.1874 1.43853C13.0223 1.27348 12.7644 1.24572 12.5679 1.37198L11.4682 2.07895C11.1488 1.91657 10.8171 1.77902 10.4772 1.66798L10.1995 0.390944C10.15 0.162767 9.94791 0 9.71441 0H6.90098C6.66748 0 6.46541 0.162767 6.41585 0.390944L6.13823 1.66798C5.79825 1.77902 5.46663 1.91657 5.14718 2.07895L4.04749 1.37198C3.851 1.24572 3.59304 1.27348 3.42799 1.43853L1.43853 3.42799C1.27348 3.59304 1.24572 3.851 1.37198 4.04749L2.07895 5.14718C1.91657 5.46663 1.77902 5.79825 1.66798 6.13823L0.390944 6.41585C0.162767 6.46554 0 6.66748 0 6.90098V9.71441C0 9.94791 0.162767 10.1498 0.390944 10.1995L1.66798 10.4772C1.77902 10.8171 1.91657 11.1488 2.07895 11.4682L1.37198 12.5679C1.24572 12.7644 1.27348 13.0223 1.43853 13.1874L3.42799 15.1769C3.59304 15.3419 3.851 15.3697 4.04749 15.2434L5.14718 14.5364C5.46663 14.6988 5.79825 14.8364 6.13823 14.9474L6.41585 16.2244C6.46541 16.4526 6.66748 16.6154 6.90098 16.6154H9.71441C9.94791 16.6154 10.15 16.4526 10.1995 16.2244L10.4772 14.9474C10.8171 14.8364 11.1488 14.6988 11.4682 14.5364L12.5679 15.2434C12.7644 15.3697 13.0223 15.342 13.1874 15.1769L15.1769 13.1874C15.3419 13.0223 15.3697 12.7644 15.2434 12.5679L14.5364 11.4682C14.6988 11.1488 14.8364 10.8171 14.9474 10.4772L16.2244 10.1995C16.4526 10.1498 16.6154 9.94791 16.6154 9.71441V6.90098C16.6154 6.66748 16.4526 6.46554 16.2244 6.41585ZM11.2866 8.30769C11.2866 9.95019 9.95019 11.2866 8.30769 11.2866C6.66519 11.2866 5.32883 9.95019 5.32883 8.30769C5.32883 6.66519 6.66519 5.32883 8.30769 5.32883C9.95019 5.32883 11.2866 6.66519 11.2866 8.30769Z" fill="#469BFC"/>
            </svg>
            Изменить профиль
        </a>
        
        <a href="#" class="gift">
            <img src="../img/accountImgs/changeProfileGift.svg" alt="gift">
            <div class="giftNotification">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="12" rx="6" fill="#EA4E3D"/>
                </svg>
            </div>
        </a>

        <a href="moneyPage.html" class="wallet">
            <img src="../img/accountImgs/changeProfileWallet.svg" alt="wallet">
        </a>

        <div class="share">
            <img src="../img/accountImgs/changeProfileShare.svg" alt="share">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileButtons'
}
</script>

<style scoped>
.page-account__buttonSetting {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
}
/*  */
.page-account__buttonSetting .page-account_buttonFriens{
    width: 250px;
    height: 40px;
    position: relative;
    background: linear-gradient(90deg, #01C99B 15.89%, #4892F3 100%);
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.page-account__buttonSetting .page-account_buttonFriens .free{
    background: #EA4E3D;
    border-radius: 8.5px;
    padding-left: 3px;
    padding-right: 3px;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    position: absolute;
    top: -5px;
    right: -5px;
}
.page-account__buttonSetting .share {
    width: 40px;
    height: 40px;
    background: rgba(219, 219, 219, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2.5px;
}
.page-account__buttonSetting .gift {
    width: 40px;
    height: 40px;
    background: rgba(219, 219, 219, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2.5px;
    position: relative;
}
.page-account__buttonSetting .gift .giftNotification{
    position: absolute;
    right: 0;
    top: 0;
}
.page-account__buttonSetting .wallet{
    width: 40px;
    height: 40px;
    background: rgba(219, 219, 219, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2.5px;
}
.page-account__btnSettings {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #1D1D1F;
    text-decoration: none;
    border: 1px solid #ECECEC;
    background: rgba(219, 219, 219, 0.5);
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 205px;
    height: 40px;
    margin: 0 2.5px;
    color: #469BFC;
}
.page-account__btnSettings svg {
    margin-right: 6px;
    margin-left: -3px;
}
</style>