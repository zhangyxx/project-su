<template>
    <div class="box">
        <header>
            <div @click="back"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div>收藏</div>
            <div></div>
        </header>
        <nav>
            <div></div>
            <div class="active">产品</div>
            <div></div>
            <div>资讯</div>
            <div></div>
        </nav>
        <main>
            <div class="itme">
                <dl>
                    <dt><div></div></dt>
                    <dd>
                        <div><p>信用钱包</p>
                            <div class="block">
                                <el-rate
                                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </div>
                        <p>信用钱包</p>
                        <p>成功过申请1234次&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;评论1234次<span>成功率</span></p>
                    </dd>
                </dl>
                <ul>
                    <li><p>NEW</p></li>
                    <li><p>标签</p></li>
                    <li><p>标签啊啊</p></li>
                    <li><p>标签啊</p></li>
                </ul>
                <p class="jie">产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
            </div>
            <div class="itme">
                <dl>
                    <dt><div></div></dt>
                    <dd>
                        <div><p>信用钱包</p>
                            <div class="block">
                                <el-rate
                                     :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </div>
                        <p>信用钱包</p>
                        <p>成功过申请1234次&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;评论1234次<span>成功率</span></p>
                    </dd>
                </dl>
                <ul>
                    <li><p>NEW</p></li>
                    <li><p>标签</p></li>
                    <li><p>标签啊啊</p></li>
                    <li><p>标签啊</p></li>
                </ul>
                <p class="jie">产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介产品简介</p>
            </div>

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

<style scoped lang="less">
.box {
  font-size: 0.4rem /* 30/75 */;
  background: rgb(244, 245, 246);
  main {
    .itme {
      height: 4.4rem /* 330/75 */;
      margin: 0.266667rem /* 20/75 */;
      background: #fff;
      box-sizing: border-box;
      border-top: solid 0.106667rem /* 8/75 */ rgb(241, 183, 64);
      .jie {
        display: inline-block;
        font-size: 0.266667rem /* 20/75 */;
        margin: 0.2rem /* 15/75 */;
        line-height: 0.4rem /* 30/75 */;
      }
      ul {
        border-top: 1px solid #ccc;
        font-size: 0.266667rem /* 20/75 */;
        li {
          float: left;
          margin: 0.133333rem /* 10/75 */ 0.2rem /* 15/75 */;
          border: 0.04rem /* 3/75 */ solid pink;
          border-radius: 35%;
          p {
            padding: 0.066667rem /* 5/75 */;
          }
        }
      }
      dl {
        margin: 0.333333rem /* 25/75 */ 0.266667rem /* 20/75 */;
        dt {
          float: left;
          div {
            width: 1.533333rem /* 115/75 */;
            height: 1.533333rem /* 115/75 */;
            background: rgb(212, 213, 214);
            margin-right: 0.333333rem /* 25/75 */;
          }
        }
        dd {
          div {
            display: flex;
            p {
              flex: 1;
            }
          }
          p,
          div {
            line-height: 0.573333rem /* 43/75 */;
          }
          p:nth-child(2) {
            font-size: 0.333333rem /* 25/75 */;
          }
          p:nth-child(3) {
            font-size: 0.266667rem /* 20/75 */;
            span {
              float: right;
            }
          }
        }
      }
    }
  }
  nav {
    background: #fff;
    display: flex;
    height: 1.066667rem /* 80/75 */;
    line-height: 1.066667rem /* 80/75 */;
    text-align: center;
    .active {
      border-bottom: 0.08rem /* 6/75 */ solid rgb(90, 198, 129);
      box-sizing: border-box;
    }
    div {
      flex: 1;
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
