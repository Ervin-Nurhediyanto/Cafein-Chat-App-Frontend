<template>
  <div class="signin">
    <form role="form" id="login-form">
      <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <h2>Change Password</h2>
        </div>
      </div>
      <div>
        <h3>Insert new password</h3>
      </div>

      <div class="form-group">
        <h4>New Password</h4>
        <input
          type="password"
          v-model="password"
          class="form-control-lg w-100 border-0 shadow-sm"
          id="exampleInputPassword1"
          placeholder="New Password"
        />
      </div>

      <div class="form-group">
        <h4>Confirm Password</h4>
        <input
          type="password"
          v-model="conformPassword"
          class="form-control-lg w-100 border-0 shadow-sm"
          id="exampleInputPassword1"
          placeholder="Confirm Password"
        />
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn text-white" @click="handleConfirm">Confirm</button>
      </div>
      <div class="wrong" v-show="wrongPass"><h4>Password incorrect</h4></div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Reset',
  data () {
    return {
      password: '',
      conformPassword: '',
      wrongPass: false
    }
  },
  methods: {
    ...mapActions(['resetPassword']),

    handleConfirm (e) {
      if (this.password === this.conformPassword) {
        this.wrongPass = false
        const data = {
          password: this.password
        }
        this.resetPassword(data).then((res) => {
        })
        this.$router.push('/')
        alert('reset password success')
      } else {
        this.wrongPass = true
      }
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

.wrong {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>>
