<template>
    <div class="warp">
        <ul class="minnav">
            <li v-for="(v,i) in arr " :key="i" @click=" tabIndex=i" :class="{activ:tabIndex==i}">{{v}}</li>
            <!-- <li>借现金</li>
            <li>信用卡</li> -->
        </ul>
        <div class="tab1" v-if=" tabIndex==0">

        
        <ul class="subMeau">
            <li v-for="(v,i) in arr1 " :key="i">{{v}}</li>
            <!-- <li>成功率</li>
            <li>放款速度</li>
            <li>贷款利率</li> -->
            <div class=""><img src="../assets/images/cp筛选.png" alt=""></div>
        
        </ul>
        <div class="content">
          <div class="top">
            <div class="left">
              <img src="../assets/images/cp评论-icon.png" alt="">
            </div>
            <div class="zhong">
              <h1>信用钱包<img src="../assets/images/cp卡.png" alt=""></h1>
              <h3>信用钱包</h3>
              <span>成功申请1234次|评论1234次</span>
            </div>
            <div class="right"> 
              <div class="block">
                <el-rate
                v-model="value2"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
              </div>
              <p>成功率</p>
            </div>

          </div>
          <div class="bottom">
            <ul>
              <li>标签</li>
              <li>作业写</li>
              <li>微胖强</li>
              <li>应加强</li>
            </ul>
            <p>产品介绍里面都是内容阿萨德飞规划局快乐自行车请问撒而过就故意开发区啊一个覅飞秋轻微的擦伤预告ii</p>
          </div>

          
        </div>
        <div class="content content1">
          <div class="top">
            <div class="left">
              <img src="../assets/images/cp评论-icon.png" alt="">
            </div>
            <div class="zhong">
              <h1>信用钱包<img src="../assets/images/cp卡.png" alt=""></h1>
              <h3>信用钱包</h3>
              <span>成功申请1234次|评论1234次</span>
            </div>
            <div class="right">
               <div class="block">
                   <el-rate
                   v-model="value3"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
              <p>成功率</p>
            </div>

          </div>
          <div class="bottom">
            <ul>
              <li>标签</li>
              <li>作业写</li>
              <li>微胖强</li>
              <li>应加强</li>
            </ul>
            <p>产品介绍里面都是内容阿萨德飞规划局快乐自行车请问撒而过就故意开发区啊一个覅飞秋轻微的擦伤预告ii</p>
          </div>

          
        </div>

        <div class="content content2">
          <div class="top">
            <div class="left">
              <img src="../assets/images/cp评论-icon.png" alt="">
            </div>
            <div class="zhong">
              <h1>信用钱包<img src="../assets/images/cp卡.png" alt=""></h1>
              <h3>信用钱包</h3>
              <span>成功申请1234次|评论1234次</span>
            </div>
            <div class="right">
              <div class="block">
                   <el-rate
                   v-model="value1"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
              <p>成功率</p>

            </div>

          </div>
          <div class="bottom">
            <ul>
              <li>标签</li>
              <li>作业写</li>
              <li>微胖强</li>
              <li>应加强</li>
            </ul>
            <p>产品介绍里面都是内容阿萨德飞规划局快乐自行车请问撒而过就故意开发区啊一个覅飞秋轻微的擦伤预告ii</p>
          </div>

          
        </div>


        <div class="content content3">
          <div class="top">
            <div class="left">
              <img src="../assets/images/cp评论-icon.png" alt="">
            </div>
            <div class="zhong">
              <h1>信用钱包<img src="../assets/images/cp卡.png" alt=""></h1>
              <h3>信用钱包</h3>
              <span>成功申请1234次|评论1234次</span>
            </div>
            <div class="right">
              <div class="block">
                   <el-rate
                   v-model="value"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
              <p>成功率</p>

             </div>

          </div>
          <div class="bottom">
            <ul>
              <li>标签</li>
              <li>作业写</li>
              <li>微胖强</li>
              <li>应加强</li>
            </ul>
            <p>产品介绍里面都是内容阿萨德飞规划局快乐自行车请问撒而过就故意开发区啊一个覅飞秋轻微的擦伤预告ii</p>
          </div>

          
        </div>
        </div>


        <div class="tab2" v-if=" tabIndex == 1">
          这是借现金页面
        </div>


        <div class="tab3" v-if=" tabIndex == 2" >
                <swiper class="banner" :options="swiperOption" ref="mySwiper" @click="swiperClick">
                  <swiper-slide class="swi-1">
                      <dl>
                        <dt><img src="../assets/images/cp现金.png" alt=""></dt>
                        <dd><h1>省呗</h1></dd>
                        <dd>省呗</dd>
                      </dl>
                      <p class="ping">
                        <a >成功申请1234次</a>
                        <a>评论1234次</a>
                        <a>放款量1234次</a>
                      </p>
                      <div class="block bk1">
                        <el-rate v-model="value1"></el-rate>
                      </div>
                  </swiper-slide>
                  <swiper-slide class="swi-1">
                         <dl>
                        <dt><img src="../assets/images/cp现金.png" alt=""></dt>
                        <dd><h1>省呗</h1></dd>
                        <dd>省呗</dd>
                      </dl>
                      <p class="ping">
                        <a >成功申请1234次</a>
                        <a>评论1234次</a>
                        <a>放款量1234次</a>
                      </p>
                      <div class="block bk1">
                        <el-rate v-model="value1"></el-rate>
                      </div>
                  </swiper-slide>
                  <swiper-slide class="swi-1">
                           <dl>
                        <dt><img src="../assets/images/cp现金.png" alt=""></dt>
                        <dd><h1>省呗</h1></dd>
                        <dd>省呗</dd>
                      </dl>
                      <p class="ping">
                        <a >成功申请1234次</a>
                        <a>评论1234次</a>
                        <a>放款量1234次</a>
                      </p>
                      <div class="block bk1">
                        <el-rate v-model="value1"></el-rate>
                      </div>
                  </swiper-slide>
                   <div class="swiper-pagination"></div>
               </swiper>
        </div>
        <Myfooter></Myfooter>
    </div>



