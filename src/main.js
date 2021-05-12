import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import axios from 'axios'

// 1.导入 element-ui 和 ant-design-vue 组件库
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
// 2.导入组件库的样式表
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'
// 3.安组件库
Vue.use(ElementUI)
Vue.use(Antd)

Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
