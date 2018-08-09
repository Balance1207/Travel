<template>
  <div>
    <weekend-header></weekend-header>
    <weekend-list :list="list"></weekend-list>
  </div>
</template>

<script>
import WeekendHeader from './components/Header'
import WeekendList from './components/List'
import axios from 'axios'
export default {
  name: 'Weekend',
  components: {
    WeekendHeader,
    WeekendList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getWeekendInfo () {
      axios.get('/api/weekend.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.list
      }
    }
  },
  mounted () {
    this.getWeekendInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
