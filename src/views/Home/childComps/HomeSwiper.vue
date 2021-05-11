<template>
  <swiper>
    <swiper-item v-for="item in banners"
                 :key="item.index">
      <a :href="item.link"><img :src="item.image"
             alt=""
             @load="imgLoad"></a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad () {
      // 监听图片加载完成时间，只需要请求一次
      if (this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = false
      }
    }
  }
}
</script>

<style scoped>
</style>