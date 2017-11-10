<template>
    <div class="login">
        <div class="logo">
            <img src="./../assets/images/logo.png" alt="">
        </div>
        <div class="content">
            <div class="login-item">
                <label>用户名</label>
                <input type="text" placeholder="请输入用户名" v-model="user.username">
            </div>
            <div class="login-item">
                <label>密 &nbsp;码</label>
                <input type="password" placeholder="请输入密码"  v-model="user.password">

            </div>
        </div>
        <div class="operate cnter">
            <button :disabled="disabled" @click="login">登录</button>
        </div>

        <div class="forget">
            <button class="forget-psw">忘记密码</button>
        </div>

    </div>
</template>
<script>
    import {Login} from './../api/login.class'
    import Fn from './../api/function.class'
    export default {
      data(){
        return{
          disabled:false,
          user:{
            username:'',
            password:''
          }
        }
      },
      mounted(){
        this.user.username = Fn._localStorage('remember')
        console.log(Fn._localStorage('remember'))
        this.user.password = Fn._localStorage('password')
      },
      methods:{
        login(){
          Login._login(this.user.username,this.user.password, () => {
            Fn._localStorage('remember',this.user.username); //记住账号
            Fn._localStorage('password',this.user.password); //记住账号
            console.log(1)
          } , () => {
            console.log(1)
          });
        }
      }
    }
</script>
<style type="text/less" lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        position: absolute;
        left: 0;
        top:0;
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
            padding: 20px 100px 70px 100px;
           box-sizing: border-box;
            .login-item{
                width: 100%;
                border-bottom: 1px solid #D6D6D6;
                box-sizing: border-box;
                height: 60px;
                line-height: 58px;
                margin-bottom: 30px;
                input{
                    border: none;
                    font-size: 28px;
                    height: 58px;
                    line-height: 58px;
                    float: left;

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
            width: 100%;
            margin-top: 200px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            .forget-psw{
                color: #ABA9AA;
                border: none;
                background: #fff;
                font-size: 28px;
                width: 100%;
            }
        }


    }

</style>