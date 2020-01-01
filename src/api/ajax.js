/*
    ajax请求函数模块
    返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios';
//封装ajax请求
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise;
        if (type === 'GET') {
            let dataStr = ''; //拼接get请求字符串参数
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })

            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&')) //去除最后一个'&'符号
                url = url + '?' + dataStr
            }

            promise = axios.get(url);  //发送get请求
        } else {
            promise = axios.post(url, data); //发送post请求
        }
        //请求结束执行回调函数
        promise.then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            reject(error)
        })

    })
}