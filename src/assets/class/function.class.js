 
export default class functionClass {
    //实现回调函数处理
    static  call_user_func(callback,...args) {
        return typeof callback === 'function' ? callback.call(this, ...args) : this[callback].call(this,...args);
    }
 
 	//页面跳转
    static _uri (url){
    	window.location.href = url;
    }
 	//获取URL上的模块/方法名
	static getModule (a){
		let url = window.location.href;
		let arr = url.split("/");
		return {
			m :  arr[arr.length - 2],
			a :  arr[arr.length - 1],
		};
	}
	//获取页面跳转后的参数
	static getParam(name = null){
		if(name !== null){
			let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			let r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r !== null) return unescape(r[2]); return null; //返回参数值
		}else{
			return plus.webview.currentWebview();
		}
	}
	
    //类型判断
    static _type (val){
        switch(Object.prototype.toString.call (val)) {
            case "[object Array]" :
                return 1;
            case "[object Object]":
                return 2;
            case "[object Function]":
                return 3;
            case "[object String]":
                return 4;
            case "[object Number]":
                return 5;
            default:
                return false;
        }
    }

    //判断是否存在
    static isexist (val){
        return  typeof(val) === "undefined" ? false : true ;
    }
    //是否存在或空值判断
    static isempty (val) {
        return   (this.isexist(val) && val !== '' && val !==' ' && val !== null && val !== 'null' && val !== 'NULL' && val !== 'Null' && val !== 'undefined' && val !== 'NUDEFINED'&& val !=='[]' && val !== '{}')? false : true;
    }
    //过滤数组中的中空值和undefined
    static _rid (arr){
        return arr.filter((x) => {
            return !this.isempty(x) ? true : false;
        });
    }
    //是否是数组
    static is_array(arr){
        return Array.isArray(arr);
    }
    //数组中是否包含val值
    static in_array (arr,val,_in = false){
        return _in ? arr.indexOf(val) > -1 : arr.includes(val);
    }
    //返回数组中第一次出现的位置
    static _findIndex (arr,val){
        return arr.findIndex((v,i,a) => {
            return v == val;
        })
    }
    //删除数组中的指定元素
    static _remove (arr,val,_in = false){
        return _in ? !!arr.splice(this._findIndex(arr,val),1).length ? arr : null :  arr.filter(e => e !== val);
    }
    //对数组降维，返回一维数组
    static _drop (arr){
        let data = [];
        arr.forEach((val) => {
            this.is_array(val) ? data = concat(this._drop(val)) : data.push(val);
        });
        return data;
    }
    //对数组去重,返回去重后的数组
    //  static to_repeat (arr){
    //   		var data = [];
    //   		stops : for(var i = 0 , n = arr.length; i < n ; i ++  ){
    //   			if(this.isArray(arr[i])){
    //   				data.push(this.toRepeat(arr[i]));
    //   			}else{
    //   				for(var x = i + 1 ; x < n ; x++){
    //   					if(arr[x] === arr[i]) continue stops;
    //   				}
    //   				data.push(arr[i]);
    //   			}
    //   		}
    //   		return data;
    //   	}


    /**
    * 数组一般处理
    * @param  {[type]}  arr              [description] 原数组
    * @param  {Boolean} [callback=false] [description] 数组处理回调方法，请填写本类中的方法
    * @param  {[type]}  args             [description] 回调的所有参数
    * @return {[type]}                   [description]
    */
    static _array (arr,callback = false,...args){
        if(this.is_array(arr)){
            arr = this._rid(arr);
            return callback ? this.call_user_func(callback,arr,...args) : arr;
        }
        return null;
    }

    //是否是字符串
    static is_string (val,empty = false){
        return  this._type(val) === 4 ? empty ? this.isempty(val) ? false : true : true : false;
    }


	/**
	 * 是否为数字
	 * @param {Object} val
	 * @param {Object} Int  是否判断正整数
	 */
	static is_numeric (val,Int){
		if(!this.isempty(val) && this._type(val) === 5){
			if(Int) return val.test(/^[0-9]+$/);
			return true;
		}
		return false;
	}
    //是否是对象
    static is_object (val,empty = false){
        return  !this.isempty(val) &&  this._type(val) === 2  ?  empty ?  Object.keys(val).length === 0 ? false : true  : true  : false;
    }


    //是否是函数
    static is_function (val){
        return this._type(val) === 3 ? true : false;
    }
	
    /**
     * sleep阻塞函数
     * @param  {Number} [m=1] [description] 秒
     * @return {[type]}           [description]
     */
    static sleep(m = 1) {
        return new Promise(resolve => setTimeout(resolve, (m * 1000)))
    }
    //定时器
    static timer(callback = () => {}, m = 1){
        let tm = setTimeout(() => {
            clearInterval(tm);
            callback();
        },(m * 1000));
    }


    /**
    * 参数合并
    * @param  {[type]} obj1 [description]
    * @param  {[type]} obj2 [description]
    * @return {[type]}      [description]
    */
    static _assign (obj1,obj2){
        return Object.assign(obj1,obj2);
    }
	
    
    /**
     * JSON字符串转json对象
     * @param  {[type]} json    [description] json字符串
     * @param  {String} [cb=''] [description] 转换方式 ，支持 parse ， eval
     * @return {[type]}         [description]
     */
    static  json_decode (json , cb = ''){
         if(cb === 'parse'){
            return json.parseJSON();
        }else if(cb === 'eval'){
            return eval('(' + json + ')');
        }
        return JSON.parse(json);
    }

    /**
     * json对象转json字符串
     * @param  {[type]} json    [description]
     * @param  {String} [cb=''] [description] json对象
     * @return {[type]}         [description] 转换方式
     */
    static json_encode (json , cb = ''){
        if(cb === 'toJSONString'){
            return json.toJSONString();
        }
        return JSON.stringify(json);
    }
    /**
	 * 数据存储，支持设置过期时间
	 * @param {Object} key 存储key
	 * @param {Object} val 存储值，支持string/json对象/callback回调函数
	 * @param {Object} expire  支持 过期时间戳（单位秒）/callback回调函数
	 * @param {Object} stype   使用存储类型，支持session/cookie/localStorage，默认localStorage
	 */
	static _storage(key,val,expire,stype){
		let callback = null;
		if(val && this.is_function(val)) callback = val;
		if(expire && this.is_function(expire)) callback = expire;
		if(val === 'session') stype = 'session';
		if(val === 'cookie') stype = 'cookie';
		if(val === 'localStorage') stype = 'localStorage';
		stype = expire && this.is_string(expire) ?  expire : stype ? stype : null;
		if(key && val && val !== null  && !this.is_function(val) && val !== 'session' && val !== 'cookie' && val !== 'localStorage'){
			if(this.is_object(val)){
				val['expire'] =   expire && this.is_numeric(expire) ? expire : null;
			}else{
				val = {
					v_data : val,
					expire :  expire && this.is_numeric(expire) ? expire : null
				}
			}
			stype === 'session' ? this._sessionStorage(key,val) : this._localStorage(key,val);
		}else if(key && val === null ){
			stype === 'session' ? this._sessionStorage(key,null) : this._localStorage(key,null);
		}else if(key){
			var data = stype === 'session' ? this._sessionStorage(key) : this._localStorage(key);
			
			if(data){
				if(this.is_object(data) && data.v_data ){
					let d = data.v_data ? data.v_data : data;
					let nowTime = this.timestamp();
					if(this.is_function(callback)){
						callback(d,data.expire,nowTime);
					}else{
						if(data.expire && nowTime >= data.expire){
							this.is_string(stype) && stype === 'session' ? this._sessionStorage(key,null) : this._localStorage(key,null);
							return null;
						}
					}
					
					return d;
				}
				
			}else if(this.is_function(callback)){
				callback(data,data,data);
			}
			return data;
		}
		return null;
	}

    /**
	 * 本地存储
	 * @param {Object} key 键
	 * @param {Object} val 值
 	*/
	static _localStorage (key,val){
		if(key && val && val !== null){
			val = this._type(val) === 2 ? this.json_encode(val) : val;
			return localStorage.setItem(key, val);
		}else if(key && val === null){
			return localStorage.removeItem(key)
		}else if(key){
			let v = localStorage.getItem(key);
			return !this.isempty(v) ? ~ v.indexOf("{") ? this.json_decode(v)  : v : null;
		}else{
			return false;
		}
	}


	/**
 	* session存储
 	* @param {Object} key 键
 	* @param {Object} val 值
 	*/
	static _sessionStorage (key,val){
		if(key && val && val !== null){
			val = this._type(val) === 2 ? this.json_encode(val) : val;
			return sessionStorage.setItem(key, val);
		}else if(key && val === null){
			return sessionStorage.removeItem(key)
		}else if(key){
			let v = sessionStorage.getItem(key);
			return !this.isempty(v) ? ~ v.indexOf("{") ? this.json_decode(v)  : v : null;
		}else{
			return false;
		}
	}
	
	/**
	 * 时间戳（秒）
	 * @param {Object} time 一般时间格式:2014-07-10 10:21:12
	 */
	static timestamp(time){
		if(time){
			return (Date.parse(new Date(time))) / 1000;
		}else{
			return (Date.parse(new Date())) / 1000;
		}
		
	}

	
	//加载扩展文件
	//加载方式 1、在加载本文件之前加载扩展文件 例如window.CJLOABFILES = 'jquery-2.1.4.min.js'
	//2、在本文件加载完后执行 cj.loadFiles(['jquery-2.1.4.min.js']);
	//参数：一个文件则可以传递字符串，多个文件则传递数组
	static loadFiles (files){
		let extPath  = '../../static/';
		let c , path , _paths;
		let url = (~ window.location.href.indexOf("?") ? '&' : '?');
		let nowPaths = document.scripts;
		let paths = nowPaths[nowPaths.length - 1];
		paths.id = 'JsSdk';
		c = path = paths.src;
		if (!paths.getAttribute("merge")) {
			path = c.substring(0, c.lastIndexOf("/") + 1)
		}
		//	var paths = path + extPath;
		_paths = extPath;
		if(this.istype(files) !== 1) files = [files];
		for(var i = 0; i < files.length ; i ++){
			$('head').after("<script src='"+_paths + files[i]+"'></script>");
		}
	}
	//数组中是否存在某一元素,返回Boole值
	static contain (arr , val ){
		return 	arr.indexOf(val) > -1;
	}
	//移除数组中指定位置的元素，返回Boole值
	static removeAt (arr,index){
		return 	!!arr.splice(index,1).length;
	}
	//移除数组中指定值的元素，返回删除后的数组
	static remove (arr,val){
		let index =	arr.indexOf(val);
		if( ~ index) this.removeAt(arr,index);
		return arr;
	}
	
	//判断是否为数组，返回Boole值
	static isArray(arr){
		return Array.isArray(arr);
	}
	//对数组降维，返回一维数组
	static reduction  (arr){
		let data = [];
		arr.forEach( (val) => {
			this.isArray(val) ?  data = data.concat(this.reduction(val)) : data.push(val);
		});
		return data;
	}
	//对数组去重,返回去重后的数组
	static toRepeat (arr){
		let data = [];
		stops : for(let i = 0 , n = arr.length; i < n ; i ++  ){
			if(this.isArray(arr[i])){
				data.push(this.toRepeat(arr[i]));
			}else{
				for(let x = i + 1 ; x < n ; x++){
					if(arr[x] === arr[i]) continue stops;
				}
				data.push(arr[i]);
			}
		}
		return data;
	}
	//过滤数组中的中nul和undefined
	static colation (arr){
		return arr.filter(function (val){
			return val != null;
		});
	}
	//分转元
  static Price (price = 0){
  	price = parseInt(price) 
  	return  price > 0 ? price  / 100  : 0;
  }
	
}
