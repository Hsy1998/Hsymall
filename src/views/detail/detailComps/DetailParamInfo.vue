.<template>
  <div class="param-info">
    <table v-for="(table, index) in paramInfo.sizes"
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
        <td>{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="paramInfo.image.length != 0">
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
.info-img img {
  width: 100%;
}
</style>