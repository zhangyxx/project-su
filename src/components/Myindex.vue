<template>
    <div class="index" style="margin-bottom:60px">
        <!-- <Myfooter /> -->

        <nav class="nav_one">
            <div>
                <img src="@/assets/images/企业主贷.png" alt="">
            </div>
            <p>首页</p>
            <div>
                <img src="@/assets/images/消息.png" alt="">
            </div>
        </nav>
        <swiper class="banner" :options="swiperOption" ref="mySwiper" @click="swiperClick">
            <!-- slides -->
            <swiper-slide>
                <img src="@/assets/images/1.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/2.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/3.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/4.jpg">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            <!-- <div class="swiper-pagination"></div> -->
        </swiper>

        <div class="nav_two">
            <dl>
                <dt>
                    <img src="@/assets/images/进度查询.png" alt="">
                </dt>
                <dd>进度查询</dd>
            </dl>
            <dl>
                <dt>
                    <img src="@/assets/images/速贷排行.png" alt="">
                </dt>
                <dd>速贷排行</dd>
            </dl>
            <dl>
                <dt>
                    <img src="@/assets/images/还款提醒.png" alt="">
                </dt>
                <dd>还款提醒</dd>
            </dl>
        </div>

        <p class="p_one pclick_one">借现金 <span class="span_one">更多></span></p>

        <swiper class="nav_three" :options="swiperOption_one" ref="_one" @click="swiperClick">
            <!-- slides -->
            <swiper-slide>
                <img src="@/assets/images/1.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/2.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/3.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/4.jpg">
            </swiper-slide>
        </swiper>

        <p class="p_one pclick_two">还信用卡 <span class="span_two">更多></span></p>

        <swiper class="nav_three" :options="swiperOption_one" ref="_one" @click="swiperClick">
            <!-- slides -->
            <swiper-slide>
                <img src="@/assets/images/1.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/2.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/3.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/4.jpg">
            </swiper-slide>
        </swiper>

        <div class="nav_three">
            <dl>
                <dt>
                    <img src="@/assets/images/学生贷.png" alt="">
                </dt>
                <dd>学生贷</dd>
            </dl>
            <dl>
                <dt>
                    <img src="@/assets/images/工薪贷.png" alt="">
                </dt>
                <dd>工薪贷</dd>
            </dl>
            <dl>
                <dt>
                    <img src="@/assets/images/企业主贷.png" alt="">
                </dt>
                <dd>企业主贷</dd>
            </dl>
        </div>

        <div class="advisory">

            <p class="p_one pclick_three">咨询 <span class="span_three">更多></span></p>

            <dl class="dl">
                <dt>
                    <img src="@/assets/images/5.jpg" alt="">
                </dt>
                <dd>
                    <h4>这是一个无耻的标题党</h4>
                    <p>这是一段无耻标题党下的无耻的内容</p>
                </dd>
            </dl>

            <div class="foot">
                <dl>
                    <dt>
                        <img src="@/assets/images/已看.png" alt="">
                    </dt>
                    <dd>
                        1234
                    </dd>
                </dl>
                 <dl>
                    <dt>
                        <img src="@/assets/images/收藏1.png" alt="">
                    </dt>
                    <dd>
                        1234
                    </dd>
                </dl>
                <span>
                    30分钟前
                </span>
            </div>

            <dl class="dl">
                <dt>
                    <img src="@/assets/images/6.jpg" alt="">
                </dt>
                <dd>
                    <h4>这是一个无耻的标题党</h4>
                    <p>这是一段无耻标题党下的无耻的内容</p>
                </dd>
            </dl>

            <div class="foots">
                <dl>
                    <dt>
                        <img src="@/assets/images/已看.png" alt="">
                    </dt>
                    <dd>
                        1234
                    </dd>
                </dl>
                 <dl>
                    <dt>
                        <img src="@/assets/images/收藏1.png" alt="">
                    </dt>
                    <dd>
                        1234
                    </dd>
                </dl>
                <span>
                    2018-10-12
                </span>
            </div>

        
        </div>

        <div class="more">查看更多</div>
    </div>
