/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code:0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})
//返回position的接口(用正则表达式监听positon后面的域名: .* 单个字符匹配任意多次)
Mock.mock(RegExp('/position' + ".*"),{code:0, data:{"name":"广州白云区"}})
//返回shops的接口
Mock.mock(RegExp('/shops' + ".*"),{code:0, data: data.shops})
//返回search_shops的接口(用正则表达式监听带参数的地址: .* 单个字符匹配任意多次)
Mock.mock(RegExp('/search_shops' + ".*"),'get',function(req) {
    var keyWord = req.url.split('?')[1].split('&')[1].split('=')[1];
    var shops = data.shops.filter(function(ele) {
        return ele.name.indexOf(keyWord) != -1;
    })
    return {"code": 0, data: shops};
})
//返回index_category的接口
Mock.mock('/index_category',{code:0, data: data.index_category})
// 返回login_pwd的接口
Mock.mock('/login_pwd', 'post', function(req) {
    let user_info = data.user_info;
    let body = JSON.parse(req.body);
    let isUser = null;
    //判断验证码是否正确
    if(body.input_captcha_str!= localStorage.getItem('img_captcha_str')) {
        return {code: 1, msg: '验证码错误!'};
    }
    //判断用户名或密码是否正确
    user_info.some(user => {
        if((body['name'] == user['name'] && body['pwd'] == user['pwd']) || (body['phone'] == user['phone'] && body['pwd'] == user['pwd'])) {
            isUser = {
                "name": user['name'],
                "pwd": user['pwd'],
                "phone": user['phone']
            };
            sessionStorage.setItem("name", user['name']);
            sessionStorage.setItem("phone", user['phone']);
            return true;
        }
    });
    
    if(isUser) {
        return {code:0, data: isUser};
    }else {
        return {code: 1, msg: '用户名或密码不正确!'}
    }
})
//返回sendcode的接口
Mock.mock('/sendcode',{"code": 0})
//返回login_sms的接口
Mock.mock('/login_sms','post',function(req) {
    let user_info = data.user_info;
    let body = JSON.parse(req.body);
    let isUser = null;
    //判断用户名或密码是否正确
    user_info.some(user => {
        if(body['phone'] == user['phone']) {
            isUser = {
                "name": user['name'],
                "pwd": user['pwd'],
                "phone": user['phone']
            };
            sessionStorage.setItem("name", user['name']);
            sessionStorage.setItem("phone", user['phone']);
            return true;
        }
    });

    if(isUser) {
        return {code:0, data: isUser};
    }else {
        return {code: 1, msg: '手机号或验证码错误!'}
    }
})
//返回userinfo的接口
Mock.mock('/userinfo',{code: 0, data: {
    'name':  sessionStorage.getItem("name"),
    'phone':  sessionStorage.getItem("phone")
  }})
//返回logout的接口
Mock.mock('/logout',function() {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("pwd");
    return {code: 0};
})


// export default  此模块不需要向外暴露任何数据, 只需要导入使其执行就好