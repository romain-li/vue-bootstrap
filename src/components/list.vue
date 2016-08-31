<template>
  <div id="list">
    <test></test>
    <ul>
      <li v-for="list in listData" track-by="id">
        <a v-link="{name:'list/detail', params: {userId: list.id}}" id="card">
          <img class="card-img-top" src="../assets/as.jpg">
          <!--<img class="card-img-top" :src={{list.img}}>-->
          <div class="card-block">
            <h4 class="card-title">{{list.title}}</h4>
            <p class="card-text"><small class="text-muted">{{list.small}}</small></p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
  #card .card-block {
    border: 2px solid #e8e8e8;
    margin-bottom: 20px;
  }
  #card {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  #card img {
    width: 100%;
    height: 400px;
  }
</style>

<script>

  import test from './nav.vue'
  export default {
    data() {
      return {
        listData:[
          {
            id: 1,
            img: '../assets/as.jpg',
            title: '我的心愿是世界和平',
            detail: 'This is a wider card with supporting te4334543xt below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action',
            small: 'Last updated 3 mins ago'
          },
          {
            id: 2,
            img: '../assets/as.jpg',
            title: '我的心愿是世界和平',
            detail: 'This is a wider card with supporting te4334543xt below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action',
            small: 'Last updated 3 mins ago'
          },
          {
            id: 3,
            img: '../assets/as.jpg',
            title: '我的心愿是世界和平',
            detail: 'This is a wider card with supporting te4334543xt below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action',
            small: 'Last updated 3 mins ago'
          }
        ]
      }
    },
    components: {
      test
    }
  }
</script>

