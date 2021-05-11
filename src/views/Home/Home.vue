<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="probeScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 监听组件需要加上native修饰符才能监听组件的原生事件 -->
    <back-top @click.native="backClick"
              v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendsView from "./childComps/RecommendsView";
import FeatureView from "./childComps/FeatureView";
import GoodsList from "components/content/goodsList/GoodsList";
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils.js"



export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    Scroll,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    GoodsList,
    BackTop


  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    };
  },
  // 生命周期函数，在组件创造时请求数据
  created () {
    // 由于created的特殊性，这里将函数进行封装，在created之调用
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 生命周期函数，组件创造完成时调用
  mounted () {
    // 将func放入防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 50)

    // 接收GoodsListItem组件发射的监听事件
    // 监听图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      // 图片加载完成后回调scroll的refresh函数重新计算可拖动区域高度，在BScroll2.x中可以直接使用observeImage插件
      refresh()
    })
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list;
    }
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrolly()
    console.log(this.saveY);
  },

  methods: {
    /**
     * 事件监听
     */
    tabClick (index) {
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
      this.$refs.tabControl1.curentIndex = index
      this.$refs.tabControl2.curentIndex = index
    },
    backClick () {
      this.$refs.scroll.scrollTo(0, 0,)
    },
    // 监听滚动
    probeScroll (position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000

      // 2.判断tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    // 请求更多数据
    loadMore () {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad () {
      // 获取HomeSwiper的高度并赋值
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 防抖函数
    // debounce (func, delay) {
    //   let timer = null
    //   return function (...args) {
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // },
    /**
     * 网络请求
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        // 将数据保存到data，函数执行完之后数据还会存在
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods (type) {
      // 1.取到goods里的page + 1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 2.将数据保存到goods.list中
        this.goods[type].list.push(...res.data.list);
        // 3.每调用一次getHomeGoods，goods.page += 1
        this.goods[type].page += 1;
        // scroll默认只执行一次，执行完之后回调一下scroll.finishPullUp,页面上拉才能继续加载
        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* vh表示视口 */
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  z-index: 7;
  width: 100%;
  left: 0;
  top: 0; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  /* 给home设置高度之后减去navBar和tabBar的高度就是视口的高度 */
  /* height: calc(100% - 93px);
  overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
