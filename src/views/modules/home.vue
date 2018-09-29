<template>
  <el-card shadow="never" class="aui-card--fill">
    <div class="mod-home">
      <h3>{{ $t('home.desc.title') }}</h3>
      <el-button>默认按钮</el-button>
      <a href="#">123</a>
      <ul>
        <li v-for="item in $t('home.desc.list')" :key="item" v-html="item"></li>
      </ul>
      <h3>{{ $t('home.help.title') }}</h3>
      <ul>
        <li v-for="item in $t('home.help.list')" :key="item" v-html="item"></li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.mod-home {
  background-color: #fff;
}
</style>
