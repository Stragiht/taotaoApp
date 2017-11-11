/**
 * 原生app js接口  类
 */

export default  class NativeAPIInterfaceClass {


  constructor(arg) {
    document.addEventListener( "plusready", () => {
      var _BARCODE = 'PluginInterface',
          B = window.plus.bridge;
      var PluginInterface = {
        //获取登录后的信息  参数传递 1
        getLoginInfo : function (){
          return  B.execSync(_BARCODE, "sendMessage", [1]);
        },
        //跳转登录页面   参数传递 2
        signinPage : function () {
          return  B.execSync(_BARCODE, "sendMessage", [2]);
        },
        //跳转支付页面   参数传递3
        payPage : function () {
          return  B.execSync(_BARCODE, "sendMessage", [3]);
        },
        //跳转充值页面   参数传递4
        rechargePage : function () {
          return  B.execSync(_BARCODE, "sendMessage", [4]);
        },
        //跳转扫码收款页面   参数传递5
        scanPage : function (price) {
          return  B.execSync(_BARCODE, "sendMessage", [5,price]);
        },
        //通知原生更新accessToken
        updateAccessToken : function (accessToken) {
          return  B.execSync(_BARCODE, "sendMessage", [6,accessToken]);
        },
        //通知原生退出登录
        quitLogin : function (){
          return B.execSync(_BARCODE, "sendMessage", [7]);
        }
      }
      window.plus.PluginInterface = PluginInterface;
    },true)
  }



  /**
   * 获取登录后的用户信息
   * @param {Function} success 获取成功后回调  返回json对象
   * @param {Function} error 获取失败后回调
   */
  getLoginInfo  (success = null,error = null,ageent = false){
    if(typeof(plus) == "undefined" ){
      document.addEventListener( "plusready", () => {
        let info = plus.PluginInterface.getLoginInfo();
        alert(info);
        try{
          if(success)success(JSON.parse(info));
        }catch(e){
          if(error)error(e);
        }
      },false)
    }else{
      let info = plus.PluginInterface.getLoginInfo();
      try{
        if(success)success(JSON.parse(info));
      }catch(e){
        if(error)error(e);
      }
    }

  }
  /**
   * 跳转登录页面
   */
  replaceLogin (success, ageent = false){
    if(ageent){
      success();
      return ;
    }
    if(typeof(plus) == "undefined" ){
//			var userAgent = navigator.userAgent; 
//			if(userAgent.indexOf("iPhone") > -1) {
//				success(null);
//				return ;
//			}
      document.addEventListener( "plusready", () => {
        return plus.PluginInterface.signinPage();
      },false);
    }else{
      return plus.PluginInterface.signinPage();
    }

  }
  /**
   * 跳转支付页面
   */
  replacePay (){
    if(typeof(plus) == "undefined" ){
      document.addEventListener( "plusready", () => {
        return plus.PluginInterface.payPage();
      },false);
    }else{
      return plus.PluginInterface.payPage();
    }

  }
  /**
   * 跳转充值页面
   */
  replaceRec (){
    if(typeof(plus) == "undefined" ){
      document.addEventListener( "plusready", () => {
        return plus.PluginInterface.rechargePage();
      },false);
    }else{
      return plus.PluginInterface.rechargePage();
    }
  }
  /**
   * 跳转扫码收款页面
   */
  replaceSc (price){
     if(typeof(plus) == "undefined" ){
      document.addEventListener( "plusready", () => {
        return plus.PluginInterface.scanPage(price);
      },false);
    }else{
      return plus.PluginInterface.scanPage(price);
    }
  }
  /**
   * 通知原生更新accessToken
   * @param {String} accessToken accessToken
   */
  updateAccessToken (accessToken){
    if(typeof(plus) == "undefined" ){
      document.addEventListener( "plusready", () => {
        return plus.PluginInterface.updateAccessToken();
      },false);
    }else{
      return plus.PluginInterface.updateAccessToken();
    }
  }

  /**
   * 通知原生退出登录
   */
  quitLogin (){
    if(typeof(plus) == "undefined" ){
      document.addEventListener( "plusready", () => {
        return plus.PluginInterface.quitLogin();
      },false);
    }else{
      return plus.PluginInterface.quitLogin();
    }
  }

}




