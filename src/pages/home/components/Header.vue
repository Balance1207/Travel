<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link
      tag="div"
      class="header-right"
      to="/city"
    >
      <!--{{ this.$store.state.city }}-->

      {{ this.city }}

      <!--{{ this.doubleCity}}-->
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </router-link>
  </div>
</template>

<script>
// Vuex高级API用法
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  // Vuex高级API用法
  computed: {
    // 展开运算符，
    // mapState是指我把vuex里面的数据映射到这个组件的computed计算属性里
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<!-- 1rem = html font-size = 50px -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
