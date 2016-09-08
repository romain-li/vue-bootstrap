<template>
  <div>
    <test></test>
    <p>我是{{$route.params.userId}}</p>
    <div>
      <p>messages:{{messages | json}}</p>
      <father-chani @child-msg="handleIt"></father-chani>
    </div>
    <hr>

    <slots>
      <!--<p>This is some original content</p>  &lt;!&ndash;如果子组件的标签里没有内容的话，则显示子组件slot的内容&ndash;&gt;
      <p>This is some more original content</p>-->

      <p slot="one">One</p>
      <p slot="two">Two</p>
      <p>Default A</p>
    </slots>
  </div>
</template>

<script>
  import test from './nav.vue'
  import fatherChani from './father-chain.vue'  //测试父链
  import slots from './slot.vue'      //测试slot
  import route from './../main.js'
  export default {
    data() {
      return {
        mag: '234234',
        messages: []
      }
    },
    components: {
      test,fatherChani,slots
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

