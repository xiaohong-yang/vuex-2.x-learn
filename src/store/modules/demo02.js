import axios from 'axios'

const state = {
    // 所有的任务列表
    list: [],
    // 文本框内容
    inputValue: '',
    id: 0,
    viewKey: 'all'
}
const mutations = {
    initList (state, list) {
        state.list = list
        state.id = list.length
    },
    // 为 store 中的 inputValue 赋值
    setInputValue (state, val) {
        state.inputValue = val
    },
    // 添加列表项
    addListItem (state) {
        let item = {
            id: state.id,
            info: state.inputValue.trim(),
            done: false
        }
        state.list.unshift(item)
        state.inputValue = ''
        state.id++
    },
    // 根据id删除对应的任务事项
    removeItemById (state, id) {
        // 根据id查询对应项的索引
        const index = state.list.findIndex(x => x.id === id)
        // 根据索引，删除对应的元素
        if (index !== -1) {
            state.list.splice(index, 1)
        }
    },
    // 根据id改变对应的任务事项状态
    statusChanged (state, param) {
        // 根据id查询对应项的索引
        const index = state.list.findIndex(x => x.id === param.id)
        state.list[index].done = param.checked
    },
    // 清除已完成的任务
    cleanDone (state) {
        state.list = state.list.filter(x => x.done === false)
    },
    // 修改页面上展示的列表数据
    changeKey (state, key) {
        state.viewKey = key
    }
}
const actions = {
    getList (context) {
        axios.get('/demo02_list.json').then(({ data }) => {
            context.commit('initList', data)
        })
    },
    setInputValue (context, val) {
        context.commit('setInputValue', val)
    },
    addListItem (context) {
        context.commit('addListItem')
    },
    removeItemById (context, id) {
        context.commit('removeItemById', id)
    },
    statusChanged (context, param) {
        context.commit('statusChanged', param)
    },
    cleanDone (context) {
        context.commit('cleanDone')
    },
    changeKey (context, key) {
        context.commit('changeKey', key)
    }
}
const getters = {
    // 统计未完成的任务条数
    unDoneLength (state) {
        return state.list.filter(x => x.done === false).length
    },
    taskList (state) {
        if (state.viewKey === 'all') {
            return state.list
        } else if (state.viewKey === 'undone') {
            return state.list.filter(x => x.done === false)
        } else if (state.viewKey === 'done') {
            return state.list.filter(x => x.done === true)
        }
    }
}
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    mutations,
    actions,
    getters
}
