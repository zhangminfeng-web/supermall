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

                if(this.probeType === 2 || this.probeType === 3){
                    //监听滚动位置
                    this.scroll.on("scroll",(pos) => {
                        this.$emit("scroll",pos);
                    });
                }

                if(this.pullUpLoad){
                    //监听上拉加载更多
                    this.scroll.on("pullingUp",() => {
                        this.$emit("pullingUp");
                    });
                }

            })
        },
        methods:{
            backTop(x,y,time=500){
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            finishPullUp(){
                this.scroll.finishPullUp();
            },
            refreshScroll(){
                this.scroll && this.scroll.refresh();
            },
            getScrollY(){
                return this.scroll? this.scroll.y:0
            }
        }
    }
</script>

<style scoped>

</style>