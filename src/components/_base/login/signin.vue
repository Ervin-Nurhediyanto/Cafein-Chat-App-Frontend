<template>
  <div class="signin">
    <form role="form" id="login-form">
      <div class="row d-flex justify-content-center">
        <h2>Login</h2>
      </div>
      <div>
        <h3>Hi, Welcome back!</h3>
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
      <p class="text-right">
        <a href="#" @click="forgotPass">Forgot Password?</a>
      </p>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn text-white" @click="handleLogin">Login</button>
      </div>
      <div class="d-flex justify-content-center">
        <div class="line"></div>
        <h4 class="login-with">Login with</h4>
        <div class="line"></div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn text-blue">Google</button>
      </div>
      <p class="mt-3 text-center">
        Don’t have an accoun?
        <a href="#" @click="register">Sign Up</a>
      </p>
    </form>
    <Notif v-show="showNotif"/>
  </div>
</template>

<script>
import Notif from '../notif'
import { mapGetters, mapActions } from 'vuex'
// import Notif from '../notif'
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      showNotif: false
    }
  },
  components: {
    Notif
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['login']),
    ...mapActions(['getNotif']),
    ...mapActions(['getNotifActive']),
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data).then((res) => {
        this.$router.push('/')
        this.$emit('closeNotif', false)
      })
      this.$emit('openNotif', true)
    },
    forgotPass () {
      this.$router.push('/forgot-pass')
    },
    register () {
      this.$router.push('/register')
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

@media (max-width: 768px) {
  .signin {
    margin-top: 10px;
  }
  .signin h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .form-group input {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #232323;
    width: 50px;
  }
}

@media (max-width: 576px) {
  .signin {
    margin-top: 50px;
  }

  .border-2 {
    height: 2px;
    width: 260px;
    margin-top: 0;
    margin-bottom: 10px;
    border-top: 1px solid #848484;
  }

  .line {
    width: 280px;
    margin-top: 30px;
    margin-left: 0px;
    margin-right: 0px;
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
    width: 300px;
  }
}
</style>>
