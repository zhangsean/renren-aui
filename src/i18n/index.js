import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'
import enLocale from 'element-ui/lib/locale/lang/en'
import ElementLocale from 'element-ui/lib/locale'
import Cookies from 'js-cookie'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import enUS from './en-US'

Vue.use(VueI18n)

export const messages = {
  'zh-CN': {
    '_lang': '简体中文',
    ...zhCN,
    ...zhCNLocale
  },
  'zh-TW': {
    '_lang': '繁體中文',
    ...zhTW,
    ...zhTWLocale
  },
  'en-US': {
    '_lang': 'English',
    ...enUS,
    ...enLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh-CN',
  messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
