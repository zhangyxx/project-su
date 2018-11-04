<template>
    <header>
        <div class="touxiang"></div>
        <div class="name">马杀鸡</div>
        <div class="geren">个人资料</div>
        <div class="fu">&gt;</div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less">
    header{
        height: 2.266667rem /* 170/75 */;
        width: 100%;
        position: relative;
        background: rgb(29, 47, 70);
        line-height: 2.266667rem /* 170/75 */;
        .touxiang{
            width: 1.2rem /* 90/75 */;
            height: 1.2rem /* 90/75 */;
            background: rgb(249, 228, 176);
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto 20px;
        }
        .name,.geren{
            color: #fff;
            margin-left: 22%;
            font-size: .346667rem /* 26/75 */;
            width: 18%;
            display: inline-block;
        }
        .geren{
            position: absolute;
            right: 10%;
        }
        .fu{
            position: absolute;
            right: 5%;
            display: inline-block;
            width: .266667rem /* 20/75 */;
            font-size: .466667rem /* 35/75 */;
            color: #fff;
        }
    }
</style>
