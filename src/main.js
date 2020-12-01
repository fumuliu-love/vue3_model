// 完整引入 Element-Plus
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { router } from './routers/index.js'
import { store } from './store/index.js'

// 引入 Element-Plus
// import './element/index.js'


createApp(App)
.use(router)
.use(store)
.use(ElementPlus, { size: 'small', zIndex: 3000 })
.mount('#app')
