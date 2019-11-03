<template>
<div>
    <Header></Header>
    <div class="bg1 bg-static1"></div>
    <div class="bg2 bg-static2"></div>
    <p class="name">Watanabe Kanade</p>
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
width: 260px;
height: 20px;
left: calc(50% - 240px/2);
top: 568px;

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
</style>