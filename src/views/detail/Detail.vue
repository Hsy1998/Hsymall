<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :topImage="topImage" />
  </div>
</template>

<script>
import DetailNavBar from "./detailComps/DetailNavBar"
import DetailSwiper from "./detailComps/DetailSwiper"
import { getDetail, Goods } from "network/detail"


export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper


  },
  data () {
    return {
      iid: null,
      topImage: [],
      goods: {}
    }
  },
  created () {
    // 1.保存传入的iid
    this.iid = this.$route.params.id

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      this.topImage = data.itemInfo.topImages

      // 3.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    })
  }
}
</script>

<style scoped>
</style>