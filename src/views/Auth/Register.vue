<template>
  <div class="signUp">
    <!-- <Register /> -->
    <SignUp />
  </div>
</template>

<script>
import SignUp from '../../components/_base/login/register'
// import SignIn from '../../components/_base/login/signin'

export default {
  name: 'Register',
  components: {
    SignUp
    // SignIn
  }
}
</script>

<style scoped>
.signUp {
  position: absolute;
  width: 500px;
  height: 590px;
  left: 433px;
  top: 47px;
  /* background-color: yellow; */
  background-color: #FFFFFF;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}

</style>
