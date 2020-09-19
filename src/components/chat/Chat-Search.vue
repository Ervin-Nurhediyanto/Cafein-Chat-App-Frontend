<template>
  <!-- <div class="row search-box d-flex justify-content-between"> -->
  <div class="search-input">
    <i class="fa fa-search" aria-hidden="true"></i>
    <input placeholder="Type your message..." />
  </div>
  <!-- <div @click="handleAdd">
      <h4>+</h4>
  </div>-->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'search-chat',
  data () {
    return {
      telegramShow: true
    }
  },
  computed: {},
  methods: {}
}
</script>

<style>
.search-box {
  margin-top: 20px;
  /* width: 100%; */
  width: 300px;
  /* background-color: pink; */
  padding: 0;
}

.search-box .search-input {
  background-color: #fafafa;
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  /* background-color: peru; */
}

.search-box input {
  border: none;
  background-color: transparent;
  margin-left: 10px;
  color: #848484;
  width: 200px;
}

.search-box h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
  margin-right: 0px;
  margin-top: 5px;
  cursor: pointer;
  /* background-color: orange; */
}

@media (max-width: 768px) {
  .search-box {
    margin-top: 0px;
    width: 129px;
    height: 30px;
    /* background-color: deepskyblue; */
  }

  .search-box .search-input {
    padding: 0px;
    padding-left: 5px;
    width: 110px;
    height: 30px;
    /* background-color: blue; */
  }

  .search-box input {
    margin-left: 5px;
    width: 80px;
    font-size: 10px;
    /* background-color: indigo; */
  }

  .search-box i {
    font-size: 10px;
  }

  .search-box h4 {
    font-size: 25px;
    margin-right: 0px;
    margin-top: 0;
    /* background-color: fuchsia; */
  }
}
</style>
