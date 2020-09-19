import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    resetId: localStorage.getItem('resetId') || null,
    userImage: localStorage.getItem('userImage') || null,
    userName: localStorage.getItem('userName') || null,
    userId: localStorage.getItem('userId') || null,
    name: localStorage.getItem('name') || null,
    phoneNumber: localStorage.getItem('phoneNumber') || null,
    bio: localStorage.getItem('bio') || null,
    allUser: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
      state.userImage = payload.image
      state.userName = payload.userName
      state.name = payload.name
      state.phoneNumber = payload.phoneNumber
      state.bio = payload.bio
      state.userId = payload.id
    },
    setToken (state, payload) {
      state.token = payload
    },
    setResetId (state, payload) {
      state.resetId = payload
    },
    setallUser (state, payload) {
      state.allUser = payload
    }
  },
  actions: {
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result)
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        router.push('/login')
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    login (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            localStorage.setItem('userImage', this.state.userImage)
            localStorage.setItem('userName', this.state.userName)
            localStorage.setItem('name', this.state.name)
            localStorage.setItem('phoneNumber', this.state.phoneNumber)
            localStorage.setItem('bio', this.state.bio)
            localStorage.setItem('userId', this.state.userId)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    register (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setResetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/resetpassword/${this.state.resetId}`, payload)
          .then((res) => {
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('token')
          localStorage.removeItem('userRoleId')
          localStorage.removeItem('userImage')
          localStorage.removeItem('userName')
          localStorage.removeItem('name')
          localStorage.removeItem('userId')
          localStorage.removeItem('phoneNumber')
          localStorage.removeItem('bio')
        }
        axios.post(process.env.VUE_AOO_BASE_URL + '/users/logout/' + this.state.user.id)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllUser (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/users')
          .then((res) => {
            // console.log(res.data)
            setex.commit('setallUser', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    resetId (state) {
      return state.resetId
    },
    isLogin (state) {
      return state.token !== null
    },
    token (state) {
      return state.token
    },
    userImage (state) {
      return state.userImage
    },
    userName (state) {
      return state.userName
    },
    name (state) {
      return state.name
    },
    phoneNumber (state) {
      return state.phoneNumber
    },
    bio (state) {
      return state.bio
    },
    allUser (state) {
      return state.allUser
    },
    userId (state) {
      return state.userId
    }
  },
  modules: {
  }
})
