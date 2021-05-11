<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in titles"
         :key="item.index"
         :class="{ active: index === curentIndex }"
         @click="tabClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      curentIndex: 0
    };
  },
  methods: {
    tabClick (index) {
      (this.curentIndex = index),
        // 将子组件点击时间传送给父组件
        this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #ffff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
