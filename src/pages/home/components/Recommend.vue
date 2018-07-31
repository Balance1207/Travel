<template>
    <div>
      <div class="title">
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
        <span class="title-desc">热门推荐</span>
      </div>
      <ul>
        <li class="item border-bottom"
            v-for="item of recommendList"
            :key="item.id"
        >
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '奇妙的海底世界，梦幻的蓝色王国。'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
        title: '成都熊猫基地',
        desc: '无关黑与白，不分胖与瘦。熊猫！熊猫！'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/ed/edd4063a442f30c1a3.img.jpg_200x200_724f9e6a.jpg',
        title: '天堂岛海洋公园',
        desc: 'Paradise Island Ocean Park'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
        title: '青城山',
        desc: '世界文化遗产，绝顶秀美及幽深。'
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
    overflow: hidden
    display: flex
    height: 1.9rem
    padding: .1rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .25rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
