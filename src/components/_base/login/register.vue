<template>
  <div class="register">
    <form role="form" id="login-form">
      <div class="row d-flex justify-content-center">
        <h2>Register</h2>
      </div>
      <div>
        <h3>Let's create your account!</h3>
      </div>
      <div class="form-group">
        <h4>Name</h4>
        <input
          type="text"
          v-model="name"
          class="form-control-lg w-100 border-0 shadow-sm"
          id="exampleInputName"
          placeholder="Name"
        />
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

      <div class="form-group">
        <h4>Password</h4>
        <input
          type="password"
          v-model="password"
          class="form-control-lg w-100 shadow-sm"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn text-white" @click="handleLoginSeller">Register</button>
          </div>

            <div class="d-flex justify-content-center">
              <div class="line"></div>
              <h4 class="register-with">Register with</h4>
              <div class="line"></div>
            </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn text-blue" @click="handleLoginSeller">Google</button>
          </div>

      <!-- <p class="mt-3 text-center">
        Don’t have an accoun?
        <a
          href="#"
          id="forgot"
          @click="$emit('register-event')"
        >Sign Up</a>
      </p> -->
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.register {
  margin: 50px;
}

.register h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.register h3 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #232323;
}

.register p.text-right {
  margin-top: 30px;
}

.register p.text-right a {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #7E98DF;
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
  background: #7E98DF;
  border-radius: 70px;
  width: 360px;
  height: 40px;
}

button.text-blue {
  background: #FFFFFF;
  border: 1px solid #7E98DF;
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

h4.register-with {
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
