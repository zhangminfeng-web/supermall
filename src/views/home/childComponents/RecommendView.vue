<template>
    <div class="recommend-view">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="recommend-title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .recommend-view{
        display: flex;
        text-align: center;
        padding:10px 0 20px;
        border-bottom:8px solid #ddd;
        font-size:13px;
    }

    .recommend-item{
        flex: 1;
    }

    .recommend-item img{
        width:65px;
        height:65px;
        margin-bottom:10px;
    }
</style>