// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './base/css'
import Vue from 'vue'
import App from './App'
import router from './router'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// iview
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import 'xe-utils'
// vxe-table
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
// vue 操作cookies插件
import VueCookies from 'vue-cookies'
import axios from './axios.js'
// 视频播放器插件
import VideoPlayer from 'vue-video-player'

// 自定义组件
import CustomComponents from './components/index.js'

require('video.js/dist/video-js.css')
Vue.prototype.$axios = axios
Vue.use(ViewUI, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
})
Vue.use(VXETable)
Vue.use(CustomComponents)
Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.use(VideoPlayer)

Vue.config.productionTip = false
Vue.prototype.$VXETable = VXETable
router.beforeEach((to, from, next) => {
  let accessToken = VueCookies.get('_d_access_token_')
  // 使用accessToken去后台验证
  if (to.matched.some((r) => r.meta.requireAuth)) {
    if (accessToken) { // vuex.state判断token是否存在
      next() // 已登录
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    if (to.path === '/login' && accessToken) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
