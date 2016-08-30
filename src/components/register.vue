<template>
  <test></test>
  <div id="register">
    <form>
      <div class="form-group row">
        <label for="inputName" class="col-sm-2 form-control-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputName" v-model="datas.inputName" placeholder="请输入用户名">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 form-control-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="datas.inputPassword" lazy id="inputPassword" placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputAge" class="col-sm-2 form-control-label">年龄</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="datas.inputAge" number id="inputAge" placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-2 form-control-label">邮箱</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail" v-model="datas.inputEmail" placeholder="请输入邮箱">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputResidence" class="col-sm-2 form-control-label">居住地</label>
        <div class="col-sm-10">
          <select class="c-select form-control" id="inputResidence" v-model="datas.selected">
            <option value="">请选择居住地</option>
            <option value="北京">北京</option>
            <option value="上海">上海</option>
            <option value="深圳">深圳</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2">性别</label>
        <div class="col-sm-10">
          <div class="radio">
            <label>
              <input type="radio" name="gridRadios" v-model="datas.sex" id="gridRadios1"  value="男">
             男
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="gridRadios" v-model="datas.sex" id="gridRadios2" value="女">
              女
            </label>
          </div>
          <div class="radio disabled">
            <label>
              <input type="radio" name="gridRadios" v-model="datas.sex" id="gridRadios3" value="未知">
              未知
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2">喜欢类别</label>
        <div class="col-sm-10">
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox1" value="动漫" v-model="checkedNames"> 动漫
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox2" value="电影" v-model="checkedNames"> 电影
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox3" value="小说" v-model="checkedNames"> 小说
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox4" value="影视剧" v-model="checkedNames"> 影视剧
          </label>
          <span>选择喜欢的类别: {{ checkedNames | json }}</span>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" v-link="{name:'login'}" class="btn btn-danger">登录</button>
          <button type="submit" class="btn btn-danger">确认注册</button>
        </div>
      </div>
      <h1>取得的数据：{{datas |　json}}</h1>
    </form>
  </div>
</template>

<script>
  import test from './nav.vue'
  export default {
    data() {
      return {
        checkedNames: [],
        datas: {}
      }
    },
    components: {
      test
    }
  }
</script>
