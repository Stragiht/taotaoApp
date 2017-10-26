<template>
    <div class="common">
      <!--  <button @click="jump" style="position: fixed;left: 10px;top: 10px;color: green;z-index: 10">按钮啊哈哈哈</button>-->
        <router-view/>
    </div>
</template>
<script>
  /*
  export default {
    data () {
      return {}
    },
    methods: {
      jump () {
        this.$router.push('/my/ReceiveMoney')
      }
    }
  }
  */
</script>
<style type="text/css">
    .common{
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>