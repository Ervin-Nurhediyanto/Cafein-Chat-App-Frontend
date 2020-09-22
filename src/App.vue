<template>
  <div id="app">
    <router-view
    v-on:closeNotif="closeNotif($event)"
    v-on:openNotif="openNotif($event)" />
    <Notif
    v-show="notifActive"
    v-on:closeNotif="closeNotif($event)" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Notif from './components/_base/notif'
export default {
  components: {
    Notif
  },
  computed: {
    ...mapGetters({
      token: 'token'
      // notifActive: 'notifActive'
    })
  },
  data () {
    return {
      notifActive: false
    }
  },
  methods: {
    ...mapActions(['interceptorsRequest']),
    ...mapActions(['interceptorsResponse']),

    closeNotif () {
      this.notifActive = false
    },
    openNotif () {
      this.notifActive = true
    }
  },
  created () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>
<style>

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: #f6f6f6;
  scrollbar-width: none;
}
</style>
