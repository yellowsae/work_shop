import { createStore } from 'vuex'

const store = createStore({
  state: {
    // 数据
    username: 'zs'
  },
  getters: {
    // vuex的计算属性
    newName (state) {
      // 类似计算属性
      return state.username + '!!!'
    }
  },
  mutations: {
    // 改数据函数
    updateName (state) {
      state.username = 'ls'
    }
  },
  actions: {
    // 请求数据函数
    updateName (ctx) {
      // 发送请求
      setTimeout(() => {
        ctx.commit('updateName')
      }, 2000)
    }
  },
  modules: {
    // 分模块
  }
})

export default store
