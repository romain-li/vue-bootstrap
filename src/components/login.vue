<template>
  <test></test>
  <div id="login">
    <form name="form">
      <div class="form-group row">
        <label for="inputName3" class="col-sm-2 form-control-label">2423用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="userName" required='' id="inputName3" name="inputName3" placeholder="请输入用户名">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 form-control-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="userPaw" required='' id="inputPassword3" name="inputPassword3" placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" @click="submit" class="btn btn-danger">确认登录</button>
          <button type="button" @click="goRegisrer" class="btn btn-danger">注册</button>
        </div>
      </div>
      <p>{{detail}}</p>
    </form>
    <router-view></router-view>
  </div>
</template>

<style>
  #login,
  #register {
    margin-top: 30px;
  }
</style>

<script>
  import test from './nav.vue'
  import router from '../main.js'
  export default {
    components: {
      test
    },
    computed: {
      detail: function () {
        return "用户名:" + this.userName + "密码:" + this.userPaw
      }
    },
    data() {
      return {
        userName: '2323',
        userPaw: '123123'
      }
    },
    methods: {
      submit: function () {
        router.go({name: 'registerResult'});
      },
      goRegisrer: function () {
        router.go({name: 'register'});
      }
    }
  }
</script>
