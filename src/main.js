import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式包
import 'normalize.css'
// 公用样式
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).mount('#app')
