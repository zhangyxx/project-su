<template>
    <div>
        <header>
            <span @click="back"> < </span>
            <ul>
                <router-link tag="li" to="./Mynews"> 
                        <li>进度查询</li>
                </router-link>
                <li class="active">还款提醒</li>
                <router-link tag="li" to="./tongzhi">
                         <li>通知</li>
                </router-link>
            </ul>
            <p></p>
        </header>
        <article>
            <div>
                 <p>
                您好<span>2014-02-19 11.20</span>
            </p>
            <p>
                你有一笔借款马上到期，不要逾期哦
            </p>
            </div>
        </article>
         <article>
            <div>
                 <p>
                您好<span>2014-02-19 11.20</span>
            </p>
            <p>
                你有一笔借款马上到期，不要逾期哦
            </p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.push('./Myindex');
        }
    }
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
            height:1.066667rem /* 80/75 */ /* 40/75 */;
            width: 100%;
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: .666667rem /* 50/75 *//* 20/75 */;
                height: 1.066667rem /* 80/75 */;
                line-height: .666667rem /* 50/75 */ /* 40/75 */;
                margin-top: .266667rem /* 20/75 */;
                p{
                    font-size: .373333rem /* 28/75 */;
                    color: #4c4c4c;
                    display: flex;
                    span{
                        margin-left: 4.666667rem /* 350/75 */;
                    }
                }
            }
        }
</style>
