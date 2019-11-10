<template>
    <div>
        <Header></Header>
        <div class="item-list">
            <ul>
                <div class="label">
                    <p class="label_target">Monochrome</p>
                </div>
                <li><img src="../../static/monochrome_photo.jpg"></li>
                <li><img src="../../static/monochrome_photo2.jpg"></li>
                <li><img src="../../static/monochrome_photo3.jpg"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Monochrome',
    components: {
        Header
    }
}
</script>

<style scoped>
.item-list{
    position: relative;
    width: 1000px;
    height: auto;
    left: calc(50% - 1000px/2);
    margin-top: 132px;
    text-align: center;
}

.label{
    position: absolute;
    width: 196px;
    height: 45px;
    top: 44px;
    left: 869px;
    margin: 0%;
    background: rgba(0, 0, 0, 0.54);
}

.label_target{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 19px;
    text-align: center;
    margin: 13px 0px;
    color: #D8D8D8;
}

li img{
    max-width: 1000px;
    max-height: 700px;
    margin-bottom: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
</style>