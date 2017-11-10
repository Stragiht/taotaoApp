import {Login} from './login.class.js';
const Http = Login.http;
const Config = Login.config;
const Fn = Http.Fn;

class api_http{
  constructor (){

  }
  //im
  static ws_http(args){
    if( ! args || !Fn.is_object(args)) return
    Login.getToken(function (accessToken,userId,refreshToken){
      if(!args['data']){
        args['data'] = {
          appId :  Config.APP_ID,
          userId :userId,
          accessToken : accessToken,
          user:userId,
        }
      }else{
        args['data']['appId'] = Config.APP_ID;
        args['data']['userId'] = userId;
        args['data']['accessToken'] = accessToken;
        args['data']['user'] = userId;
      }
      if(!args.complete) args.complete = null;
      if(!args.beforeSend) args.beforeSend = null;
      if(!args.error) args.error = () => {};
      if(!args.type) args.type = 'POST';
      if(!args.dataType) args.dataType = 'json';
      if(!args.timeout) args.timeout = 0;
      if(!args.headers) args.headers = {"Content-Type":"application/x-www-form-urlencoded"};
      let url = args.uri ?   args.uri : Config.WS_URI + args.url
      if(!args.p)  args.p = false;
      Http._http({
        p : args.p,
        url : url,
        data :args['data'],
        complete : args.complete,
        beforeSend : args.beforeSend,
        success : (reg) => {

          if(args.p)console.log(reg)
          let data = reg.data;
          args.success(reg);
        },
        error : function (err){
          args.error(err);
          //	if(args.p)console.log(err)
        }
      })

    });
  }


  //api 网络请求
  static api_http (args){
    if( ! args || !Fn.is_object(args)) return
    Login.getToken(function (accessToken,userId,refreshToken){
//			console.log('accessToken',accessToken)
//			console.log('userId',userId)
//			console.log('refreshToken',refreshToken)
      if(!args['data']){
        args['data'] = {
          appId :  Config.APP_ID,
          userId :userId,
          accessToken : accessToken,
        }
      }else{
        args['data']['appId'] = Config.APP_ID;
        args['data']['userId'] = userId;
        args['data']['accessToken'] = accessToken;
      }
      if(!args.complete) args.complete = null;
      if(!args.beforeSend) args.beforeSend = null;
      if(!args.error) args.error = () => {};
      if(!args.type) args.type = 'POST';
      if(!args.dataType) args.dataType = 'json';
      if(!args.timeout) args.timeout = 0;
      if(!args.headers) args.headers = {"Content-Type":"application/x-www-form-urlencoded"};

      let url = args.uri ?   args.uri : Config.REQUEST_URI + args.url
      if(!args.p)  args.p = false;
      Http._http({
        p : args.p,
        url : url,
        data :args['data'],
        complete : args.complete,
        beforeSend : args.beforeSend,
        success : (reg) => {
          if(args.p)console.log(reg)
          let data = reg.data;
          //console.log(data)
          if(data.bizCode && (data.bizCode.code === 'PP0008' || data.bizCode.code ===  'PP0009')){
            if(data.bizCode.code ===  'PP0008' ){
              Login.RefreshAccessToken(refreshToken,userId,function (){
                this.api_http(args);
              },function (err){
                console.log(err)
              });
            }else{
              Login.goLogin();
            }
          }else{
            args.success(reg);
          }
        },
        error : function (err){
          args.error(err);
          //	if(args.p)console.log(err)
        }
      })

    });
  }
}
export default api_http