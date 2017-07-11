<template>
  <div>
    <div class="header">
        <div class="bgc">
          <div class="head-logo">
            <div class="search"></div>
          </div>
        </div>
        <div class="head-menu">
          <ul id="navUL" class="menuNavNewProduct" style="width: 800px;">
            <li class="selected"><a>首页</a></li><!--
            --><li class=""><a>新品</a></li><!--
            --><li class=""><a>家务</a></li><!--
            --><li class=""><a>下厨</a></li><!--
            --><li class=""><a>家居服</a></li><!--
            --><li class=""><a>生活</a></li><!--
            --><li class=""><a>软装</a></li><!--
            --><li class=""><a>床品</a></li><!--
            --><li class=""><a>工作和旅行</a></li><!--
            --><li class=""><a>了解LifeVC</a></li>
          </ul>
        </div>
    </div>
    <div class="wrap">
      <div class="banner">
        <mt-swipe :auto="4000" class="ul">
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner1.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner2.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner3.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner4.jpg" alt=""></a>
          </mt-swipe-item> <mt-swipe-item class="li">
          <img src="../img/Home/banner5.jpg" alt="">
        </mt-swipe-item>
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner6.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner7.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item class="li">
            <a href="#"><img src="../img/Home/banner8.jpg" alt=""></a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="img-wrap">
        <img src="../img/Home/huodongimg.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/xinpinshoufa.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/jifenhuangou.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/laohuiyuanbuhuo.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/48baonian.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/jiawu.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/xiachu.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/chuangping.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/jiajufu.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/shenghuo.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/gongzuohelvxing.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/zhazhiji.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/chuengnuo6nian.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/repinjinxuan.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/repinjingxuan1.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan2.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan3.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan4.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan5.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijignxuan6.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan7.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijignxuan8.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan9.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/424remaijingxuan10.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijingxuan11.jpg" alt="">
      </div>
      <div class="img-wrap">
        <img src="../img/Home/remaijignxuan12.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    position fixed
    top 0
    left 0
    background #ffffff
    z-index 100
    .bgc
      background: #89be48;
      height height 48px
      width 100%
      position relative
      .head-logo
        height 48px
        width 100%
        background: url('../img/Home/logo.png') no-repeat;
        background-size: 50%;
        background-position: 50%;
        position relative
        .search
          width 20px
          height 20px
          background url('../img/Home/search.png') no-repeat center / cover;
          position absolute
          right 10px
          top 13px

    .head-menu
      margin: 0 auto
      position: relative
      width: 100%
      height: 48px
      overflow: hidden
      z-index: 1
      .menuNavNewProduct
         height: 48px
         overflow: hidden
         font-size 1.35rem
         box-sizing: border-box
         position: relative
         z-index: 1

         line-height: 48px
         .selected
           border-bottom  1px solid greenyellow
           a
            color #80b532
         li
           display: inline-block
           text-align: center
           width: 80px
           height 48px
           overflow: hidden
           right :0 !important
           border-bottom  1px solid #ddd
           a
            color #333
  .wrap
    padding-top 96px
    .banner
      width 100%
      height 250px
      overflow hidden
      .ul
        /*height 100%*/
        .mint-swipe-indicator
          background-color: #fff
          opacity: 1
          width: 8px;
          height: 8px;
        .is-active
          background-color #8EC051
        .li
          height 100%
          img
            display block
            width 100%
            height 101%
    .img-wrap
      width 100%
      img
        width  100%
</style>
