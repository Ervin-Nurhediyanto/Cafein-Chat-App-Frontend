<template>
  <div>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model ="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group">
    <label for="room">Room</label>
    <select name="room" class="form-control" v-model="room">
      <option value="arka1">Arka1</option>
      <option value="arka2">Arka2</option>
      <option value="arka3">Arka3</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
  </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    room: ''
  }),
  methods: {
    handleSubmit () {
      const useriId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)

      this.$router.push({
        name: 'Chat',
        params: {
          userId: useriId,
          username: this.username,
          room: this.room
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
