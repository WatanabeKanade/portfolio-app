<template>
  <transition name="menu-content" appear>
    <div id="menu-overlay" v-on:click="clickEvent">
      <div id="menu-content">
        <img src="../../static/menu_content_image.jpg" />
        <a href="#" id="menu-btn"></a>
        <div id="menu-content-link">
          <p>
            <router-link to="/">Top</router-link>
          </p>
          <p>
            <router-link to="/prologue">Prologue</router-link>
          </p>
          <p>
            <router-link to="/gallery">Gallery</router-link>
          </p>
          <p>
            <router-link to="/about">About</router-link>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MenuModal",
  methods: {
    clickEvent: function() {
      this.$emit("from-child");
    }
  }
};
</script>

<style scope>
#menu-overlay {
  z-index: 3;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6e6e6e;

  display: flex;
  align-items: center;
  justify-content: center;
}

#menu-content {
  position: relative;
}

#menu-content img {
  max-height: 824px;
}

#menu-content-link {
  position: absolute;
  width: 100%;
  top: calc(50% - 148px);
}

#menu-content-link p {
  text-align: center;
  margin: 44px;
}

#menu-content-link a {
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 29px;
  align-items: center;
  text-decoration: none;

  color: #ffffff;
}

.menu-content-enter-active,
.menu-content-leave-active {
  transition: 0.8s;
}

.menu-content-enter,
.menu-content-leave-to {
  opacity: 0;
}

#menu-btn {
  position: fixed;
  display: inline-block;
  width: 28px;
  height: 24px;
  margin: 0%;
  left: 20px;
  top: 21px;
}

#menu-btn::before,
#menu-btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0px;
  right: 0px;
  margin-top: -8px;
  border-top: 4px solid #616161;
}

#menu-btn::before {
  transform: rotate(45deg);
  margin-top: -2px;
}

#menu-btn::after {
  transform: rotate(-45deg);
  margin-top: -2px;
}
</style>
