const  REQUEST_baseuri =  'https://test.aptoto.com:8091';  // 测试环境
const  REQUEST_builduri =  'https://api.aptoto.com';      // 生产环境
const REQUEST_URI = REQUEST_baseuri;
const APP_KEY = "-----BEGIN PUBLIC KEY----- MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgBh8L8H+TYqO+C5HgDAibQZRvLDyjsQLLXngLHTcugL7c4SUzEPm9oSOfxFFvv5sHM3dkKSYUTUCL9gomnklVHZInBwqzXXZ32dL9BspXbOF75g+S6mfDz0ostrBq8HBwJOPfUjFYAXzNjdze+qs+CWHQEgcPSNxjc7UA2vU64wIDAQAB -----END PUBLIC KEY-----";
const APP_ID = '8355DD90B2C14852B5653A12C5870EB7'; // Appid
const APP_SECRET =  'aA$347';// 业务应用秘钥
//const IM_URI = 'http://im01.aptoto.com'; // im01 地址
//const WS_URI = 'http://im02.aptoto.com'; // im02 地址
// 
// 测试环境
const IM_URI = 'http://183.6.133.107:2180';
const WS_URI = 'http://183.6.133.107:2180';

export default  {
	REQUEST_URI :REQUEST_URI,
	APP_KEY : APP_KEY,
	APP_ID : APP_ID,
	IM_URI : IM_URI,
	WS_URI : WS_URI
}
