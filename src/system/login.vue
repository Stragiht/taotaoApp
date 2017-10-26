<template>
    <div class="login">
        <div class="logo">
            <img src="./../assets/images/logo.png" alt="">
        </div>
        <div class="content">
            <div class="login-item">
                <label>用户名</label>
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="login-item">
                <label>密 &nbsp;码</label>
                <input type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="operate cnter">
            <button disabled>登录</button>
        </div>

        <router-link to="/system/forgetPsw">
            <div class="forget">
                <button class="forget-psw">忘记密码</button>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {}
</script>
<style type="text/less" lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #FFFFFF;
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 420px;
            img{
                display: block;
                width: 390px;
                height: 110px;
            }
        }
        .content{
            height: auto;
            width: 100%;
            margin: 20px 100px 70px 100px;
            .login-item{
                width: 73%;
                border-bottom: 1px solid #D6D6D6;
                box-sizing: border-box;
                height: 59px;
                margin-bottom: 30px;
                input{
                    border: none;
                    font-size: 28px;
                    height: 58px;
                    line-height: 58px;

                }
                input::-webkit-input-placeholder {
                    color: #8D8D8D;
                }
                label{
                    font-size: 28px;
                    color: #8D8D8D;
                    height: 58px;
                    line-height: 58px;
                    width: 134px;
                    float: left;
                }
            }

        }
        .operate{
            margin-top: 42px;
            button{
                width: 330px;
                height: 94px;
                text-align: center;
                background-color: #6299F3;
                border-radius: 50px;
                font-size: 32px;
                border: 0;
                outline: none;
                margin: 0 auto;
                color: #fff;
            }
            button[disabled]{
               opacity: 0.4;
            }
        }
        .forget{
            position: absolute;
            left: 0;
            width: 100%;
            bottom:70px;
            height: 28px;
            text-align: center;
            line-height: 28px;
        }
        .forget-psw{
            color: #ABA9AA;
            border: none;
            background: #fff;
            font-size: 28px;
        }
    }

</style>