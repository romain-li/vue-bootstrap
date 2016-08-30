import Vue from 'vue'

//引入css文件
import './dist/lib/bootstrap.min.css'
import './dist/lib/reset.css'

//引入组件
import App from './App.vue'   //主路由
import login from './components/login.vue'  //登录
import home from './components/home.vue'  //首页
import register from './components/register.vue'   //注册
import list from './components/list.vue'  //列表页
import listDetail from './components/list-detail.vue'  //列表详情页
import registerResult from './components/register-result.vue' //登录/注册  结果


//引入router插件
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//注册两个插件
Vue.use(VueResource);
Vue.use(VueRouter);

//使用路由
var router = new VueRouter({
  hashbang: false,
  history: true,  //H5 的 pushState history.popState history。replaceState
  saveScrollPosition: true,
  /* 保存滚动位置 */
  transitionOnLoad: true,
  linkActiveClass: 'v-link-active',
  root: '/'
});

export default router;
router.map({
  'home': {
    name: 'home',
    component: home,
    subRoutes: {

    }
  },
  'login': {
    name: 'login',
    component: login,
    subRoutes: {
      '/registerResult': {
        name: 'registerResult',
        component: registerResult
      }
    }
  },
  'register': {
    name: 'register',
    component: register
  },
  'list': {
    name:'list',
    component: list
  },
  'list/:userId': {
    name: 'list/detail',
    component: listDetail
  }
});
router.redirect({
  '*': 'home'
});
//实例router
router.start(App, '#app');
