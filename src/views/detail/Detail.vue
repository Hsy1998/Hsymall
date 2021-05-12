<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :topImage="topImage" />
  </div>
</template>

<script>
import DetailNavBar from "./detailComps/DetailNavBar"
import { getDetail } from "network/detail"
import DetailSwiper from "./detailComps/DetailSwiper"


export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper


  },
  data () {
    return {
      iid: null,
      topImage: []
    }
  },
  created () {
    // 1.保存传入的iid
    this.iid = this.$route.params.id

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImage = res.result.itemInfo.topImages
    })
  }
}
</script>

<style scoped>
</style>