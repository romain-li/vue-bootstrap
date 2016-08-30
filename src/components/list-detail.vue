<template>
  <div id="list-detail">
    <test></test>
    <h1>我是3242423list-3423242434</h1>
    <p>我是{{$route.params.userId}}</p>
  </div>
</template>

<script>
  import test from './nav.vue'
  import route from './../main.js'
  console.log(route);
  export default {
    data() {
      return {
        mag: '234234'
      }
    },
    components: {
      test
    }
  }
</script>

