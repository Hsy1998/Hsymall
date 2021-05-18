<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" />
    <scroll class="scroll"
            ref="scroll">
      <detail-swiper :topImage="topImage" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo"
                         @imgLoad="imgLoad" />
      <detail-param-info :paramInfo="paramInfo" />
      <detail-comment-info :commentInfo="commentInfo" />
      <goods-list :goods="recommends" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./detailComps/DetailNavBar"
import DetailSwiper from "./detailComps/DetailSwiper"
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail"
import DetailBaseInfo from "./detailComps/DetailBaseInfo"
import DetailShopInfo from "./detailComps/DetailShopInfo"
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from "./detailComps/DetailGoodsInfo"
import DetailParamInfo from "./detailComps/DetailParamInfo"
import DetailCommentInfo from "./detailComps/DetailCommentInfo"
import GoodsList from "components/content/goodsList/GoodsList"





export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList

  },
  data () {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: []
    }
  },
  created () {
    // 1.保存传入的iid
    this.iid = this.$route.params.id

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res, 33333);
      const data = res.result

      this.topImage = data.itemInfo.topImages

      // 3.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 4.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 5.获取商品详细信息
      this.detailInfo = data.detailInfo

      // 6.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

    }),

      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
  },
  methods: {
    imgLoad () {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #ffff;
  height: 100vh;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: white;
}
.scroll {
  height: calc(100% - 44px);
}
</style>