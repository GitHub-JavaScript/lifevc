<template>
  <div class="footer">
    <ul id="footermenuNav" class="footermenuNav">
      <li>
        <router-link to="/Home" >
          <div><i class="icon iconfont icon-shouye"></i></div>
          <span class="lispan">首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/AllProducts" >
          <div><i class="icon iconfont icon-liebiao"></i></div>
          <span>全部产品</span>
        </router-link>
      </li>
      <li>
        <router-link to="/Stroll" >
          <div><i class="icon iconfont icon-zhinanzhen"></i></div>
          <span>闲逛</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ShoppingCart" >
          <div><i class="icon iconfont icon-gouwuche1"></i></div>
          <span>购物车</span> <!----> <!---->
        </router-link>
      </li>
      <li>
        <router-link to="/UserCenter" >
          <div><i class="icon iconfont icon-user"></i></div>
          <span>账户中心</span> <span class=""></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    padding: 0;
    height: 54px;
    position: fixed;
    bottom: 0;
    z-index: 900;
    width: 100%;
    background: #f8f8f8;
    border-top: 1px solid #ddd;
    .footermenuNav
      margin: 0;
      padding: 0;
      background: #f8f8f8;
      text-align: center;
      height 100%
      li
        width: 20%
        float: left;
        margin: 0 auto;
        height 100%
        line-height 1.3rem
        a
          margin-top:1rem
          display: block
          color: #ababab
          vertical-align: bottom
          text-align: center
          text-decoration: none
          height 100%
          font-size 1.1rem
          .icon
           font-size 2.2rem
           color :none
        .active
          color: #009c42


</style>
