<template>
    <div class="income">
        <header class="income-head">
            <router-link to="/my/ComWallet">
                <span class="income-return"></span>
            </router-link>
            收支明细
        </header>
          <scroll ref="scroll" :data="moneyData" @scrollToEnd="scrollToEnd" :pullup="pullup" :pulldown = "pulldown" @pulldown ="pulldownRefresh"
                  :listen-scroll="listenScroll" :probe-type="probeType"  v-if="hasData">
            <ul class="income-content">
              <li v-for="data in moneyData" >
                <div class="income-recharge-row clearfix">
                  <span class="recharge-l fl">{{data.type}}</span>
                  <span class="recharge-r fr">{{data.money}}</span>
                </div>
                <div class="income-recharge-row clearfix">
                  <span class="order-l fl">{{data.time}}</span>
                  <span class="order-r fr">{{data.number}}</span>
                </div>
              </li>
              <loading ></loading>
              <pulling-word  :loading="pullLoading"></pulling-word>

            </ul>
          </scroll>
        <no-result v-if="!hasData"></no-result>

    </div>
</template>

<script type="text/javascript">
  import Scroll from '@/components/scroll'
  import Loading from '@/components/loading'
  import NoResult from '@/components/no-result'
  import PullingWord from '@/components/pulling-word'
  import axios from 'axios'

  export default {
    components: {
      Scroll,
      Loading,
      NoResult,
      PullingWord
    },
    data () {
      return {
        probeType: 3,
        listenScroll: true,
        pullup: true,
        pulldown: true,
        show: false,
        hasData: true,
        moneyData: [],
        pullLoading: false
      }
    },
    mounted () {
      axios.get('../static/jsonData/test.json').then (data => {
        console.log(typeof data.data)
        this.moneyData = data.data
      })
    },
    methods: {
      scroll () {
        this.moneyData.push ({
          type: '充值',
          money: 1000,
          time: 2013 - 10 - 1,
          number: 'APDD-278887776655555'
        })

        setTimeout (() => {
          alert(1)
          this.show = false
        }, 5000)
      },
      scrollToEnd () {
        if(this.show){
           return
        }
        this.show = true
        this.scroll()
      },
      pulldownRefresh (value) {
        console.log(value)
        this.pullLoading = true
        setTimeout(() => {
          value[0]()
          console.log(this.$refs.scroll)
        }, 2000)
      }
    }
  }
</script>

<style scoped type="text/less" lang="less">
    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .clearfix {
        zoom: 1;
    }

    .clearfix:after, .clearfix:before {
        display: block;
        width: 0;
        height: 0;
        line-height: 0;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }
    .income {
        width: 100%;
        height: 100%;
        position: relative;
      background: #ffffff;
        .income-head {
            width: 100%;
            height: 88px;
            font-size: 32px;
            color: #FFFFFF;
            line-height: 88px;
            text-align: center;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            background: #6299F3;
            font-weight: bold;
            .income-return {
                display: inline-block;
                position: absolute;
                top: 26px;
                left: 32px;
                background: url(./../assets/images/Blueback-l01.png) no-repeat;
                background-size: 100% 100%;
                width: 19px;
                height: 36px;
            }
        }
        .income-content {
          position: absolute;
          top: 88px;
          left: 0;
          width: 100%;
          height: auto;
          -webkit-overflow-scrolling: touch;
          li {
            background: #FFFFFF;
            border-bottom: 1px solid #F5F5F5;
            padding: 25px 30px;
            .income-recharge-row {
              width: 100%;
            }
            .recharge-l {
              font-family: PingFangSC-Medium;
              font-size: 34px;
              color: #4A4A4A;
              display: inline-block;
              width: 50%;
              font-weight: bold;
            }
            .recharge-r {
              font-family: PingFangSC-Medium;
              font-size: 30px;
              color: #000000;
              line-height: 30px;
              display: inline-block;
              width: 50%;
              font-weight: bold;
              text-align: right;
            }
            .order-l, .order-r {
              font-family: PingFangSC-Regular;
              font-size: 24px;
              color: #6D6D6D;
              display: inline-block;
              width: 50%;
              padding: 5px 0;
            }
            .order-r {
              text-align: right;
            }
          }
        }


    }


</style>

