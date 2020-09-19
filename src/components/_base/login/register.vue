<template>
  <div class="register">
    <form role="form" id="login-form">
      <div class="row">
        <h2 class="back" @click="back">&#60;</h2>
        <div class="d-flex justify-content-center">
          <h2>Register</h2>
        </div>
      </div>
      <div>
        <h3>Let's create your account!</h3>
      </div>
      <div class="form-group">
        <h4>Name</h4>
        <input
          type="text"
          v-model="name"
          class="form-control-lg w-100 border-0"
          id="exampleInputName"
          placeholder="Name"
        />
        <div class="border-2"></div>
      </div>

      <div class="form-group">
        <h4>Email</h4>
        <input
          type="email"
          v-model="email"
          class="form-control-lg w-100 border-0"
          id="exampleInputEmail1"
          placeholder="Email"
        />
        <div class="border-2"></div>
      </div>

      <div class="form-group">
        <h4>Password</h4>
        <input
          type="password"
          v-model="password"
          class="form-control-lg w-100 border-0"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        <div class="border-2"></div>
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn text-white" @click="handleRegister">Register</button>
      </div>

      <div class="d-flex justify-content-center">
        <div class="line"></div>
        <h4 class="register-with">Register with</h4>
        <div class="line"></div>
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn text-blue">Google</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['register']),
    back () {
      this.$router.push('/login')
    },
    handleRegister (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.register(data).then((res) => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
.register {
  margin: 50px;
}

.register h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.register h2.back {
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
  margin-bottom: 0;
}

.border-2 {
  height: 2px;
  width: 400px;
  margin-top: 0;
  margin-bottom: 10px;
  border-top: 1px solid #848484;
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
  width: 200px;
}

@media (max-width: 576px) {
  h4.register-with {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 500px;
  }
  .line {
    width: 280px;
    margin-top: 30px;
    margin-left: 0px;
    margin-right: 0px;
    border-top: 1px solid #848484;
  }

  .register h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.165px;
    color: #7e98df;
  }

  .register h2.back {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    text-align: left;
    letter-spacing: -0.165px;
    color: #7e98df;
    margin-right: 85px;
    margin-left: 15px;
    cursor: pointer;
  }

  .border-2 {
    height: 2px;
    width: 260px;
    margin-top: 0;
    margin-bottom: 10px;
    border-top: 1px solid #848484;
  }
}
</style>>
