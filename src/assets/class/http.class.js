import axios from 'axios';
import Fun from './function.class.js';
import Config from './config.js';

export default class Http {

  static Fn = Fun;
  static opts () {
    return {
      p: false,
      url: '', // 地址
      type: 'POST', // 方式
      dataType: 'json', //返回类型
      data: null, // 数据
      dataJson: false, // 数据传递是否以json方式传递,默认为FormData
      timeout: 0, // 过期时间
      headers: {"Content-Type": "application/x-www-form-urlencoded"}, // head请求头
      mode: 'no-cors', // 控制是否允许跨域。same-origin（同源请求）、no-cors（默认）和cros（允许跨域请求）；
      beforeSend: null, // 请求前回调
      complete: null, //请求结束后回调
      error: null, // 错误回调
      success: null // 成功后回调
    }
  }


  //1.在钱包页面做登录拦截
  //2、检查accessToken 是否有效
  //3、accessToken无效使用refreshToken去更新accessToken 并调用原生更新updateAccessToken
  //4、检查refreshToken是否有效
  //5、refreshToken无效去登录


  static setFormData (data) {
    let formData = new FormData();
    //alert(Fun.is_array(data))
    if (data) {
      if (Fun.is_array(data)) {
        for (let i in data) {
          if (Fun.is_object(data[i])) {
            for (let j in data[i]) {
              formData.append(j, data[i][j]);
            }
          }
        }
        return formData;
      } else if (Fun.is_object(data)) {
        for (let i in data) {
          formData.append(i, data[i]);
        }
        return formData;
      }

    }
    return null;
  }


  /**
   * 基于Promise的限制, fetch 并不支持timeout机制,故而使用 Promise.race() 实现timeout
   * @param  {[type]} _fetch  [description]  fetch对象
   * @param  {[type]} timeout [description] 过期时间
   * @return {[type]}         [description] 返回Promise对象
   */
  static fetch_request (_fetch, timeout) {
    let ab = null;
    let promise = new Promise((resolve, reject) => {
      ab = function () {
        reject('timeout');
      };
    });
    let _promise = Promise.race([_fetch, promise]);
    if (timeout > 0) {
      setTimeout(() => {
        ab();
      }, timeout);
    }
    return _promise;
  }

  static _http (args, httpType = "") {
    args = Fun._assign(this.opts(), args);
    if (args.url && args.data) {
      let d = args.dataJson ? args.data : this.setFormData(args.data);
      if (Fun.is_function(args.beforeSend)) args.beforeSend();

      function success (data) {
        let succ = {
          ren: data,
          msg: '成功',
          status: 200,
          errcode: 0,
          data: data.data
        }
        if (Fun.is_function(args.success)) args.success(succ);
      }

      function error (data) {
        let err = {
          err: data,
          msg: '网络有误',
          status: 0,
          errcode: 40004,
          errtype: data.message
        }
        //timeout of 100ms exceeded
        if (!~data.message.indexOf('timeout')) {
          err.errcode = 40001;
          err.msg = '超时未响应';
          err.info = null;
        } else if (data.code) {
          err.errcode = 40005;
          err.msg = '网络不给力';
          err.info = null;
        } else if (data.info) {
          err.errcode = 40000;
          err.msg = '服务错误';
          err.info = data.info;
        }
        //Network Error
        if (Fun.is_function(args.error)) args.error(err);
      }

      axios({
        method: args.type,
        url: args.url,
        data: d,
        headers: args.headers,
        timeout: args.timeout,
        maxContentLength: 20000, // `maxContentLength` 定义允许的响应内容的最大尺寸
        responseType: args.dataType //  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      }).then((response) => {
        //console.log(args)
        //if(args.p)console.log(response)
        if (Fun.is_function(args.complete)) args.complete();
        if (response.status === 200 && response.data) {
          success(response);
        } else {
          error({info: response, message: '请求出错'})
        }
      }).catch(function (err) {
        //if(args.p)console.log(err)
        if (Fun.is_function(args.complete)) args.complete();
        error(err)
      });
    }
  }
}