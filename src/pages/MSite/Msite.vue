<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
        <router-link class="header_search" slot="left" to="/search">
            <i class="iconfont icon-sousuo"></i>
        </router-link>

        <router-link class="header_login" slot="right" :to="userInfo.name ? '/userinfo': '/login'">
            <span class="header_login_text"  v-if="!userInfo.name">登录|注册</span>
            <span class="header_login_text" v-else>
              <i class="iconfont icon-person"></i>
            </span>
        </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- 分页索引点 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <!-- 商家组件 -->
      <ShopList />
    </div>
  </section>
</template>

<script>
    import Swiper from 'swiper'
    import { mapState } from 'vuex' //方便直接使用Vuex中state的数据而不用通过computed间接获取

    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import ShopList from '../../components/ShopList/ShopList.vue'

    export default {
        data () {
          return {
            baseImageUrl: 'https://fuss10.elemecdn.com'
          }
        },
        mounted(){
            this.$store.dispatch('getCategorys'), //获取食品分类列表
            this.$store.dispatch('getShops') //获取商家列表
        },
        computed: {
          ...mapState(['address','categorys','userInfo']),
          /*
          根据categorys一维数组生成一个2维数组
          小数组中的元素个数最大是8
          */
          categorysArr () {
            const {categorys} = this
            // 创建一个空的二维数组
            const arr = []
            // 准备一个小数组(最大长度为8,因为页面一页最多显示8个)
            let minArr = []
            // 遍历categorys
            categorys.forEach(c => {
              // 如果当前小数组已经满了, 创建一个新的
              if(minArr.length === 8) {
                minArr = []
              }
              // 如果minArr是空的, 将小数组保存到大数组中
              if(minArr.length === 0) {
                arr.push(minArr)
              }
              // 将当前分类保存到小数组中
              minArr.push(c)
            })

            return arr
          }
        },  
        watch: {
          //监听categorys属性的变化
          categorys (value) { 
            /* 
              异步更新数据会在异步更新界面之前执行，数据更新完界面还没有足够的dom元素,此时
              如果立即调用swiper对象是看不到轮播效果的,所以要异步调用swiper对象(等界面更新完再
              调用)
            */
            // $nextTick表示界面更新就立即创建Swiper对象(使用定时器也可以,但不够理想)
            //在下次 DOM 更新循环结束之后执行延迟回调。
            this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
              //创建swiper轮播对象
              new Swiper(".swiper-container",{
                  loop:true, //循环轮播
                  pagination:{ //使用分页器
                      el:'.swiper-pagination',
                  }
              })
            })
          }
        },
        components: {
            HeaderTop,
            ShopList
        },
        
        
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: rgba(136,46,220,0.612);
        }
      }
    }
  }

  .msite_shop_list {
    // top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 5px 10px 0;

      .showFooterhop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }

    
  }
}
</style>
