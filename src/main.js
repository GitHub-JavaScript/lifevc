import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueScroller from 'vue-scroller'

import 'mint-ui/lib/style.css'
import  '../static/reset.css'
import  './fonts/iconfont.css'
Vue.use(VueScroller)
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
