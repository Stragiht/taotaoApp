<template>
  <div class="change-phone">
    <div class="header">
      <h2>更换验证手机</h2>
      <router-link to="/my/withdraw">
        <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
      </router-link>
    </div>
    <div class="phone">
      <div class="title">
         原手机号:
      </div>
      <div class="phone-number">
        15197294075
      </div>
    </div>
    <div class="phone">
      <div class="title">
        新手机号:
      </div>
      <div class="phone-number">
        <input type="text" placeholder="请输入号码" class="new-phone">
      </div>
    </div>
    <div class="phone">
      <div class="title">
        原手机号:
      </div>
      <div class="phone-number">
        <input type="text" placeholder="请输入号码" class="new-phone">
        <button class="get-code" @click="getCode">获取验证码</button>
      </div>
    </div>
    <div class="operate">
      <button >确认</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      getCode () {
        console.log('获取验证码')
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .change-phone{
    width: 100%;
    height: 100%;
    .header{
      height: 88px;
      line-height: 88px;
      background: #FFFFFF;
      text-align: center;
      position: relative;
      margin-bottom: 22px;
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
    .phone{
      width: 100%;
      height: 100px;
      line-height:100px;
      background: #FFFFFF;
      font-size: 26px;
      color: #232326;
      border-bottom: 1px solid #dedede;
      .title{
        box-sizing: border-box;
        width: 260px;
        height: 100px;
        line-height: 100px;
        padding-left: 32px;
        float: left;
      }
      .phone-number{
          .new-phone{
            width: 200px;
            border: none;
          }
        .get-code{
          border: none;
          background: #fff;
          font-size:28px;
          color: #5892D5;
          margin-left:100px;
        }
      }
    }
    .operate{
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 120px;
      button{
        width: 670px;
        height: 90px;
        background: #6399F3;
        border: none;
        border-radius: 4px;
        font-size: 34px;
        color: #fff;
      }
    }
  }
</style>
