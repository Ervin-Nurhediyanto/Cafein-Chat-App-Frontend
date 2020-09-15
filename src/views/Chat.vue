<template>
    <div class="container">
        <h2>Selamat Datamg chatrisano</h2>
        <div class="row">
            <div class="col-md-4">
                <!-- list user -->
            </div>
            <div class="col-md-8">
                <!-- with chat -->
                <div class="box-chat">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(message, index) in messages" :key="index">{{message}}</li>
                    </ul>
                    <inputMessage @send-message="handleSendMessage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import io from 'socket.io-client'
import inputMessage from '../components/_base/InputMessage'

export default {
  name: 'Chat',
  components: {
    inputMessage
  },
  data: () => ({
    socket: io('http://localhost:4000'),
    userId: null,
    username: '',
    messages: [],
    room: ''
  }),
  mounted () {
    if (!this.$route.params.userId) {
      this.$router.push('/about')
    }
    this.userId = this.$route.params.userId
    this.username = this.$route.params.username
    this.room = this.$route.params.room
    this.socket.emit('welcomeMessage', { id: this.userId, username: this.username, room: this.room })
    this.socket.on('message', message => {
      console.log(message)
      this.messages.push(message)
    })
    this.socket.on('notif', message => {
      alert(message)
    })
  },
  methods: {
    handleSendMessage (value) {
      this.socket.emit('sendMessage', {
        message: value,
        userId: this.userId,
        room: this.room
      }, (error) => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
