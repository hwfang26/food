如何运行：

1.进入food文件夹，启动cmd命令执行npm install。

2.执行npm run start。


# 一、项目描述

  本项目是一个基于Vue实现的移动端外卖APP（SPA）, 使用了 Vue 全家桶+ES6+Webpack 等前端最新技术，包括商家信息、食品列表、购物车、用户评价、用户登录、商家搜索等多个功能子模块，采用模块化、组件化、工程化的模式开发。

# 二、功能模块
  1.首页商家列表展示
  2.商家页面展示，包括商家食物、店面评价、商家信息。
  3.搜索商家功能
  4.登录注册功能。
  5.添加购物车功能。

# 三、页面展示

<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/1.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/2.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/3.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/4.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/5.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/6.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/14.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/7.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/8.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/9.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/10.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/11.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/12.png" /></div>
<div align=center><img src="https://github.com/hwfang26/food/blob/master/product_img/13.png" /></div>


# 四、技术描述

### 1、项目整体基于vue-cli2搭建前端框架，使用阿里巴巴矢量图标库引入iconfont字体图标，引入fastclik.js插件解决移动端0.3s点击延迟问题。
### 2、使用css预处理器stylus进行css代码的快速编写，运用flex进行弹性布局，并用媒体查询根据设备像素比device-pixel-ratio对移动端1px边框进行对应比例的缩放，同时根据不同的像素比使用2X图或3X图。
### 3、使用mint-ui组件库编写button按钮和弹出框，运用better-scroll和swiper插件配合watch和$nextTick()方法实现页面滚动效果，利用vue中的transition组件实现动画过渡效果。
### 4、使用vue-router实现前端路由跳转，运用vuex保存用户信息、地址、商家列表、购物车列表等相关信息，并对各个组件状态进行管理。	
### 5、使用axios对ajax请求函数进行封装，并用mockjs对后台请求接口进行模拟，在vuex的actions中使用async/await更加语义化的对异步返回结果进行处理。
### 6、使用正则表达式对登录账号信息进行前端校验。
### 7、运用keep-alive、路由组件懒加载、图片懒加载vue-lazyload对项目进行优化以提高性能。 

