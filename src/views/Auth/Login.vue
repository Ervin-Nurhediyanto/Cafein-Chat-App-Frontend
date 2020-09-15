<template>
  <!-- <div class="container-fluid"> -->
  <div class="login">
    <!-- <component v-bind:is="component"
    @register-event="component='Register'"
    @login-event="component='SignIn'"
    @forgot-password="component='Reset'">
    </component>-->
    <SignIn />
  </div>
  <!-- </div> -->
</template>

<script>
import SignIn from '../../components/_base/login/signin'
// import Register from '../../components/_base/login/register'
// import Reset from '../../components/_base/login/reset'
// import Confirm from '../../components/_base/login/confirm'

export default {
  name: 'Login',
  components: {
    SignIn
    // Register,
    // Reset,
    // Confirm
  },
  data () {
    return {
      //   component: SignIn
    }
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
