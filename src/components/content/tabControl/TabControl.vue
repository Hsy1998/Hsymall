<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="item in titles"
         :key="item.index">
      <span>{{item}}</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  prps: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>