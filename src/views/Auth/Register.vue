<template>
  <div class="register yellow">
    <Register />
    <h1>register</h1>
  </div>
</template>

<script>
import Register from '../../components/_base/login/register'
export default {
  name: 'Register',
  components: {
    Register
  }
}
</script>

<style scoped>
.register {
  position: absolute;
  width: 500px;
  height: 570px;
  left: 433px;
  top: 47px;
  background-color: #FFFFFF;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}
.yellow {
  background-color: yellow;
}

</style>
