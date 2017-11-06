<template>
    <ul class="footer">
        <li @click="jumpUrl('index')" :class="type == 'index' ?  'isSelect' : ''">
            <i class="icon-shouye iconfont"></i>
            <span>首页</span>
        </li>
        <li @click="jumpUrl('release')"  :class="type == 'release' ?  'isSelect' : ''">
            <i class="icon-xunjia1 iconfont"></i>
            <span>发布询价</span>
        </li>
        <li @click="jumpUrl('inquiryList')" :class="type == 'inquiryList' ?  'isSelect' : ''">
            <i class="iconfont icon-xunjiadan"></i>
            <span>询价单</span>
        </li>
        <li @click="jumpUrl('my')" :class="type == 'my' ?  'isSelect' : ''">
            <i class="iconfont icon-wo"></i>
            <span >我的</span>
        </li>
    </ul>
</template>
<script>
  export default {
    data () {
        return {
          type:'my'
        }
    },
    methods: {
      jumpUrl (type) {
        this.type = type
        switch (type){
          case 'index':
            window.location.href = 'http://183.6.133.107:8050/apps.aptoto.www/views/index/index.html'
            break
          case 'release':
            window.location.href = 'http://183.6.133.107:8050/apps.aptoto.www/views/inquiry/releaseB.html'
            break
          case 'inquiryList':
            window.location.href = 'http://183.6.133.107:8050/apps.aptoto.www/views/inquiry/list.html'
            break
          case 'my':
            this.router.push({path: '/my/myInfor'})
            break
        }
      }
    }
  }
</script>
<style lang="less" scoped type="text/less">
    .footer{
        position: absolute;
        bottom: 0;
        height: 98px;
        width: 100%;
        background: #FFFFFF;
        overflow: hidden;
        display: flex;
        align-items: center;
        li{
            flex: 1;
            text-align: center;
            .iconfont{
                display: block;
                margin: 10px 0;
                font-size: 30px;
            }
            span{
                font-size: 22px;
                color: #56606F;
                line-height: 22px;
            }
        }
        .isSelect{
            color: #6299F3;
            span{
                color: #6299F3;
            }
        }
    }
</style>