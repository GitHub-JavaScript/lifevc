<template>
  <div>
    <div class="loginBg">
      <router-link to="/UserCenter">
        <div class="old_user_login">
          <label class="acct_top_back"><</label>
          <img src="../img/Login/Login.png" class="acct_top_show">
        </div>
      </router-link>
      <div  class="bg-wrap" style="height: 526px;">
        <div  class="login_content"><h1 >老用户登录</h1>
          <div  id="wrap">
            <div  style="display: none;">
              <form  id="reset-form">
                <ul  class="fm_list">
                  <li  class="multi"><input  required="required" type="tel"
                                                              maxlength="11" placeholder="请输入手机号" class="field_ipt"> <a
                     class="fidld_skip">获取验证码</a></li>
                  <li ><input  required="required" type="text" maxlength="10"
                                                id="loginVerifyCode" placeholder="请输入手机验证码" class="field_ipt"></li>
                </ul>
                <div  class="set_link"><p  class="problem_contact_service">遇到问题？请
                  <a  href="tel:400-609-2288">联系客服</a></p> <a ><b
                  ></b> <span >账号密码登录</span></a></div>
              </form>
            </div>
            <div >
              <form  id="login-form">
                <ul  class="fm_list">
                  <li >
                    <input  type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt">
                  </li>
                  <li  class="multi">
                    <input  type="password" maxlength="20" placeholder="请输入登录密码" required="required" class="field_ipt">
                    <a class="fidld_skip">忘记密码</a>
                  </li>
                </ul>
                <div  id="setting" class="set_link">
                  <a  href="javascript:;">
                    <span>手机号快捷登录></span>
                    <b ></b>
                  </a>
                </div>
              </form>
            </div>
            <input  type="button" value="登录" class="btn_login">
            <router-link to="/Register"><input type="button" value="注册" class="btn_regisiter"></router-link>
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
  .loginBg
    position relative
    z-index 999
    margin-top: 0px;
    overflow: hidden;
    height: 667px;
    .old_user_login
      width: 100%;
      height: 141px;
      background: #fff;
      position: relative;
      .acct_top_back
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 46px;
        border: 1px solid #3aad36;
        font-size 22px
        text-align center
        color #9DD79B
      .acct_top_show
        width: 120px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -60px;


    .bg-wrap
      background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
      background-size: 100% 100%;
      background-position: bottom;
      .login_content
        width: 100%;
        height: 325px;
        box-sizing: border-box;
        h1
          width: 100%;
          text-align: center;
          color: #037049;
          font-size: 20px;
          line-height: 84px;
          box-sizing: border-box;
        ul
          li
            width: 90%;
            margin: 0 auto;
            height: 1rem;
            border-bottom: 1px solid #dbdbdb;
            position: relative
            width 337px
            height 50px
            position: relative;
            .field_ipt
              outline none
              font-size: 16px;
              width: 100%;
              background: transparent;
              position: absolute;
              left: 0;
              top: 0;
              height: 1rem;
              box-sizing: border-box;
              width 337px
              height 50px
            .fidld_skip
              display: inline-block;
              float: right;
              text-align: right;
              font-size: 16px;
              color: #3aad36;
              text-decoration: none;
              border: 1px solid #3aad36;
              border-radius: 4px;
              padding: 8px;
              text-align: center;
              position: absolute;
              right: 0;
              top: 7px;
        .set_link
          padding: .18rem 0 .4rem;
          text-align: right;
          height: 1rem;
          width: 90%;
          margin: 0 auto;
          font-size: 16px;
          box-sizing: border-box;
          position: relative;
          a
            color: #3aad36;
            letter-spacing: 1px;
            font-size: 15px;
            margin: 0 0 .8rem
            span
              float: right;
              line-height: 50px;
              margin-right: .1rem;
        .btn_login
            width: 80%;
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            font-size: 19px;
            color: #fff;
            line-height: 36px;
            letter-spacing: 20px;
            text-indent: 20px;
            box-sizing: border-box;
            margin: 0 auto 15.5px;
            background-color: #3aad36;
            border: 1px solid #3aad36;
            border-radius: 5px;
        .btn_regisiter
            margin: 10px auto 0;
            background-color: #8a8a8a;
            border: 1px solid #8a8a8a;
            border-radius: 5px;
            opacity: .5;
            width: 80%;
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            line-height: 36px;
            font-size: 19px;
            color: #fff;
            letter-spacing: 20px;
            text-indent: 20px;
            box-sizing: border-box;
</style>
