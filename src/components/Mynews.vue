<template>
    <div>
        <header>
            <span @click="goback"> < </span>
            <ul>
                <li class="active">进度查询</li>
                <li>还款提醒</li>
                <li>通知</li>
            </ul>
            <p></p>
        </header>
        <article>
            <div class="top">
                <dl>
                    <dt>
                        <img src="../assets/images/6.jpg" alt="">
                    </dt>
                    <dd>
                        <h3>屌丝贷</h3>
                        <p>产品：屌丝贷</p>
                        <div>
                            <p>借款金额：1200元<span>审核中</span></p>
                        </div>
                        <h6>借款期限：60天</h6>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                查看详情》
            </div>
        </article>
         <article>
            <div class="top">
                <dl>
                    <dt>
                        <img src="../assets/images/6.jpg" alt="">
                    </dt>
                    <dd>
                        <h3>屌丝贷</h3>
                        <p>产品：屌丝贷</p>
                        <div>
                            <p>借款金额：1200元<span>待放款</span></p>
                        </div>
                        <h6>借款期限：60天</h6>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                查看详情》
            </div>
        </article>
         <article>
            <div class="top">
                <dl>
                    <dt>
                        <img src="../assets/images/6.jpg" alt="">
                    </dt>
                    <dd>
                        <h3>屌丝贷</h3>
                        <p>产品：屌丝贷</p>
                        <div>
                            <p>借款金额：1200元<span>还款中</span></p>
                        </div>
                        <h6>借款期限：60天</h6>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                查看详情》
            </div>
        </article>
         <article>
            <div class="top">
                <dl>
                    <dt>
                        <img src="../assets/images/6.jpg" alt="">
                    </dt>
                    <dd>
                        <h3>屌丝贷</h3>
                        <p>产品：屌丝贷</p>
                        <div>
                            <p>借款金额：1200元<span>已完成</span></p>
                        </div>
                        <h6>借款期限：60天</h6>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                查看详情》
            </div>
        </article>
         <article>
            <div class="top">
                <dl>
                    <dt>
                        <img src="../assets/images/6.jpg" alt="">
                    </dt>
                    <dd>
                        <h3>屌丝贷</h3>
                        <p>产品：屌丝贷</p>
                        <div>
                            <p>借款金额：1200元<span>审核未通过</span></p>
                        </div>
                        <h6>借款期限：60天</h6>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                查看详情》
            </div>
        </article>
        <footer>
            END
        </footer>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.back();
        }
    }
}
</script>
<style lang="less" scoped>
div{
    background: #cccccc;
}
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
                .active{
                    background: #35c583;
                    color: #ffffff;
                }
            }
        }
             article{
                // height: 1.2rem /* 90/75 */;
                width: 100%;
                background: #ffffff;
                .bottom{
                    height: .8rem /* 60/75 */;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    margin-right: .266667rem /* 20/75 */;
                    color: #999999;
                    font-size: .266667rem /* 20/75 */;
                    background: #ffffff;
                }
                .top{
                    background: #ffffff;
                    width: 9.2rem /* 690/75 */;
                    height: 2.666667rem /* 200/75 */;
                    border-bottom: 1px solid #f0f0f0;
                    margin: .266667rem auto;
                    dl{
                        display: flex;
                        dt{
                            img{
                                width: 1.2rem /* 90/75 */;
                                height: 1.2rem /* 90/75 */;
                            }
                        }
                        dd{
                            margin-left: .266667rem /* 20/75 */;
                            h3{
                                color: #4d4d4d;
                                font-size: .373333rem /* 28/75 */;
                            }
                            p{
                                font-size: .346667rem /* 26/75 */;
                                color: #666666;
                                margin-top: .293333rem /* 22/75 */;
                            }
                            div{
                                display: flex;
                                background: #ffffff;
                                span{
                                    color: #333333;
                                    font-size: .373333rem /* 28/75 */;
                                    margin-left: 3.106667rem /* 233/75 *//* 200/75 */;
                                }
                            }
                            h6{
                                font-size: .293333rem /* 22/75 */;
                                color: #666666;
                                margin-top: .293333rem /* 22/75 */;
                            }
                        }
                    }
                }
            }
            footer{
                height: .946667rem /* 71/75 */;
                background: #f5f5f5;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #767676;
                font-size: .226667rem /* 17/75 */;
            }
</style>

