<template>
  <div>
    <Header></Header>
    <div class="item-list">
      <ul>
        <div class="label">
          <p class="label_target">Color</p>
        </div>
        <li v-for="item in items" :key="item">
          <a v-on:click="openModal(item)">
            <img :src="item" />
          </a>
        </li>
      </ul>
      <Modal v-show="showContent" :image-src="postItem" v-on:from-child="closeModal"></Modal>
      <p id="pageTop2">
        <a href="#" v-scroll-to="'body'">
          <i class="fas fa-4x fa-chevron-circle-up"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Modal from "./Modal";

export default {
  name: "Color",
  components: {
    Header,
    Modal
  },
  data: function() {
    return {
      showContent: false,
      postItem: "",
      items: [
        require("../../static/color_photo.jpg"),
        require("../../static/color_photo2.jpg"),
        require("../../static/color_photo3.jpg")
      ]
    };
  },
  methods: {
    openModal: function(item) {
      this.postItem = item;
      this.showContent = true;
    },
    closeModal: function() {
      this.showContent = false;
    }
  }
};
</script>

<style scoped>
.item-list {
  position: relative;
  width: 1000px;
  height: auto;
  left: calc(50% - 1000px / 2);
  margin-top: 132px;
  text-align: center;
}

.label {
  position: absolute;
  width: 196px;
  height: 45px;
  top: 44px;
  left: 869px;
  margin: 0%;
  background: rgba(0, 0, 0, 0.54);
}

.label_target {
  font-family: Lato;
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
  max-height: 700px;
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
</style>