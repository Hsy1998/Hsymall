.<template>
  <div class="param-info">
    <table class="sizes"
           v-for="(table, index) in paramInfo.sizes"
           :key="index">
      <tr v-for="(tr, indey) in table"
          :key="indey">
        <td v-for="(td, indez) in tr"
            :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos"
          :key="index">
        <td class="item-key">{{info.key}}</td>
        <td class="item-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="paramInfo.image">
      <img :src="paramInfo.image"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default: () => { }
    }
  },
  created () {
    console.log(this.paramInfo + 15163164);
  }
}
</script>

<style>
.param-info {
  padding: 10px;
  font-size: 12px;
  border-top: 5px solid rgb(235, 235, 235);
}
.sizes {
  display: flex;
  flex-direction: column;
}
.sizes tr {
  display: flex;
  justify-content: space-between;
  padding: 1em 0.5em;
  border-bottom: 1px solid rgb(235, 234, 234);
}
.info-img img {
  width: 100%;
}
.info-param {
  border-top: 1px solid rgb(235, 234, 234);
  width: 100%;
}
.info-param tr {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0.5em;
  border-bottom: 1px solid rgb(235, 234, 234);
}
.item-key {
  flex: 1;
}
.item-value {
  flex: 2;
  color: var(--color-tint);
}
</style>