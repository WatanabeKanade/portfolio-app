<template>
  <div>
    <div class="color-content">
      <transition name="label" appear>
        <div class="label">
          <p class="label_title">Color</p>
        </div>
      </transition>
      <transition-group
        tag="ul"
        name="item"
        v-show="itemCount"
        v-on:before-enter="beforeEnter"
        v-on:after-enter="afterEnter"
        appear
      >
        <li v-for="(image, id, index) in imgData" :data-index="index" :key="id">
          <a v-on:click="openModal(image)">
            <img :src="image" />
          </a>
        </li>
      </transition-group>
      <Modal v-show="showContent" :image-src="postItem" v-on:from-child="closeModal"></Modal>
      <transition name="btn">
        <div v-show="status">
          <p id="pageTop2">
            <a href="#" v-scroll-to="'body'">
              <i class="fas fa-4x fa-chevron-circle-up"></i>
            </a>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const Modal = () => import("./Modal");

export default {
  name: "Color",
  components: {
    Modal
  },
  data: function() {
    return {
      status: false,
      scrolly: 0,
      showContent: false,
      postItem: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.calculateScrollY);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.calculateScrollY);
  },
  computed: {
    imgData: function() {
      return this.$store.getters.currentMonochromeItems;
    },
    itemCount: function() {
      return this.imgData && Object.keys(this.imgData).length > 1;
    }
  },
  methods: {
    openModal: function(item) {
      this.postItem = item;
      this.showContent = true;
    },
    closeModal: function() {
      this.showContent = false;
    },
    calculateScrollY: function() {
      this.scrolly = window.scrollY;
      if (this.scrolly > 500) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
    beforeEnter: function(el) {
      el.style.transitionDelay = 500 * parseInt(el.dataset.index, 10) + "ms";
    },
    afterEnter: function(el) {
      el.style.transitionDelay = "";
    }
  }
};
</script>

<style scoped>
.color-content {
  position: relative;
  width: 1000px;
  height: auto;
  margin: auto;
  margin-top: 132px;
  text-align: center;
}

.label {
  z-index: 1;

  position: absolute;
  width: 196px;
  height: 45px;
  top: 44px;
  left: 869px;
  margin: 0%;
  background: rgba(0, 0, 0, 0.54);
}

.label_title {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 19px;
  text-align: center;
  margin: 13px 0px;
  color: #d8d8d8;
}

li img {
  max-width: 1000px;
  max-height: 1000px;
  object-fit: contain;
  margin-bottom: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

#pageTop2 {
  position: fixed;
  bottom: 20px;
  right: 40px;
}

#pageTop2 i {
  color: #cfcfcf;
}

#pageTop2 a:hover {
  text-decoration: none;
  opacity: 0.7;
}

.btn-enter-active,
.btn-leave-active {
  transition: opacity 0.7s;
}

.item-enter-active,
.label-enter-active {
  transition: 1.5s;
}

.item-enter,
.label-enter,
.btn-enter,
.btn-leave-to {
  opacity: 0;
}

.item-enter,
.label-enter {
  transform: translateY(-40px);
}

/* liも動的にサイズ変更できるまで現状このレスポンシブ対応 */
@media screen and (max-width: 1160px) {
  .label {
    display: none;
  }

  #pageTop2 {
    display: none;
  }
}

@media screen and (min-width: 950px) and (max-width: 1160px) {
  .color-content {
    width: 900px;
  }

  li img {
    max-width: 900px;
    max-height: 900px;
  }
}

@media screen and (min-width: 750px) and (max-width: 950px) {
  .color-content {
    width: 700px;
  }

  li img {
    max-width: 700px;
    max-height: 700px;
  }
}

@media screen and (min-width: 450px) and (max-width: 750px) {
  .color-content {
    width: 400px;
  }

  li img {
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 25px;
  }
}

@media screen and (min-width: 350px) and (max-width: 450px) {
  .color-content {
    width: 350px;
  }

  li img {
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 25px;
  }
}

@media screen and (min-width: 300px) and (max-width: 350px) {
  .color-content {
    width: 300px;
  }

  li img {
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 25px;
  }
}
</style>