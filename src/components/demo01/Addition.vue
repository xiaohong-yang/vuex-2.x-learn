<template>
  <div>
    <!-- 与下面等价 -->
    <h3>当前最新的count值为：{{$store.state.demo01.count}}</h3>
<!--<h3>当前最新的count值为：{{count}}</h3>-->
    <button @click="addBtnHandler1">+1</button>
    <button @click="addBtnHandler2">+N</button>
    <button @click="addBtnHandler3">异步+1</button>
    <button @click="addBtnHandler4">异步+N</button>
    <!-- 与下面等价 -->
    <h3>{{$store.getters["demo01/showNum"]}}</h3>
<!--<h3>{{showNum}}</h3>-->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Addition',
  data () {
    return {
      num: 0
    }
  },
  // 计算属性
  computed: {
    ...mapState('demo01', { count: 'count' }),                       // 获取state中的值
    ...mapGetters('demo01', ['showNum'])                             // 获取getter中的值
  },
  methods: {
    ...mapMutations('demo01', ['add', 'addN']),
    ...mapActions('demo01', ['addAsync', 'addNAsync']),

    addBtnHandler1 () {
      // this.$store.state.demo01.count++                            // 方式1：通过直接改变state中的值(不推荐)
      this.$store.commit('demo01/add')                          // 方式2：通过调用mutations中的方法改变state中的值
      // this.add()                                                  // 方式3：通过调用mutations中的方法改变state中的值
    },
    addBtnHandler2 () {
      // this.$store.state.demo01.count += 3                         // 方式1：通过直接改变state中的值(不推荐)
      this.$store.commit('demo01/addN', 3)               // 方式2：通过调用mutations中的方法改变state中的值
      // this.addN(3)                                                // 方式3：通过调用mutations中的方法改变state中的值
    },
    // count异步+1
    addBtnHandler3 () {
      this.$store.dispatch('demo01/addAsync')                    // 方式1：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
      // this.addAsync()                                              // 方式2：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
    },
    // count异步+N(携带参数)
    addBtnHandler4 () {
      this.$store.dispatch('demo01/addNAsync', 3)         // 方式1：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
      // this.addNAsync(3)                                              // 方式2：异步方式通过调用actions中的方法去改变state中的值(还是触发Mutation的方式间接变更数据)
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
