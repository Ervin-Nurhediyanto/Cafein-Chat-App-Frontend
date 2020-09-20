<template>
  <div class="available">
    <MessageHeader :headerMess="headerMess" />
    <!-- <MessageMenu v-show="showMenu"/> -->
    <MessageBody
    v-on:handleMessage="sendMessage($event)"
    v-on:closeChat="closeChat($event)"
    v-on:handleLocation="handleLocation($event)"
    :messages="messages"
    :userId="userId"
    :headerMess="headerMess" />
  </div>
</template>

<script>
import MessageHeader from './Message-Header'
import MessageBody from './Message-Body'
// import MessageMenu from './Message-Menu'
export default {
  name: 'Message-Available',
  props: ['messages', 'userId', 'headerMess'],
  data () {
    return {
      inputMessage: '',
      location: null
      // showMenu: false
    }
  },
  components: {
    MessageHeader,
    MessageBody
    // MessageMenu
  },
  mounted () {
    this.socket.emit('sendMessage', {
      id: this.user.id,
      message: this.inputMessage,
      room: 1
    })
    this.socket.on('message', (message) => {
      console.log('message: ' + message)
      this.messages.push(message)
    })
  },
  methods: {
    sendMessage (sendMessage) {
      this.$emit('sendMessage', sendMessage)
    },
    closeChat (closeChat) {
      this.$emit('closeChat', closeChat)
    },
    handleLocation (handleLocation) {
      this.location = handleLocation
      this.$event('handleLocation', handleLocation)
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
  min-height: 503px;
  max-height: 503px;
  overflow-y: scroll;
}

.scroll-chat::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .scroll-chat {
    min-height: 240px;
    max-height: 240px;
    overflow-y: scroll;
    /* background-color: red; */
  }
}

@media (max-width: 576px) {
  .scroll-chat {
    min-height: 687px;
    max-height: 687px;
    overflow-y: scroll;
    /* background-color: red; */
  }
}
</style>
