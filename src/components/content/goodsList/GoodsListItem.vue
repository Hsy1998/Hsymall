<template>
  <div class="goods-list-item"
       @click="itemClick">
    <img :src="showImg"
         @load="imageLoad" />
    <!-- vue 自带监听图片加载事件load -->
    <div>
      <p>{{ goodsItem.title }}</p>
    </div>
    <div class="info">
      <span class="price">{{ goodsItem.price }}</span>
      <img src="assets/img/common/collect.svg"
           alt="" />
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  computed: {
    showImg () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad () {
      // $bus挂载了Vue实例，通过事件总线将itemImageLoad发射给Home组件
      this.$bus.$emit('itemImageLoad')
    },
    itemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
});
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  margin-bottom: 5px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.goods-list-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list-item .price {
  color: var(--color-tint);
}
.goods-list-item .info img {
  width: 14px;
  height: 14px;
  margin: 0 5px;
}
</style>
