<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
      <li><br></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"

import HomeSwiper from "./childComps/HomeSwiper"
import RecommendsView from "./childComps/RecommendsView"
import FeatureView from "./childComps/FeatureView"
import { getHomeMultidata } from "network/home.js"




export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendsView,
    FeatureView



  },
  data () {
    return {
      banners: [],
      recommends: [],
    }
  },
  // 生命周期函数，在组件创造完成时请求数据
  created () {
    getHomeMultidata().then(res => {
      console.log(res);
      // 将数据保存到data，函数执行完之后数据还会存在
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 7;
  width: 100%;
  left: 0;
  resize: 0;
  top: 0;
}
</style>