<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from "components/common/swiper/index";

    export default {
        name: "HomeSwiper",
        data(){
            return {
                isSend:false
            }
        },
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            Swiper,
            SwiperItem,
        },
        methods:{
            imageLoad(){
                if(!this.isSend){
                    this.$emit("loadSwiperIMg");
                    this.isSend = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>