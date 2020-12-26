<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
*{padding: 0;margin: 0;box-sizing: border-box;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
body{
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
	margin: auto;
	padding-top: 51px;
	padding-bottom: 51px;
}
body.modalActive{
	height: 100vh;
	max-height: 100vh;
	min-height: 100vh;
	overflow: hidden;
}
h1,h2,h3{
	font-family: 'Gilroy';
	font-weight: 600;
}
p{font-family: 'Gilroy';}
a{color: inherit;}
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
