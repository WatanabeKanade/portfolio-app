<template>
    <header>
      <div id="site-title"><router-link to="/prologue">Recollection</router-link></div>
      <ul>
        <li id="l1"><router-link to="/">Top</router-link></li>
        <li id="l2"><router-link to="/prologue">Prologue</router-link></li>
        <li id="l3"><router-link to="/gallery">Gallery</router-link></li>
        <li id="l4"><router-link to="/about">About</router-link></li>        
      </ul>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
#site-title{
position: absolute;
width: 128px;
height: 20px;
left: 36px;
top: 24px;

font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
}

a{
text-decoration: none;
color:#000000;
}

li{
font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
}

#l1{
position: absolute;
width: 26.12px;
height: 12px;
right: 226.89px;
top: 28px;
}

#l2{
position: absolute;
width: 61px;
height: 12px;
right: 153.82px;
top: 28px;
}

#l3{
position: absolute;
width: 49.23px;
height: 12px;
right: 92.26px;
top: 28px;
}

#l4{
position: absolute;
width: 44.2px;
height: 12px;
right: 36px;
top: 28px;
}
</style>