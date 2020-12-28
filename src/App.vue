<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
*{padding: 0;margin: 0;box-sizing: border-box;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
body{
	width: 100%;
	min-height: 100%;
	overflow-x: hidden;
	margin: auto;
}
body.modalActive{
	height: 100%;
	max-height: 100%;
	min-height: 100%;
	overflow: hidden;
}
h1,h2,h3{
	font-family: 'Gilroy';
	font-weight: 600;
}
p{font-family: 'Gilroy';}
a{color: inherit;text-decoration: none;}
.pageContent{
    height: calc(100% - 102px);
    width: 100%;
    position: fixed;
    top: 51px;
    bottom: 51px;
    overflow-y: scroll;
}
/* modals */
.modal{
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    transition: .15s;
    opacity: 1;
    z-index: -1;
    overflow: hidden;
}
.modal .modalWrapp {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, .65);
    opacity: 0;
    z-index: 1;
}
.modal.active{
    opacity: 1;
    z-index: 10;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.modal.active .modalWrapp {
    opacity: 1;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.modal .modalContent {
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    transition: .25s;
    transform: translateY(125%);
    z-index: 2;
}
.modal.active .modalContent{
    transition: .25s;
    transform: translateY(0);
}
.modal .modalContent .line {
    position: absolute;
    top: -9px;
    width: 33px;
    height: 4px;
    background: #fff;
    border-radius: 2px;
    -ms-grid-row-align: center;
    align-self: center;
}
.modal .modalContent h2 {
    font-size: 18px;
    font-weight: 700;
}
.modal .modalContent p {
    font-weight: 500;
    font-size: 15px;
    width: 90%;
    margin-top: 5px;
}
/* fonts */
@font-face {
    font-family: 'Gilroy';
    src: url(./fonts/gilroy-regular.woff);
    font-weight: 400;
}
@font-face {
    font-family: 'Gilroy';
    src: url(./fonts/gilroy-medium.woff);
    font-weight: 500;
}
@font-face {
    font-family: 'Gilroy';
    src: url(./fonts/gilroy-semibold.woff);
    font-weight: 600;
}
@font-face {
    font-family: 'Gilroy';
    src: url(./fonts/gilroy-bold.woff);
    font-weight: 700;
}
@font-face {
    font-family: 'Roboto';
    src: url(./fonts/roboto_regular.woff);
    font-weight: 400;
}
@font-face {
    font-family: 'Roboto';
    src: url(./fonts/roboto_bold.woff);
    font-weight: 700;
}
@font-face {
    font-family: 'Montserrat';
    src: url(./fonts/Montserrat-Medium.ttf);
    font-weight: 500;
}
@font-face {
    font-family: 'Montserrat';
    src: url(./fonts/Montserrat-ExtraBold.ttf);
    font-weight: 800;
}
@font-face {
    font-family: 'Montserrat';
    src: url(./fonts/Montserrat-Black.ttf);
    font-weight: 900;
}
</style>
