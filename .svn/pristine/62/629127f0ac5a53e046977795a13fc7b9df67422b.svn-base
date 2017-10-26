<template>
    <div class="change-phone">
        <div class="header">
            <h2>修改手机号</h2>
            <router-link to="/system/login">
                <img class="back" src="./../assets/images/icon_fanhui.png" alt="">
            </router-link>
        </div>
        <div class="process">
            <div class="process-item ">
                <p >验证身份</p>
                <span class="ball-active">
                    <i class="ball"></i>
                </span>
            </div>
            <div class="circle">
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
            </div>
            <div class="process-item ">
                <p class="new-phone">验证新手机</p>
                <span >
                    <i></i>
                </span>
            </div>
            <div class="circle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="process-item mr0">
                <p>绑定成功</p>
                <span>
                    <i ></i>
                </span>
            </div>
        </div>
        <div class="content">
            <div class="psw-item">
                <label>用户名</label>
                <input type="text" placeholder="请输入用户名">
                <span>x</span>
            </div>
            <div class="phone">
                <div class="psw-item check-code">
                    <label>验证码</label>
                    <input type="text" placeholder="请输入验证码" class="code">
                    <span class="delete-code">x</span>
                </div>
                <button class="get-code">获取验证码</button>
            </div>
            <div class="phone-infor">
                <p>验证码已发送至<span class="yellowcolor">15197294075</span>，请注意查收</p>
            </div>
        </div>
        <div class="operate">
            <router-link to="/system/setNewPhone">
                <button >下一步</button>
            </router-link>
        </div>
    </div>
</template>
<script>

</script>
<style type="text/less" lang="less" scoped>
    .change-phone{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #fff;
        .header{
            height: 88px;
            line-height: 88px;
            background: #F5F5F5;
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
        .process{
            box-sizing: border-box;
            width: 100%;
            height: 82px;
            display: flex;
            margin: 80px 0 130px 0;
            padding:0 30px ;
            justify-content: center;
            .process-item{
                height: 82px;
                flex: 1;
                position: relative;
                p{
                    font-size: 28px;
                    line-height: 30px;
                    height: 30px;
                    margin-top: 50px;
                    color: #8D8D8D;
                    text-align: center;
                }
                span{
                    width:44px;
                    height: 44px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    left:35%;
                    top:-10px;
                    background: rgba(191,191,191,0.22);
                    i{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        display: block;
                        background-color:rgba(191,191,191,0.8);
                        position: absolute;
                        left:15%;
                        top:6px;
                    }
                    .ball{
                        background-color:rgba(86,209,118,0.8)
                    }
                }
                .ball-active{
                    background-color:rgba(86,209,118,0.2);
                }
                .new-phone{
                    width: 150px;
                }

            }
            .circle{
                flex: 1;
                width: 70px;
                height: 82px;
                text-align: center;
                span{
                    background: #BFBFBF;
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
                .ball{
                    background-color:rgba(86,209,118,0.8)
                }
            }
            .mr0{
                margin-right: 0;
            }

        }
        .content{
            padding: 30px 20px 0 30px;
            .psw-item{
                width: 100%;
                height: 89px;
                position: relative;
                border-bottom: 1px solid  #D6D6D6;
                position: relative;
                label{
                    height: 88px;
                    line-height: 88px;
                    float: left;
                    width: 172px;
                    font-size: 28px;
                    color: #8D8D8D;
                }
                input{
                    border: none;
                    font-size: 28px;
                    height: 88px;
                    line-height: 88px;

                }
                input::-webkit-input-placeholder {
                    color: #8D8D8D;
                }
                span{
                    position: absolute;
                    display: block;
                    width: 28px;
                    height: 28px;
                    border-radius:28px;
                    background: #cccccc;
                    right: 0;
                    top:30px;
                    line-height: 28px;
                    text-align: center;
                    opacity: 0.5;
                }
                .code{
                    width: 330px;
                    border-bottom: 1px solid  #D6D6D6;
                }
                .delete-code{
                    position: absolute;
                    right: 10px;
                    top:30px;
                }
            }
            .phone{
                width: 100%;
                height: auto;
                overflow: hidden;
                .check-code{
                    border: none;
                    position: relative;
                    width: 510px;
                    float: left;
                    label{
                        border-bottom: 1px solid  #D6D6D6;
                    }
                }
                .get-code{
                    width: 190px;
                    height: 60px;
                    margin-top: 20px;
                    font-size: 26px;
                    color: #56D176;
                    float: left;
                    text-align: center;
                    border-radius:100px 100px;
                    background-color:#FFFFFF;
                    border: 2px solid #56D176;
                }
            }
            .phone-infor{
                font-size: 28px;
                color: #8D8D8D;
                line-height: 28px;
                margin-top: 30px;
                height: 28px;
                .yellowcolor{
                    color:#fe7730;
                }
            }
        }
        .operate{
            width: 100%;
            height: 88px;
            display: flex;
            justify-content: center;
            margin-top: 190px;
            button{
                border: none;
                height: 88px;
                line-height: 88px;
                text-align: center;
                width: 330px;
                background: #6299F3;
                border-radius: 100px;
                font-size: 32px;
                color: #FFFFFF;
            }
            button[disabled]{
                opacity: 0.4;
            }
        }
    }
</style>