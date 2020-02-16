<template>
  <div id="app">
    <Header v-if="$route.name !== 'Top'"></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0%;
  font-family: Lato, "Avenir", "Helvetica Neue", "Helvetica", "Arial",
    "Hiragino Sans", "ヒラギノ角ゴシック", YuGothic, "Yu Gothic", "メイリオ",
    Meiryo, "ＭＳ Ｐゴシック", "MS PGothic";
}

ul {
  margin: 0%;
  padding: 0%;
  list-style: none;
}
</style>