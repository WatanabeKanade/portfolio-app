<template>
  <div id="top-page">
    <div id="top-image"></div>
    <transition name="top" appear>
      <div id="top-content">
        <p id="title">
          Watanabe Kanade
          <br />Recollection
        </p>
        <p id="enter-btn">
          <router-link to="/prologue">Enter</router-link>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style scoped>
#top-page {
  position: relative;
}
#top-content {
  position: absolute;
  width: 100%;
  top: calc(50% - 170px);
  text-align: center;
}

#top-content #title {
  margin: 0%;

  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 88px;
  letter-spacing: 0.04em;
  color: #ffffff;
}

#top-content #enter-btn {
  width: 232px;
  height: 48px;
  margin: auto;
  margin-top: 44px;

  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;
}

#enter-btn a {
  display: block;
  height: 24px;
  margin-top: 0.4em;
  text-decoration: none;
  letter-spacing: 0.04em;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
}

#top-image {
  background-image: url("../../static/top_image.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.top-enter-active {
  transition: 1.5s;
}

.top-enter {
  opacity: 0;
}

@media screen and (min-width: 480px) and (max-width: 768px) {
  #top-content #title {
    font-weight: 534;
    font-size: 52px;
    line-height: 78px;
    letter-spacing: 0.02em;
  }

  #top-content #enter-btn {
    width: 204px;
    height: 48px;
    margin-top: 244px;
    border-radius: 44px;
  }

  #enter-btn a {
    margin-top: 0.5em;
    font-weight: 534;
    font-size: 22px;
    letter-spacing: 0.02em;
  }
}

@media screen and (max-width: 480px) {
  #top-content #title {
    top: calc(50% - 100px);

    font-weight: 367;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 0.08em;
  }

  #top-content #enter-btn {
    width: 140px;
    height: 40px;
    margin-top: 60px;
    border-radius: 26px;
  }

  #enter-btn a {
    height: 1em;
    margin-top: 6px;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.08em;
  }
}
</style>