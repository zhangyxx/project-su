<template>
    <div class="Match">
        <header>精准匹配</header>
        <aside class="borrow">
            <p class="borrow_p1">
                <img src="@/assets/images/borrow1.png" alt="">
                我要借（元）
            </p>
           <div>
              <p class="t">10000</p>
              <p class="b">500-200000元</p>
           </div>
           <div class="tu">              
                  <img src="@/assets/images/borrow2.png" alt="">
           </div>
        </aside>
         <aside class="borrowing">
            <p class="borrowing_p1">
                <img src="@/assets/images/borrow3.png" alt="">
                借款期限
            </p>
           <div>
              <p class="t1">0</p>
              <button class="btn1">天</button>
              <button class="btn2">日</button>
           </div>
           <div class="tu">              
                  <img src="@/assets/images/borrow2.png" alt="">
           </div>
        </aside>
         <aside class="wo">
             <p class="p1">我要</p>
             <div>
                <button class="btn4">借现金</button>
                <button class="btn5">还信用卡</button>
             </div>
              
        </aside>
        <router-link to="/Match2" tag="div">
                 <button class="btn3">下一步</button>
        </router-link>
       <Myfooter></Myfooter>
    </div>
</template>


<script>
import Myfooter from './Myfooter'
export default {
    components:{
        Myfooter,
    }
}
</script>


<style lang="less" scoped>
.Match{
    background: #f5f5f5;
    header{
        width: 100%;
        height: 1rem /* 75/75 */;
        line-height: 1rem /* 75/75 */;
        text-align: center;
        background: #1e2e45;
        font-size: .373333rem /* 28/75 */;
        color:white;
    }
    .borrow{
        width: 100%;
        background: white;
        margin-bottom: .266667rem /* 20/75 */;
        .borrow_p1{
            padding-top: .306667rem /* 23/75 */;
            margin-left: .32rem /* 24/75 */;
            font-size: .32rem /* 24/75 */;
        }
        div{
            width: 2.133333rem /* 160/75 */;
            height: 1.466667rem /* 110/75 */;
            margin: 0 auto;
            text-align: center;
            .t{
                font-size: .64rem /* 48/75 */;
                border-bottom: 1px solid #000;
                padding: .133333rem /* 10/75 */ 0;
            }
            .b{
                padding: .133333rem /* 10/75 */ 0;
                font-size: .133333rem /* 10/75 */;
                color: #bfbfbf;
                padding: .133333rem /* 10/75 */  0;
            }    
        }
         .tu{
                width: 100%;
                height: 1.733333rem /* 130/75 */;
                img{
                    width: 100%;
                    height: 100%;
                }
               
            }
    }
     .borrowing{
        width: 100%;
        background: white;
        margin-bottom: .266667rem /* 20/75 */;
        .borrowing_p1{
            padding-top: .306667rem /* 23/75 */;
            margin-left: .32rem /* 24/75 */;
            font-size: .32rem /* 24/75 */;
        }
        div{
            width: 2.933333rem /* 220/75 */;
            height: 2.266667rem /* 170/75 */;
            margin: 0 auto;
            text-align: center;
            position: relative;
            .t1{
                width: 1.866667rem /* 140/75 */;
                margin: 0 auto;
                font-size: .64rem /* 48/75 */;
                border-bottom: 1px solid #000;
                padding: .133333rem /* 10/75 */ 0;
            }
            .btn1{
                width: 1.466667rem /* 110/75 */;
                height: .933333rem /* 70/75 */;
                display: inline-block;
                background: #35c583;
                 border: none;
                outline: none;
                margin: .133333rem /* 10/75 */ 0;
                 position: absolute;
                 bottom: 0;
                 left: 0;
            }
            .btn2{
                width: 1.466667rem /* 110/75 */;
                height: .933333rem /* 70/75 */;
                display: inline-block;
                border: none;
                outline: none;
                 margin: .133333rem /* 10/75 */ 0;
                 position: absolute;
                 bottom: 0;
                 left: 1.466667rem /* 110/75 */;
            }
        }
         .tu{
                width: 100%;
                height: 1.733333rem /* 130/75 */;
                img{
                    width: 100%;
                    height: 100%;
                }
               
            }
    }
    .wo{
        width: 100%;
        padding-bottom:.4rem /* 30/75 */;
        margin-bottom: 1rem /* 75/75 */;
        background: white;
         .p1{
             padding-top: .306667rem /* 23/75 */;
            margin-left: .32rem /* 24/75 */;
            font-size: .32rem /* 24/75 */;
        }
        div{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            .btn5{
                width: 1.733333rem /* 130/75 */;
                height: .933333rem /* 70/75 */;
                margin-top: 1rem /* 75/75 */;
                 border: none;
                outline: none;
            }
            .btn4{
                width: 1.733333rem /* 130/75 */;
                height: .933333rem /* 70/75 */;
                margin-top: 1rem /* 75/75 */;
                background: #35c583;
                border: none;
                outline: none;
            }
        }
    }
    .btn3{
        width: 100%;
        height: 1.066667rem /* 80/75 */;
        background: #bedecf;
        border: none;
        outline: none;
    }
}
</style>