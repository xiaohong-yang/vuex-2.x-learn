<template>
  <div>
    <h1>第一个例子</h1>
    <div>
      <my-addition></my-addition>
      <p>----------------------------------------------------------</p>
      <my-subtraction></my-subtraction>
    </div>
    <h1>第二个例子</h1>
    <div>
      <my-task></my-task>
    </div>
  </div>
</template>

<script>
import Addition from './demo01/Addition.vue'
import Subtraction from './demo01/Subtraction.vue'
import Task from './demo02/Task.vue'

export default {
  name: 'home',
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
    'my-task': Task
  },
  data () {
    return {

    }
  },
  methods: {
    // a () {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('你好')
    //     }, 1000)
    //   })
    // },
    // async b () {
    //   let res = await this.a()
    //   console.log(res)
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('熊大拿' + res)
    //     }, 5000)
    //   })
    // },
    // c () {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('1111111111')
    //     }, 5000)
    //   })
    // },
    // async d () {
    //   console.log(await this.b())
    //   console.log(await this.c())
    //   console.log('2222222222')
    // }
  },
  mounted() {
    // this.d()
  }
}
</script>

<style>

</style>
