<template>
    <div>
        <div class="wrapper">
            <div class="content">
                <ul>
                    <li>选择1</li>
                    <li>选择2</li>
                    <li>选择3</li>
                    <li>选择4</li>
                    <li>选择5</li>
                    <li>选择6</li>
                    <li>选择7</li>
                    <li>选择8</li>
                    <li>选择9</li>
                    <li>选择10</li>
                    <li>选择11</li>
                    <li>选择12</li>
                    <li>选择13</li>
                    <li>选择14</li>
                    <li>选择15</li>
                    <li>选择16</li>
                    <li>选择17</li>
                    <li>选择18</li>
                    <li>选择19</li>
                    <li>选择20</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";

    export default {
        name: "Category",
        data(){
            return {
                scroll:null
            }
        },
        mounted() {
            this.scroll = new BScroll(document.querySelector(".wrapper"),{
                probeType:3,
                pullUpLoad:true,  //允许上拉加载更多事件的触发
            });

            this.scroll.on("scroll",(pos) => {
                console.log(pos);
            });

            this.scroll.on("pullingUp",() => {
                console.log("上拉加载更多");
                this.scroll.finishPullUp();
            });

        }
    }
</script>

<style scoped>
    .wrapper{
        height:150px;
        overflow-y: scroll;
        background:#e5e5e5;
    }
</style>