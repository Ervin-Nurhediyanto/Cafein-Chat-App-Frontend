<template>
  <div class="row input-text">
    <div class="row input-chat">
      <div>
        <input type="text" v-model="message" @keyup.enter="sendMessage" placeholder="Type your message..." />
      </div>
      <div>
        <i class="fas fa-plus"></i>
        <i class="fas fa-surprise"></i>
        <i class="fas fa-microphone"></i>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'Message-Input',
  data () {
    return {
      socket: io(process.env.VUE_APP_BASE_URL),
      userName: '',
      message: '',
      room: ''
    }
  },
  methods: {
    sendMessage () {
      this.$emit('messageSend', this.message)
    }
    // handleSendMessage (value) {
    //   this.socket.emit('sendMessage', {
    //     message: value,
    //     userId: this.userId,
    //     room: this.room
    //   }, (error) => {
    //     alert(error)
    //   })
    // }
  }
}
</script>

<style scoped>
.input-text {
  background: #ffffff;
  height: 80px;
  width: 955px;
  margin-left: 0px;
  padding: 15px;
  margin-bottom: 0;
  margin-top: auto;
}

.input-text i {
  font-size: 25px;
  color: #7e98df;
  margin-left: 10px;
  cursor: pointer;
}

.input-chat {
  background: #fafafa;
  border-radius: 15px;
  width: 880px;
  height: 50px;
  padding: 10px;
  margin-left: 20px;
  justify-content: space-between;
}

.input-chat input {
  border: none;
  background: #fafafa;
  border-radius: 15px;
  width: 700px;
}

@media (max-width: 768px) {
.input-chat {
  background: #fafafa;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-left: 20px;
  justify-content: space-between;
}
}
</style>
