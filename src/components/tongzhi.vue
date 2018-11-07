<template>
    <div>
         <header>
            <span @click="back"> < </span>
            <ul>
                <router-link tag="li" to="./Mynews"> 
                        <li>进度查询</li>
                </router-link>
                <router-link tag="li" to="./huankuan2">
                            <li>还款提醒</li>
                </router-link>
                         <li class="active">通知</li>
            </ul>
            <p></p>
        </header>
        <article>
            <h1>主题名</h1>
            <img src="../assets/images/2.jpg" alt="">
            <p>活动简介哈哈哈哈哈哈哈哈哈哈哈哈好</p>
        </article>
        <article>
            <h1>主题名</h1>
            <img src="../assets/images/3.jpg" alt="">
            <p>活动简介哈哈哈哈哈哈哈哈哈哈哈哈好</p>
        </article>
        <article>
            <h1>主题名</h1>
            <img src="../assets/images/4.jpg" alt="">
            <p>活动简介哈哈哈哈哈哈哈哈哈哈哈哈好</p>
        </article>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.push('./Myindex')
        }
    }
}
</script>
<style lang="less">
         header{
            display: flex;
            width:100%;
            height:1.28rem /* 96/75 */ /* 9/75 */;
            background: #1e2e45;
            justify-content: space-around;
            align-items: center;
            color: #ffffff;
            span{
                font-size: .666667rem /* 50/75 */ /* 30/75 */;
            }
            ul{
                display: flex;
                width: 6rem /* 450/75 */;
                height: .666667rem /* 50/75 */;
                background: #3e4d63;
                border-radius: .266667rem /* 20/75 */ /* 10/75 */;
                justify-content: center;
                align-items: center;
                li{
                    flex: 1;
                    text-align: center;
                    font-size: .213333rem /* 16/75 */;
                    color: #8895a8;
                    height: 100%;
                    line-height: .666667rem /* 50/75 */;
                }
            }
              .active{
             background: #35c583;
                    color: #ffffff;
                }
        }
        article{
            display: flex;
            flex-direction: column;
            h1{
                font-size: .4rem /* 30/75 */;
                text-align: center;
                margin-top: .266667rem /* 20/75 */;
            }
            img{
                width: 100%;
                height:5.333333rem /* 400/75 */ /* 100/75 */;
            }
            p{
                padding-top: .4rem /* 30/75 */;
                text-align: center;
            }
        }
</style>
