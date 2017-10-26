<template>
    <div class="com-wallet">
        <div class="header">
            <h2>企业钱包</h2>
           <router-link to="/my/myInfor">
               <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
           </router-link>
            <span class="tragele" @click="toggle()"></span>
            <transition name="fade">
                <div class="wallet" v-if="toggleFlag">
                    <span class="wallet-toggle"></span>
                    <div class="wallet-item">
                        <h3>企业钱包</h3>
                    </div>
                    <div class="wallet-item">
                        <h3>张小兵钱包</h3>
                    </div>
                </div>
            </transition>
        </div>
        <div class="content  mb20">
            <div class="wallet-money">
               <p>34234232.34元</p>
                <span></span>
            </div>
            <div class="surplus-money">
                账号余额
            </div>
        </div>
        <div class="content-item">
            <div class="title mb20">
                <i class="icon  bgColor iconfont icon-qianbao-shoukuangma" style=" color:#23D2AB"></i>
                <h3>收款码</h3>
                <i class="icon jump iconfont icon-tiaozhuan"></i>
            </div>
            <router-link to="/my/incomeExpenditure">
                <div class="title border mb20">
                    <i class="icon  bgColor iconfont icon-qianbao-shouzhimingx" style="color:  #23D2AB;"></i>
                    <h3>收支明细</h3>
                    <i class="icon jump iconfont icon-tiaozhuan"></i>
                </div>
            </router-link>

            <router-link to="/my/bankList">
                <div class="title mb20">
                    <i class="icon  bgColor iconfont icon-qianbao-yinghangka" style=" color:#23D2AB"></i>
                    <h3>银行卡</h3>
                    <i class="icon jump iconfont icon-tiaozhuan"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          toggleFlag: false
        }
      },
      methods: {
        toggle () {
          this.toggleFlag = !this.toggleFlag
        }
      }
    }
</script>
<style lang="less" scoped type="text/less">
    .com-wallet{
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
                font-family: PingFangSC-Medium;
            }
            .back{
                position: absolute;
                left: 20px;
                bottom: 20px;
                font-size: 44px;
                width: 44px;
                height: 44px;
            }
            .tragele{
                width: 30px;
                height: 26px;
                display: block;
                position: absolute;
                left: 452px;
                top: 32px;
                background:url("./../assets/images/Triangle.png") no-repeat;
                background-size: 100% 100%;
            }
            .wallet{
                width: 378px;
                height: auto;
                position: absolute;
                left:188px;
                top:100px;
                .wallet-toggle{
                    width: 20px;
                    height: 10px;
                    display: block;
                    background: url("./../assets/images/money-togglr.png") no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    top: -10px;
                    z-index: 2;
                    left:189px;

                }
                .wallet-item{
                    width: 375px;
                    height: 88px;
                    opacity: 0.6;
                    background: #000000;
                    box-shadow: 0 1px 0 0 rgba(122,122,122,0.72);
                    border-bottom: 1px solid rgba(122,122,122,0.72);;
                    h3{
                        font-size: 28px;
                        color: #FFFFFF;
                    }
                }
            }
        }
        .content{
            width: 100%;
            height: 200px;
            background: #6299F3;
            box-sizing: border-box;
            padding-left: 30px;
            .wallet-money{
                width: 100%;
                height: 120px;
                box-sizing: border-box;
                padding-top: 50px;
                p{
                    font-size: 50px;
                    color: #FFFFFF;
                    height: 50px;
                    float: left;
                }
                span{
                    float: left;
                    width: 42px;
                    height: 36px;
                    margin-top: 20px;
                    margin-left: 10px;
                    background: url("./../assets/images/icon-shaxin.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
            .surplus-money{
                font-size: 28px;
                color: #FFFFFF;
                line-height: 30px;
            }
        }
        .content-item{
            height: auto;
            width: 100%;
            .title{
                width: 100%;
                height: 100px;
                line-height: 100px;
                box-sizing: border-box;
                padding-left: 36px;
                position: relative;
                background: #FFFFFF;
                .bgColor{
                    border-radius: 8px;
                    font-size: 42px;
                    display: inline-block;
                    float: left;
                    margin-right:22px;
                }

                h3{
                    font-size: 30px;
                    color: #4A4A4A;
                }
                .jump{
                    position: absolute;
                    right: 36px;
                    top: 0;
                    color: #9B9B9B;
                    font-size: 14px;
                }

            }
            .border{
                box-shadow: 0 1px 0 0 #D7D7D7;
                border-bottom: 1px solid #F5F5F5;
            }
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
        }
    }
</style>