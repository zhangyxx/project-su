<template>
    <div>
        <header>
            <div class="touxiang"></div>
            <div class="name">马杀鸡</div>
            <div class="geren">个人资料</div>
            <div class="fu"><img src="../assets/images/箭头右.png"></div>
        </header>
        <main>
            <div class="jin">
                <p>进度查询</p>
                <p></p>
                <p></p>
                <p>查看全部<img src="../assets/images/箭头右2.png"></p>
            </div>
            <div class="tan">
                <div class="tan-item"><img src="../assets/images/审核中.png">审核中</div>
                <div class="tan-item"><img src="../assets/images/待放款.png">待放款</div>
                <div class="tan-item"><img src="../assets/images/还款中.png">还款中</div>
            </div>
            <div class="wode"><img src="../assets/images/消息提醒.png">还款提醒<img class="img1" src="../assets/images/箭头右2.png"></div>
            <div class="wode"><img src="../assets/images/收藏1.png">我的收藏<img class="img1" src="../assets/images/箭头右2.png"></div>
            <div class="wode"><img src="../assets/images/产品2.png">帮助中心<img class="img1" src="../assets/images/箭头右2.png"></div>
        </main>
        <Myfooter></Myfooter>
    </div>
</template>

<script>

import Myfooter from '@/components/Myfooter.vue'
export default {
    components:{
        Myfooter
    }
}

</script>

<style lang="less">
main {
  .wode {
    height: 1.066667rem /* 80/75 */;
    width: 100%;
    margin: 0.266667rem /* 20/75 */ 0;
    font-size: 0.333333rem /* 25/75 */;
    line-height: 1.066667rem /* 80/75 */;
    .img1 {
      margin-left: 6.5rem;
    }
    img {
      width: 0.333333rem /* 25/75 */;
      height: 0.333333rem /* 25/75 */;
      margin: 0 0.266667rem /* 20/75 */;
    }
  }
  .jin {
    height: 0.866667rem /* 65/75 */;
    margin-top: 0.266667rem /* 20/75 */;
    display: flex;
    p {
      flex: 1;
      line-height: 0.866667rem /* 65/75 */;
      font-size: 0.333333rem /* 25/75 */;
      margin-left: 0.266667rem /* 20/75 */;
      img {
        width: 0.333333rem /* 25/75 */;
        height: 0.333333rem /* 25/75 */;
        margin-left: 0.133333rem /* 10/75 */;
      }
    }
  }
  .tan {
    display: flex;
    width: 100%;
    height: 1.333333rem /* 100/75 */;
    border-top: 1px solid #ccc;
    .tan-item:nth-child(1) {
      border-left: none;
    }
    .tan-item {
      flex: 1;
      text-align: center;
      line-height: 1.333333rem /* 100/75 */;
      font-size: 0.36rem /* 27/75 */;
      border-left: 1px solid #ccc;
      vertical-align: middle;
      img {
        width: 0.6rem /* 45/75 */;
        height: 0.6rem /* 45/75 */;
        display: inline-block;
        margin: 0 0.133333rem /* 10/75 */;
        vertical-align: middle;
      }
    }
  }
}
header {
  height: 2.266667rem /* 170/75 */;
  width: 100%;
  position: relative;
  background: rgb(29, 47, 70);
  line-height: 2.266667rem /* 170/75 */;
  .touxiang {
    width: 1.2rem /* 90/75 */;
    height: 1.2rem /* 90/75 */;
    background: rgb(249, 228, 176);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto 20px;
  }
  .name,
  .geren {
    color: #fff;
    margin-left: 22%;
    font-size: 0.346667rem /* 26/75 */;
    width: 18%;
    display: inline-block;
  }
  .geren {
    position: absolute;
    right: 10%;
  }
  .fu {
    position: absolute;
    right: 3%;
    display: inline-block;
    height: 100%;
    img {
      margin-top: 0.666667rem /* 50/75 */;
    }
  }
}
</style>
