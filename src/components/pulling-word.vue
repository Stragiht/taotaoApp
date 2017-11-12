<template>
	<div class="loadingWord">
		<div class="refresh">
      <p v-if="!loading">下拉可以刷新</p>
      <p class="load" v-if="loading">正在加载中...</p>
    </div>
	</div>
</template>

<script>
export default {
  props: {
    loading: {
      Type: Boolean,
      default: false
    }
  }

};
</script>

<style lang="less" type="text/less" scoped>
	.loadingWord{
    position: absolute;
    left:0;
    top:-88px;
    width: 100%;
    height: 80px;
    line-height: 80px;
    .refresh{
      text-align: center;
      height:80px;
      line-height: 80px;
      width: 100%;
      font-size: 34px;
      .load{
        padding-left: 50px;
        height:80px;
        line-height: 80px;
        width: 100%;
        font-size: 34px;
        box-sizing: border-box;
        background: url("./../assets/images/loading.gif") no-repeat 35% center;
        background-size: 50px 50px;
      }
    }
	}
</style>