</template>

<script>
import Myfooter from '@/components/Myfooter.vue'
export default {
    components:{
        Myfooter
    },
    data(){
        return {
            srcc:['@/assets/images/1.jpg','@/assets/images/2.jpg','@/assets/images/3.jpg','@/assets/images/4.jpg'],
            swiperOption: {
                loop: true,
                // autoplay: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            pagination: {
            el: '.swiper-pagination',
            },
                        // some swiper options/callbacks
                        // 所有的参数同 swiper 官方 api 参数
                        // ...
                    },
            swiperOption_one:{
                loop:true,
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                        }
                }
            },
            computed: {
            swiper() {
                // 然后你就可以使用this的swiper对象去做你想做的事了
                return this.$refs._one.swiper
            }
            },
    methods: {
        swiperClick(s){
            // console.log(s);
        },
    },
}
</script>
<style scoped lang="less">
.banner{
    width: 100%;
    img{
        width: 100%;
        display: block;
    }
}
.nav_one{
    height: 1.3333rem;
    display: flex;
    background-color:rgb(47, 72, 100);
    align-items: center;
    text-align: center;
    p{
        flex: 8;
        font-size: 0.4rem;
        color: white;
        font-weight: bolder;
    }
    div{
        flex: 1;
        height: 0.6667rem;
        img{
            width: 80%;
        }
    }
}
.nav_two{
    display: flex;
    overflow: hidden;
    dl{
        flex: 1;
        text-align: center;
        dt{
            img{
                margin: 0.1333rem auto;
                width: 80%;
                height: 80%;
            }
        }
        dd{
            font-size: 0.4rem;
            line-height: 30px;
        }
    }
   
}
    .nav_three{
        display: flex;
    overflow: hidden;
    dl{
        flex: 1;
        text-align: center;
        dt{
            img{
                margin: 0.1333rem auto;
                width: 50%;
                height: 50%;
            }
        }
        dd{
            font-size: 0.4rem;
            line-height: 30px;
        }
    }
}
.advisory{
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;

    .pclick_three{
    color: rgb(141, 129, 129);
    }
    .dl{
        display: flex;
        dt{
            flex: 3;
            text-align: center;
            img{
                width: 70%;
                margin: 5px 0;
            }
        }
        dd{
            h4{
                font-size: 0.4rem;
                margin-bottom: 10px;
            }
            flex: 7;
        }
    } 
    .foot{
        overflow: hidden;
        dl{
            display: flex;
            align-items: center;
            margin-left: 10px;
            float: left;
            dt{
                float: left;
                img{
                    width: 70%;
                }
            }
            dd{
                float: right;
                line-height: 0.5333rem;
            }
        }
        span{
            display: block;
            float: right;
            line-height: 0.5333rem;
            margin-right: 10px;
        }
    }
    .foots{
        overflow: hidden;
        dl{
            display: flex;
            align-items: center;
            margin-left: 10px;
            float: left;
            dt{
                float: left;
                img{
                    width: 70%;
                }
            }
            dd{
                float: right;
                line-height: 0.5333rem;
            }
        }
        span{
            display: block;
            float: right;
            line-height: 0.5333rem;
            margin-right: 10px;
        }
    }


}

.p_one{
    line-height: 0.8rem;
    font-size: 0.4rem;
    color: blue;
    margin: 0.1333rem 0;
    border-bottom: 2px solid #ddd;
    span{
        float: right;
        margin-right: 0.1333rem;
        font-size: 0.36rem;
        color: #ddd;
    }
}
.nav_three{
    width: 100%;
img{
    width: 100%;
    display: block;
}
    }
.more{
    color: #808080;
    font-size: 0.3733rem;
    line-height: 0.6667rem;
    text-align: center;
}
</style>
