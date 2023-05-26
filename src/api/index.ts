import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// POST传参序列化
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  // console.log('错误的传参')
  return Promise.reject(error)
})

declare global {
  interface Window {
    tipLock: boolean;
  }
}

// 返回状态判断
window.tipLock = false
axios.interceptors.response.use(async (res) => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  const code = res.data.code
  if (code !== 1) {
    // API狀態判斷
  }
  return res
}, (error) => {
  if (!window.tipLock) {
    window.tipLock = true
  }
  return Promise.reject(error)
})

export const rest = {
  create <T> (url:string, params:T) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(response => {
          resolve(response.data)
        }, error => {
          if (error.message === '取消请求') return
          reject(error.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  post: <T> (url:string, params:T) => {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params))
        .then(response => {
          resolve(response.data)
        }, error => {
          if (error.message === '取消请求') return
          reject(error.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  get: <T>(url:string, params:T) => {
    return new Promise((resolve, reject) => {
      // const param:any = params || {}
      const paramData: Record<string, any> = {}
      for (const item in params) {
        if (params[item] === null || params[item] === undefined) {
          continue
        }
        paramData[item] = encodeURIComponent(params[item] as string|number|boolean)
      }
      const uri = getStrUrl(url, paramData)
      // console.log(uri)
      axios.get(uri)
        .then(function (res) {
          resolve(res.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
export function getStrUrl<T> (url:string, params:T) {
  if (params) {
    let uri = '?'
    for (const item in params) {
      uri = uri + item + '=' + params[item] + '&'
    }
    return url + uri
  }
  return url
}
