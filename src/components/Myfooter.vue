<template>
    <div>
        <footer>
            <router-link to="/Myindex" tag="dl">
                     <dl>
                    <dt><i class="fa fa-home" aria-hidden="true"></i></dt>
                    <dd>首页</dd>
                </dl>
            </router-link>
             <router-link to="/Product" tag="dl">
                     <dl>
                    <dt><i class="fa fa-smile-o" aria-hidden="true"></i></dt>
                    <dd>产品</dd>
                </dl>
            </router-link>
             <router-link to="/Match" tag="dl">
                     <dl>
                    <dt><i class="fa fa-github-alt" aria-hidden="true"></i></dt>
                    <dd>精准匹配</dd>
                </dl>
            </router-link>
             <router-link to="/Mycenter" tag="dl">
                     <dl>
                    <dt><i class="fa fa-user" aria-hidden="true"></i></dt>
                    <dd>个人中心</dd>
                </dl>
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
    background: #cccccc;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 11111;
    dl {
      flex: 1;
    }
  }
}
</style>
