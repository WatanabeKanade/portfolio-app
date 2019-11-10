<template>
    <div>
      <Header></Header>
      <div>
        <p class="prologue-title">PROLOGUE</p>
        <p class="underbar"></p>
        <div class="bg bg-static"></div>
      </div>
    </div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Prologue',
    components: {
      Header
    }
}
</script>

<style scoped>
.prologue-title{
    position: absolute;
    width: 264px;
    height: 39px;
    left: calc(50% - 264px/2);
    top: 132px;

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 53px;
    margin: 0%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
}

.underbar{
    position: absolute;
    width: 84px;
    height: 1.97px;
    left: calc(50% - 84px/2);
    top: 190.03px;
    margin: 0%;

    background: #000000;
}

.bg{
    position: absolute;
    width: 800px;
    height: 300px;
    left: calc(50% - 800px/2);
    top: 248px;
    margin: 0%;
}

.bg-static{
    background-image: url("../../static/color_photo4.jpg");
    background-size: 800px 300px;
}
</style>