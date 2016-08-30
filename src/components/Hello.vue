<template>
  <div class="hello">
    <test></test>

    <h1>{{ msg }}</h1>
    <img class="logo img-reponsive" src="./../assets/as.jpg">
    <h2>我是主页面</h2>
    <button type="button" class="btn btn-info" v-link=" {name:'login'} ">登录</button>
    <a @click="doSomething">click</a>
    <p>当前路径 :{{$route.path}} </p>
  </div>
</template>
<script>
  import test from './Test.vue'
  export default {
    components: {
      test
    },
    data () {
      return {
        msg: 'Hello World!',
        doSomething: function (e) {
          alert(23)
        }
      }
    }
  }
</script>


