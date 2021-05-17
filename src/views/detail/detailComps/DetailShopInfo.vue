<template>
  <div class="shop">
    <div class="avatar">
      <img :src="shop.logo"
           alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-info">
      <div class="count">
        <div class="count-item">
          <div class="margin">{{shop.sells}}</div>
          <div>总销量</div>
        </div>
        <div class="count-item">
          <div class="margin">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="description">
        <!-- <div class="description-item"><span>{{shop.score[0].name}}</span><span :class="{active: shop.score[0].isBetter = false }">{{shop.score[0].score}}</span><span>低</span></div>
        <div class="description-item"><span>{{shop.score[1].name}}</span><span>{{shop.score[0].score}}</span><span>低</span></div>
        <div class="description-item"><span>{{shop.score[2].name}}</span><span>{{shop.score[0].score}}</span><span>低</span></div> -->
        <table>
          <tr v-for="(item,index) in shop.score"
              :key="index">
            <td>{{item.name}}</td>
            <td class="score"
                :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better"
                :class="{'better-more': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>

      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style scoped>
.shop {
  padding: 20px 10px;
  border-top: 5px solid rgb(235, 235, 235);
  border-bottom: 5px solid rgb(235, 235, 235);
}
.avatar {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 25px;
}
.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid rgb(231, 231, 231);
  margin-right: 15px;
}
.shop-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 20px;
}
.count {
  display: flex;
  border-right: 1px solid rgb(230, 229, 229);
  flex: 1;
  justify-content: center;
}
.count-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 25px;
}
.margin {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
.description {
  flex: 1;
  margin-left: 25px;
}
.description table {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.description tr {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.score {
  color: rgb(7, 167, 61);
}
.score-better {
  color: rgb(246, 107, 107);
}
.better {
  color: white;
  background-color: rgb(7, 167, 61);
}
.better-more {
  color: white;
  background-color: rgb(246, 107, 107);
}
.btn {
  display: flex;
  justify-content: center;
}
.btn button {
  background-color: rgba(238, 244, 245, 0.849);
  border: none;
  padding: 0.3em 0.5em;
  font-size: 15px;
  width: 150px;
  border-radius: 10px;
}
</style>