<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style >
  #app{
    height: 100%;
    width: 100%;
   position: relative;
  }
</style>
<style type="text/less"  lang="less">
  .error-tip-warp {
    width: 100%;
    height: 100%;
    .err-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
    }
    .errot-tip-content {
      width: 520px;
      height: 240px;
      background: #FFFFFF;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 101;
      margin: -120px 0 0 -260px;
      .err-describe {
        font-family: PingFangSC-Medium;
        font-size: 34px;
        color: #3C3C3C;
        text-align: center;
        padding: 50px 0;
      }
      .error-btn-ok {
        font-family: PingFangSC-Medium;
        font-size: 34px;
        color: #3999FF;
        border-top: 1px solid #DDDDDD;
        height: 90px;
        line-height: 90px;
        text-align: center;
      }
    }
  }
  .success-tips-warp{
      width: 100%;
      height: 100%;
      .success-bg{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.4);
          z-index: 100;
      }
      .success-tips{
          font-family: PingFangSC-Regular;
          font-size: 28px;
          color: #FFFFFF;
          text-align: center;
          width: 460px;
          background: rgba(0,0,0,0.6);
          border-radius: 8px;
          height: 126px;
          line-height: 126px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -63px 0 0 -230px;
          z-index: 101;
      }
  }

  .alert {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      background: rgba(0, 0, 0, 0.2);
      align-items: center;
      justify-content: center;
      .content {
          width: 72%;
          background: #FFFFFF;
          border-radius: 24px;
          margin-top: -20%;
          opacity: 1;
          .title {
              height: 76px;
              line-height: 76px;
              font-size: 36px;
              color: #030303;
              letter-spacing: -0.82px;
              text-align: center;
          }

          .infor-text {
              padding: 0 30px 20px 30px;
              line-height: 60px;
              font-size: 28px;
              color: #56606F;
              position: relative;
              text-align: center;
          }

          .ok {
              width: 100%;
              height: 88px;
              text-align: center;
              line-height: 88px;
              font-size: 34px;
              color: #0076FF;
          }

      }
  }
  .fadeAlert-enter-active , .fadeAlert-leave-active  {
        transition: all 0.5s;
    }
  .fadeAlert-enter, .fadeAlert-leave-active  {
      transform: scale(0.7);

  }
  .fadeinfor-enter-active , .fadeinfor-leave-active  {
      transition: all 0.5s;
  }
  .fadeinfor-enter, .fadeinfor-leave-active  {
      transform: scale(0.7);

  }


</style>