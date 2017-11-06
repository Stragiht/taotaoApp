<template>
    <div class="add-bank">
        <div class="header mb20">
            <h2>绑定银行卡</h2>
            <router-link to="/my/bankList">
                <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
            </router-link>
        </div>
        <div class="content">
            <div class="bank-item">
                <p>姓名 *</p>
                <input type="text" placeholder="请输入姓名">
            </div>
            <div class="bank-item">
                <p>身份证号码 *</p>
                <input type="text" placeholder="请输入身份证号码">
            </div>
            <div class="bank-item">
                <p>银行名称 *</p>
                <group>
                    <popup-picker :title="title2" :data="list1" v-model="value2"></popup-picker>
                </group>
            </div>
            <div class="bank-item">
                <p>银行卡号 *</p>
                <input type="text" placeholder="请绑定与姓名一致的卡号">
            </div>
            <div class="bank-item">
                <p>银行预留手机号 * </p>
                <input type="text" placeholder="请输入银行预留手机号">
            </div>
            <div class="bank-item">
                <p>手机验证码 * </p>
                <input type="text" class="code" placeholder="请输入手机验证码">
                <button class="getCode"> 获取验证码</button>
            </div>
        </div>

        <div class="operate">
            <button @click="subimtInfor">操作</button>
        </div>
        <!--<select-drop></select-drop>-->

    </div>
</template>
<script>
  import { PopupPicker, Group } from 'vux'
  export default {
    components: {
      PopupPicker,
      Group
    },
    data () {
      return {
        pickerValue: '',
        title2: '请选择银行卡',
        list1: [['小米1111111111', 'iPhone111111', '华为1111111111', '情怀1111111111', '三星111111', '其他1111111', '不告诉你11111111111']],
        value2: []
      }
    },
    methods: {
      subimtInfor () {
        this.$router.push({path: '/my/bankList'})
      }
    }
  }
</script>
<style type="text/less" lang="less" scoped>
    .add-bank{
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
            box-sizing: border-box;
            padding: 20px 46px 0 44px;
            width: 100%;
            background: #fff;
            height: 944px;
            .bank-item{
                p{
                    height: 42px;
                    line-height: 42px;
                    font-size: 30px;
                    color: #5E5E5E;
                    margin-bottom: 10px;
                    span{
                        font-size: 42px;
                        color: #5E5E5E;
                    }
                }
                input{
                    border: 2px solid #D8D8D8;
                    width: 660px;
                    font-size: 28px;
                    color: #040404;
                    letter-spacing: 2px;
                    padding-left: 13px;
                    box-sizing: border-box;
                    margin-bottom: 30px;
                    height: 68px;
                }
                .code{
                    width: 360px;
                    margin-right: 30px;
                }
                .getCode{
                    width: 260px;
                    height: 76px;
                    background: #FFFFFF;
                    border: 2px solid #D8D8D8;
                    box-sizing: border-box;
                    font-size: 28px;
                    color: #5E5E5E;
                }
            }
        }
        .operate{
            padding: 61px 46px 0 44px;
            text-align: center;
            button{
                width: 670px;
                height: 90px;
                background: #6299F3;
                border-radius: 4px;
                font-size: 34px;
                color: #FFFFFF;
              border: none;
            }
        }
    }
</style>
