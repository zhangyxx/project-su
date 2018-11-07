<template>
    <div class="Match2">
        <header>
            <router-link to="/Match" tag="p">
            <p class="btn3">&lt;</p>
            </router-link>
            <p>精准匹配</p><p></p></header>
        <section class="information">
            <h2><span>基础信息</span>··>··身份信息··>··信用信息</h2>
            <address class="ars1">
                <p>实名信息</p>
                <address>
                    <label>姓名</label>
                    <input type="text" name="xing">
                </address>
                <address>
                    <label>身份证号码</label>
                    <input type="text" name="xing">
                </address>
                 <address>
                    <label>性别</label>
                    <div>
                        <input type="radio" name="ni" id="">男
                        <input type="radio" name="ni" id="">女
                    </div>
                </address>
                 <address>
                    <label>年龄</label>
                    <select>
                        <option value="">1-18</option>
                        <option value="">18-65</option>
                        <option value="">65-85</option>
                    </select>
                </address>
            </address>
            <address class="ars1">
                <p>地址信息</p>
                <address>
                    <label>现居地址</label>
                    <input type="text" name="xing">
                </address>
                <address>
                    <label>现居地址类型</label>
                    <input type="text" name="xing">
                </address>
                 <address>
                    <label>婚姻状况</label>
                    <div>
                        <input type="radio" name="hun" id="">已婚
                        <input type="radio" name="hun" id="">未婚
                    </div>
                </address>
            </address>
             <address class="ars1">
                <p>资产信息</p>
                <address>
                    <label>房产</label>
                    <input type="text" name="xing">
                </address>
                <address>
                    <label>车产</label>
                    <input type="text" name="xing">
                </address>
            </address>
             <address class="ars1">
                <p>社交信息</p>
                <address>
                    <label>联系人名字</label>
                    <input type="text" name="xing">
                </address>
                <address>
                    <label>联系人手机号</label>
                    <input type="text" name="xing">
                </address>
                 <address>
                    <label>与联系人关系</label>
                    <div>
                        <input type="text" id="">
                    </div>
                </address>
            </address>
        </section>
        <router-link to="/Match3" tag="div" class="div">
               <button class="btn1">上一步</button>
               <button class="btn2">下一步</button>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
html{
    background: #f5f5f5;
}
.Match2 {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    header{
        width: 100%;
        height: 1rem /* 75/75 */;
        line-height: 1rem /* 75/75 */;
        display: flex;
        background: #1e2e45;
        font-size: .373333rem /* 28/75 */;
        color:white;
        p{
            flex: 1;
            text-align: center;
        }
    }
    .information{
        width: 100%;
        color: #aaaaaa;
        font-size: .346667rem /* 26/75 */;
        margin-bottom: 1.066667rem /* 80/75 */;
        h2{
            text-align: center;
            line-height: 1.133333rem /* 85/75 */;
            span{
                color: #000;
            }
        }
      
        .ars1{
            width: 100%;
            background: #fff;
            font-size: .373333rem /* 28/75 */;         
            p{
                padding:0 .346667rem /* 26/75 */;
                color: #000;
                display: block;
                background: #f5f5f5;
                line-height: .866667rem /* 65/75 */;
            }
            address{
                display: flex;
                justify-content: space-between;
                padding: 0 .346667rem /* 26/75 */; 
                border-bottom: 1px solid #e6e6e6;   
                label{
                    line-height: 1.2rem /* 90/75 */;
                   
                }
                input{
                        border: none;
                        text-align: right;
                }
                select{
                    border: none;
                }
                div{
                    line-height: 1.2rem /* 90/75 */;
                }
           }
        }
        .ars2{
            width: 100%;
            background: #fff;
            font-size: .373333rem /* 28/75 */;         
            p{
                padding:0 .346667rem /* 26/75 */;
                color: #000;
                display: block;
                background: #f5f5f5;
                line-height: .866667rem /* 65/75 */;
            }
            address{
                display: flex;
                justify-content: space-between;
                padding: 0 .346667rem /* 26/75 */; 
                border-bottom: 1px solid #e6e6e6;   
                label{
                    line-height: 1.2rem /* 90/75 */;
                   
                }
                input{
                        border: none;
                        text-align: right;
                }
                select{
                    border: none;
                }
                div{
                    line-height: 1.2rem /* 90/75 */;
                }
           }
        }
    }
    .div{
        width: 100%;
        height: 1.066667rem /* 80/75 */;
        position: fixed;
        bottom: 0;
        left: 0;
        button{
            width: 50%;
            border: none;
            outline: none;
            line-height: 1.066667rem /* 80/75 */;
            float: left;
        }
        .btn2{
            background: #01ca7e;
        }
    }
}
</style>

