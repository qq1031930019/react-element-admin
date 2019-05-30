/* eslint-disable no-undef */
import axios from 'axios'
import qs from 'qs'
let http = {}
let hostUrl = '' // 业务域名
let powerUrl = '' // 权限域名
let href = window.location.href

/**
 * 域名配置
 */
// if (href.split('#')[0].indexOf('5566') > -1) {// 本地
//   hostUrl = '测试地址/本地地址'
//   powerUrl = '权限测试地址'
// }
// if (/http(s)?:\/\/testhtml/g.test(href)) {// 测试
//   hostUrl = '测试地址'
//   powerUrl = '权限测试地址'
// } else if (/https:\/\/grayhtml/g.test(href)) { // 灰度
//   hostUrl = '灰度地址'
//   powerUrl = '权限灰度地址'
// } else if (/https:\/\/html/g.test(href)) { // 正式
//   hostUrl = '正式地址'
//   powerUrl = '权限正式地址'
// }

/**
 * 请求拦截器
 * 可以把请求前的数据做处理
 */
axios.interceptors.request.use(config => {
  // 在请求发送之前做一些事 如显示loading效果
  return config
}, error => {
  // 当出现请求错误是做一些事
  return Promise.reject(error)
})
/**
 * 响应拦截器
 * 可以对响应的数据做拦截，如做统一的错误处理
 */
axios.interceptors.response.use(response => {
  // 对返回的数据进行一些处理 如隐藏loading效果
  return response
}, error => {
  // apiError(error)
  return Promise.resolve(error.response)
})
/**
 * 封装的get请求
 * @param url 请求接口
 * @param params get的请求参数，跟在url后面的参数
 * */
http.get = (url, params) => {
  // eslint-disable-next-line no-undef
  let completeUrl = hostUrl + url
  return axios.get(completeUrl, {
    params,
    headers: {
      'token': localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : ''
    }
  }).then((response) => response.data).catch(error => error)
}
/**
 * 封装的delete请求
 * @param url 请求接口
 * @param params delete的请求参数，跟在url后面的参数
 */
http.delete = (url, params) => {
  // eslint-disable-next-line no-undef
  let completeUrl = hostUrl + url
  return axios.delete(completeUrl, {
    params: params,
    headers: {
      'token': localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : ''
    }
  }).then((response) => response.data).catch(error => error)
}
/**
 * 封装的post请求
 * @param url 请求接口
 * @param data post请求 放在data中的参数
 * */
http.post = (url, data, type = 'form') => {
  // 公参
  let paramData = Object.assign({}, data)
  // 对参数是否是json做区分默认非json参数
  let contentType = type === 'form' ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json; charset=UTF-8'
  // eslint-disable-next-line no-undef
  let completeUrl = hostUrl + url
  return axios({
    timeout: 15000,
    method: 'post',
    url: completeUrl,
    data: (type === 'form') ? qs.stringify(paramData) : paramData,
    headers: {
      'Content-Type': contentType,
      'token': localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : ''
    }
  }).then((response) => {
    // 不做全局报错处理
    // return response.data
    // 做全局报错处理
    return response.data
  }).catch(error => error)
}
// 供权限使用,业务接口请走上面get/post
http.request = (url, data, type = 'form') => {
  // 公参
  let paramData = Object.assign({}, data)
  // 对参数是否是json做区分默认非json参数
  let contentType = type === 'form' ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json; charset=UTF-8'
  // eslint-disable-next-line no-undef
  let completeUrl = powerUrl + url
  return axios({
    timeout: 15000,
    method: 'post',
    url: completeUrl,
    data: (type === 'form') ? qs.stringify(paramData) : paramData,
    headers: {
      'Content-Type': contentType,
      'token': localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : ''
    }
  }).then((response) => {
    // 不做全局报错处理
    // return response.data
    // 做全局报错处理
    return checkResult(response.data)
  }).catch(error => error)
}
/**
 * 全局报错处理
 * @res 后台返回的数据
 */
function checkResult(res) {
  if (res.result.code === '100') { // 对应后台token失效code跳转到登录页
    setTimeout(() => {
      window.location.hash = '/';
    }, 100)
  }
  return res
}
export default http
