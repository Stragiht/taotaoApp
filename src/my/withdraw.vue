<template>
  <div class="withdraw">
    <div class="header">
      <h2>提现</h2>
      <router-link to="/my/ComWallet">
        <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
      </router-link>
    </div>
    <div class="content">
      <div class="money">
        <p>全部提现</p>
        <p>余额 ￥2342.23</p>
      </div>
      <div class="withdraw-infor">
        <div class="bank-infor">
           <div class="infor-item">
             <p>转账银行卡</p>
             <p @click="changeBnak">企业建设银行(3231)</p>
           </div>
          <div class="infor-item">
            <p>提现金额</p>
          </div>
          <div class="money">
            <input type="text" >
            <span> ￥</span>
          </div>
        </div>
        <div class="bank-infor">
          <div class="infor-item">
            <p>手机号码</p>
            <p  style="color: #000" @click="changePhone">
                15197294075
               <span> > </span>
            </p>
          </div>
          <div class="infor-item">
            <p class="code">验证码</p>
            <input type="text" class="code-content">
            <button>获取验证码</button>

          </div>
        </div>
      </div>
      <div class="note">
        <p>提现手续费2元/笔，额外扣取</p>
      </div>
      <div class="operate">
         <button @click="withdraw">确认提现</button>
      </div>
    </div>
     <div v-transfer-dom>
         <popup v-model="showPhone" position="bottom">
             <div class="bank-list">
                 <div class="bank-item">
                     <span >15197294075</span>
                     <span class="icon-yixuan icon iconfont select-icon"></span>
                 </div>
             </div>
             <div class="bank-list">
                 <router-link to="/my/changePhone">
                     <div class="bank-item">
                         <span>更换手机号</span>
                     </div>
                 </router-link>
             </div>
         </popup>
     </div>
      <div v-transfer-dom>
          <popup v-model="showBank" position="bottom">
              <div class="bank-list">
                  <div class="bank-item">
                      <span >15197294075</span>
                      <span class="icon-yixuan icon iconfont select-icon"></span>
                  </div>
              </div>
              <div class="bank-list">
                  <div class="bank-item">
                      <span>更换手机号</span>
                  </div>
              </div>
          </popup>
      </div>

    <div class="withdraw-content" v-if="showBankInfor">
        <div class="result">
            <div class="result-icon">
                <img src="./../assets/images/icon-deng.png" alt="">
            </div>
            <div class="title cnter">
                <p>提现申请已提交</p>
            </div>
            <div class="situation cnter">
                <p>请留意银行到账情况</p>
            </div>
            <div class="amount">
                <p><span>提现金额：</span>￥<span>1002222</span></p>
                <p><span>手续费：</span>￥<span>10022222</span></p>
            </div>
            <div class="agree center">
                <p @click="hideToaster">好</p>
            </div>
        </div>

    </div>
  </div>
</template>
<script>
  import { TransferDom, Popup } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Popup
    },
    data () {
      return {
        showBankInfor: false,
        showPhone: false,
        showBank:false
      }
    },
    methods: {
      withdraw () {
        this.showBankInfor = true
      },
      hideToaster () {
        this.showBankInfor = false
      },
      changePhone () {
        this.showPhone = true
      },
      changeBnak () {
        this.showBank = true
      }
    }
  }
</script>
<style type="text/less" lang="less" scoped>
  .withdraw{
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
      width: 100%;
      height: auto;
      padding: 20px 40px;
      box-sizing: border-box;
      .money{
        height: 78px;
        line-height: 78px;
        p{
          float: right;
        }
        p:nth-child(1){
          font-size: 26px;
          color: #6da0dc;
          margin-left: 30px;
        }
        p:nth-child(2){
          font-size: 26px;
          color: #9B9B9B;
        }
      }
      .withdraw-infor{
        width: 670px;
        background: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 60px 30px ;
        .bank-infor{
          padding-left: 10px;
          box-sizing: border-box;
          font-size: 28px;
          .infor-item{
            overflow:hidden ;
            margin: 40px 0 28px;
            p:nth-child(1){
              float: left;
              color: #000000;
            }
            p:nth-child(2){
              float: right;
              color: #5892d6;
              span{
                display: inline-block;
                width: 22px;
                margin-left: 22px;
                font-size: 30px;
                color: #adadad;
                transform: rotate(90deg);
              }
            }
            .code{

            }
            .code-content{
              width: 200px;
              height: 42px;
              border: none;
              margin-left: 50px;
              font-size: 28px;
              color: #4A4A4A;
            }
            button{
              border: none;
              background: #fff;
              float: right;
              color: #5892d6;
              font-size: 26px;
            }
          }


        }
        .money{
          width: 610px;
          height: 120px;
          border-bottom: 1px solid #C0C0C0;
          position: relative;
          input{
            width: 610px;
            height: 119px;
            border: none;
            padding-left: 110px;
            box-sizing: border-box;
            font-size: 94px;
            line-height: 84px;
            color: #000000;
          }
          span{
            position: absolute;
            display: block;
            width: 58px;
            height: 58px;
            left: 0;
            top:0;
            font-size: 58px;
            line-height: 58px;
          }
        }
      }
      .note{
        height: 96px;
        line-height: 96px;
        width: 100%;
        p{
          color: #9B9B9B;
          font-size: 26px;
        }
      }
      .operate{
        width: 670px;
        height: 90px;
        button {
          width: 100%;
          height: 100%;
          background: #6399F3;
          border: none;
          border-radius: 4px;
          font-size: 34px;
          color: #fff;
          margin-top: 60px;
        }
      }
    }
    .withdraw-content{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color:rgba(0, 0, 0, 0.4);
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .result{
            width: 560px;
            height: 700px;
            background: #fff;
            box-sizing: border-box;
            padding: 50px 20px 0 20px;
            .result-icon{
                width: 100%;
                height: 188px;
                display: flex;
                align-items:center;
                justify-content: center;
                img{
                    display: block;
                    width: 116px;
                    height: 116px;
                }
            }
            .title{
                font-size: 34px;
                color: #000000;
                height: 48px;
            }
            .situation{
                font-size: 26px;
                color: #B1B1B1;
                height: 38px;
                margin-bottom: 49px;
            }
            .amount{
                height: 188px;
                width: 100%;
                border-bottom: 1px solid #DDDDDD;
                border-top:1px solid #DDDDDD ;
                padding: 22px 0 0 48px;
                box-sizing: border-box;
                p{
                    font-size: 28px;
                    color: #4A4A4A;
                    height: 40px;
                    span{
                        width: 160px;
                        height: 40px;
                        display: inline-block;
                        margin-right: 10px;
                    }
                }
            }
            .agree{
                height: 124px;
                line-height: 124px;
                text-align: center;
                font-size: 34px;
                color: #3999FF;
            }
        }
    }
  }
</style>
