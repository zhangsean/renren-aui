import Vue from 'vue'
import Element from 'element-ui'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import App from '@/App'
import '@/icons'
import '@/assets/scss/aui.scss'
import http from '@/utils/request'
import { hasPermission } from '@/utils'
import cloneDeep from 'lodash/cloneDeep'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'default',
  i18n: (key, value) => i18n.t(key, value)
})

// 挂载全局
Vue.prototype.$http = http
Vue.prototype.$hasPermission = hasPermission

// 保存整站vuex本地储存初始状态
window.SITE_CONFIG['storeState'] = cloneDeep(store.state)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
