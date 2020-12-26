<template>
    <div id="home">
        <!--navbar模块-->
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
        <!--tabControl模块-->
        <tab-control
            class="tab-control-01"
            :titles="['流行','新款','精选']"
            @tabControlClick="tabControlClick"
            ref="tabcontrol1"
            v-show="isSwiperShow"
        ></tab-control>
        <!--页面区域滚动模块-->
        <scroll-view
            class="home-scroll"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore"
        >
            <!--轮播图模块-->
            <home-swiper :banners="banners" @loadSwiperIMg="loadSwiperIMg"></home-swiper>
            <!--推荐信息模块-->
            <recommend-view :recommends="recommends"></recommend-view>
            <!--feature模块-->
            <feature-view></feature-view>
            <!--tabControl模块-->
            <tab-control
                class="tab-control"
                :titles="['流行','新款','精选']"
                @tabControlClick="tabControlClick"
                ref="tabcontrol2"
                :class="{isSwriperFixed:isSwiperShow}"
            ></tab-control>
            <!--商品展示模块-->
            <goods-list :goods="showGoods"></goods-list>
        </scroll-view>

        <!--返回顶部模块-->
        <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>

    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabcontrol/TabControl";
    import GoodsList from "components/content/goods/GoodsList";
    import ScrollView from "components/common/scroll/Scroll";
    import BackTop from "components/content/backTop/BackTop";

    import HomeSwiper from "./childComponents/HomeSwiper";
    import RecommendView from "./childComponents/RecommendView";
    import FeatureView from "./childComponents/FeatureView";

    import {
        getHomeData,
        getHomeGoods
    } from "network/home";
    import {debounce} from "common/common";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            ScrollView,
            BackTop
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        data(){
            return {
                banners:[],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                },
                currentType:'pop',
                isShowBackTop:false,
                isSwiperShow:false,
                currentSwiperOffset:0,
                saveY:0
            }
        },
        created() {
            //1.请求多个数据
            this.getHomeData();

            //2.请求商品数据
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        mounted() {
            let refresh = debounce(this.$refs.scroll.refreshScroll,50);
            //接收并监听事件总线中的每个图片加载完成事件
            this.$bus.$on("emitLoadImg",() => {
                refresh();
            });
        },
        activated() {
            this.$nextTick(() => {
                this.$refs.scroll.refreshScroll();
                this.$refs.scroll.backTop(0,this.saveY,0);
            })
        },
        deactivated() {
            this.saveY = this.$refs.scroll.getScrollY();
        },
        methods:{
            /**
             * 时间监听相关方法
             */
            tabControlClick(index){
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break;
                }
                this.$refs.tabcontrol1.currentIndex = index;
                this.$refs.tabcontrol2.currentIndex = index;
            },
            backTopClick(){
                this.$refs.scroll.backTop(0,0,700);
            },
            contentScroll(pos){
                //1.点击返回顶部按钮的显示和隐藏
                this.isShowBackTop = (-pos.y) > 1000;

                //2.tabControl模块的显示和隐藏["流行","新款","精选"]
                this.isSwiperShow = (-pos.y) > this.currentSwiperOffset;
            },
            loadMore(){
                this.getHomeGoods(this.currentType);
            },
            loadSwiperIMg(){
                //获取tabControl的offsetTop偏移量位置
                //所有的组件都有一个属性“$el”:用于获取组件中的元素
                this.currentSwiperOffset = this.$refs.tabcontrol2.$el.offsetTop;
            },
            /**
             * 网络请求相关方法
             */
            getHomeData(){
                getHomeData().then(res => {
                    this.banners = res.data.data.banner.list;
                    this.recommends = res.data.data.recommend.list;
                });
            },
            getHomeGoods(type){
                let page = this.goods[type].page + 1;
                getHomeGoods(type,page).then(res => {
                    this.goods[type].list.push(...res.data.data.list);
                    this.goods[type].page += 1;
                    this.$refs.scroll.finishPullUp();
                })
            }
        }
    }
</script>

<style scoped>
    #home{
        /*padding-top:44px;*/
        height:100vh;
        position:relative;
    }

    .home-nav{
        background:var(--color-tint);
        color:#fff;
        position:relative;
        z-index:10;
    }

    /*.tab-control{
        !*这个属性特性：查看day07-项目笔记*!
        position: sticky;
        top:44px;
        z-index:8;
    }*/

    .home-scroll{
        position: absolute;
        right:0;
        left:0;
        top:44px;
        bottom:49px;
    }

    .tab-control-01{
        position:relative;
        z-index:10;
    }
</style>