<template>
  <div>
    <div class="about-content">
      <div class="image-box">
        <div class="bg-image">
          <img src="../../static/about_image.jpg" />
        </div>
        <div class="profile-image">
          <img src="../../static/profile_image.jpg" />
        </div>
      </div>

      <div class="sns-links">
        <div class="twitter_icon">
          <a href="https://twitter.com/kanade_photo" target="_brank">
            <img src="../../static/twitter_icon.png" />
          </a>
        </div>
        <div class="instagram_icon">
          <a href="https://www.instagram.com/kanadearo/" target="_brank">
            <img src="../../static/instagram_icon.png" />
          </a>
        </div>
        <div class="mail_icon">
          <a href="mailto:kanadearo_3103@yahoo.co.jp">
            <img src="../../static/mail_icon.png" />
          </a>
        </div>
      </div>

      <div class="profile-box">
        <p class="name">Watanabe Kanade</p>
        <p class="place">東京在住</p>
        <div class="text">
          <p>愛用はOLYMPUS trip35</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-content {
  margin-top: 132px;
  text-align: center;
}

.bg-image {
  height: 200px;
}

.profile-image {
  width: 240px;
  height: 240px;
  margin: auto;
  margin-top: -71px;
}

.profile-image img {
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.image-box img {
  width: 100%;
  height: 100%;
}

.sns-links {
  margin-top: 40px;
}

.twitter_icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 12px;
  vertical-align: middle;
}

.instagram_icon {
  display: inline-block;
  width: 44px;
  height: 44px;
  margin: 0 8px;
  vertical-align: middle;
}

.mail_icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 12px;
  vertical-align: middle;
}

.sns-links img {
  width: 100%;
  height: 100%;
}

.profile-box {
  margin-top: 32px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #000000;
}

.name {
  width: 240px;
  height: 24px;
  margin: auto;

  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
}

.place {
  width: 60px;
  height: 16px;
  margin: auto;
  margin-top: 48px;

  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
}

.text p {
  width: 300px;
  height: 500px;
  margin: auto;
  margin-top: 40px;

  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
}

@media screen and (max-width: 450px) {
  .about-content {
    margin-top: 75px;
  }
  .profile-image {
    width: 200px;
    height: 200px;
  }
}
</style>