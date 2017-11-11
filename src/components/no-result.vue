<template>
    <div class="no-result">
        <div class="result">
            <img src="./../assets/images/no-result.png" alt="">
            <p>暂无内容</p>
        </div>

    </div>
</template>
<script>

</script>
<style type="text/less" lang="less" scoped>
    .no-result{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .result{
            width: 70%;
            height: 25%;
            margin-top: -100px;
            img{
                width: 100%;
                height: 100%;
            }
            p{
                font-size: 36px;
                color: #8c8c8c;
                text-align: center;
                height: 60px;
                line-height: 60px;
            }
        }
    }
</style>