<template>
  <div class="GoodsList">
    <goods-list-item v-for="item in goods"
                     :key="item.iid"
                     :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.GoodsList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}
</style>
