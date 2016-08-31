<template>
  <div id="list-detail">
    <test></test>
    <p>我是{{$route.params.userId}}</p>
  </div>
</template>

<script>
  import test from './nav.vue'
  import route from './../main.js'
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

