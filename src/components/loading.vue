<template>
  <div class="loading">
    <img width="24" height="24" src="./../assets/images/loading.gif">
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
    .desc{
      line-height: 34px;
      height: 34px;
      width: 100%;
      font-size: 24px;
      color: #333333;
    }
  }


</style>
