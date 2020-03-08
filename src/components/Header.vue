<template>
  <header>
    <div id="menu-box">
      <div id="site-title">
        <router-link to="/">Recollection</router-link>
      </div>
      <a href="#" v-on:click="openModal" v-bind:class="{active : btnState}" id="menu-btn"></a>
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
const MenuModal = () => import("./MenuModal");

export default {
  name: "Header",
  components: {
    MenuModal
  },
  data: function() {
    return {
      showContent: false,
      btnState: false
    };
  },
  methods: {
    openModal: function() {
      this.showContent = true;
      this.btnState = true;
    },
    closeModal: function() {
      this.showContent = false;
      this.btnState = false;
    }
  }
};
</script>

<style scoped>
/* 共通css */
header {
  z-index: 2;

  position: fixed;
  width: 100%;
  height: 68px;
  top: 0px;

  background: #ffffff;
}
#menu-box a {
  text-decoration: none;
  color: #000000;
}

#site-title {
  position: absolute;
  width: 128px;
  height: 20px;
  margin-left: 36px;
  top: 24px;

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
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
}

#menu-btn {
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
    display: none;
    /* position: unset;
    width: 114px;

    margin: auto;
    margin-top: 24px;
    font-size: 22px; */
  }

  #menu {
    display: none;
  }
  #menu li {
    width: 100%;
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

    transition: transform 0.4s;
  }

  #menu-btn::after {
    border-bottom: 4px solid #616161;
    padding-top: 6px;
  }

  #menu-btn::before {
    transform: translateY(-4px);
  }

  #menu-btn::after {
    transform: translateY(6px);
  }

  #menu-btn.active::before {
    transform: rotate(45deg);
    margin-top: -2px;
  }

  #menu-btn.active::after {
    transform: rotate(-45deg);
    border-bottom: none;
    padding-top: 0;
    margin-top: -2px;
  }
}
</style>