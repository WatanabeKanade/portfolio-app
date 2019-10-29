<template>
<div>
    <Header></Header>
    <div class="bg1 bg-static1"><router-link to="/blackwhite" class="blackwhite">BlackWhite</router-link></div>
    <div class="bg2 bg-static2"><router-link to="/color" class="color">Color</router-link></div>
</div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Gallery',
    components: {
        Header
    }
}
</script>

<style scoped>
.bg1{
position: absolute;
width: 600px;
height: 600px;
left: calc(50% - 600px/2 - 342px);
top: calc(50% - 600px/2);

font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 38px;
display: flex;
align-items: center;
text-align: center;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.bg2{
position: absolute;
width: 600px;
height: 600px;
left: calc(50% - 600px/2 + 342px);
top: calc(50% - 600px/2);

font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 38px;
display: flex;
align-items: center;
text-align: center;

box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.bg-static1{
background-image: url("../../static/top_image.jpg");
background-size: 600px 600px;
}

.bg-static2{
background-image: url("../../static/color_photo.jpg");
background-size: 600px 600px;
}

.blackwhite{
position: absolute;
left: calc(50% - 600px/2 + 219px);
top: calc(50% - 600px/2 + 281px);
text-decoration: none;

color: #FFFFFF;
}

.color{
position: absolute;
left: calc(50% - 600px/2 + 262px);
top: calc(50% - 600px/2 + 281px);
text-decoration: none;

color: #FFFFFF;
}
</style>