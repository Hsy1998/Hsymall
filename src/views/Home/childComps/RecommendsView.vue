<template>
  <div class="recommends">
    <div class="recommends-item"
         v-for="item in recommends"
         :key="item.index">
      <a :href="item.link">
        <img :src="item.image"
             alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendsView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  text-align: center;
  border-bottom: 10px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>