<template>
  <div id="app">
    <Header v-if="$route.name !== 'Top'"></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "Prologue",
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0%;
}

ul {
  margin: 0%;
  padding: 0%;
  list-style: none;
}
</style>