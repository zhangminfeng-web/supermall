<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Bscroll from "better-scroll";

    export default {
        name: "Scroll",
        props:{
            probeType: {
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                scroll:null
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper,{
                    click:true,
                    observeDOM:true,
                    probeType:this.probeType,
                    pullUpLoad:this.pullUpLoad,  //允许上拉加载更多事件的触发
                });

                this.scroll.on("scroll",(pos) => {
                    this.$emit("scroll",pos);
                });

                this.scroll.on("pullingUp",() => {
                    this.$emit("pullingUp");
                });
            })
        },
        methods:{
            backTop(x,y,time=500){
                this.scroll.scrollTo(x,y,time);
            },
            finishPullUp(){
                this.scroll.finishPullUp();
            }
        }
    }
</script>

<style scoped>

</style>