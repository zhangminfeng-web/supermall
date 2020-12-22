<template>
    <tab-bar>
        <tab-bar-item path="/home" fontStyle="#EE6864">
            <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" fontStyle="#EE6864">
            <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shopcart" fontStyle="#EE6864">
            <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" fontStyle="#EE6864">
            <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
            <div slot="item-text">档案</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>