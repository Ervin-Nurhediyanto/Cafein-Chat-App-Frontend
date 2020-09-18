<template>
  <div class="available">
    <MessageHeader />
    <!-- <div class="scroll-chat"> -->
      <MessageBody
      v-on:handleMessage="sendMessage($event)"
      :messages='messages'
      />
    <!-- </div> -->
    <!-- <MessageInput @messageSend="handleMessage" /> -->
  </div>
</template>

<script>
import MessageHeader from './Message-Header'
import MessageBody from './Message-Body'
// import MessageInput from './Message-Input'
export default {
  name: 'Message-Available',
  props: ['messages'],
  data () {
    return {
      inputMessage: ''
      // messages: []
    }
  },
  components: {
    MessageHeader,
    MessageBody
    // MessageInput
  },
  mounted () {
    this.socket.emit('sendMessage', { id: this.user.id, message: this.inputMessage, room: 1 })
    this.socket.on('message', message => {
      console.log('message: ' + message)
      this.messages.push(message)
    })
  },
  methods: {
    handleMessage (value) {
      this.inputMessage = value
    },
    sendMessage (sendMessage) {
      this.$emit('sendMessage', sendMessage)
    }
  }
}
</script>

<style>
.scroll-chat {
  max-height: 500px;
  overflow-y: scroll;
}

.scroll-chat::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .scroll-chat {
  height: 240px;
  overflow-y: scroll;
}

}
</style>
