<template>
    <div>
        <header>
            <span><</span>
            <ul>
                <li>进度查询</li>
                <li>还款提醒</li>
                <li>通知</li>
            </ul>
            <p></p>
        </header>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
        header{
            display: flex;
            width:100%;
            height:1.28rem /* 96/75 */ /* 9/75 */;
            background: #1e2e45;
            justify-content: space-around;
            align-items: center;
            color: #ffffff;
            ul{
                display: flex;
                width: 6rem /* 450/75 */;
                height: .666667rem /* 50/75 */;
                background: #3e4d63;
                border-radius: .133333rem /* 10/75 */;
                li{
                    width: .346667rem /* 26/75 */;
                    height: 100%;
                }
            }
        }
</style>

