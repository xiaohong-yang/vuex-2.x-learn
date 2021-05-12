<template>
  <div>
    <!-- 与下面等价 -->
<!--<h3>当前最新的count值为：{{$store.state.demo01.count}}</h3>-->
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="reduceBtnHandler1">-1</button>
    <button @click="reduceBtnHandler2">-N</button>
    <button @click="reduceBtnHandler3">异步-1</button>
    <button @click="reduceBtnHandler4">异步-N</button>
    <!-- 与下面等价 -->
<!--<h3>{{$store.getters["demo01/showNum"]}}</h3>-->
    <h3>{{showNum}}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Subtraction',
  data () {
    return {}
  },
  // 计算属性
  computed: {
    ...mapState('demo01', { count: 'count' }),                       // 获取state中的值
    ...mapGetters('demo01', ['showNum'])                             // 获取getter中的值
  },
  methods: {
    ...mapMutations('demo01', ['reduce', 'reduceN']),
    ...mapActions('demo01', ['reduceAsync', 'reduceNAsync']),
    reduceBtnHandler1 () {
      // this.$store.state.demo01.count--                            // 方式1：通过直接改变state中的值(不推荐)
      // this.$store.commit('demo01/reduce')                         // 方式2：通过调用mutations中的方法改变state中的值
      this.reduce()                                                  // 方式3：通过调用mutations中的方法改变state中的值
    },
    reduceBtnHandler2 () {
      // this.$store.state.demo01.count -= 3                         // 方式1：通过直接改变state中的值(不推荐)
      // this.$store.commit('demo01/reduceN', 3)                     // 方式2：通过调用mutations中的方法改变state中的值
      this.reduceN(3)                                           // 方式3：通过调用mutations中的方法改变state中的值
    },
    // count异步-1
    reduceBtnHandler3 () {
      // this.$store.dispatch('demo01/reduceAsync')                  // 方式1：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
      this.reduceAsync()                                             // 方式2：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
    },
    // count异步-N(携带参数)
    reduceBtnHandler4 () {
      // this.$store.dispatch('demo01/reduceNAsync', 3)              // 方式1：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
      this.reduceNAsync(3)                                      // 方式2：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
