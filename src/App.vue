<template>
  <div id="app">
    <router-view></router-view>
    <el-footer id="foot1"></el-footer>
  </div>
</template>

<script>
 import Footer from './components/Footer.vue'
export default {
  components:{
    "el-footer":Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
