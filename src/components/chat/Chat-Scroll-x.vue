<template>
  <div class="row scroll-x d-flex justify-content-between">
    <h4>All</h4>
    <h4>Important</h4>
    <h4>Unread</h4>
    <h4>Read</h4>
  </div>
</template>

<script>
export default {
  name: 'Chat-Scroll-x'
}
</script>

<style>
.scroll-x {
    margin-top: 20px;
    margin-bottom: 20px;
}

.scroll-x h4 {
    border-radius: 15px;
    min-width: 40px;
    min-height: 30px;
    font-size: 15px;
    padding: 8px;
    cursor: pointer;
}

.scroll-x h4:active {
    background-color: #7E98DF;
    border-radius: 15px;
    min-width: 40px;
    min-height: 30px;
    font-size: 15px;
    padding: 8px;
    color: #FFFFFF;
}
</style>
