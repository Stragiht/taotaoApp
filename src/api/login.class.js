
import { MessageBox } from 'mint-ui';
import Http from './http.class.js';
import Config from './config.js';
import Route from '@/route/config.js';

import NativeAPIInterfaceClass from './NativeAPI.Interface.Class.js';

const NativeAPIInterface = new NativeAPIInterfaceClass(); // app jsapi接口

export default class Login {
	
	static http = Http;
	static config = Config;
	static PuCodeUri = Config.REQUEST_URI + '/passport/authen/pu-code'; // 授权码uri
	static EuTokenUri = Config.REQUEST_URI +'/passport/authen/eu-token'; // token uri  
	static EuRetokenUri = Config.REQUEST_URI + '/passport/authen/eu-retoken'; // 置换新令牌 uri
	static WhoamiUri =  Config.REQUEST_URI + '/memberUser/whoami'; //   我是谁 uri
	static EuByeUri = Config.REQUEST_URI +'/passport/authen/eu-bye';  //注销登录状态 
	static appId = Config.APP_ID;
	static appKey = Config.APP_KEY;
	
	
	//退出登录
	static quit(callback){ 
		let userId  = Http.Fn._storage('userId');
		Http._http({
			url : this.EuByeUri,
			data : {
				appId : this.appId, // appId
				userId : userId // 用户标识
			},
			success : (data) => { 
				this.goLogin();
				if(callback) callback()
			},
			error : () => {
				this.goLogin();
				if(callback) callback(); 
			}
		});
	}
	
	//去登录
	static goLogin(){
		return Http.Fn._uri(Route.pathp + Route.login.login)
	}
	//检测登录信息是否有效 ===== 拦截器
	static checkLogin (success,error = null){ 



		
		NativeAPIInterface.getLoginInfo((ren)=> {
			//保存信息
			// Http.Fn._storage('accessToken',ren.accessToken );//保存accessToken
			// Http.Fn._storage('refreshToken',ren.refreshToken);//保存refreshToken
			// Http.Fn._storage('userId',ren.userId);
			

//			alert(ren)
//			
			
			
			
		},function (){
			
			NativeAPIInterface.replaceLogin();
		})
		
		
		
		
		this.getToken( (accessToken,userId,refreshToken) => {
			Http._http({
				url : this.WhoamiUri,
				data : {
					appId : this.appId, // appId
					accessToken : accessToken , // 刷新令牌
					userId : userId // 用户标识
				},
				success : (data) => {
					let ren = data.data;
					if(ren.successful && ren.result.userId){
						ren.result._userId = userId;
						ren.result.accessToken = accessToken;
						Http.Fn._sessionStorage('userInfo',ren.result);
						success();
					}else{
						if(error) error();
						else  this.goLogin();
					}
				},
				error : () => {
					if(error) error();
					else  this.goLogin();
				}
			});
			
		}, function () {
			if(error) error();
		})
		
	}
	
	
	//登录
	static _login (username,password,success,error){
		//获取授权码
		this.getPuCode(username,password,success,error);
	}
	
	
	
	
	/**
	 * 获取Token等信息
	 * 
	 */
	static getToken (success , error){
		let accessToken = Http.Fn._storage('accessToken');
		let refreshToken = Http.Fn._storage('refreshToken');
		let userId  = Http.Fn._storage('userId');
		if(!refreshToken || !userId){
			//去登录
			let now_url = Http.Fn.getModule()
			if(now_url.m !== 'login' )this.goLogin();
			else error();
		}else if(!accessToken){
			this.RefreshAccessToken(refreshToken,userId , success , error);
		}else{
			success(accessToken,userId,refreshToken);
		}
		
		
	}
	
	
	//置换新令牌
	static RefreshAccessToken (refreshToken , userId , success , error){
		Http._http({
			url : this.EuRetokenUri,
			data : {
				appId : this.appId, // appId
				appSecret : this.getEncrypt(Config.APP_SECRET,this.appKey) , // 业务应用秘钥，带时间戳加密的形式
				refreshToken : refreshToken, // 刷新令牌
				userId : userId // 用户标识
			},
			success :  (reg) => {
				let ren = reg.data;
				if(ren.successful && !Http.Fn.isempty(ren.result)){
					let accessTokenExpire = Http.Fn.timestamp() + (ren.result.accessTokenExpire - (60 * 5));
					let refreshTokenExpire = Http.Fn.timestamp() + (ren.result.refreshTokenExpire - (60 * 60 * 24 ));
					Http.Fn._storage('accessToken',ren.result.accessToken, accessTokenExpire);//保存accessToken
					Http.Fn._storage('refreshToken',ren.result.refreshToken, refreshTokenExpire);//保存refreshToken
					Http.Fn._storage('userId',ren.result.userId);
					success(ren.result.accessToken,ren.result.userId,refreshToken,ren);
				}else{
					this.msg(ren.bizCode.info);	
					this.goLogin();
					error(reg);
				}	
			},
			error :  (err) => {
				this.goLogin();
				error(err);
			}
			
		});
	}

	
	//获取授权码grantCode
	static getPuCode (username,password,success,error){
			Http._http({
				url : this.PuCodeUri,
				data : {
					appId : this.appId, // appId
		  			loginAccount : username,// 用户名
		  			password : this.getEncrypt(password,this.appKey),// 加密密码  
				},
				success :  (reg) => {
					let data = reg.data;
					if(data.successful && !Http.Fn.isempty(data.result)){
						//获取token
						Http._http({
							url : this.EuTokenUri,
							data : {
								appId : this.appId, // appId
								appSecret : this.getEncrypt(Config.APP_SECRET,this.appKey) ,
								grantCode : data.result.grantCode,
							},
							success : (reg) => {
								let ren = reg.data;
								if(ren.successful && !Http.Fn.isempty(ren.result)){
									let accessTokenExpire = Http.Fn.timestamp() + (ren.result.accessTokenExpire - (60 * 5));
									let refreshTokenExpire = Http.Fn.timestamp() + (ren.result.refreshTokenExpire - (60 * 60 * 24 ));
									Http.Fn._storage('accessToken',ren.result.accessToken, accessTokenExpire);//保存accessToken
									Http.Fn._storage('refreshToken',ren.result.refreshToken, refreshTokenExpire);//保存refreshToken
									Http.Fn._storage('userId',ren.result.userId);
									success(ren);
								}else{
									this.msg(data.bizCode.info);	
								}
							},
							error : function (err){
								error(err);
							}
						})
					}else if(!Http.Fn.isempty(data.bizCode)){
						this.msg(data.bizCode.info);
					}
				},
				error : function (err){
					error(err);
				}
			})
	}

	//密码加密处理
	static getEncrypt (str , key = ''){
		let encrypt = new JSEncrypt();
		encrypt.setPublicKey(key);
	  	str = str + "##" +new Date().getTime();
	  	return encrypt.encrypt(str);
	}
	//提示
	static msg (text){
		MessageBox({
			title: '温馨提示',
			message: text,
		});
		
	}
}

