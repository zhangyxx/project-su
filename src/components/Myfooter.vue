<template>
    <div>
        <footer>
            <router-link to="/Myindex" tag="div">
                    <div>
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <p>首页</p>
                    </div>
            </router-link>
             <router-link to="/Product" tag="div">
             <div>
                <i class="fa fa-smile-o" aria-hidden="true"></i>
                    <p>产品</p>
             </div>
            </router-link>
             <router-link to="/Match" tag="div">
                    <div>
                        <i class="fa fa-github-alt" aria-hidden="true"></i>
                            <p>精准匹配</p>
                    </div>
            </router-link>
             <router-link to="/Mycenter" tag="div">
                     <div>
                         <i class="fa fa-user" aria-hidden="true"></i>
                         <p>个人中心</p>
                     </div>
            </router-link>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
div {
  footer {
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 11111;
    justify-content: center;
    align-items: center;
    background: #cccccc;
    div{
        flex: 1;
        text-align: center;
        font-size: .266667rem /* 20/75 */;
        color: #808080;
        i{
            font-size: .4rem /* 30/75 */;
        }
        p{
            margin-top: .306667rem /* 23/75 */ /* 20/75 */;
        }
    }
     div.router-link-active{
      color: #1e2e45;
    }
  }
}
</style>
