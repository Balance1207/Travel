<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div class="item-content">
        <div class="item-info">
          {{ item.content }}
          <span class="item-subdesc">
            {{ item.subdesc }}
          </span>
        </div>
        <div class="item-price">
          ¥
          <em class="item-price-num">{{ item.price }}</em>
          <span class="item-ticket-numword">起</span>
        </div>
      </div>
      <!--<div-->
        <!--class="item-children"-->
        <!--v-if="item.children"-->
      <!--&gt;-->
        <!--<detail-list :list="item.children"></detail-list>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item
    border-bottom: .2rem solid #f5f5f5
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-content
    position: relative
    padding: 0.28rem 0 0.28rem 0.1rem
    .item-info
      display: -webkit-box
      text-overflow: ellipsis
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      overflow: hidden
      font-size: .3rem
      line-height: .5rem
      padding: 0 .05rem 0 .2rem
      margin-right: 2.2rem
      .item-subdesc
        color: #999
        font-size: .16rem
    .item-price
      position: absolute
      top: .5rem
      right: .28rem
      color: #ff9800
      font-size: .24rem
      line-height: .5rem
      .item-price-num
        font-size: .4rem
      .item-ticket-numword
        color: #9e9e9e
  .item-children
    padding: 0 .2rem
</style>
