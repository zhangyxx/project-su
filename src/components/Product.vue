<template>
    <div class="warp">
        <ul class="minnav">
            <li v-for="(v,i) in arr " :key="i" @click=" tabIndex=i" :class="{activ:tabIndex==i}">{{v}}</li>
            <!-- <li>借现金</li>
            <li>信用卡</li> -->
        </ul>
        <ul class="subMeau">
            <li v-for="(v,i) in arr1 " :key="i">{{v}}</li>
            <!-- <li>成功率</li>
            <li>放款速度</li>
            <li>贷款利率</li> -->
        </ul>
        <div class="content">
            <dl>
                <dt><img src="../assets/images/login1.jpg" alt=""></dt>
                <dd><h1>信用钱包</h1><p>信用钱包</p><span>成功申请1234次|评论1234次</span></dd>
            </dl>
            <div class="right">
              <p><img src="../assets/images/cp筛选.png" alt="">
              <img src="../assets/images/cp筛选.png" alt="">
              <img src="../assets/images/cp筛选.png" alt="">
              <img src="../assets/images/cp筛选.png" alt="">
              <img src="../assets/images/cp筛选.png" alt="">
              </p>
              <span>成功率</span>
            </div>
        </div>
        <div class="tag">
          <p><span>HOT</span><span>标签</span><span>标签你你你</span></p>
          <p>产品简介：阿萨德的更改后即可去而一瓶自行车吗都是反环境去啊责任奋斗阿萨德飞规划局是地方法规和健康黄金客户</p>
        </div>
        
    </div>



</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      arr: ["全部", "借现金", "信用卡"],
      arr1: ["综合指数", "成功率", "放款速度", "贷款利率"]
    };
  },
  computed: {
    swiper() {
      // 然后你就可以使用this的swiper对象去做你想做的事了
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {}
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
  }
  .content {
    width: 9.4667rem;
    height: 4.5333rem;
    margin: 0 auto;
    margin-top: 0.24rem;
    border-top: 0.12rem solid red;
    display: flex;
    dl{
      flex: 4;
      display: flex;
        padding:  0.32rem ;
        background: white;
        dt{
          flex: 1;
            width: 1.6rem;
            height: 1.6rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
          flex: 2;

        }
    }
    .right{
      flex: 1;
      p{
        display: flex;
        img{
          flex: 1;
        }
      }
      span{

      }

    }
  }
  .activ {
    background-color: red;
    color: white;
  }
}
</style>
