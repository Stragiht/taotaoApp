<template>
    <div>
        <div class="header">
            <div class="company-logo">
                <img src="./../assets/images/comPany.png" alt="">
            </div>
            <div class="company-infor">
                <h5>广州顺大汽配有限公司</h5>
                <div class="infor">
                    <p>企业信用评级分:</p>
                    <div class="credit">
                        789
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title mb20">
             <router-link to="/my/ComWallet">
              <i class="icon  bgColor iconfont icon-qianbao" style=" color:#23D2AB"></i>
             <h3>钱包</h3>
                <i class="icon jump iconfont icon-tiaozhuan"></i>
             </router-link>
            </div>
            <div class="title border">
                <a href="http://183.6.133.107:8050/apps.aptoto.www/views/order/list.html">
                    <i class="icon  bgColor iconfont icon-kuaixun" style="color:  #1CCCFF;"></i>
                    <h3>我的订单</h3>
                    <i class="icon jump iconfont icon-tiaozhuan"></i>
                </a>

            </div>
            <div class="title mb20">
                <a href="http://183.6.133.107:8050/apps.aptoto.www/views/news/newsmsg.html">
                    <i class="icon  bgColor iconfont icon-xinxi" style="color:  #1CCCFF;"></i>
                    <h3>我的消息</h3>
                    <i class="icon jump iconfont icon-tiaozhuan"></i>
                </a>
            </div>
            <div class="title border ">
                <i class="icon  bgColor iconfont icon-huodong" style="color:  #FFD242;"></i>
                <h3>活动中心</h3>
                <i class="icon jump iconfont icon-tiaozhuan"></i>
            </div>
            <div class="title border">
                <i class="icon  bgColor iconfont icon-wo-bangzhu" style="color:   #F1B18E;"></i>
                <h3>帮助中心</h3>
                <i class="icon jump iconfont icon-tiaozhuan"></i>
            </div>
            <div class="title">
                <i class="icon  bgColor iconfont icon-shezhi" style="color: #929FB1;"></i>
                <h3>设置</h3>
                <i class="icon jump iconfont icon-tiaozhuan"></i>
            </div>
        </div>
        <V-footer></V-footer>
    </div>
</template>
<script>
  import VFooter from '@/components/VFooter'
  const order_max_size=30;
  let currentPage=1; //当前页
  let totalPage=1;

  export default {
    components: {
      VFooter
    },
    mounted(){
      this.$api_http({
        url : '/order/myOrder/list',
        type:"GET",
        data: {
          pageNO: currentPage,
          status: 0,
          pageSize: order_max_size,
        },
        success: (ren) => {
          let data = ren.data;
          console.log(ren)
        },
        error: ()=> {}
      });
    }
  }
</script>
<style type="text/less" scoped lang="less">
    .header{
        width: 100%;
        height: 342px;
        background: url("./../assets/images/bg.png") no-repeat;
        position: relative;
        background-size: 100% 100%;
        margin-bottom: 24px;
        .company-logo{
            width: 132px;
            height: 132px;
            position: absolute;
            left: 34px;
            bottom: 108px;
            img{
                width: 100%;
                height:100%;
            }
        }
        .company-infor{
            width: 460px;
            height:224px;
            position: absolute;
            left: 190px;
            top: 118px;
            h5{
                font-size: 30px;
                color: #FFFFFF;
                line-height: 28px;
                width: 100%;
                margin-bottom: 18px;
            }
            .infor{
                height: 54px;
                width: 100%;
                line-height: 54px;
                p{
                    opacity: 0.8;
                    font-size: 28px;
                    color: #FFFFFF;
                    float: left;
                }
                .credit{
                    opacity: 0.7;
                    font-size: 50px;
                    color: #FFFFFF;
                }
            }
        }
    }
    .content{
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

            }

        }
        .border{
            box-shadow: 0 1px 0 0 #D7D7D7;
            border-bottom: 1px solid #F5F5F5;
        }

    }
</style>