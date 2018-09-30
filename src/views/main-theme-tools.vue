<template>
  <div class="aui-theme-tools">
    <div class="aui-theme-tools__toggle"></div>
    <div class="aui-theme-tools__content">
      <el-tabs v-model="active" class="aui-theme-tools__tabs">
        <el-tab-pane label="导航条" name="navbar">
          <el-checkbox v-model="$store.state.navbarLayoutType" true-label="colorful">colorful 鲜艳</el-checkbox>
        </el-tab-pane>
        <el-tab-pane label="侧边栏" name="sidebar">
          <el-checkbox v-model="$store.state.sidebarLayoutSkin" true-label="dark">dark 黑色</el-checkbox>
        </el-tab-pane>
        <el-tab-pane label="主题" name="theme">
          <el-radio-group v-model="themeColor" @change="themeColorChangeHandle">
            <el-radio v-for="item in themeList" :key="item.name" :label="item.name">{{ `${item.name} ${item.desc}` }}</el-radio>
          </el-radio-group>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { list } from '@/theme.config'
export default {
  data () {
    return {
      active: 'navbar',
      themeList: [],
      themeColor: ''
    }
  },
  created () {
    this.themeList = list
  },
  methods: {
    themeColorChangeHandle (val) {
      var styleList = [
        {
          id: 'J_elementTheme',
          url: `${process.env.BASE_URL}element-theme/${val}/index.css?t=${new Date().getTime()}`
        },
        {
          id: 'J_auiTheme',
          url: `${process.env.BASE_URL}element-theme/${val}/aui.css?t=${new Date().getTime()}`
        }
      ]
      for (var i = 0; i < styleList.length; i++) {
        var el = document.querySelector(`#${styleList[i].id}`)
        if (el) {
          el.href = styleList[i].url
          continue
        }
        el = document.createElement('link')
        el.id = styleList[i].id
        el.href = styleList[i].url
        el.rel = 'stylesheet'
        document.querySelector('head').appendChild(el)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/aui.scss";
.aui-theme-tools {
  position: fixed;
  top: $navbar--height + $content--tabs-header-height + 15px;
  right: 0;
  z-index: 1010;
  &__content {
    padding: 5px 20px 20px;
    border-radius: $--border-radius-base;
    border: $--border-base;
    background-color: #fff;
    .el-form-item__label {
      float: none;
    }
    .el-form-item__content {
      line-height: 30px;
    }
    .el-radio {
      display: block;
      margin-left: 0 !important;
      line-height: 30px;
    }
  }
}
</style>
