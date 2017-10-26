<template>
    <div class="bank-list">
        <div class="header">
            <h2>银行卡</h2>
            <router-link to="/my/ComWallet">
                <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
            </router-link>
          <div class="manage-bank" @click="manageBank">
            <p>管理</p>
          </div>
        </div>
        <div class="no-result" v-if="hasbank">
            <img src="./../assets/images/liebiao-kong.png" alt="">
            <p>暂无提现银行卡</p>
        </div>
        <div class="has-bank">
            <div class="banl-item" >
                <div class="bank-img" v-if="!hideImg">
                  <img src="./../assets/images/bank-img.png" alt="">
                </div>
                <div class="bank-infor">
                  <p class="bank-name">上海浦东发展银行</p>
                  <p class="company-name">广东陶陶汽配科技股份有限公司</p>
                  <p class="card">卡号：&nbsp;23423423423423423423</p>
                </div>
              <div class="delete-bank" v-if="hideImg">
                 <p>企业账户不能删除</p>
              </div>

            </div>
            <div class="banl-item" >
            <div class="bank-img" v-if="!hideImg">
              <img src="./../assets/images/bank-img.png" alt="">
            </div>
            <div class="bank-infor">
              <p class="bank-name">上海浦东发展银行</p>
              <p class="company-name">广东陶陶汽配科技股份有限公司</p>
              <p class="card">卡号：&nbsp;23423423423423423423</p>
            </div>

            <div class="delete-bank delete" @click="deleteBbank" v-if="hideImg">
              <span></span>
            </div>
          </div>
        </div>
        <div class="add-bank">
            <router-link to="/my/addBank">
                <button> 添加银行卡</button>
                <span>+</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          hasbank: false,
          hideImg: false
        }
      },
      methods: {
        manageBank () {
          this.hideImg = !this.hideImg
        },
        deleteBbank () {
          console.log(1)
        }
      }
    }
</script>
<style type="text/less" lang="less" scoped>
    .bank-list{
        width: 100%;
        height: 100%;
      overflow: hidden;
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
          .manage-bank{
           position: absolute;
            width: 80px;
            height: 100%;
            display: flex;
            align-items: center;
            top: 0;
            right: 16px;
            p{
              color: #9B9B9B;
              font-size: 30px;
            }
          }
         }
        .no-result{
            width: 100%;
            height: 644px;
            padding: 207px 173px 174px 173px;
            box-sizing: border-box;
            img{
                width: 404px;
                height: 260px;
            }
            p{
                font-size: 32px;
                color: #9B9B9B;
                text-align: center;
                margin: 45px 0 174px 0 ;
            }
        }
        .add-bank{
            height: 90px;
            width: 100%;
            text-align: center;
            position: relative;
            margin-bottom: 30px;
            button{
                background: #FFFFFF;
                border-radius: 10px ;
                border: 2px solid #979797;
                height: 90px;
                width: 680px;
                line-height: 90px;
                font-size: 34px;
                color: #4A4A4A;
            }
            span{
                display: block;
                width: 32px;
                height: 32px;
                line-height: 32px;
                position: absolute;
                left: 260px;
                top: 30px;
                font-size: 32px;
                font-weight: bolder;
            }
        }
        .has-bank{
            width: 100%;
            box-sizing: border-box;
            padding: 0 35px;
           margin: 30px 0;
            .banl-item{
                background: #6299F3;
                width: 100%;
                height: 203px;
                margin-bottom: 30px;
              .bank-img{
                width: 160px;
                float: left;
                height: 203px;
                display: flex;
                align-items:center;
                img{
                  display: block;
                  width: 106px;
                  height: 107px;
                  margin-left: 52px;
                }
              }
              .bank-infor{
               padding-left: 46px;
                float: left;
                width: 514px;
                box-sizing: border-box;
                padding-top: 40px;
                color: #fff;
                .bank-name{
                  font-size: 36px;
                  line-height: 28px;
                }
                .company-name{
                  line-height:36px;
                  font-size:28px;
                  margin: 16px 0 6px;
                }
                .card{
                  line-height:36px;
                  font-size:28px;
                  opacity: 0.6;
                }
              }
              .delete-bank{
                width: 166px;
                height: 203px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #e0e0e0;
                  float: right;
                p{
                  width: 106px;
                  font-size: 26px;
                  color: #8c8c8c;
                }
                span{
                  width: 38px;
                  height: 40px;
                  display: block;
                  background: url("./../assets/images/icon-shanchu.png") no-repeat;
                  background-size: 100% 100%;

                }
              }
              .delete{
                  background: #ff0000;
              }
            }

        }
    }
</style>
