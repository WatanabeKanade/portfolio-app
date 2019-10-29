<template>
<div>
    <div class="bg bg-static"></div>
    <p id="top-title">Watanabe Kanade Recollection</p>
    <div id="enter-btn">
        <router-link to="/prologue">Enter</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'Top'
}
</script>

<style scoped>
#top-title{
position: absolute;
width: 536px;
height: 156px;
left: calc(50% - 536px/2);
top: calc(50% - 156px/2 - 92px);

font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 60px;
line-height: 81px;
margin: 0%;
/* or 135% */

text-align: center;
letter-spacing: 0.042em;
text-transform: capitalize;

color: #FFFFFF;
}

#enter-btn{
position: absolute;
width: 232px;
height: 48px;
left: calc(50% - 232px/2);
top: calc(50% - 48px/2 + 58px);

border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 50px;
}

#enter-btn a{
position: absolute;
width: 100%;
height: 100%;
display: blolck;
left: calc(50% - 60px/2);
top: calc(50% - 28px/2);
font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
text-decoration: none;

color: #FFFFFF;
}

.bg{
position: absolute;
width: 1855px;
height: 952px;
left: calc(50% - 1855px/2);
top: calc(50% - 952px/2);
}

.bg-static{
background-image: url("../../static/top_image.jpg");
background-size: cover;
}

</style>