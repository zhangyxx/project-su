<template>
        <div>
            <header>
                <router-link tag="p" to="./Myindex">
                        <p><i class="el-icon-back"></i></p>
                </router-link>
                <p>资讯</p>
                <p></p>
            </header>
             <article>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                                <el-card :body-style="{ padding: '0px' }">
                                <img src="@/assets/images/1.jpg" class="image">
                                <div style="padding: 14px;">
                                    <span>好吃的汉堡</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                                </el-card>
                            </el-col>
                        </el-row>
             </article>
               <article>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                                <el-card :body-style="{ padding: '0px' }">
                                <img src="@/assets/images/2.jpg" class="image">
                                <div style="padding: 14px;">
                                    <span>好吃的汉堡</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                                </el-card>
                            </el-col>
                        </el-row>
             </article>
               <article>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                                <el-card :body-style="{ padding: '0px' }">
                                <img src="@/assets/images/3.jpg" class="image">
                                <div style="padding: 14px;">
                                    <span>好吃的汉堡</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                                </el-card>
                            </el-col>
                        </el-row>
             </article>
        </div>
</template>

<script>
export default {
     data() {
    return {
      currentDate:'2018-08-08'  
    };
  },
};
</script>

<style lang="less" scoped>
div {
  header {
    width: 100%;
    height: 1.333333rem /* 100/75 */;
    background: #1a2e47;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-size: 0.4rem /* 30/75 */;
  }
  article{
      .time {
    font-size: .173333rem /* 13/75 */;
    color: #999;
  }
  
  .bottom {
    margin-top: .173333rem /* 13/75 */;
    line-height: .16rem /* 12/75 */;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  }
}
</style>
