<template>
    <div class="header">
        <div class="page-account">
            <div class="page-account__title">
                <div class="page-account__title-box">
                    <div class="name">@mayer_kira <img src="../dist/img/icons/checkIcon.svg" alt="check"></div>
                    <div class="online active">в сети</div>
                    <span class="acMenu" >
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="17" height="2" rx="1" fill="#469BFC"/>
                            <rect y="5" width="17" height="2" rx="1" fill="#469BFC"/>
                            <rect y="10" width="17" height="2" rx="1" fill="#469BFC"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="page-account__poster">
                <img ref="poster" src="../dist/img/accountImgs/cover.jpg" alt="">
            </div>
            <div class="page-account__content">
                <div class="page-account__avatar">
                    <div class="avatar-none bgColor-7" >
                        K
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
                <div class="page-account__nik">
                    Кира Майер
                </div>
                <div class="page-account__info">
                    <span>9 Публикаций</span>
                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="3" height="3" rx="1.5" fill="#BDBDBD"/>
                    </svg>
                    <span>3К Друзей</span>
                </div>
                <div class="page-account__price">
                    Здесь я буду публиковать все то, что вы не увидите в Инстаграм Здесь я буду публиковать все то, что вы не увидите в Инстаграм  sdfsdf sdfs dfsуffsd dsfs23sd fsdfsdf sadfasdf sdfsadf asdfafasdf asdfasdfasdfs
                </div>
                <div class="page-account__buttonSetting" >
                    <a href="#" class="page-account__btnSettings">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2244 6.41585L14.9474 6.13823C14.8364 5.79825 14.6988 5.46663 14.5364 5.14718L15.2434 4.04749C15.3697 3.851 15.3419 3.59304 15.1769 3.42799L13.1874 1.43853C13.0223 1.27348 12.7644 1.24572 12.5679 1.37198L11.4682 2.07895C11.1488 1.91657 10.8171 1.77902 10.4772 1.66798L10.1995 0.390944C10.15 0.162767 9.94791 0 9.71441 0H6.90098C6.66748 0 6.46541 0.162767 6.41585 0.390944L6.13823 1.66798C5.79825 1.77902 5.46663 1.91657 5.14718 2.07895L4.04749 1.37198C3.851 1.24572 3.59304 1.27348 3.42799 1.43853L1.43853 3.42799C1.27348 3.59304 1.24572 3.851 1.37198 4.04749L2.07895 5.14718C1.91657 5.46663 1.77902 5.79825 1.66798 6.13823L0.390944 6.41585C0.162767 6.46554 0 6.66748 0 6.90098V9.71441C0 9.94791 0.162767 10.1498 0.390944 10.1995L1.66798 10.4772C1.77902 10.8171 1.91657 11.1488 2.07895 11.4682L1.37198 12.5679C1.24572 12.7644 1.27348 13.0223 1.43853 13.1874L3.42799 15.1769C3.59304 15.3419 3.851 15.3697 4.04749 15.2434L5.14718 14.5364C5.46663 14.6988 5.79825 14.8364 6.13823 14.9474L6.41585 16.2244C6.46541 16.4526 6.66748 16.6154 6.90098 16.6154H9.71441C9.94791 16.6154 10.15 16.4526 10.1995 16.2244L10.4772 14.9474C10.8171 14.8364 11.1488 14.6988 11.4682 14.5364L12.5679 15.2434C12.7644 15.3697 13.0223 15.342 13.1874 15.1769L15.1769 13.1874C15.3419 13.0223 15.3697 12.7644 15.2434 12.5679L14.5364 11.4682C14.6988 11.1488 14.8364 10.8171 14.9474 10.4772L16.2244 10.1995C16.4526 10.1498 16.6154 9.94791 16.6154 9.71441V6.90098C16.6154 6.66748 16.4526 6.46554 16.2244 6.41585ZM11.2866 8.30769C11.2866 9.95019 9.95019 11.2866 8.30769 11.2866C6.66519 11.2866 5.32883 9.95019 5.32883 8.30769C5.32883 6.66519 6.66519 5.32883 8.30769 5.32883C9.95019 5.32883 11.2866 6.66519 11.2866 8.30769Z" fill="#469BFC"/>
                        </svg>
                        Изменить профиль
                    </a>
                    
                    <a href="#" class="gift">
                        <img src="../dist/img/accountImgs/changeProfileGift.svg" alt="gift">
                        <div class="giftNotification">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="12" rx="6" fill="#EA4E3D"/>
                            </svg>
                        </div>
                    </a>

                    <a href="moneyPage.html" class="wallet">
                        <img src="../dist/img/accountImgs/changeProfileWallet.svg" alt="wallet">
                    </a>

                    <div class="share">
                        <img src="../dist/img/accountImgs/changeProfileShare.svg" alt="share">
                    </div>
                </div>
                <div class="page-account__list">
                    <ul>
                        <li class="list">
                            <img class="listImage" src="../dist/img/accountImgs/accountImg3.jpg" alt="">
                            <div class="description">
                                <div class="text"></div>
                                <div class="videoPlay">
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                                    </svg>
                                    14 223
                                </div>
                            </div>
                            <div class="listWrapp"></div>
                        </li>
                        <li class="list">
                            <div class="price">
                                <span class="priceText">500₽</span> 🔒
                            </div>
                            <img class="listImage" src="../dist/img/accountImgs/accountImg1.jpg" alt="">
                            <div class="description">
                                <div class="text">The Engineering </div>
                                <div class="videoPlay">
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                                    </svg>
                                    35
                                </div>
                            </div>
                            <div class="listWrapp"></div>
                        </li>
                        <li class="list">
                            <img class="listImage" src="../dist/img/accountImgs/accountImg2.jpg" alt="">
                            <div class="description">
                                <div class="text">The Engineering of Ghost И что опя...</div>
                                <div class="videoPlay">
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                                    </svg>
                                    14 223
                                </div>
                            </div>
                            <div class="listWrapp"></div>
                        </li>
                        <li class="list">
                            <img class="listImage" src="../dist/img/accountImgs/accountImg3.jpg" alt="">
                            <div class="description">
                                <div class="text">The Engineering of Ghost И что опя...</div>
                                <div class="videoPlay">
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                                    </svg>
                                    14 223
                                </div>
                            </div>
                            <div class="listWrapp"></div>
                        </li>
                        <li class="list">
                            <div class="price priceFriends">
                                <span class="priceText">Для друзей</span> 👋
                            </div>
                            <img class="listImage" src="../dist/img/accountImgs/accountImg1.jpg" alt="">
                            <div class="description">
                                <div class="text">The Engineering </div>
                                <div class="videoPlay">
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                                    </svg>
                                    14 223
                                </div>
                            </div>
                            <div class="listWrapp"></div>
                        </li>
                        <li class="list">
                            <div class="price priceFriends">
                                <span class="priceText">Для друзей</span> 👋
                            </div>
                            <img class="listImage" src="../dist/img/accountImgs/accountImg2.jpg" alt="">
                            <div class="description">
                                <div class="text">The Engineering of Ghost И что опя...</div>
                                <div class="videoPlay">
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.20206 4.07141L1.64745 0.268745C1.39093 0.0930086 1.13246 0 0.91763 0C0.502288 0 0.245361 0.333341 0.245361 0.891312V9.10998C0.245361 9.66731 0.501965 10 0.916335 10C1.13149 10 1.38583 9.90691 1.64292 9.73069L7.20012 5.9281C7.5575 5.68316 7.75542 5.35354 7.75542 4.99955C7.7555 4.64581 7.55985 4.31628 7.20206 4.07141Z" fill="white"/>
                                    </svg>
                                    14 223
                                </div>
                            </div>
                            <div class="listWrapp"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>