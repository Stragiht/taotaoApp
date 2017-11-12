<template>
  <div class="loading">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script >
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="less" type="text/less">

  .loading{
    width: 100%;
    text-align: center;
    height:220px;
    background: #ffffff;
    .desc{
      color: #333333;
       padding-left: 50px;
       height:120px;
        line-height: 120px;
        width: 100%;
        font-size: 34px;
        box-sizing: border-box;
        background: url("./../assets/images/loading.gif") no-repeat 35% center;
        background-size: 50px 50px;
      }
  }


</style>
