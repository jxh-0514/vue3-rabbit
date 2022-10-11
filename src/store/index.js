import { createStore } from 'vuex'

// 创建vuex仓库并导出
export default createStore({
  // 数据
  state: {
    username: 'zs1'
  },
  // vuex计算属性
  getters: {
    newName(state) {
      return state.username + '!!!'
    }
  },
  // 改数据函数
  mutations: {
    updateName(state) {
      state.username = 'ls'
    }
  },
  // 请求数据函数
  actions: {
    updateName(ctx) {
      // 发请求
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  // 分模块
  modules: {
  }
})
