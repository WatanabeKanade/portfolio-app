<template>
  <div id="menu-overlay" v-on:click="clickEvent">
    <div id="menu-content">
      <img src="../../static/menu_content_image.jpg" />
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
  z-index: 1;

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
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 29px;
  align-items: center;
  text-decoration: none;

  color: #ffffff;
}
</style>
