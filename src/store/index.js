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
    allUser: [],
    location: null,
    notif: '',
    notifActive: false
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
    },
    setLocation (state, payload) {
      state.location = payload
    },
    setUserUpdate (state, payload) {
      state.userImage = payload.image
      state.userName = payload.userName
      state.name = payload.name
      state.phoneNumber = payload.phoneNumber
      state.bio = payload.bio
    },
    setNotif (state, payload) {
      state.notif = payload
    },
    setNotifActive (state, payload) {
      state.notifActive = payload
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
      setex.commit('setNotif', 'loading')
      if (!payload.email) {
        setex.commit('setNotif', 'Please insert your email')
      }
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
            setex.commit('setNotif', 'Wellcome ' + res.data.result.name)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            // alert(err.response.data.result)
            setex.commit('setNotif', err.response.data.result)
            setex.commit('setNotifActive', true)
            reject(err)
          })
      })
    },
    register (setex, payload) {
      setex.commit('setNotif', 'loading')
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/', payload)
          .then((res) => {
            setex.commit('setNotif', res.data.result)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            // alert(err.response.data.result)
            setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      setex.commit('setNotif', 'loading')
      // console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setResetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            // console.log(res.data.message)
            setex.commit('setNotif', res.data.message)
            resolve(res)
          })
          .catch((err) => {
            setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      // console.log(payload)
      setex.commit('setNotif', 'loading')
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/resetpassword/${this.state.resetId}`, payload)
          .then((res) => {
            // console.log(res.data.message)
            setex.commit('setNotif', 'reset password success')
            resolve(res)
          })
          .catch((err) => {
            setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    updateUser (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/update/${this.state.userId}`, payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    uploadImg (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/uploadImg/${this.state.userId}`, payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userRoleId')
        localStorage.removeItem('userImage')
        localStorage.removeItem('userName')
        localStorage.removeItem('name')
        localStorage.removeItem('userId')
        localStorage.removeItem('phoneNumber')
        localStorage.removeItem('bio')
        localStorage.removeItem('resetId')
        axios.post(process.env.VUE_APP_BASE_URL + '/users/logout/' + this.state.userId)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/users')
          .then((res) => {
            setex.commit('setallUser', res.data.result)
            res.data.result.map((item) => {
              if (item.id === Number(this.state.userId)) {
                return localStorage.setItem('userImage', item.image)
              }
            })
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getUserId (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/users/' + payload)
          .then((res) => {
            // setex.commit('setUserUpdate', res.data.result)
            // localStorage.setItem('userImage', this.state.userImage)
            // localStorage.setItem('userName', this.state.userName)
            // localStorage.setItem('name', this.state.name)
            // localStorage.setItem('phoneNumber', this.state.phoneNumber)
            // localStorage.setItem('bio', this.state.bio)
            resolve(res)
            // resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllContact (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + `/contacts/?idUser=${this.state.userId}`)
          .then((res) => {
            if (res.data.result !== 'Contact not found') {
              setex.commit('setallUser', res.data.result)
              resolve(res)
            } else {
              setex.commit('setallUser', null)
              resolve(res)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addContact (setex, payload) {
      setex.commit('setNotif', 'loading')
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/contacts', payload)
          .then((res) => {
            setex.commit('setNotif', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    deleteContact (setex, payload) {
      setex.commit('setNotif', 'loading')
      return new Promise((resolve, reject) => {
        axios.delete(process.env.VUE_APP_BASE_URL + '/contacts/' + payload)
          .then((res) => {
            setex.commit('setNotif', res.data.result)
            // alert(res.data.result)
            resolve(res)
          })
          .catch((err) => {
            setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    getLocation (setex, payload) {
      setex.commit('setLocation', payload)
    },
    getUserImage (setex, payload) {
      localStorage.setItem('userImage', payload)
    },
    getUserName (setex, payload) {
      localStorage.setItem('userName', payload)
    },
    getName (setex, payload) {
      localStorage.setItem('name', payload)
    },
    getPhoneNumber (setex, payload) {
      localStorage.setItem('phoneNumber', payload)
    },
    getBio (setex, payload) {
      localStorage.setItem('bio', payload)
    },
    getNotif (setex, payload) {
      setex.commit('setNotif', 'loading')
      setex.commit('setNotif', payload)
    },
    getNotifActive (setex, payload) {
      setex.commit('setNotifActive', payload)
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
    },
    location (state) {
      return state.location
    },
    notif (state) {
      return state.notif
    },
    notifActive (state) {
      return state.notifActive
    }
  },
  modules: {
  }
})