</template>

<script>
import Myfooter from './Myfooter'
export default {
  components:{
    Myfooter
  },
  data() {
    return {
      tabIndex: 0,
      arr: ["全部", "借现金", "信用卡"],
      arr1: ["综合指数", "成功率", "放款速度", "贷款利率"],
      value2: null,
      value: null,
      value1: null,
      value3: null,
      tabIndex: 0,
      show: 2,
      swiperOption: {
        loop: true,
        // autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      // 然后你就可以使用this的swiper对象去做你想做的事了
      return this.$refs._one.swiper;
    }
  },
  methods: {
    swiperClick(s) {
      // console.log(s);
    }
  }
};
</script>


 <style lang="less"  >
* {
  margin: 0;
  padding: 0;
}
.warp {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .minnav {
    display: flex;
    width: 5.96rem;
    height: 0.6667rem;
    border-radius: 0.6667rem;
    margin: 0 auto;
    background-color: #ccc;
    text-align: center;
    line-height: 0.6667rem;
    margin-bottom: 0.1333rem;
    overflow: hidden;
    li {
      flex: 1;
    }
  }
  .subMeau {
    display: flex;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    background: white;
    li {
      flex: 1;
    }
    div {
      background-color: seagreen;
      width: 1.2rem;
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
    }
  }
  .content {
    width: 9.4667rem;
    height: 4.5333rem;
    margin: 0 auto;
    margin-top: 0.24rem;
    border-top: 0.12rem solid red;
    .top {
      width: 100%;
      height: 2.2667rem;
      background-color: #fff;
      display: flex;
      .left {
        margin-top: 0.1333rem;
        flex: 1;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
      .zhong {
        margin-top: 0.1333rem;
        h1 {
          font-size: 22px;
          img {
            margin-left: 10px;
          }
        }
        h3 {
          font-size: 18px;
          line-height: 36px;
        }
        span {
          color: silver;
        }
        flex: 4;
      }
      .right {
        margin-top: 0.1333rem;
        flex: 3;
        p {
          margin-top: 30px;
          margin-left: 50%;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 2.1067rem;
      background-color: white;
      border-top: 1px solid #ccc;
      ul {
        width: 100%;
        height: 32px;
        margin-top: 10px;
        li {
          float: left;
          border-radius: 25px;
          text-align: center;
          line-height: 32px;
          margin: 0 10px;
          padding: 0 10px;
          border: 1px solid red;
          color: red;
        }
        li:nth-child(2) {
          border: 1px solid blue;
          color: blue;
        }
        li:nth-child(3) {
          border: 1px solid orange;
          color: orange;
        }
        li:nth-child(4) {
          border: 1px solid green;
          color: green;
        }
      }
      p {
        margin-top: 10px;
        font-size: 0.2667rem;
        line-height: 0.4rem;
        color: silver;
      }
    }
  }
  .content1 {
    border-top: 0.12rem solid blue;
  }
  .content2 {
    border-top: 0.12rem solid orange;
  }
  .content3 {
    border-top: 0.12rem solid green;
  }
  .activ {
    background-color: red;
    color: white;
  }

  .tab3 {
    width: 100%;
    height: 100%;
    .banner {
      .swiper-pagination{
        position: fixed;
        bottom:0;
        left:50%;
      }
      .swi-1 {
        width: 100%;
        margin-top: 1.333333rem /* 100/75 */;
        height:100%;
        dl {
          text-align: center;
          margin-top: 25px;
          dt {
            img {
              width: 90px;
              height: 90px;
              border-radius: 50%;
            }
          }
          dd {
            color: #333;
            margin-top: 15px;
            h1 {
              font-size: 24px;
              color: darkcyan;
            }
          }
        }
        .ping {
          width: 100%;
          text-align: center;
          height: 66px;
          a {
            padding: 10px;
            color: darkgray;
            line-height: 66px;
          }
        }
        .bk1{
          text-align: center;
        }
      }
    }
  }
}
</style>
