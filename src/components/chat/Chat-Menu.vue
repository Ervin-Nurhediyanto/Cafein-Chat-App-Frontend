<template>
  <div class="menu">
    <i class="fa fa-users" aria-hidden="true"></i>
    <i class="fa fa-lock" aria-hidden="true"></i>
    <i class="fa fa-bullhorn"></i>
  </div>
</template>

<script>
export default {
  name: 'Chat-Menu'
}
</script>

<style scoped>
.menu {
background: #7E98DF;
border-radius: 20px;
width: 278px;
/* height: 45px; */
padding: 10px;
}

.menu i.fa {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
