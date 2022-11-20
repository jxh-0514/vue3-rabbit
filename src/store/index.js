import { createStore } from 'vuex'

// 使用vuex-persistedstate插件来进行持久化
import createPersistedstate from 'vuex-persistedstate'

// 导入user cart category模块
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  // 默认存储在localStorage中
  // key 是存储数据键名
  // paths是存储state中那些数据，如果是模块下具体的数据需要加上模块名称，如user.token
  // 修改state后触发才可以看到本地数据的变化
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart', 'category']
    })
  ]
})



// 创建vuex仓库并导出
// export default createStore({
//   // 数据
//   state: {
//     username: 'zs12'
//   },
//   // vuex计算属性
//   getters: {
//     newName(state) {
//       return state.username + '!!!'
//     }
//   },
//   // 改数据函数
//   mutations: {
//     updateName(state) {
//       state.username = 'ls'
//     }
//   },
//   // 请求数据函数
//   actions: {
//     updateName(ctx) {
//       // 发请求
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   },
//   // 分模块
//   modules: {
//   }
// })
