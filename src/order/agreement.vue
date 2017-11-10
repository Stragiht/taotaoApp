<template>
    <div class="agreenment">
        <div class="header mb20">
            <h2>保证够确认协议</h2>
            <router-link to="/my/bankList">
                <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
            </router-link>
        </div>
        <div class="content">
            <div class="shop-thing border-1px">
                <p>采购单位：<span>广东巨龙汽车服务有限公司</span></p>
                <p>采购账号： <span>广东巨龙汽车服务有限公司</span></p>
                <p>订单编号： <span>广东巨龙汽车服务有限公司</span></p>
                <p>订单商品：<span>广东巨龙汽车服务有限公司广东巨龙汽车服务有限公司广东巨龙汽车服务有限公司广东巨龙汽车服务有限公司广东巨龙汽车服务有限公司广东巨龙汽车服务有限公司</span></p>
            </div>
            <div class="order-infor border-1px">
                <p>商品金额：<span>￥2000</span></p>
                <p>物流费： <span>包邮</span></p>
                <p>订单总金额： <span>￥2000</span></p>
            </div>
            <div class="doc">
                <p>确认签署本电子文档，即代表操作者确认和承若以下内容：</p>
                <p>1、&nbsp;&nbsp;&nbsp;本操作正好【哈哈哈】经采购商[广东掏掏物流公司]授权在APTOTO平台采购以上商品</p>
                <p>2、&nbsp;&nbsp;&nbsp;本电子文档与纸质书面协议具备同等法律效应，使用于可能发生的交易纠纷导致的举证需求</p>
            </div>
        </div>
        <div class="operate">
            <span>操作</span>
        </div>
    </div>
</template>
<script>

</script>
<style type="text/less" lang="less" scoped>
    .agreenment{
        width: 100%;
        height: 100%;
        .header{
            width: 100%;
            height: 88px;
            line-height: 88px;
            background: #FFFFFF;
            text-align: center;
            position: absolute;
            left: 0;
            top:0;
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
            -webkit-overflow-scrolling: touch;
            margin-top: 88px;
            width: 100%;
            .shop-thing{
                height: auto;
                width: 100%;
                padding:24px 0 24px 50px ;
                background: #FFFFFF;
                box-sizing: border-box;
                border-bottom:1px solid #DEDEDE ;
              p{
                  font-size: 30px;
                  color: #9B9B9B;
                  line-height: 46px;
              }

            }
            .order-infor{
                padding:24px 0 24px 50px ;
                background: #FFFFFF;
                width: 100%;
                position: relative;
                height: 183px;
                box-sizing: border-box;
                p{
                    height: 46px;
                    line-height: 46px;
                    font-size: 32px;
                    color: #9B9B9B;
                }
            }
            .doc{
                padding: 24px 40px 24px 50px;
                background: #FFFFFF;
                box-sizing: border-box;
                border-bottom:1px solid #DEDEDE ;
                height: 368px;
                p{
                    font-size: 30px;
                    color: #9B9B9B;
                    line-height: 46px;

                }

            }
            .border-1px::after{
                flex: 1;
                width: 100%;
                background: #DEDEDE;
            }
        }
        .operate{
            width: 100%;
            height: 90px;
            position: absolute;
            left: 0;
            bottom: 60px;
            display: flex;
            align-items: center;
            justify-content:center;
            span{
                display: block;
                background: #6299F3;
                border: 1px solid #6299F3;
                border-radius: 4px;
                width: 89%;
                height: 90px;
                text-align: center;
                line-height:90px;
                font-size: 34px;
                color: #FFFFFF;
            }
        }
    }
</style>