<template>
  <div class="row search-box d-flex justify-content-between">
    <div class="search-input">
      <i class="fa fa-search" aria-hidden="true"></i>
      <input placeholder="Type your message..." />
    </div>
    <h4>+</h4>
  </div>
</template>

<script>
export default {
  name: 'search-chat'
}
</script>

<style>
.search-box {
    margin-top: 30px;
}

.search-box .search-input {
    background-color: #FAFAFA;
    border-radius: 20px;
    padding: 10px;
}

.search-box input {
    border: none;
    background-color: transparent;
    margin-left: 10px;
    color: #848484;
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
    margin-right: 10px;
}
</style>
