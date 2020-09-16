<template>
  <div class="signin">
    <form role="form" id="login-form">
      <div class="row">
        <h2 class="back" @click="back">&#60;</h2>
        <div class="d-flex justify-content-center">
          <h2>Password</h2>
        </div>
      </div>
      <div>
        <h3>You’ll get messages soon on your e-mail</h3>
      </div>
      <div class="form-group">
        <h4>Email</h4>
        <input
          type="email"
          v-model="email"
          class="form-control-lg w-100 border-0 shadow-sm"
          id="exampleInputEmail1"
          placeholder="Email"
        />
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn text-white" @click="handleLoginSeller">Send</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Reset',
  methods: {
    back () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.signin {
  margin: 50px;
}

.signin h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.signin h2.back {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: left;
  letter-spacing: -0.165px;
  color: #7e98df;
  margin-right: 145px;
  margin-left: 15px;
  cursor: pointer;
}

.signin h3 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #232323;
}

.signin p.text-right {
  margin-top: 30px;
}

.signin p.text-right a {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #7e98df;
}

.form-group h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #848484;
  opacity: 0.75;
}

.form-group input {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
}

button.text-white {
  background: #7e98df;
  border-radius: 70px;
  width: 360px;
  height: 40px;
}

button.text-blue {
  background: #ffffff;
  border: 1px solid #7e98df;
  box-sizing: border-box;
  border-radius: 70px;
  width: 360px;
  height: 40px;
}

.line {
  width: 100px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  border-top: 1px solid #848484;
}

h4.login-with {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #848484;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>>
