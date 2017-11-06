<template>
    <div class="pay-ammount-cont">
        <header class="pay-ammount-head">
            <span class="pay-ammount-return"></span>
            充值
        </header>
        <div class="set-ammount-area">
            <p class="set-top">充值金额</p>
            <div class="set-ammount">
                <span></span>
                <input type="text" class=""/>
            </div>
        </div>
        <p class="pay_tips">充值手续费2元/笔，从充值金额中内扣</p>
        <button class="pay-ammount-btn" @click="next()">充值</button>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        value: false,
        actions: [{'name': 'paizhao', method: this.callback}]
      }
    },
    mounted () {
    },
    methods: {
      next () {
        this.popupVisible = true
        this.$toaster('1werwerwrwer1', 2000)
      }
    }
  }
</script>

<style>
    .pay-ammount-cont {
        width: 100%;
        height: 100%;
    }

    .bank-list {
        width: 750px;
        height: 100%;
    }

    .pay-ammount-head {
        height: 68px;
        padding: 10px 0;
        font-size: 32px;
        color: #232326;
        line-height: 68px;
        text-align: center;
        position: relative;
        background: #FAFAFA;
        box-shadow: 0 1px 0 0 #E1E1E1;
        font-weight: bold;
    }

    .pay-ammount-return {
        display: inline-block;
        position: absolute;
        top: 26px;
        left: 32px;
        background: url(./../assets/images/icon_fanhui.png) no-repeat;
        background-size: 100% 100%;
        width: 38px;
        height: 36px;
    }

    .set-ammount-area {
        background: #FFFFFF;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        margin: 48px 40px 5px;
        padding: 36px 44px;
    }

    .pay_tips {
        font-size: 26px;
        padding: 20px 40px;
        color: #9B9B9B;
    }

    .set-top {
        font-size: 28px;
        color: #000000;
        font-weight: bold;
    }

    .set-ammount {
        margin: 26px 0px 0;
    }

    .set-ammount span {
        display: inline-block;
        width: 58px;
        height: 58px;
        margin: 0 22px 0 0;
        background: url(./../assets/images/icon_renmingbi.png) no-repeat;
        background-size: 100% 100%;
    }

    .set-ammount input {
        display: inline-block;
        width: 80%;
        height: 106px;
        border: 0;
    }

    .pay-ammount-btn {
        display: block;
        width: 90%;
        background: #6299F3;
        border-radius: 4px;
        color: #FFFFFF;
        margin: 90px 40px 0;
        font-size: 34px;
        text-align: center;
        height: 90px;
        line-height: 90px;
        border: 0;
    }

    .mint-actionsheet-listitem {
        height: 100px;
    }
</style>

