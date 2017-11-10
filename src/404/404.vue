<template>
   <div class="lost">
        <div class="icon">
            <img src="./../assets/images/lost.png" alt="">
        </div>
       <div class="lost-content">
           <p>抱歉您查找的页面无法打开请返回首页</p>
       </div>
       <div class="operate">
           <span>返回首页</span>
       </div>
   </div>
</template>
<style type="text/less" lang="less" scoped>
    .lost{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #FFFFFF;
        .icon{
            width: 100%;
            height: 550px;
            margin-top: 120px;
            display: flex;
            align-items: center;
            justify-content:center;
            img{
                width: 74%;
                height: 440px;
            }
        }
        .lost-content{
            width: 100%;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content:center;
            p{
                width: 55%;
                height: 90px;
                text-align: center;
                font-size: 32px;
                color: #9B9B9B;
            }
        }
        .operate{
            width: 100%;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content:center;
            margin-top: 130px;
            span{
                display: block;
                width: 55%;
                height: 90px;
                background: #ABD7FD;
                border-radius: 10px;
                font-size: 32px;
                color: #2975C8;
                text-align: center;
                line-height: 90px;
            }
        }
    }
</style>