import Vue from 'vue'
import Vuex from 'vuex'

import demo01 from './modules/demo01'
import demo02 from './modules/demo02'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        demo01,
        demo02
    }
})
export default store
