<template>
 <div class="wallet-balance">
     <div class="header">
         <h2>企业钱包</h2>
         <router-link to="/my/ComWallet">
             <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
         </router-link>
     </div>
     <div class="content">
         <img src="./../assets/images/qianbao.png" alt="">
     </div>
     <p class="title">钱包余额</p>
     <p class="money">￥124113134.32</p>
     <div style="text-align: center">
         <router-link to="/my/recharge">
             <button class="recharge">充值</button>
         </router-link>
     </div>
     <div style="text-align: center">
         <router-link to="/my/withdraw">
             <button class="withdrawal">提现</button>
         </router-link>

     </div>

 </div>
</template>
<script>

</script>
<style type="text/less" lang="less" scoped>
    .wallet-balance{
        width: 100%;
        height: 100%;
        .header{
            height: 88px;
            line-height: 88px;
            background: #FFFFFF;
            text-align: center;
            position: relative;
            h2{
                font-size: 34px;
                color: #000000;
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
            display: flex;
            width: 100%;
            height: 290px;
            justify-content:center;
            align-items: center;
            margin-top: 10px;
            img{
                width: 212px;
                height: 212px;
            }
        }
        .title{
            font-size: 36px;
            color: #4A4A4A;
            letter-spacing: 0;
            line-height: 40px;
            height: 40px;
            text-align: center;
            margin-bottom: 40px;
            font-weight:400;
        }
        .money{
            font-size: 64px;
            color: #000000;
            line-height: 64px;
            height: 64px;
            text-align: center;
            font-weight: 400;
            margin-bottom: 154px;
        }
        button{
            width: 670px;
            height: 90px;
            text-align: center;
            margin-bottom: 48px;
            border: none;
        }
        .recharge{
            background: #6299F3;
            border: 1px solid #6299F3;
            border-radius: 4px;
            font-size: 34px;
            color: #FFFFFF;
        }
        .withdrawal{
            background: #FFFFFF;
            border: 1px solid #979797;
            border-radius: 4px;
            font-size: 34px;
            color: #4A4A4A;
        }
    }
</style>