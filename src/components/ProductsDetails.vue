<template>
  <div>
    <div class="prod-header">
      <div class="header-content">
           <span class="btn-back">
             <label class="leftback-img">
             </label>
           </span>
        <p class="header-title">商品介绍</p>
      </div>
    </div>
    <div class="prod-wrap">
      <div class="top-wrap">
        <div class="banner">
          <mt-swipe :auto="4000" class="ul">
            <mt-swipe-item class="li">
              <a href="#"><img
                src="http://i.lifevccdn.com/upload/AppItemHeaders/0ee3dc9cdd604e9ba4619eb77f705d51_d1242x0.jpg"
                alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item class="li">
              <a href="http://i.lifevccdn.com/upload/AppItemHeaders/598c290cd1e945079ecae8c4e7f97232_d1242x0.jpg"><img
                src="../img/Home/banner2.jpg" alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item class="li">
              <a href="#"><img
                src="http://i.lifevccdn.com/upload/AppItemHeaders/5810778b859141baba39d455ed5f76b3_d1242x0.jpg"
                alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item class="li">
              <a href="#"><img
                src="http://i.lifevccdn.com/upload/AppItemHeaders/6d599a4a3ecc4e7bb7b96a14b95294a4_d1242x0.jpg"
                alt=""></a>
            </mt-swipe-item>
            <mt-swipe-item class="li">
              <img src="http://i.lifevccdn.com/upload/AppItemHeaders/fc690fd253c140dca3bed6f80686597d_d1242x0.jpg" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="item-price">
          <div class="title">全棉舒适四件套(绵羊)</div>
          <p class="des">美好夜晚，数着绵羊入睡</p>
          <div class="price-cntr" style="text-align: center;">
            <em class="icon-money-larger activity-price-color">¥</em>
            <em class="price-money-larger activity-price-color">229</em>
            <span class="normalprice-wrap">
              <em class="icon-money-smaller normal-price-color">¥</em>
              <em class="price-money-smaller normal-price-color">279</em>
              <span class="line"></span>
            </span>
          </div>
          <div class="price">
            <div class="lable-wrap">
              <span class="promo-lable" style="color: rgb(0, 0, 0); background: rgb(254, 209, 9);">限时体验价</span>
              <span class="promo-lable" style="color: rgb(253, 238, 238); background: rgb(205, 6, 15);">新</span>
            </div>
          </div>
        </div>
        <div class="promoWrap">
          <div class="promo-item">
            <div>
              <span class="tag-promo bgred">优惠</span>
              <span class="m-txt red">登录查看你的积分和优惠券</span>
            </div>
          </div>
        </div>
        <div class="GroupAttrs">
          <div class="wrap-spec Warp-Props">
            <table width="100%">
              <tr>
                <td>
                  <div class="font-medium attrtitle">尺寸：</div> <!---->
                  <div class="font-small item selected">
                    <span class="spec-txt">适合1.2米宽（单人）床</span>
                    <span class="state" style="display: none;">正常售卖</span>
                    <i></i></div>
                  <div class="font-small item"><span class="spec-txt">适合1.5米宽（五尺）床</span>
                    <span class="state" style="display: none;">正常售卖</span>
                    <i></i>
                  </div>
                  <div class="font-small item">
                    <span class="spec-txt">适合1.8米宽（六尺）床</span>
                    <span class="state" style="display: none;">正常售卖</span>
                    <i></i>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="spec-amount">
          <div  class="wrap-spec">
            <span  class="num-tt" style="color: rgb(107, 107, 107);">数量：</span>
            <span  class="wrap-num">
              <button  class="des"></button>
              <span  class="ipt-num">1</span>
              <button  class="inc"></button>
            </span>
          </div>
        </div>
        <div class="deliveryPanel">
          <div data-v-3520427c="" class="wrap-spec">
            <span data-v-3520427c="" class="delivery-tt" style="color: rgb(107, 107, 107); visibility: visible;">送至：</span>
            <div data-v-3520427c="" class="deliver-cont">
            上海(满￥99免运费)
            <p data-v-3520427c="" class="deliver-promo" style="padding-top: 4px; color: rgb(204, 0, 0);">
              <span data-v-3520427c="">
                    新会员首单，满69元免运费
              </span>
            </p>
              <p data-v-3520427c="" class="serv-time" style="display: none;"></p>
              <p data-v-3520427c="" class="serv-time" style="display: none;"></p>
            </div>
          </div>
        </div>
        <div class="general-info">
          <div data-v-3520427c="" class="huodongcenter">
            <img data-v-3520427c="" src="http://i.lifevccdn.com/upload/combinationchart/8790d2e3fe9b4440afaeff14ca3a2a45.jpg" usemap="#planetmap0">
            <map data-v-3520427c="" name="planetmap0" id="planetmap0">
              <area data-v-3520427c="" shape="rect" coords="0,2,375,101">
            </map>
          </div>
          <div data-v-3520427c="" class="huodongcenter">
            <img data-v-3520427c="" src="http://i.lifevccdn.com/upload/combinationchart/dc678db46c3b45b184a07930bb294647.jpg" usemap="#planetmap1">
            <map data-v-3520427c="" name="planetmap1" id="planetmap1">
              <area data-v-3520427c="" shape="rect" coords="0,0,375,190">
            </map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .prod-header
    padding: 0;
    width: 100%;
    background: #89be48;
    position fixed
    top: 0;
    z-index: 999;
    margin: auto;
    .header-content
      width: 100%;
      margin: 0 auto;
      position: relative;
      height 40px
      .btn-back
        height: 40px;
        width: 10%;
        position: absolute;
        left: 0;
        top: 0;
        .leftback-img
          left: 30%;
          width: 10px;
          height: 26px;
          top: 7px;
          background-position-y: center;
          display: block;
          float: left;
          background: url('../img/ProductsDetails/back.png') no-repeat;
          position: absolute;
      .header-title
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0 auto;

  .prod-wrap
    padding-top 40px
    padding-bottom 60px
    .top-wrap
      .banner
        width 100%
        height 375px
        overflow hidden
        .ul
          height 100%
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
              height 100%
      .item-price
        height 92px
        padding: 20px 0 17px;
        .title
          padding: 0;
          text-align: center;
          font-size: 20px;
          color: #000;
          height: 20px;
          line-height: 20px;
        .des
          text-align: center;
          font-size: 15px;
          color: #999;
          height: 15px;
          line-height: 15px;
          margin-top: 7px;
        .price-cntr
          text-align: center;
          font-family: PingFangSC-Regular, Microsoft YaHei, Arial, Verdana, Tahoma, Helvetica, "sans-serif";
          font-size: 0;
          height: 22px;
          line-height: 22px;
          margin-top: 10px;
          .icon-money-larger
            font-size: 17px;
            color: #c00;
            font-style: normal;
          .price-money-larger
            font-size: 22px;
            margin-left: 2px;
            font-style: normal;
            color: #c00;
          .normalprice-wrap
            position: relative;
            display: inline-block;
            height: 100%;
            margin-left: 5px;
            padding: 0 3px;
            .icon-money-smaller
              font-size: 15px;
              color: #000;
              font-style: normal;
            .price-money-smaller
              font-size: 20px;
              color: #000;
              font-style: normal;
            .line
              position: absolute;
              top: 50%;
              left: 0;
              width: 100%;
              height: 1px;
              background: #000;

        .price
          padding: 0;
          height 17px
          border: 0
          .lable-wrap
            text-align: center;
            margin: 1px auto 0;
      .promoWrap
        border-top: 1px solid #ddd;
        padding: 5px 0;
        margin-left: 7px;
        background-color: #fff
        .promo-item
          padding: 5px 0;
          font-size: 14px;
          position: relative;
          width: 100%;
          .tag-promo.bgred
            display: inline-block;
            background: #cd060f;
            color: #fff;
            zoom: .5;
            border: 0;
            font-size: 24px;
            line-height: normal;
            padding: 0 3px;
          .m-txt
            font-size: 12px;
            height: 22px;
            line-height: 22px;
            padding-left: 7px;
      .GroupAttrs
        padding: 0;
        margin-top: 0;
        font-size: 13px;
        height: 119px;
        margin-left: 7px;
        border-top: 1px solid #ddd;
        color: #6b6b6b;
        .wrap-spec
          margin-top: 15px;
          padding: 0;
          position: relative;
          table
            overflow hidden
            width 100%
            .font-medium
              font-size: 13px;
              line-height: 13px;
              color: #666;
              font-weight: 400;
              margin-bottom: 0;
              margin-top: 0;
            .item
              border 1px solid #ddd
              margin: 7px 7px 0 0;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              box-sizing: border-box;
              padding: 0 8px;
              float left
            .selected
              border-color: #83b842;
              color: #83b842;
              .spec-txt
                line-height: 40px;
                font-size: 14px;
                color: #83b842;





      .spec-amount
        padding: 0 8px 0;
        margin-top: 0;
        background-color: #fff;
        overflow: hidden;
        float: none;
        clear: both;
        font-size: 10px;
        margin: 0 auto;
        .wrap-spec
          font-size: 12px;
          overflow: hidden;
          padding: 0;
          height: 27px;
          margin-top: 15px;
          position: relative;
          .num-tt
            color: rgb(107, 107, 107);
            font-size: 13px;
            width: auto;
            height: 27px;
            line-height: 27px;
            padding-right: 5px;
          .wrap-num
            display: inline-block;
            overflow: hidden;
            font-size: 12px;
            .des
              background: #eee url('../img/ProductsDetails/jian.png') no-repeat 50%;
              background-size: 12px 12px;
              box-sizing: border-box;
              width: 25px;
              height: 25px;
              line-height: 25px;
              border-right: 0;
              color: #333;
              margin: 0;
              padding: 0;
              position: relative;
              display: inline-block;
              float: left;
              border: 1px solid #ccc;
              text-align: center;
              outline: none;
            .ipt-num
              width: 36px;
              height: 25px;
              line-height: 25px;
              font-size: 12px;
              box-sizing: border-box;
              display: inline-block;
              float: left;
              border: 1px solid #ccc;
              text-align: center;
            .inc
              background: #eee url('../img/ProductsDetails/jia.png') no-repeat 50%;
              background-size: 12px 12px;
              box-sizing: border-box;
              width: 25px;
              height: 25px;
              line-height: 25px;
              border-left: 0;
              color: #333;
              margin: 0;
              padding: 0;
              position: relative;
              display: inline-block;
              float: left;
              border: 1px solid #ccc;
              text-align: center;
              outline none
      .deliveryPanel
        padding: 0;
        font-size: 12px;
        height: 40px;
        margin-top: 18px;
        padding-left: 7px;
        background-color: #fff;
        margin-top: 18px;
        .wrap-spec
          font-size: 12px;
          height: 40px;
          overflow: hidden;
          padding: 0;
          position: relative;
          .delivery-tt
            color: rgb(107, 107, 107);
            visibility: visible;
            font-size: 13px;
            width: auto;
            line-height: normal;
            padding-right: 5px;
            float: left;
          .deliver-cont
            line-height: normal;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            p
              padding-top: 4px;
              color: rgb(204, 0, 0);
              line-height: 19px;
      .general-info
        padding-bottom: 0;
        margin-top: 15px;
        border-top: 1px solid #ddd;
        font-size: 26px;
        height: 302px;
        .huodongcenter
          width: 100%;
          background-color: #fff;
          border-bottom: 1px solid #ddd;
          text-align: center;
          margin: 0 auto;
          padding: 0;
          img
            width: 100%;
            height 100%
            display: block;
            vertical-align: top;
            border: 0 none;
            max-width: 100%;

</style>
