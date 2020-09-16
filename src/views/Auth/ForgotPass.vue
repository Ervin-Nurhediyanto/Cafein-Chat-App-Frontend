<template>
  <div class="login">
    <Reset />
  </div>
</template>

<script>
// import SignIn from '../../components/_base/login/signin'
import Reset from '../../components/_base/login/reset'
export default {
  name: 'Login',
  components: {
    Reset
  }
}
</script>

<style scoped>
.login {
  position: absolute;
  width: 500px;
  height: 570px;
  left: 433px;
  top: 47px;
  background-color: #FFFFFF;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}
</style>
