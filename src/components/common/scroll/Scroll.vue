<template>
  <div ref="wrapper"
       class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    // observeImage: {
    //   type: Boolean,
    //   default: false
    // },

  },
  mounted () {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,

      //开启对 wrapper 子元素中图片元素的加载的探测。
      //无论图片的加载成功与否，都会自动调用 BetterScroll 的 refresh 方法来重新计算可滚动的宽度或者高度
      // observeImage: this.observeImage,

    })

    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    // 3.监听scroll滚动到底部
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    // ES6写法，time默认值为300
    scrollTo (x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    getScrolly () {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>
</style>