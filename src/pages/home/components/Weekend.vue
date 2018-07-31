<template>
  <div>
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      <span class="title-desc">周末去哪儿</span>
    </div>
    <ul>
      <li class="item"
          v-for="item of recommendList"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
        title: '成都必游TOP10',
        desc: '成都的标志，也是现代人对老成都的记忆'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
        title: '远离烧烤模式',
        desc: '周末还在搓麻将？快出门赏美景'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
        title: '慢游成都最美古镇',
        desc: '撷取一份悠闲，寻觅散落在时光里的幸福'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
        title: '玩转主题乐园',
        desc: '乐园，与青春作伴'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    .title-img
      display: inline-block
      overflow: hidden
      width: .3rem
      height: .3rem
      vertical-align: baseline
  .item
    border-bottom: .1rem solid #eee
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
      .item-img
        width: 100%
    .item-info
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>
