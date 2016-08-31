<template>
  <div class="app">
    <router-view></router-view>
  </div>
  <!--<h1>{{ds}}</h1>-->
</template>

<script>
  export default {
    data() {
      return {
        ds: '我是取代props的数据'
      }
    }
  }
</script>
