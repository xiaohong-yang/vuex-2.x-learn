<template>
  <div class="task">
    <a-input placeholder="请输入任务" class="my_ipt"
    :value="inputValue" @change="handleInputValue"/>
    <a-button type="primary" @click="addItemToList">添加事项</a-button>
    <a-list bordered :dataSource="taskList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!--复选框-->
        <a-checkbox :checked="item.done" @change="(e) => {cbStatusChanged(e, item.id)}">{{item.info}}</a-checkbox>
        <!--删除链接-->
        <a slot="actions" @click="removeItem(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
          <!-- 未完成的任务个数 -->
          <span>{{unDoneLength}}条剩余</span>
          <!--操作按钮-->
          <a-button-group>
            <a-button :type="viewKey === 'all' ? 'primary' : 'default'" @click="changeList('all')">全部</a-button>
            <a-button :type="viewKey === 'undone' ? 'primary' : 'default'" @click="changeList('undone')">未完成</a-button>
            <a-button :type="viewKey === 'done' ? 'primary' : 'default'" @click="changeList('done')">已完成</a-button>
          </a-button-group>
          <!-- 把已经完成的任务清空 -->
          <a @click="clean">清除已完成</a>
        </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
  name: 'task',
  data () {
    return {}
  },
  created() {
    // this.$store.dispatch('demo02/getList')                          // 通过调用actions去调用mutations(此处发请求是异步，不能直接调用mutations)
    this.getList()
  },
  computed: {
    ...mapState('demo02', ['inputValue', 'viewKey']),
    ...mapGetters('demo02', ['unDoneLength', 'taskList'])
  },
  methods: {
    ...mapActions('demo02', ['getList', 'setInputValue', 'addListItem', 'removeItemById', 'statusChanged', 'cleanDone', 'changeKey']),
    //监听文本框内容变化
    handleInputValue (e) {
      // this.$store.commit('demo02/setInputValue', e.target.value)    // 直接调用mutations
      // this.$store.dispatch('demo02/setInputValue', e.target.value)  // 通过调用actions去调用mutations
      this.setInputValue(e.target.value)                               // 直接调用actions去调用mutations
    },
    // 向列表中新增 item 项
    addItemToList () {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框内容不能为空！')
      }
      // this.$store.commit('demo02/addListItem')                      // 直接调用mutations
      // this.$store.dispatch('demo02/addListItem')                    // 直接调用actions去调用mutations
      this.addListItem()                                               // 直接调用actions去调用mutations
    },
    // 根据 id 删除 item 项
    removeItem (id) {
      // this.$store.commit('demo02/removeItemById', id)               // 直接调用mutations
      // this.$store.dispatch('demo02/removeItemById', id)             // 直接调用actions去调用mutations
      this.removeItemById(id)                                          // 直接调用actions去调用mutations
    },
    // 监听复选框选中状态变化的事件
    cbStatusChanged (e, id) {
      // 通过e.target.checked可以接受到最新的选中状态
      const param = {
        checked: e.target.checked,
        id: id
      }
      // this.$store.commit('demo02/statusChanged', param)              // 直接调用mutations
      // this.$store.dispatch('demo02/statusChanged', param)            // 直接调用actions去调用mutations
      this.statusChanged(param)                                         // 直接调用actions去调用mutations
    },
    // 清除已完成的任务
    clean () {
      // this.$store.commit('demo02/cleanDone')                         // 直接调用mutations
      // this.$store.dispatch('demo02/cleanDone')                       // 直接调用actions去调用mutations
      this.cleanDone()                                                  // 直接调用actions去调用mutations
    },
    // 修改页面上展示的列表数据
    changeList (key) {
      // this.$store.commit('demo02/changeKey', key)                    // 直接调用mutations
      // this.$store.dispatch('demo02/changeKey', key)                  // 直接调用actions去调用mutations
      this.changeKey(key)                                               // 直接调用actions去调用mutations
    }
  }
}
</script>

<style>
  .task {
    padding: 10px;
  }

  .task .my_ipt {
    width: 500px;
    margin-right: 10px;
  }

  .task .dt_list {
    width: 500px;
    margin-top: 10px;
  }

  .task .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
