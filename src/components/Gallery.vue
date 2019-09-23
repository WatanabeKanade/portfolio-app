<template>
<div>
    <Header></Header>
    <h1>GalleryPage</h1>
    <p><router-link to="/blackwhite">BlackWhite</router-link></p>
    <p><router-link to="/color">Color</router-link></p>
</div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Gallery',
    components: {
        Header
    }
}
</script>

<style scoped>

</style>