<template>
    <div class="warp">
        <ul class="minnav">
            <li>全部</li>
            <li>借现金</li>
            <li>信用卡</li>
        </ul>
        
    </div>



</template>

<script>
export default {

}
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .warp{
        width: 100%;
        height: 100%;
        .minnav{
            display: flex;
            width: 5.96rem;
            height: 0.6667rem;
            border-radius: 50%;
            margin: 0 auto;
            li{
                flex: 1;
                
            }
        }

    }
</style>
