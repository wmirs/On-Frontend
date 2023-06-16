import {createRouter, createWebHashHistory} from 'vue-router'

// 定义路由 & 配置路由
const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import('../pages/login/login.vue')
    }
]
// 创建实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router