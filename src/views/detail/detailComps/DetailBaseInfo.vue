<template>
  <div class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount"
            class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[3].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="inedx in goods.services.length-1"
            :key="inedx"
            class="info-services-items">
        <img :src="goods.services[inedx-1].icon"
             alt="">
        <span>{{goods.services[inedx-1].name}}</span>
      </span>

    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 10px;
}
.info-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.info-price {
  margin-bottom: 20px;
}
.info-price span {
  margin-left: 5px;
}
.n-price {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-tint);
}
.o-price {
  color: #666;
  font-size: 15px;
  text-decoration: line-through;
}
.discount {
  background-color: var(--color-high-text);
  color: #fff;
  padding: 0.2em 0.3em;
  border-radius: 10px;
  margin-top: -10px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  color: rgb(165, 165, 165);
  font-size: 15px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgb(211, 211, 211);
}
.info-services {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.info-services-items {
  font-weight: 500;
}
.info-services-items img {
  width: 14px;
  height: 14px;
}
</style>