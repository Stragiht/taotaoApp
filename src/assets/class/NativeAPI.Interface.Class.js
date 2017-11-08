/**
 * 原生app js接口  类
 */

export default  class Interface {
	constructor(arg) {
	    document.addEventListener( "plusready", () => {
			let _BARCODE = 'PluginInterface',
			B = window.plus.bridge;
			let PluginInterface = {
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
	            scanPage : function () {
	                return  B.execSync(_BARCODE, "sendMessage", [5]);
	            },
	            //通知原生更新accessToken
				updateAccessToken : function (accessToken) {
	                return  B.execSync(_BARCODE, "sendMessage", [6,accessToken]);
	            },
			}  
			window.plus.PluginInterface = PluginInterface;
		},true)
	} 
	/**
	 * 获取登录后的用户信息
	 * @param {Function} success 获取成功后回调  返回json对象
	 * @param {Function} error 获取失败后回调
	 */
	getLoginInfo  (success = null,error = null){
		document.addEventListener( "plusready",  function(){ 
        	let info = plus.PluginInterface.getLoginInfo();
        	try{
        		if(success)success(JSON.parse(info)); 
        	}catch(e){
        		if(error)error(e); 
        	} 
		},true);
	}
	/**
	 * 跳转登录页面
	 */
	replaceLogin (){
		document.addEventListener( "plusready",  function(){ 
        	return plus.PluginInterface.signinPage();
		},true);
	}
	/**
	 * 跳转支付页面 
	 */
	replacePay (){
		document.addEventListener( "plusready",  function(){ 
        	return plus.PluginInterface.payPage();
		},true);
	}
	/**
	 * 跳转充值页面
	 */
	replaceRec (){
		document.addEventListener( "plusready",  function(){ 
        	return plus.PluginInterface.rechargePage();
		},true);
	}
	/**
	 * 跳转扫码收款页面
	 */
	replaceSc (){
		document.addEventListener( "plusready",  function(){ 
        	return plus.PluginInterface.scanPage();
		},true);
	}
	
	
}




