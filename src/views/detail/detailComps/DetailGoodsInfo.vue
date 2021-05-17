<template>
  <div class="goods-info">
    <div class="info-desc clearfix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list"
           :key="index"
           :src="item"
           @load="imgLoad"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      imgLength: 0,
      counter: 0
    }
  },
  methods: {
    imgLoad () {
      // 判断，等所有的图片都加载完了，那么进行一次回调就可以了
      if (++this.counter === this.imgLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailInfo () {
      // 获取图片的个数
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 10px;
  font-size: 12px;
}
.info-list img {
  width: 100%;
  margin-top: 10px;
}
.info-desc {
  position: relative;
}
.desc {
  padding: 15px 0;
}
.start {
  float: left;
  top: 0;
  left: 0;
  border: 1px dotted rgb(202, 202, 202);
  width: 50px;
}
.end {
  float: right;
  bottom: 0;
  right: 0;
  border: 1px dotted rgb(202, 202, 202);
  width: 50px;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.info-key {
  font-size: 14px;
  font-weight: bold;
}
</style>