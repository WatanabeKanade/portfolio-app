<template>
  <div>
    <Header></Header>
    <div class="prologue-content">
      <div class="prologue-box">
        <div class="title">PROLOGUE</div>
        <div class="underbar"></div>
      </div>
      <div class="prologue-image">
        <img src="../../static/color_photo4.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Prologue",
  components: {
    Header
  }
};
</script>

<style scoped>
.prologue-content {
  position: relative;
  text-align: center;
}

.prologue-box {
  width: 264px;
  margin: auto;
  margin-top: 132px;
}

.prologue-box .title {
  height: 39px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;

  color: #000000;
}

.prologue-box .underbar {
  width: 84px;
  height: 1.97px;
  margin: auto;
  margin-top: 24px;
  background: #000000;
}

.prologue-image {
  width: 760px;
  height: 300px;
  margin: auto;
  margin-top: 56px;
}

.prologue-image img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 760px) {
  .prologue-box {
    position: absolute;
    width: 100%;
    margin-top: 75px;
  }
  .prologue-box .title {
    font-size: 32px;
    color: #ffffff;
  }
  .prologue-box .underbar {
    background: #ffffff;
    margin-top: 8.33px;
  }
  .prologue-image {
    width: 100%;
    max-width: 100%;
    height: 200px;
    margin-top: 61px;
  }
}
</style>