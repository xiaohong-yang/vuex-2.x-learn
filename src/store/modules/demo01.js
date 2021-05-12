const state = {
    count: 0
}
// 只有mutations中定义的函数，才有权利修改state中的数据
const mutations = {
    add(state) {
        // // 不要在 mutations 函数中，执行异步操作
        // setTimeout(() => {
        //     // 变更状态
        //     state.count++
        // }, 1000)

        // 变更状态
        state.count++
    },
    addN(state, step) {
        // 变更状态
        state.count += step
    },
    reduce(state) {
        // 变更状态
        state.count--
    },
    reduceN(state, step) {
        // 变更状态
        state.count -= step
    }
}
const actions = {
    addAsync(context) {
        setTimeout(() => {
            // 在actions中，不能直接修改state中的数据
            // 必须通过context.commit()触发某个mutation才行
            context.commit('add')
        }, 1000)
    },
    addNAsync(context, step) {
        setTimeout(() => {
            context.commit('addN', step)
        }, 1000)
    },
    reduceAsync(context) {
        setTimeout(() => {
            context.commit('reduce')
        }, 1000)
    },
    reduceNAsync(context, step) {
        setTimeout(() => {
            context.commit('reduceN', step)
        }, 1000)
    },
}
const getters = {
    showNum (state) {
        return '当前最新的数量是【' + state.count + '】'
    }
}
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    mutations,
    actions,
    getters
}
