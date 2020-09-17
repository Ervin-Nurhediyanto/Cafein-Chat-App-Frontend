import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // telegram: true,
    // addAct: false
  },
  mutations: {
    // setAddContact (state) {
    //   state.telegram = false
    //   state.addAct = true
    // },
    // setCancelAddContact (state) {
    //   state.telegram = true
    //   state.addAct = false
    // }
  },
  actions: {
    // addContact (setex) {
    //   setex.commit('setAddContact')
    // },
    // cancelAddContact (setex) {
    //   setex.commit('setCancelAddContact')
    // }
  },
  getters: {
    // telegram (state) {
    //   return state.telegram
    // },
    // addAct (state) {
    //   return state.addAct
    // }
  },
  modules: {
  }
})
