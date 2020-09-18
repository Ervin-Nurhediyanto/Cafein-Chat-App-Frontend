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
padding: 10px;
}

.menu i.fa {
  margin-right: 10px;
  margin-left: 10px;
}

@media (max-width: 768px) {
  .menu {
    width: 120px;
    padding: 4px;
    margin-top: 2px;
  }
}
</style>
