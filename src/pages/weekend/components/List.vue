<template>
  <div class="content">
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="img-wrapper">
        <img class="img" :src="item.img">
      </div>
      <div class="info">
        <p class="info-title">
          {{ item.title }}
        </p>
        <p class="info-desc">
          {{ item.desc }}
        </p>
        <div class="price">
          ¥
          <em class="price-num">{{ item.price }}</em>
          <span class="price-numword">起</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeekendList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .content
    margin-top: .86rem
    .info
      position: relative
      padding: .2rem .2rem .24rem .2rem
      line-height: .5rem
      border-bottom: .2rem solid #f8f8f8
      .info-title
        font-size: .36rem
        padding-right: 2.2rem
      .info-desc
        font-size: .26rem
        color: #888
      .price
        font-size: .18rem
        color: #ff8300
        position: absolute
        right: .3rem
        top: .26rem
        .price-num
          font-size: .4rem
          font-weight: bold
        .price-numword
          font-size: .22rem
          color: #616161
  .img
    width: 100%
</style>
