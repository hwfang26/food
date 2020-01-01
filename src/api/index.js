/*
    接口请求函数的模块,函数的返回值都是promise对象
 */
import ajax from './ajax';
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'; //在config/index.js文件里设置proxyTable使浏览器支持跨域

//mock请求
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude});
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, input_captcha_str}) => ajax('/login_pwd', {name, pwd, input_captcha_str}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')
// 10、用户登出
export const reqLogout = () => ajax('/logout')

// 11.获取商家信息
export const reqShopInfo = () => ajax('/info')
//12.获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
//13.获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
