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
width: 200px;
padding: 10px;
}

.menu i.fa {
  margin-right: 10px;
  margin-left: 10px;
}

@media (max-width: 768px) {
  .menu {
    width: 100px;
    height: 30px;
    padding: 0px;
    margin-top: 2px;
    margin-bottom: 10px;
  }

  .menu i {
    font-size: 12px;
  }
}
</style>
