// 创建一个路由器 并暴露出去

// 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能呈现的组件
import Home from '@/components/Home.vue'
import New from '@/components/New.vue'
import About from '@/components/About.vue'

// 创建路由器
const router=createRouter({
    history:createWebHistory(), //路由器的工作模式
    routes:[// 一个一个的工作规则
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:New
        },
        {
            path:'/about',
            component:About
        }
    ]
})

// 暴露出去 router
export default router