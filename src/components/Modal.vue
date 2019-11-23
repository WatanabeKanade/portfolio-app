<template>
  <div id="overlay" v-on:click="clickEvent">
    <div id="content">
      <img :src="imageSrc" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: { imageSrc: String },
  methods: {
    clickEvent: function() {
      this.$emit("from-child");
    }
  }
};
</script>

<style scope>
#overlay {
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;

  display: flex;
  align-items: center;
  justify-content: center;
}

#content img {
  max-width: 1200px;
  max-height: 900px;
  margin: 50px 0px;
}
</style>
