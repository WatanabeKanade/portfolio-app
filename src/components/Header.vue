<template>
  <header>
    <div id="menu-box">
      <div id="site-title">
        <router-link to="/">Recollection</router-link>
      </div>
      <p id="toggle">
        <a href="#" v-on:click="openModal">
          <i class="fas fa-bars icon-size"></i>
        </a>
      </p>
      <ul id="menu" class>
        <li id="l1">
          <router-link to="/">Top</router-link>
        </li>
        <li id="l2">
          <router-link to="/prologue">Prologue</router-link>
        </li>
        <li id="l3">
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li id="l4">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <menu-modal v-show="showContent" v-on:from-child="closeModal"></menu-modal>
    </div>
  </header>
</template>

<script>
import MenuModal from "./MenuModal";

export default {
  name: "Header",
  components: {
    MenuModal
  },
  data: function() {
    return {
      showContent: false
    };
  },
  methods: {
    openModal: function() {
      this.showContent = true;
    },
    closeModal: function() {
      this.showContent = false;
    }
  }
};
</script>

<style scoped>
/* 共通css */
#menu-box a {
  text-decoration: none;
  color: #000000;
}

#site-title {
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

#menu li {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
}

#toggle {
  display: none;
}

#l1 {
  position: absolute;
  width: 26.12px;
  height: 12px;
  right: 226.89px;
  top: 28px;
}

#l2 {
  position: absolute;
  width: 61px;
  height: 12px;
  right: 153.82px;
  top: 28px;
}

#l3 {
  position: absolute;
  width: 49.23px;
  height: 12px;
  right: 92.26px;
  top: 28px;
}

#l4 {
  position: absolute;
  width: 44.2px;
  height: 12px;
  right: 36px;
  top: 28px;
}

/* スマホ版css */
@media screen and (max-width: 800px) {
  #site-title {
    left: 20px;
  }

  #menu {
    display: none;
  }
  #menu li {
    width: 100%;
  }
  #toggle {
    display: block;
    position: fixed;
    margin: 0%;
    width: 18.2px;
    height: 20px;
    right: 20px;
    top: 24px;
  }
  .icon-size {
    font-size: 1.3em;
  }
}
</style>