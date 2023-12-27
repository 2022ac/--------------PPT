// 创建一个路由器 并暴露出去

// 引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个一个可能呈现的组件
import Home from '@/pages/Home.vue'
import New from '@/pages/New.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
const router = createRouter({
    history: createWebHistory(), //路由器的工作模式
    routes: [// 一个一个的工作规则
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: New,
            children: [{
                name: 'xiang',
                path: 'detail',
                component: Detail,
                //第一种写法：将路由收到的所有的params参数作为props传给路由组件
                //props:true
                // 第二种写法：函数写法 可以自己决定将什么作为props给路由组件
                props(route) {
                    return route.query
                } // 以后忘记了可以打印出来route 作为参考
                // 第三种写法：对象写法 可以自己决定将什么作为props 传给路由组件
                // props:{

                // }
            }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 暴露出去 router
export default router