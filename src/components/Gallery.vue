<template>
  <div>
    <div class="gallery-content">
      <div class="genre-box">
        <router-link to="/monochrome">
          <img src="../../static/monochrome_photo.jpg" />
          <div class="genre-name">Monochrome</div>
        </router-link>
      </div>
      <div class="genre-box">
        <router-link to="/color">
          <img src="../../static/color_photo4.jpg" />
          <div class="genre-name">Color</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-content {
  width: 100%;
  margin-top: 136px;
  text-align: center;
}

.genre-box {
  position: relative;
  display: inline-block;
  width: 600px;
  height: 600px;
  margin: 20px 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

img {
  width: 100%;
  height: 100%;
}

.genre-name {
  position: absolute;

  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;

  text-decoration: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;

  color: #ffffff;
}

@media screen and (min-width: 480px) and (max-width: 1360px) {
  .gallery-content {
    margin-top: 102px;
  }
  .genre-box {
    width: 400px;
    height: 400px;
  }
  .genre-name {
    font-size: 24px;
  }
}

@media screen and (max-width: 480px) {
  .gallery-content {
    margin-top: 72px;
  }
  .genre-box {
    width: 280px;
    height: 280px;
    margin: 10px 20px;
  }
  .genre-name {
    font-size: 16px;
  }
}
</style>