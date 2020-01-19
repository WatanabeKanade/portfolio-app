<template>
  <div class="image-upload">
    <h1>ImageUpload</h1>
    <div class="photo-type">
      <spam>※</spam>
      <select name="type">
        <option value="monochrome">モノクロ</option>
        <option value="color">カラー</option>
      </select>
    </div>
    <div>
      <input type="file" accept="image/gif, image/jpeg, image/png" />
    </div>
    <div class="btn">
      <button type="submit">登録</button>
    </div>
    <div>errorArea</div>
  </div>
</template>

<script>
export default {
  name: "Upload"
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