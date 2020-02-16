<template>
  <div class="prologue-content">
    <transition name="prologue-box" appear>
      <div class="prologue-box">
        <div class="title">PROLOGUE</div>
        <div class="underbar"></div>
      </div>
    </transition>
    <transition name="prologue-image" appear>
      <div class="prologue-image">
        <img src="../../static/color_photo4.jpg" />
      </div>
    </transition>
    <transition name="prologue-text" appear>
      <div class="prologue-text">
        <p>
          綺麗なもの 気になるもの
          <br />落ち着くもの 懐かしいもの
          <br />それらを見つけるとシャッターを切る。
        </p>
        <p>
          なかには大したことない一枚もあるが
          <br />それも後々見返すと心が惹かれてしまうから捨てがたい。
        </p>
        <p>
          そうして少しづつ貯めていった写真たちを
          <br />いつの日か まとめて見返すことが
          <br />私の人生の楽しみの一つです。
        </p>
      </div>
    </transition>
  </div>
</template>

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

.prologue-text {
  margin-top: 56px;
  margin-bottom: 100px;
  line-height: 44px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #000000;
}

.prologue-text p {
  width: 420px;
  margin: auto;
  margin-top: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.prologue-box-enter-active {
  transition: 1.5s;
  transition-delay: 0.5s;
}

.prologue-image-enter-active {
  transition: 1s;
}

.prologue-text-enter-active {
  transition: 1.5s;
  transition-delay: 1s;
}

.prologue-box-enter,
.prologue-image-enter,
.prologue-text-enter {
  opacity: 0;
  transform: translateY(-40px);
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

  .prologue-text p {
    width: 324px;
    margin-top: 16px;
    font-weight: initial;
  }
}
</style>