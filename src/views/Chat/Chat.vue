<template>
  <div class="row">
    <div class="List">
      <ChatList />
    </div>
    <div class="Message">
      <MessageEmpty v-if="empty"/>
      <MessageAvailable v-else
      v-on:sendMessage="messageOk($event)"
      :messages='messages'
      />
    </div>

    <!-- <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(message, index) in messages" :key="index">{{message}}</li>
    </ul>
    <input type="text" @keyup.enter="handleSendMessage"> -->

  </div>
</template>

<script>
import ChatList from '../../components/chat/Chat-List'
import MessageEmpty from '../../components/message/Message-Empty'
import MessageAvailable from '../../components/message/Message-Available'
import { mapGetters } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'Chat',
  data () {
    return {
      socket: io('http://localhost:4000'),
      messages: [],
      empty: false,
      room: 1
    }
  },
  components: {
    ChatList,
    MessageEmpty,
    MessageAvailable
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  mounted () {
    this.socket.emit('welcomeMessage', { id: this.user.id, username: this.user.userName, room: this.room })
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
      console.log(value)
      this.socket.emit('sendMessage', {
        message: value,
        userId: this.user.id,
        room: this.room
      }, (error) => {
        alert(error)
      })
    },
    messageOk (messageOk) {
      console.log('oke: ' + messageOk)
      this.socket.emit('sendMessage', {
        message: messageOk,
        userId: this.user.id,
        room: this.room
      }, (error) => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
.List {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  width: 25%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border-right: 1px solid #E5E5E5;
}

.Message {
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  width: 75%;
  height: 100%;
  /* background-color: tomato; */
}
</style>
