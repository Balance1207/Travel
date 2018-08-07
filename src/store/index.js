import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // key-value一样可简化
  state: state,

  // 过程里没有任何异步操作，
  // 不是批量的数据操作，
  // 且操作非常简单，没必要去Actions里做一个转发。
  // 可以直接mutations。
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },

  // key-value一样可简化
  mutations: mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
