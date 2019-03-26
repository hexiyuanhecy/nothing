// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueMaterial from 'vue-material'
import vueWaterfallEasy from 'vue-waterfall-easy'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import Waterfall from 'vue-waterfall/lib/waterfall'
// import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import 'styles/reset.css'
import 'styles/boder.css'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'swiper/dist/css/swiper.css'
import 'styles/varibles.styl'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueMaterial)
Vue.use(vueWaterfallEasy)
Vue.use(VueAwesomeSwiper)
// Vue.use(WaterfallSlot)
// 移动端三百毫秒点击事件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
