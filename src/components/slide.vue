<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox" style="width:100%;">
        <div class="carousel-item active">
          <a>
            <img class="slide-img" src="../assets/ad.jpg" alt="">
            <div class="carousel-caption">
              <h1>薛之谦薛之谦薛之谦薛之谦薛之谦薛之谦薛之谦薛之谦</h1>
              <h2>啦啦啦~</h2>
            </div>
          </a>
        </div>
      <div class="carousel-item">
        <img class="slide-img" src="../assets/as.jpg" alt="">
        <div class="carousel-caption">
          <h1>薛之谦薛之谦薛之谦薛之谦薛之谦薛之谦薛之谦薛之谦</h1>
          <h2>啦啦啦~</h2>
        </div>
      </div>
      <div class="carousel-item">
        <img class="slide-img" src="../assets/aa.jpg" alt="">
        <div class="carousel-caption">
          <h1>鹿晗鹿鹿晗</h1>
          <h2>啦啦啦~</h2>
        </div>
      </div>
    </div>
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="icon-prev" aria-hidden="true"></span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="icon-next" aria-hidden="true"></span>
    </a>
  </div>
  <input v-model="msg">
</template>

<style>
  .carousel-inner a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .slide .slide-img {
    width: 100%;
    height: 760px!important;
  }
</style>

<script>
  export default {
    props: ['msg']
  }
</script>
