<template>
  <nav-bar>
    <div slot="left"
         class="left"
         @click="back">
      <img src="~assets/img/common/back.svg"
           alt="">
    </div>
    <div slot="center"
         class="center">
      <div v-for="(item, index) in titles"
           :key="item"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    },
    back () {
      this.$router.back()
    }
  }
}
  </script >

  <style scoped>
.center {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.left img {
  margin-top: 11px;
}
</style>