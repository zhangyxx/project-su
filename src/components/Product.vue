<template>
    <div class="warp">
        <ul class="minnav">
            <li>全部</li>
            <li>借现金</li>
            <li>信用卡</li>
        </ul>
        <ul class="subMeau">
            <li>综合指数</li>
            <li>成功率</li>
            <li>放款速度</li>
            <li>贷款利率</li>
        </ul>
        
    </div>



</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        blue(){
            
        }
    }

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
            border-radius:0.6667rem;
            margin: 0 auto;
            background-color: #ccc;
            text-align: center;
            line-height: 0.6667rem;
            margin-bottom: 0.1333rem;
            li{
                flex: 1;

            }
        }
        .subMeau{
            
        }

    }
</style>
