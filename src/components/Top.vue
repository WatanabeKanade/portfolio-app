<template>
<div>
    <p id="top-title">Watanabe Kanade Recollection</p>
    <p id="enter-btn">
        <router-link to="/prologue">Enter</router-link>
    </p>
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
/* or 135% */

text-align: center;
letter-spacing: 0.042em;
text-transform: capitalize;

color: #000000;
}

a{
position: absolute;
width: 232px;
height: 48px;
left: calc(50% - 232px/2);
top: calc(50% - 48px/2 + 57px);

border: 2px solid #000000;
box-sizing: border-box;
border-radius: 50px;
}
</style>