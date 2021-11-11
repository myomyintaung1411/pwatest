import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
import Toast from './components/toast/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import './assets/style/index.scss'
Vue.prototype.$video = Video
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
