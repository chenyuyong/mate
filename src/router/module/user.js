import login from "../../view/user/login.vue";
import register from "../../view/user/register.vue";
 
// 在模块化里以对象的形式将我们注册的路由抛出
export default [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];