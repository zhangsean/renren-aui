<template>
  <transition name="el-fade-in-linear">
    <router-view />
  </transition>
</template>

<script>
import Cookies from 'js-cookie'
import { messages } from '@/i18n'
export default {
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    // 国际化, 监听
    i18nHandle (val) {
      Cookies.set('language', val)
      document.querySelector('html').setAttribute('lang', val)
      document.title = messages[val].brand.lg
    }
  }
}
</script>
