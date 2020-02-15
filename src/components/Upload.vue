<template>
  <div class="image-upload">
    <h1>ImageUpload</h1>
    <h2>{{ user }}</h2>
    <div class="photo-type">
      <span>※</span>
      <select name="type" v-model="dirName">
        <option value="monochromes">モノクロ</option>
        <option value="colors">カラー</option>
      </select>
    </div>
    <div>
      <input type="file" @change="selectFile" accept="image/gif, image/jpeg, image/png" />
    </div>
    <div class="btn">
      <button type="submit" v-on:click="upload">登録</button>
    </div>
    <div>{{ infoMsg }}</div>
    <img src id="image" />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

export default {
  name: "Upload",
  data: function() {
    return {
      user: null,
      dirName: null,
      uploadFile: null,
      infoMsg: null
    };
  },
  mounted() {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (result.user) {
          this.user = result.user.displayName;
        } else {
          firebase
            .auth()
            .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  },
  methods: {
    selectFile: function(e) {
      const files = e.target.files;
      this.uploadFile = files[0];
    },
    upload: function() {
      if (!this.dirName || !this.uploadFile) {
        this.infoMsg = "入力漏れがあります。";
        return;
      } else {
        this.infoMsg = "";
        const storageRef = firebase
          .storage()
          .ref()
          .child("photos/" + this.dirName + "/" + this.uploadFile.name);
        storageRef.put(this.uploadFile).then(snapshot => {
          this.infoMsg = "Storage Upload Success";
          snapshot.ref.getDownloadURL().then(downloadURL => {
            const firestore = firebase.firestore();
            firestore
              .collection(this.dirName)
              .add({
                imageUrl: downloadURL
              })
              .then(function() {
                console.log("Added data to DB");
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });
          });
          this.$store.dispatch("addMonochromeItems");
          this.$store.dispatch("addColorItems");
        });
      }
    }
  }
};
</script>

<style scoped>
.image-upload {
  margin: auto;
  margin-top: 100px;
  text-align: center;
}
.photo-type {
  margin: 20px 0px;
}
.photo-type select {
  width: 100px;
}
.btn {
  margin: 20px 0px;
}
</style>