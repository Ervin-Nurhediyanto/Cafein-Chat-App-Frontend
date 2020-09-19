<template>
  <div class="row">
    <div class="List">
      <ChatList
      :allUser="allUser"
      :idUser="idUser"
      v-on:headerMessage="headerMessage($event)"
      v-on:starChat="starChat($event)"/>
    </div>
    <div class="Message">
      <MessageEmpty v-if="empty"/>
      <MessageAvailable v-else
      v-on:sendMessage="messageOk($event)"
      :messages='messages'
      :userId='userId'
      :headerMess="headerMess"
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
import { mapGetters, mapActions } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'Chat',
  data () {
    return {
      socket: io('http://localhost:4000'),
      messages: [],
      empty: true,
      room: 1,
      allContact: [],
      idUser: null,
      headerMess: null
    }
  },
  components: {
    ChatList,
    MessageEmpty,
    MessageAvailable
  },
  computed: {
    ...mapGetters({
      user: 'user',
      allUser: 'allUser',
      userId: 'userId'
      // allContact: this.allUser
    })
  },
  mounted () {
    this.socket.emit('welcomeMessage', { id: this.user.id, username: this.user.userName, room: this.room })
    this.socket.on('message', message => {
      // console.log(message)
      this.messages.push(message)
    })
    this.socket.on('notif', message => {
      alert(message)
      // swal(message)
    })
    this.getAllUser()
    this.idNumber()
    this.getAllcontact()
  },
  methods: {
    ...mapActions(['getAllUser']),
    messageOk (messageOk) {
      console.log('oke: ' + messageOk)
      this.socket.emit('sendMessage', {
        message: messageOk,
        userId: this.user.id,
        image: this.user.image,
        room: this.room
      }, (error) => {
        alert(error)
      })
    },
    idNumber () {
      this.idUser = Number(this.userId)
    },
    getAllcontact () {
      this.allUser.map((item) => {
        if (item.id !== this.idUser) {
          console.log(item.id)
          console.log(this.idUser)
          this.allContact.push(item)
        }
      })
    },
    headerMessage (headerMessage) {
      console.log(headerMessage)
      this.headerMess = headerMessage
      if (this.empty === true) {
        this.empty = false
      } else {
        this.empty = true
      }
    },
    starChat (starChat) {
      this.room = starChat
      // console.log('oke: ' + messageOk)
      this.socket.emit('welcomeMessage', {
        id: this.user.id,
        username: this.user.userName,
        room: starChat
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
  padding-bottom: 15px;
  border-right: 1px solid #E5E5E5;
  /* background-color: red; */
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
