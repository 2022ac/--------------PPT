// 引入createApp 创建应用
import { createApp } from 'vue'
import {createPinia} from 'pinia'
// 引入App 根组件
import App from './App.vue'
// 引入路由器
import router from '@/router'
// 创建一个应用
const app=createApp(App)
// 创建pinia
const pinia=createPinia()
// 使用路由器
app.use(router)
app.use(pinia)
//挂载整个应用到app容器中
app.mount('#app')
