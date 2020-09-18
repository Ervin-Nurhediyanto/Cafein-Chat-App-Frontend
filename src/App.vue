<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters({
      token: 'token'
    })
  },
  methods: {
    ...mapActions(['interceptorsRequest']),
    ...mapActions(['interceptorsResponse'])
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
}
</style>
