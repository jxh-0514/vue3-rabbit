// 用户模块
export default {
    // 带命名空间的模块
    namespaced: true,
    // 子模块state建议写成函数
    state() {
        return {
            // 用户信息
            profile: {
                id: '',
                avatar: '',
                nickname: '',
                account: '',
                mobile: '',
                token: ''
            }
        }
    },
    // 修改数据的函数
    mutations: {
        // 修改用户信息，payload就是用户信息对象
        setUser(state, payload) {
            state.profile = payload
        }
    }
}