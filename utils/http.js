/* eslint-disable */
// import promise from 'es6-promise'
// promise.polyfill();
import axios from "axios";
// import  qs from 'qs';
// axios.defaults.baseURL = '';
// axios.defaults.responseType = 'json';
// axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
// const URL = 'https://mcrm.zj.chinamobile.com:5443/mcrm-beta/beta/'; //beta
const URL = 'https://mcrm.zj.chinamobile.com:5443/gray/'; //灰度環境
// const URL = 'http://20.26.17.81:8024/'; //测试环境
// const URL = 'http://20.26.17.81:8022/'; //测试环境
// const URL = 'https://mcrm.zj.chinamobile.com:5443/';
// const URL = 'http://20.26.39.174/'; //测试网关
// const URL = 'http://192.168.1.199:8080/'; //测试网关
// product环境https://mcrm.zj.chinamobile.com:5443/
// const URL = 'https://mcrm.zj.chinamobile.com:10443/'; //beta环境
// const URL = 'https://mcrm.zj.chinamobile.com:5443/mcrm-beta/betaFore/'; //v4.0 beta环境
// Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     console.log('axios拦截器',response);
//     return response
//     let resData = response.data;
//     // 以下无数据的判断对取号接口适配
// /*    if (!resData) {
//       return Promise.reject('数据格式不对', response);
//     }
//     if (resData.code === 200 || resData.code === '200') {
//       return resData.data;
//     } else {
//       return Promise.reject(resData.message);
//     }*/
//   },
//   function (error) {
//     if (
//       error.code === 'ECONNABORTED' &&
//       error.message.indexOf('timeout') >= 0
//     ) {
//       return Promise.reject('请求超时');
//     } else {
//       return Promise.reject(error.message);
//     }
//   },
// );
const get = (url, params) => {
    return axios({
        method: 'get',
        withCredentials: true,
        url,
        params,
        data: undefined,
    });
};
const post = (url, data) => {
    return axios({
        method: 'post',
        withCredentials: true,
        url,
        pararms: undefined,
        data,
    });
};
/**
 * 通用post方法
 * @param url
 * @param request
 * @returns
 */

const mcrmPost = (url, request) => {
  // var a = qs.stringify(request)
    return new Promise((resolve, reject) => {
        axios({
          // withCredentials :true,
          headers: {'Content-Type': 'text/plain;charset=UTF-8'},
            method: 'post',
            url: URL+url,
            responseType: 'text',
            data: request,
        }).then(res => {
          if(url=='setSessionId'){
            console.log('结果---------',res)
            resolve()
            return
          }
          let result = res.data;
          if (result != null) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(result, "text/xml");
            var resultMCRMReturn = xmlDoc.getElementsByTagName('MCRMReturn')[0].textContent;
            resolve(JSON.parse(resultMCRMReturn))
          }
        }).catch(res => {
          // if(url=='setSessionId'){
          //   console.log('结果---------失败',res)
          //   resolve()
          //   return
          // }
            reject(res)
        })
    });
};
export {get, post, mcrmPost};
