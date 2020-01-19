<template>
  <transition name="modal">
    <div id="overlay" v-on:click="clickEvent">
      <div id="content">
        <img :src="imageSrc" />
      </div>
    </div>
  </transition>
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
  z-index: 2;

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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.8s, transform 1s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-600px);
}

@media screen and (min-width: 1000px) and (max-width: 1160px) {
  #content img {
    max-width: 1000px;
    max-height: 800px;
  }
}

@media screen and (min-width: 750px) and (max-width: 1000px) {
  #content img {
    max-width: 750px;
  }
}

@media screen and (min-width: 450px) and (max-width: 750px) {
  #content img {
    max-width: 450px;
  }
}

@media screen and (min-width: 350px) and (max-width: 450px) {
  #content img {
    max-width: 350px;
  }
}

@media screen and (min-width: 300px) and (max-width: 350px) {
  #content img {
    max-width: 300px;
  }
}
</style>
