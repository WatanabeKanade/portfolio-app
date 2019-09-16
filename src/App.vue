<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>コンポーネント</h1>
    <Header msg="Header"/>
    <Top msg="Top"/>
    <Prologue msg="Prologue"/>
    <Category msg="Category"/>
    <Gallery msg="Gallery"/>
    <Photo msg="Photo"/>
    <ScaleDisplay msg="ScaleDisplay"/>
    <About msg="About"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Top from './components/Top.vue'
import Prologue from './components/Prologue.vue'
import Category from './components/Category.vue'
import Gallery from './components/Gallery.vue'
import Photo from './components/Photo.vue'
import ScaleDisplay from './components/ScaleDisplay.vue'
import About from './components/About.vue'


export default {
  name: 'app',
  components: {
    Header,
    Top,
    Prologue,
    Category,
    Gallery,
    Photo,
    ScaleDisplay,
    About
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
