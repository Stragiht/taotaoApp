<template>
    <div class="reset-psw">
        <div class="header">
            <h2>重置密码</h2>
            <router-link to="/system/login">
                <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
            </router-link>
        </div>
        <div class="content">
            <div class="psw-item">
                <label>新密码</label>
                <input type="password" placeholder="请输入新密码">
                <span>x</span>
            </div>
            <div class="psw-item">
                <label>确认密码</label>
                <input type="password" placeholder="请再次输入新密码">
                <span>x</span>
            </div>
        </div>
        <div class="operate">
            <router-link to="/system/resetPsw">
                <button disabled>完成</button>
            </router-link>
        </div>
    </div>
</template>
<script>

</script>
<style type="text/less" lang="less" scoped>
   .reset-psw{
       width: 100%;
       height: 100%;
       overflow: hidden;
       background: #fff;
       .header{
           height: 88px;
           line-height: 88px;
           background: #F5F5F5;
           text-align: center;
           position: relative;
           h2{
               font-size: 34px;
               color: #000000;
               font-weight: 400;
           }
           .back{
               position: absolute;
               left: 20px;
               bottom: 20px;
               font-size: 44px;
               width: 44px;
               height: 44px;
           }
       }
       .content{
           padding: 30px 0 0 30px;
           width: 100%;
           height: auto;
           box-sizing: border-box;
           .psw-item {
               width: 100%;
               height: 89px;
               position: relative;
               border-bottom: 1px solid #D6D6D6;
               position: relative;
               label {
                   height: 88px;
                   line-height: 88px;
                   float: left;
                   width: 162px;
                   font-size: 28px;
                   color: #8D8D8D;
               }
               input {
                   border: none;
                   font-size: 28px;
                   height: 88px;
                   line-height: 88px;
               }
               input::-webkit-input-placeholder {
                   color: #8D8D8D;
               }
               span {
                   position: absolute;
                   display: block;
                   width: 28px;
                   height: 28px;
                   border-radius: 28px;
                   background: #cccccc;
                   right: 20px;
                   top: 30px;
                   line-height: 28px;
                   text-align: center;
                   opacity: 0.5;
               }
           }
       }
       .operate{
           width: 100%;
           height: 88px;
           display: flex;
           justify-content: center;
           margin-top: 460px;
           button{
               border: none;
               height: 88px;
               line-height: 88px;
               text-align: center;
               width: 330px;
               background: #6299F3;
               border-radius: 100px;
               font-size: 32px;
               color: #FFFFFF;
           }
           button[disabled]{
               opacity: 0.4;
           }
       }
   }

</style>