<template>
  <div class="available">
    <MessageHeader />
    <MessageMenu v-show="showMenu"/>
      <MessageBody
      v-on:handleMessage="sendMessage($event)"
      :messages='messages'
      />
  </div>
</template>

<script>
import MessageHeader from './Message-Header'
import MessageBody from './Message-Body'
import MessageMenu from './Message-Menu'
export default {
  name: 'Message-Available',
  props: ['messages'],
  data () {
    return {
      inputMessage: '',
      showMenu: false
    }
  },
  components: {
    MessageHeader,
    MessageBody,
    MessageMenu
  },
  mounted () {
    this.socket.emit('sendMessage', { id: this.user.id, message: this.inputMessage, room: 1 })
    this.socket.on('message', message => {
      console.log('message: ' + message)
      this.messages.push(message)
    })
  },
  methods: {
    sendMessage (sendMessage) {
      this.$emit('sendMessage', sendMessage)
    }
  }
}
</script>

<style>
.available {
/* background-color: springgreen; */
/* max-width: 955px; */
width: 100%;
height: 100%;
}

.scroll-chat {
  min-height: 669px;
  max-height: 669px;
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
