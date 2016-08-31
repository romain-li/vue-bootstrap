<template>
  <div class="father-chain">
    <h1>测试父链</h1>
    <input v-model="msg">
    <button @click="notify">Dispatch Event</button>
  </div>
</template>
<script>
    export default{
        data() {
          return {
            msg: 'hello'
          }
        },
        methods: {
          notify: function () {
            if(this.msg.trim()) {  //trim去除空格
                this.$dispatch('child-msg',this.msg);
                this.msg = "";
            }
          }
        }
    }
</script>
