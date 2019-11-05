<template>
<div>
    <Header></Header>
    <div class="bg1 bg-static1"></div>
    <div class="bg2 bg-static2"></div>
    <a href="https://twitter.com/kanade_photo" class="twitter_icon twitter_icon_static" target="_brank"></a>
    <a href="https://www.instagram.com/kanadearo/" class="instagram_icon instagram_icon_static" target="_brank"></a>
    <a href="mailto:kanadearo_3103@yahoo.co.jp" class="mail_icon mail_icon_static"></a>
    <p class="name">Watanabe Kanade</p>
    <p class="place">東京在住</p>
    <div class="profile">
        <p></p>
        <p></p>
        <p></p>
        <p>愛用はOLYMPUS trip35</p>
    </div>
</div>
</template>

<script>
import Header from './Header'
export default {
    name: 'About',
    components: {
        Header
    }
}
</script>

<style scoped>
.bg1{
position: absolute;
width: 1855px;
height: 200px;
left: calc(50% - 1855px/2);
top: 132px;
margin: 0%;
}

.bg-static1{
background-image: url("../../static/about_image.jpg");
background-size: cover;
background-position: 100% 90%;
}

.bg2{
position: absolute;
width: 240px;
height: 240px;
left: calc(50% - 240px/2);
top: 260px;
border-radius: 50%;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.bg-static2{
background-image: url("../../static/profile_image.jpg");
background-size: cover;
}

.name{
position: absolute;
width: 240px;
height: 24px;
left: calc(50% - 240px/2);
top: 628px;
margin: 0%;

font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 83px;
/* or 296% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.03em;
text-transform: capitalize;

color: #000000;
}

.place{
position: absolute;
width: 58.5px;
height: 16px;
left: calc(50% - 58.5px/2);
top: 688px;
margin: 0%;

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 83px;
/* or 593% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.03em;
text-transform: capitalize;

color: #000000;
}

.profile{
position: absolute;
width: 300px;
height: 500px;
left: calc(50% - 300px/2);
top: 724px;

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 32px;
/* or 200% */

text-align: center;
letter-spacing: 0.03em;
text-transform: capitalize;

color: #000000;
}

.twitter_icon{
position: absolute;
width: 32px;
height: 32px;
left: calc(50% - 176px/2);
top: 548px;
}

.twitter_icon_static{
background-image: url("../../static/twitter_icon.png");
background-size: cover;
}

.instagram_icon{
position: absolute;
width: 44px;
height: 44px;
left: calc(50% - 44px/2);
top: 542px;
}

.instagram_icon_static{
background-image: url("../../static/instagram_icon.png");
background-size: cover;
}

.mail_icon{
position: absolute;
width: 32px;
height: 32px;
left: calc(50% + 108px/2);
top: 548px;
}

.mail_icon_static{
background-image: url("../../static/mail_icon.png");
background-size: cover;
}
</style>