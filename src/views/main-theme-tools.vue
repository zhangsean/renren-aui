<template>
  <div class="aui-theme-tools">
    <div class="aui-theme-tools__toggle"></div>
    <div class="aui-theme-tools__content">
      <el-form :model="dataForm" ref="dataForm">
        <el-tabs v-model="active" class="aui-theme-tools__tabs">
          <el-tab-pane label="导航条" name="navbar">
            <el-form-item>
              <el-checkbox v-model="$store.state.navbarLayoutType" true-label="colorful">Colorful 鲜艳</el-checkbox>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="侧边栏" name="sidebar">
            <el-form-item>
              <el-checkbox v-model="$store.state.sidebarLayoutSkin" true-label="dark">Dark 黑色</el-checkbox>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="主题" name="theme">
            <el-form-item>
              <el-radio-group v-model="dataForm.themeColor" @change="themeChangeHandle">
                <el-radio label="default">Default 默认色</el-radio>
                <el-radio label="cyan">Cyan 青色</el-radio>
                <el-radio label="blue">Blue 蓝色</el-radio>
                <el-radio label="green">Green 绿色</el-radio>
                <el-radio label="turquoise">Turquoise 蓝绿色</el-radio>
                <el-radio label="indigo">Indigo 靛青色</el-radio>
                <el-radio label="brown">Brown 棕色</el-radio>
                <el-radio label="purple">Purple 紫色</el-radio>
                <el-radio label="gray">Gray 灰色</el-radio>
                <el-radio label="orange">Orange 橙色</el-radio>
                <el-radio label="pink">Pink 粉红色</el-radio>
                <el-radio label="yellow">Yellow 黄色</el-radio>
                <el-radio label="red">Red 红色</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'navbar',
      dataForm: {
        themeColor: ''
      }
    }
  },
  methods: {
    themeChangeHandle (val) {
      // 添加aui主题className
      var clsPrefix = 'aui-theme--'
      var clsList = []
      var el = document.querySelector('.aui-wrapper')
      el.classList.forEach(item => {
        if (!new RegExp(`^${clsPrefix}`).test(item)) {
          clsList.push(item)
        }
      })
      clsList.push(`${clsPrefix}${val}`)
      el.className = clsList.join(' ')
      // 添加element组件主题.css样式文件
      var id = 'J_elementTheme'
      var url = `${process.env.BASE_URL}element-theme/${val}/index.css?t=${new Date().getTime()}`
      el = document.querySelector(`#${id}`)
      if (!el) {
        el = document.createElement('link')
        el.id = id
        el.href = url
        el.rel = 'stylesheet'
        document.querySelector('head').appendChild(el)
      } else {
        el.href = url
      }
      // 添加element组件主题.css样式文件
      id = 'J_aui'
      url = `${process.env.BASE_URL}element-theme/${val}/aui.min.css?t=${new Date().getTime()}`
      el = document.querySelector(`#${id}`)
      if (!el) {
        el = document.createElement('link')
        el.id = id
        el.href = url
        el.rel = 'stylesheet'
        document.querySelector('head').appendChild(el)
      } else {
        el.href = url
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
