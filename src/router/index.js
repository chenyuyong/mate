import { createRouter,createWebHashHistory } from 'vue-router'
// 1. 定义路由组件：这里直接用的对象数据，也可以导入其他组件。
const Home = () => import('../view/Home.vue')
const todo = () => import('../view/todo/todo.vue')
const Details = { render(){ return '月影WEB-详情页面'} }
const newAttr = () => import('../view/newAttr.vue')
const family = () => import('../view/family.vue')
const ts = () => import('../view/ts.vue')
const myPromise = () => import('../view/myPromise.vue')

import user from "./module/user";
 
// 2. 定义一些路由：每个路由都需要映射到一个组件。
const routes = [
    { path: '/', component: Home },
    // { path: '/Home', component: Home },
    { path: '/todo', component: todo },
    { path: '/details', component: Details },
    { path: '/newAttr', component: newAttr },
    { path: '/family', component: family },
    { path: '/ts', component: ts },
    { path: '/myPromise', component: myPromise },
    ...user,
]
 
// 3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router