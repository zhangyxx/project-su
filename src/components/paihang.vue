<template>
  <div class="ranking">
    <nav class="nav_one"><span class="fa fa-chevron-left"></span>速贷排行 </nav>
    <div class="nav_two">
      <ul>
        <li class="active">成功率</li>
        <li>放宽速度</li>
        <li>货代利息</li>
        <li>最高利息</li>
      </ul>
    </div>
    <div class="main">
      <p class="p_one">5月</p><img src="@/assets/images/no.1.png" alt="">
      <p class="p_two">信用钱包</p>
      <p class="p_three">信用钱包</p>
      <p class="p_four">成功率 <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i
          class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
          aria-hidden="true"></i></p>
      <h1 class="p_five">查看详情</h1>
    </div>
    <div class="content">
      <dl class="dl_one"><dt><img src="../assets/images/no.2.png" alt=""></dt>
        <dd>
          <p class="p_one"><span>信用钱包</span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
              aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i
              class="fa fa-star" aria-hidden="true"></i></p>
          <p class="p_two"><span>信用钱包</span><i>成功率</i></p>
        </dd>
      </dl>
      <dl class="dl_one"><dt><img src="../assets/images/no.2.png" alt=""></dt>
        <dd>
          <p class="p_one"><span>信用钱包</span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
              aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i
              class="fa fa-star" aria-hidden="true"></i></p>
          <p class="p_two"><span>信用钱包</span><i>成功率</i></p>
        </dd>
      </dl>
      <dl class="dl_one"><dt><img src="../assets/images/no.2.png" alt=""></dt>
        <dd>
          <p class="p_one"><span>信用钱包</span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
              aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i
              class="fa fa-star" aria-hidden="true"></i></p>
          <p class="p_two"><span>信用钱包</span><i>成功率</i></p>
        </dd>
      </dl>
      <dl class="dl_one"><dt><img src="../assets/images/no.2.png" alt=""></dt>
        <dd>
          <p class="p_one"><span>信用钱包</span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
              aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i
              class="fa fa-star" aria-hidden="true"></i></p>
          <p class="p_two"><span>信用钱包</span><i>成功率</i></p>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
  export default {
   
  }

</script>
<style scoped lang="less">
  .ranking {
    background-color: rgb(33, 71, 114);
    height: auto;
    .nav_one {
      line-height: 0.8333rem;
      text-align: center;
      color: white;
      font-size: 16px;

      span {
        float: left;
        line-height: 0.8333rem;
        padding-left: 0.3333rem;
      }
    }

    .nav_two {
      ul {
        display: flex;
        text-align: center;
        align-items: center;

        li {
          flex: 1;
          line-height: 1.3333rem;
          color: white;
        }

        .active {
          border-bottom: 3px solid greenyellow;
          color: greenyellow;
        }
      }
    }

    .main {
      position: relative;
      width: 90%;
      background-color: white;
      margin: 0.2rem auto;
      border-radius: 0.2333rem;

      p {
        text-align: center;
      }

      .p_one {
        width: 0.8rem;
        height: 1.133rem;
        background-image: url(../assets/images/标签.png);
        background-size: 100%;
        margin-left: 0.3667rem;
        color: white;
        line-height: 1.033rem;
        text-align: center;
        font-weight: bold;
      }

      img {
        width: 2.4667rem;
        height: 2.2333rem;
        display: block;
        margin: auto;
        margin-top: -1.133rem;
      }

      .p_two {
        line-height: 0.6667rem;
        font-size: 0.4733rem;
        color: blue;
        text-align: center;
        line-height: 1rem;
      }

      .p_four {
        padding-bottom: 0.52rem;
        line-height: 0.5rem;

        i {
          color: rgb(15, 216, 156);
        }
      }

      .p_five {
        padding: 10px 20px;
        background-color: rgb(15, 216, 156);
        color: white;
        border-radius: 0.2667rem;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 50%);
      }
    }

    .content {
      overflow: hidden;
      background-color: #ddd;
      margin-top: -3.3333rem;
      border-radius: 20px 20px 0 0;
        .dl_one:nth-child(1){
            margin-top: 3.8333rem;
        }
        .dl_one:nth-child(2){
            dt{
                background-color: rgb(206, 188, 33);
            }
        }
        .dl_one:nth-child(3){
            dt{
                background-color: rgb(87, 12, 83);
            }
        }
        .dl_one:nth-child(4){
            dt{
                background-color: rgb(24, 68, 117);
            }
        }
      .dl_one {
          overflow: hidden;
        width: 90%;
        border-radius: 0.3667rem;
        margin: auto;
          margin-bottom: 0.2333rem;
        background-color: white;
        display: flex;

        dt {
          flex: 3;
          line-height: 2.2667rem;
          text-align: center;
          background-color: red;

          img {
            margin: auto;
          }
        }

        dd {
          flex: 8;
          padding: 0 0.2667rem;

          .p_one {
            line-height: 1.2333rem;

            span {
              font-size: 0.4733rem;
              color: blue;
            }

            i {
              line-height: 1.2333rem;
              float: right;
              color: rgb(15, 216, 156);
            }
          }

          .p_two {
            i {
              float: right;
            }
          }
        }
      }

    }
  }

</style>
