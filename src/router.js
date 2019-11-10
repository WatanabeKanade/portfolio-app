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
            component: Top
        },
        {
            path: '/prologue',
            component: Prologue
        },
        {
            path: '/gallery',
            component: Gallery,
        },
        {
            path: '/monochrome',
            component: Monochrome
        },
        {
            path: '/color',
            component: Color
        },
        {
            path: '/about',
            component: About
        }
    ]
})