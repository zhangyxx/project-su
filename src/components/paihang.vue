<template>
<div class="ranking">
    <nav class="nav_one">
        <span class="fa fa-chevron-left"></span>
        速贷排行
    </nav>
    <div class="nav_two">
        <ul>
            <li class="active">成功率</li>
            <li>放宽速度</li>
            <li>货代利息</li>
            <li>最高利息</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.ranking{
    background-color: rgb(33, 71, 114);
    .nav_one{
        line-height: 0.8333rem;    
        text-align: center;
        color: white;
        font-size: 16px;
        span{
            float: left;
            line-height: 0.8333rem;
            padding-left: 0.3333rem;
        }
    }
    .nav_two{
        ul{
            display: flex;
            text-align: center;
            align-items: center;
            li{
                flex: 1;
                line-height: 1.3333rem;
                color: white;
            }
            .active{
                border-bottom: 3px solid greenyellow;
                color: greenyellow;
            }
        }
    }
}

</style>
