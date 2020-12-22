<template>
    <div class="tab-bar-time" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="itemFontStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            fontStyle:{
                type:String,
                default:"#FF5777"
            }
        },
        computed:{
            isActive(){
                //判断当前处在活跃的路由是否包含该组件的映射的path
                return this.$route.path.indexOf(this.path) !== -1;
            },
            itemFontStyle(){
                //判断当前路由是否属于活跃状态，并返回样式结果
                return this.isActive ? {color:this.fontStyle}:{}
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-time{
        flex:1;
        height:49px;
        text-align: center;
        font-size:14px;
    }

    .tab-bar-time img{
        width:24px;
        height:24px;
        margin-top:4px;
        vertical-align: middle;
    }
</style>