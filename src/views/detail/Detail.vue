<template>
  <div>
    <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from "./detailComps/DetailNavBar"

export default {
  name: 'Detail',
  components: {
    DetailNavBar


  },
  data () {
    return {
      iid: null
    }
  },
  created () {
    this.iid = this.$route.params.id
  }
}
</script>

<style scoped>
</style>