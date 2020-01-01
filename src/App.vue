<template>
    <div id="app">
        <router-view/>
        <!-- $route表示当前路由 -->
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>
 
<script>
    import { mapActions } from 'vuex';//方便使用vuex中的action

    import FooterGuide from './components/FooterGuide/FooterGuide.vue';
    // import {reqFoodTypes} from './api/index.js' //可以简写成'./api',模块会自动查找api下面的index.js文件
    
	export default {
		components: {
			FooterGuide
        },
        //第四个生命周期函数,表示内存中的模板已经挂载到页面中了
        mounted() {
            this.getAddress(),
            this.getUserInfo()
        },
        methods: {
            ...mapActions(['getAddress','getUserInfo'])
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    
</style>