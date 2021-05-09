<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods" />
    <ul>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
      <li><br /></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendsView from "./childComps/RecommendsView";
import FeatureView from "./childComps/FeatureView";
import GoodsList from "components/content/goodsList/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  // 生命周期函数，在组件创造完成时请求数据
  created() {
    // 由于created的特殊性，这里将函数进行封装，在created之调用
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },

  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },

    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // 将数据保存到data，函数执行完之后数据还会存在
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 1.取到goods里的page + 1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 2.将数据保存到goods.list中
        this.goods[type].list.push(...res.data.list);
        // 3.每调用一次getHomeGoods，goods.page += 1
        this.goods[type].page += 1;
      });
    }
  }
};
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
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
