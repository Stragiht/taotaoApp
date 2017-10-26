<template>
	<div id="selectDropItem">
		<div class="js-mask"></div>
		<div id="datePicker" class="datePicker">
			<div class="datepicker-line"></div>
			<div class="btn-group clearfix">
				<a data-selector="cancel-btn" class="btn fl" href="javascript:;" v-on:click="cancleSel">取消</a>
				<a data-selector="complete-btn" class="btn fr complete-btn" href="javascript:;" v-on:click="completeSel">完成</a>
				<!--<a data-selector="clear-btn" class="btn tonow-btn" href="javascript:;"></a>-->
			</div>
			<div data-selector="datepicker-main" class="datepicker-main">
				<div data-selector="year-list" class="datepicker-list">
					<ul class="list-content">
						<li>建设银行</li>
						<li>平安银行</li>
						<li class="selected">浦发银行</li>
						<li>中国银行</li>
						<li>农业银行</li>
					</ul>
				</div>
	   		</div>
	  </div>
	</div>
	
</template>

<script>
	import $ from 'jquery'
	export default{
      methods: {
        close () {
          $('#selectDropItem').hide()
        },
        completeSel () {
          this.close()
        },
        cancleSel () {
          this.close()
        }
      }
    }
</script>

<style type="text/less" scoped lang="less">
.fl{float:left;}
.fr{float:right;}
.clearfix{zoom:1;}
.clearfix:after,.clearfix:before{display: block;width: 0;height: 0;line-height: 0;content:"";}
.clearfix:after{clear:both;}
.js-mask{
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 0px;
}
.datePicker {
    position: fixed;
    width: 100%;
    height: 588px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    text-align: center;
    padding: 10px;
    z-index: 9;
    box-sizing: border-box;
    font-size: 14px;
    
    .datepicker-line {
	    position: absolute;
	    border-top: 2px solid #3999FF;;
	    border-bottom: 2px solid #3999FF;;
	    width: 100%;
	    height: 98px;
	    left: 0;
	    top: 295px;
	}
	.btn-group {
	    height: 98px;
	    line-height: 98px;
	    overflow: hidden;
	    position: relative;
	    font-family: PingFangSC-Regular;
		font-size: 32px;
	    .btn {
		    padding: 5px 12px;
		    color: #9B9B9B;
		}
		.complete-btn {
			color: #232326;
		}
	}
	.datepicker-main{
		 .datepicker-list {
		    float: left;
		    position: relative;
		    height: 490px;
		    overflow: hidden;
		    width: 100%;
		    .list-content {
			    width: 100%;
			    li {
				    height: 98px;
				    line-height: 98px;
				    overflow: hidden;
				    font-family: PingFangSC-Medium;
					font-size: 33px;
					color: #BBBBB9;
					text-align: center;
				}
				.selected {
				    color: #3999FF;
				}
			}
		}
	}
}	
</style>