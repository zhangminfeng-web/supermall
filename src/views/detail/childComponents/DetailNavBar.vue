<template>
    <nav-bar>
        <div slot="left" @click="backPath">
            <img class="backImg" src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="center-title">
            <div
                v-for="(item,index) in titles"
                class="title-item"
                :class="{active:currentIndex === index}"
                @click="itemClick(index)"
            >
                {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";

    export default {
        name: "DetailNavBar",
        data(){
            return {
                titles:["商品","参数","评论","推荐"],
                currentIndex:0
            }
        },
        components:{
            NavBar
        },
        methods:{
            itemClick(index){
                this.currentIndex = index;
            },
            backPath(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .center-title{
        display: flex;
        font-size:14px;
    }

    .title-item{
        flex:1;
    }

    .active{
        color:var(--color-high-text);
    }

    .backImg{
        margin-top:13px;
        width:18px;
    }
</style>