<template>
  <div>
    <div class="about-content">
      <div class="image-box">
        <transition name="bg-image" appear>
          <div class="bg-image">
            <img src="../../static/about_image.jpg" />
          </div>
        </transition>
        <transition name="profile-image" appear>
          <div class="profile-image">
            <img src="../../static/profile_image.jpg" />
          </div>
        </transition>
      </div>

      <transition name="sns-links" appear>
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
      </transition>

      <transition name="profile-box" appear>
        <div class="profile-box">
          <p class="name">Watanabe Kanade</p>
          <p class="place">東京在住</p>
          <div class="text">
            <p>
              フィルムカメラとiPhoneで写真を撮っています。
              <br />
              <br />愛用はOLYMPUS trip35
            </p>
          </div>
        </div>
      </transition>
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

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
}

.place {
  width: 60px;
  height: 16px;
  margin: auto;
  margin-top: 48px;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
}

.text p {
  width: 300px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 60px;

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
}

.bg-image-enter-active {
  transition: 1s;
}

.profile-image-enter-active {
  transition: 1s;
  transition-delay: 0.4s;
}

.sns-links-enter-active {
  transition: 1s;
  transition-delay: 0.8s;
}

.profile-box-enter-active {
  transition: 1s;
  transition-delay: 1.2s;
}

.bg-image-enter,
.profile-image-enter,
.sns-links-enter,
.profile-box-enter {
  opacity: 0;
  transform: translateY(-40px);
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