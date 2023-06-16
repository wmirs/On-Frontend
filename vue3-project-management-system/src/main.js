import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 整个应用支持路由
app.use(router)

app.use(ElementPlus)
app.mount('#app')
