import axios from "axios"

const http = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})
// 请求拦截器
http.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
)
// 响应拦截器
http.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

export default http