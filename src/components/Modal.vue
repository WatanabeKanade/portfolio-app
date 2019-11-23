<template>
  <div id="overlay" v-on:click="clickEvent">
    <div id="content">
      <p>modal window</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
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
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
