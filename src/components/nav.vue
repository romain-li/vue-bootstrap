<template>
  <nav class="navbar navbar-light navbar-fixed-top" style="background-color: #b5ddff;color:#fff;">
    <a class="navbar-brand" v-link="{name:'home'}">tjj</a>
    <ul class="nav navbar-nav">
      <li class="nav-item" v-for="item in items">
        <a class="nav-link" v-link="{name:item.vLink, activeClass: 'custom-active-class active v-link-active'}">{{item.value}}</a>
      </li>
    </ul>
    <form class="form-inline navbar-form pull-right">
      <input class="form-control" type="text">
      <button class="btn btn-success-outline" type="submit">搜索</button>
    </form>
  </nav>
</template>
<script>
    export default{
        data(){
            return{
              items: [
                {
                  value: 'Home',
                  vLink: 'home'

                },
                {
                  value: '列表页',
                  vLink: 'list'

                },
                {
                  value: '登录',
                  vLink: 'login'

                },
                {
                  value: '注册',
                  vLink: 'register'
                }
              ]
            }
        }
    }
</script>

<style>
  .nav-item {
    padding: 0 10px;
    color: #fff;
  }
  .nav-item a {
    display: inline-block;
    width:100%;
    height: 100%;
  }
  .nav-link {
    margin-top: 1px;
    font-size: 18px;
  }
  .navbar-brand {
    margin-top: 2px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
  .active {
    color: rgba(0,0,0,.6)!important;
  }
</style>
