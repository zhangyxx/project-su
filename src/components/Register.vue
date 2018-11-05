<template>
    <div class="login">
        <header>
                <img src="../assets/images/loginX.png" alt="" @click="back">
                <p>注册</p>
                <p></p>
        </header>
        <article>
            <div class="form">
                <div class="main">
                    <input type="text" placeholder="手机号">
                    <input type="text" placeholder="图文验证码">
                    <input type="text" placeholder="短信验证码">
                    <input type="text" placeholder="6-20位新密码">
                    <button class="denglv">注册</button>
                </div>
                <router-link tag="div" to='/'>
                    <div class="footer">
                        <p>已有账号？</p>
                        <p></p>
                        <p>去登陆</p>
                    </div>
                </router-link>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
body,
html {
  width: 100%;
  height: 100%;
}
.login {
  width: 100%;
  height: 17.786667rem /* 1334/75 */;
  background: url(../assets/images/login1.jpg) no-repeat;
  background-size: 100%;
  header {
    display: flex;
    height: 2.133333rem /* 160/75 */ /* 130/75 */;
    justify-content: space-between;
    align-items: center;
    img {
      width: 0.4rem /* 30/75 */;
      height: 0.4rem /* 30/75 */;
      margin: 0 0.4rem /* 30/75 */ /* 20/75 */;
    }
    p{
        font-size: .4rem /* 30/75 */;
        color: #ffffff;
    }
  }
  .active {
    background: #4d9e83;
    color: #ffffff;
  }
  article {
    width: 100%;
    height: 10.666667rem /* 800/75 */;
    margin-top: 2rem /* 150/75 */;
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      width: 8rem /* 600/75 */;
      height: 9.866667rem /* 740/75 */;
      // background: red;
      ul {
        display: flex;
        height: 0.906667rem /* 68/75 */;
        background: #ced1d5;
        border-radius: 3px;
        width: 100%;
        li {
          flex: 1;
          height: 100%;
          text-align: center;
          font-size: 0.4rem /* 30/75 */;
          // color: #919294;
          line-height: 0.906667rem /* 68/75 */;
        }
      }
      .main {
        input {
          border: none;
          width: 90%;
          height: 1.333333rem /* 100/75 */;
          border-bottom: 1px solid #ffffff;
          background: none;
          font-size: 0.4rem /* 30/75 */;
          padding-left: 0.533333rem /* 40/75 */ /* 20/75 */;
          color: #ffffff;
          &:first-child {
            margin-top: 0.533333rem /* 40/75 */;
          }
        }
        ::placeholder {
          color: #ffffff;
        }
        .denglv{
            width: 100%;
            height: 1.066667rem /* 80/75 */;
            border: none;
            background: #3c9f7b;
            color: #ffffff;
            font-size: .346667rem /* 26/75 */;
            border-radius: 5px;
            margin-top: 1.973333rem /* 148/75 */;
        }
      }
      .footer{
          width: 4.266667rem /* 320/75 */;
          height: .44rem /* 33/75 */;
          display: flex;
          margin-top: .853333rem /* 64/75 */;
          justify-content: space-evenly;
          font-size: .4rem /* 30/75 */;
          color: #3c9f7b;
          margin-left: 1.706667rem /* 30/75 */;
      }
    }
  }
}
</style>

