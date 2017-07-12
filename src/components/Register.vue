<template>
  <div>
    <div class="RegisterBg">
      <div class="old_user_register" onclick="history.back()">
        <label class="acct_top_back"><</label>
        <img src="../img/Login/Login.png" class="acct_top_show">
      </div>
      <div class="bg-wrap1" style="height: 526px;">
        <div class="login_content">
          <h1>新用户注册</h1>
          <div id="wrap">
            <form id="register-form">
              <ul class="fm_list register_distance">
                <li><input id="txtMobile" type="tel" maxlength="11"
                           placeholder="请输入手机号" required="required" class="field_ipt"></li>
                <li><input type="text" maxlength="20"
                           placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required"
                           class="field_ipt"></li>
                <li>
                  <input required="required" type="text" maxlength="10"
                         id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt"
                         style="width: 70%;">
                  <div class="verifycode_img"><img
                    src="http://account.lifevc.com/Account/NewVerifyCode?t=1499733640627"
                    style="width: 20%; border-left: 0px solid silver;"> <img
                    src="../img/Login/shuaxin.png"
                    style="width: 5%;"></div>
                </li>
                <li><input type="text" placeholder="请输入手机验证码" maxlength="10"
                           id="regSmsCaptcha" required="required" class="field_ipt"> <a
                  class="fidld_skip">获取验证码</a></li>
              </ul>
              <p>遇到问题？请
                <a href="tel:400-609-2288">联系客服</a></p>
              <input type="button" value="注册" class="btn_login space m-top">
              <router-link to="/Login"><input type="button" value="登录" class="btn_regisiter space m-top"></router-link>
            </form>
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
  .RegisterBg
    z-index 999
    margin-top: 0px;
    overflow: hidden;
    height: 667px;
    .old_user_register
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

  .bg-wrap1
    background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
    .login_content
      width: 100%;
      height: 325px;
      box-sizing: border-box;
      h1
        height 52px
        width: 100%;
        text-align: center;
        color: #037049;
        font-size: 20px;
        line-height: 52px;
        box-sizing: border-box;
      #wrap
        ul
          box-sizing: border-box;
          margin-bottom: 10px;
          li
            width: 90%;
            margin: 0 auto;
            height: 50px;
            border-bottom: 1px solid #dbdbdb;
            position: relative;
            .field_ipt
              font-size: 16px;
              width: 100%;
              background: transparent;
              position: absolute;
              left: 0;
              top: 0;
              height: 50px;
              box-sizing: border-box;
              outline none
            .verifycode_img
              position: absolute;
              right: -70%;
              width: 100%;
              top: 14px;
            .fidld_skip
              display: inline-block;
              float: right;
              text-align: right;
              font-size: 16px;
              color: #3aad36;
              text-decoration: none;
              border: 1px solid #3aad36;
              border-radius: 4px;
              padding: 4px 15px;
              text-align: center;
              position: absolute;
              right: 0;
              top: 10px;
        p
          font-size: 14px;
          color: #666;
          width: 100%;
          text-align: center;
          line-height 21px
          margin-bottom: 5px;
          a
            color: #3ea438;

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
          margin: 0 auto 15px;
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
          font-size: 19px;
          color: #fff;
          line-height: 36px;
          letter-spacing: 20px;
          text-indent: 20px;
          box-sizing: border-box;
</style>
