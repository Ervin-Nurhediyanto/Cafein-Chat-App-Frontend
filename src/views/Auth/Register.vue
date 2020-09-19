<template>
  <div class="signUp">
    <SignUp />
  </div>
</template>

<script>
import SignUp from '../../components/_base/login/register'
export default {
  name: 'Register',
  components: {
    SignUp
  }
}
</script>

<style scoped>
.signUp {
  position: absolute;
  width: 500px;
  height: 605px;
  left: 433px;
  top: 47px;
  background-color: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}

@media (max-width: 768px) {
  .signUp {
    position: absolute;
    width: 500px;
    height: 590px;
    left: 70px;
    top: 30px;
    background-color: #ffffff;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    border-radius: 30px;
  }

  @media (max-width: 576px) {
    .signUp {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      background-color: #ffffff;
      border-radius: 0px;
    }
  }
}
</style>
