<template>
  <div class="login">
    <Reset
    v-on:openNotif="openNotif($event)"
    v-on:closeNotif="closeNotif($event)" />
  </div>
</template>

<script>
import Reset from '../../components/_base/login/reset'
export default {
  name: 'Login',
  components: {
    Reset
  },
  methods: {
    openNotif () {
      this.$emit('openNotif', true)
    },
    closeNotif () {
      this.closeNotif('closeNotif', false)
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
  background-color: #ffffff;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
  border-radius: 30px;
}

@media (max-width: 768px) {
  .login {
    position: absolute;
    width: 500px;
    height: 300px;
    left: 70px;
    top: 30px;
    background-color: #ffffff;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    border-radius: 30px;
  }
}

@media (max-width: 576px) {
  .login {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: #ffffff;
    border-radius: 0px;
  }
}
</style>
