<template>
    <div class="box">
        <header>
            <div @click="back"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div>帮助中心</div>
            <div></div>
        </header>
        <main>
            <div class="fenlei"><p>分类1</p></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            <div class="fenlei"><p>分类2</p></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-down" aria-hidden="true"></i></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-up" aria-hidden="true"></i></div>
            <div class="neirong"><p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p></div>
            <div class="wenti"><p>问题1</p><i class="fa fa-angle-down" aria-hidden="true"></i></div>
        </main>
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
  main {
      .neirong{
          height: 2rem /* 150/75 */;
          width: 100%;
          line-height: .533333rem /* 40/75 */;
          p{
              padding:.266667rem /* 20/75 */;
          }
      }
    .wenti {
      width: 100%;
      height: 1.2rem /* 90/75 */;
      border-bottom: 1px solid #ccc;
      line-height: 1.2rem /* 90/75 */;
      background: #fff;
      p {
        padding-left: 0.333333rem /* 25/75 */;
        display: inline-block;
      }
      i {
        float: right;
        padding-right: 0.333333rem /* 25/75 */;
        line-height: 1.2rem /* 90/75 */;
      }
    }
    .fenlei {
      height: 0.88rem /* 66/75 */;
      line-height: 0.88rem /* 66/75 */;
      width: 100%;
      background: rgb(244, 245, 246);
      p {
        padding-left: 0.333333rem /* 25/75 */;
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
  }
}
</style>
