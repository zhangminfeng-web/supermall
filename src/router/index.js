import Vue from "vue";
import VueRouter from "vue-router";

//安装vue-router
Vue.use(VueRouter);

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

//创建router实例
const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:() => import("views/home/Home")
    },
    {
        path:"/category",
        component:() => import("views/category/Category")
    },
    {
        path:"/profile",
        component:() => import("views/profile/Profile")
    },
    {
        path:"/shopcart",
        component:() => import("views/shopcart/Shopcart")
    },
    {
        path:"/detail/:iid",
        component:() => import("views/detail/Detail")
    }
];

const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;