import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import Prologue from '@/components/Prologue'
import Gallery from '@/components/Gallery'
import Monochrome from '@/components/Monochrome'
import Color from '@/components/Color'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Top',
            component: Top
        },
        {
            path: '/prologue',
            name: 'Prologue',
            component: Prologue
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery,
        },
        {
            path: '/monochrome',
            name: 'Monochrome',
            component: Monochrome
        },
        {
            path: '/color',
            name: 'Color',
            component: Color
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/adm/upload',
            name: 'Upload',
            component: () => import(/* webpackChunkName: "admin-group" */ './components/Upload.vue')
        }
    ]
})