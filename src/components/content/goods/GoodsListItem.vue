<template>
    <div class="goods-list-item">
        <img :src="item.show.img" alt="">
        <div class="goods-item-content">
            <p>{{item.title}}</p>
            <span class="goods-price">{{item.price}}</span>
            <span class="collect">{{item.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            item:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .goods-list-item {
        padding-bottom: 40px;
        position: relative;
    }

    .goods-list-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-item-content {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-item-content p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-item-content .goods-price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-item-content .collect {
        position: relative;
    }

    .goods-item-content .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>