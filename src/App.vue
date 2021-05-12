<template>
  <div id="app">
    <!-- exclude:将Detail组件从keep-alive状态中去除，让Detail组件可以重新请求iid -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'

export default ({
  name: 'app',
  components: {
    MainTabBar
  }
})
</script>

<style scoped>
@import "assets/css/base.css";
</style>
