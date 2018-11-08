<template>
<div class="Match3">
    <header>
        <router-link to="/Match2" tag="p">
        <p>&lt;</p>
        </router-link>
        <p>精准匹配</p>
        <p></p>
    </header>
    <section class="information">
        <h2><span>基础信息··>··</span>身份信息··>··信用信息</h2>
        <address class="ars1">
                <address>
                    <label>学校名称</label>
                    <input type="text" placeholder="请输入">
                </address>
                <address>
                    <label>学校信息</label>
                    <input type="text" >
                </address>
                <address>
                    <label>毕业年份</label>
                     <select>
                        <option value="">1-18</option>
                        <option value="">18-65</option>
                        <option value="">65-85</option>
                    </select>
                </address>
            </address>
    </section>
      <router-link to="/Match2" tag="div" class="div">
               <button class="btn1">上一步</button>
        </router-link>
        <router-link to="/Match4" tag="div" class="div1">
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
input{
    border: none;
    outline:none;
}
.Match3 {
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
                color: #0a74e4;
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
    .btn1{
            width: 50%;
            position: fixed;
            bottom: 0;
            left: 0;
            border: none;
            outline: none;
            line-height: 1.066667rem /* 80/75 */;
        }
        .btn2{
            width: 50%;
            position: fixed;
            bottom: 0;
            right: 0;
            border: none;
            outline: none;
            line-height: 1.066667rem /* 80/75 */;
            background: #01ca7e;
        }
}
</style>

