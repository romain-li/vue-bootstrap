<template>
  <div id="list-detail">
    <test></test>
    <p>我是{{$route.params.userId}}</p>
    <div>
      <p>messages:{{messages | json}}</p>
      <father-chani @child-msg="handleIt"></father-chani>
    </div>
  </div>
</template>

<script>
  import test from './nav.vue'
  import fatherChani from './father-chain.vue'
  import route from './../main.js'
  export default {
    data() {
      return {
        mag: '234234',
        messages: []
      }
    },
    components: {
      test,fatherChani
    },
    methods: {
      handleIt: function () {      //第一种方法获取子组件数据
        this.messages.push(arguments[0])
      }
    }
//    events: {  //第二种方法获取子组件数据
//      'child-msg': function (msg) {
//        this.messages.push(msg);
//      }
//    }
  }
</script>

