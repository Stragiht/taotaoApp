<template>
    <div class="safe">
        <div class="header">
            <h2>安全中心</h2>
            <router-link to="/system/login">
                <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
            </router-link>
        </div>
        <div class="content">
            <div class="item">
                <div class="title">
                    登录账号
                </div>
                <div class="infor">
                    王国顺
                </div>
            </div>
            <div class="item mb30">
                <div class="title">
                    登录账号
                </div>
                <div class="infor">
                    王国顺
                </div>
            </div>

        </div>
        <div class="content">
            <div class="item">
                <div class="title">
                   <p> 修改密码</p>
                </div>
                <div class="change">
                    <i class="icon iconfont icon-tiaozhuan"></i>
                </div>
            </div>
            <div class="item mb30">
                <div class="title">
                    绑定手机号
                </div>
                <div class="infor">
                  <div class="phone">123123123123</div>
                    <i class="icon iconfont icon-tiaozhuan"></i>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

</script>
<style type="text/less" scoped lang="less">
    .safe{
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
                font-weight: 400;
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
            margin-top: 30px;
            box-sizing: border-box;
            padding-left: 30px;
            background: #FFFFFF;
            .item{
                height: 90px;
                line-height: 88px;
                box-sizing: border-box;
                padding-right: 30px;
                width: 720px;
                overflow: hidden;
                border-bottom: 2px solid #F5F5F5 ;
                .title{
                    float: left;
                    font-size: 28px;
                    color: #333333;
                }
                .infor{
                    float: right;
                    font-size: 28px;
                    color: #8D8D8D;
                    .phone{
                        display: inline-block;
                    }
                }
                .change{
                    float: right;
                    i{
                        color: #ADADAD;
                    }
                }
            }
        }
    }
</style>