<template>
    <div>
        <!--navbar模块-->
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
        <!--轮播图模块-->
        <home-swiper :banners="banners"></home-swiper>
        <!--推荐信息模块-->
        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComponents/HomeSwiper";
    import RecommendView from "./childComponents/RecommendView";

    import {getHomeData} from "network/home";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView
        },
        data(){
            return {
                banners:[],
                recommends:[]
            }
        },
        created() {
            getHomeData().then(res => {
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            });
        }
    }
</script>

<style scoped>
    .home-nav{
        background:var(--color-tint);
    }
</style>