<template>
	<div class="loadingWord">
		<span class="refresh">{{loadingWord}}</span>
	</div>
</template>

<script>
export default {
    props:{
    	loadingWord:{
    		type:String,
    		default:""
    	}
    } 

};
</script>

<style lang="less" type="text/less" scoped>
	.loadingWord{
		text-align: center;
		z-index: 100;
		width: 100%;
		height:1rem;
		line-height: 1rem;
		position: absolute;
		top: 50px;
        .refresh{
			vertical-align: middle;
			text-align: center;
			font-size: 32px;
		}
	}
</style>