<template>
    <div class="tab-control">
        <div @click="itemClick(index)" class="tab-control-item" v-for="(item,index) in titles" :class="{active:currentIndex == index}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
            return {
                currentIndex:0
            }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index;
                this.$emit("tabControlClick",index);
            }
        }
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        height:40px;
        line-height: 40px;
        text-align: center;
        font-size:15px;
        background:#fff;
    }

    .tab-control-item{
        flex: 1;
    }

    .active{
        color:var(--color-high-text);
    }

    .active span{
        border-bottom:3px solid var(--color-high-text);
    }

    .tab-control-item span{
        padding:5px;
    }
</style>