<template>
    <div class="box">
        <header>
            <div @click="back"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div>还款提醒</div>
            <div>修改</div>
        </header>
        <main>
            <div class="item">
                <div>平台</div>
                <div>产品</div>
            </div>
            <div class="item">
                <div>借款金额</div>
                <div>12345元</div>
            </div>
            <div class="item">
                <div>借款期限</div>
                <div>20月</div>
            </div>
            <div class="item">
                <div>借款方式</div>
                <div><i class="fa fa-check-circle-o" aria-hidden="true"></i> 分期还款</div>
            </div>
            <div class="item">
                <div>已还期数</div>
                <div>0期</div>
            </div>
            <div class="item">
                <div>还款日</div>
                <div>每月28号</div>
            </div>
            <div class="item">
                <div>提醒时间</div>
                <div>每月28号&nbsp;&nbsp;&nbsp;12:00</div>
            </div>
            <div class="item">
                <div>还款金额</div>
                <div>12345元</div>
            </div>
            <div class="beizhu">
                <div>备注</div>
                <div>这里是备注不可更改</div>
            </div>
        </main>
        <footer>
            <button class="btn">本期已还</button>
        </footer>
    </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  font-size: 0.4rem /* 30/75 */;
  background: rgb(244, 245, 246);
  footer {
    .btn {
      height: 1.066667rem /* 80/75 */;
      text-align: center;
      line-height: 1.066667rem /* 80/75 */;
      width: 100%;
      font-size: 0.4rem /* 30/75 */;
      color: #fff;
      background: rgb(91, 198, 132);
      position: fixed;
      bottom: 0;
      border: 0;
    }
  }
  main {
    background: #fff;
    .beizhu {
      margin-top: 0.266667rem /* 20/75 */;
      height: 1.133333rem /* 85/75 */;
      line-height: 1.133333rem /* 85/75 */;
      padding-left: 0.266667rem /* 20/75 */;
      display: flex;
      div {
        padding-right: 0.266667rem /* 20/75 */;
        display: inline-block;
      }
    }
    margin-top: 0.266667rem /* 20/75 */;
    .item {
      display: flex;
      div {
        flex: 1;
        height: 1.133333rem /* 85/75 */;
        line-height: 1.133333rem /* 85/75 */;
        border-bottom: 1px solid #ccc;
        i {
          color: green;
        }
      }
      div:nth-child(1) {
        padding-left: 0.266667rem /* 20/75 */;
      }
      div:nth-child(2) {
        padding-right: 0.266667rem /* 20/75 */;
        text-align: right;
      }
    }
  }
  header {
    height: 2.266667rem /* 170/75 */;
    line-height: 2.266667rem /* 170/75 */;
    width: 100%;
    background: rgb(29, 47, 70);
    display: flex;
    div {
      flex: 1;
      color: #fff;
      i {
        padding-left: 0.266667rem /* 20/75 */;
      }
    }
    div:nth-child(2) {
      text-align: center;
    }
    div:nth-child(3) {
      text-align: right;
      padding-right: 0.266667rem /* 20/75 */;
    }
  }
}
</style>
