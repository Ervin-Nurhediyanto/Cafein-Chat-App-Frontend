<template>
  <div class="row">
    <div class="List">
      <ChatList
        :allUser="allUser"
        :idUser="idUser"
        v-on:headerMessage="headerMessage($event)"
        v-on:starChat="starChat($event)"
      />
    </div>
    <div class="Message">
      <MessageEmpty v-if="empty" />
      <MessageAvailable
        v-else
        v-on:handleLocation="handleLocation($event)"
        v-on:sendMessage="messageOk($event)"
        :messages="messages"
        :userId="idUser"
        :headerMess="headerMess"
      />
    </div>
    <div class="mobile" v-show="showChat">
      <MessageAvailable
        v-on:handleLocation="handleLocation($event)"
        v-on:sendMessage="messageOk($event)"
        v-on:closeChat="closeChat($event)"
        :messages="messages"
        :userId="idUser"
        :headerMess="headerMess"
      />
    </div>
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
      headerMess: null,
      showChat: false
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
      userId: 'userId',
      location: 'location',
      userName: 'userName',
      userImage: 'userImage'
    })
  },
  mounted () {
    this.socket.emit('welcomeMessage', {
      id: this.idUser,
      username: this.userName,
      room: this.room
    })
    this.socket.on('message', (message) => {
      this.messages.push(message)
    })
    this.socket.on('notif', (message) => {
      alert(message)
      // swal(message)
    })
    // this.getAllUser()
    this.getAllContact()
    this.idNumber()
    // this.getAllcontact()
  },
  methods: {
    ...mapActions(['getAllUser']),
    ...mapActions(['getAllContact']),
    messageOk (messageOk) {
      console.log('oke: ' + messageOk)
      this.socket.emit(
        'sendMessage',
        {
          message: messageOk,
          userId: this.idUser,
          image: this.userImage,
          // room: this.room
          socketId: 1
        },
        (error) => {
          alert(error)
        }
      )
    },
    handleLocation (handleLocation) {
      console.log('map: ' + handleLocation)
      this.location = handleLocation
    },
    idNumber () {
      this.idUser = Number(this.userId)
    },
    // getAllcontact () {
    //   this.allUser.map((item) => {
    //     if (item.id !== this.idUser) {
    //       console.log(item.id)
    //       console.log(this.idUser)
    //       this.allContact.push(item)
    //     }
    //   })
    // },
    headerMessage (headerMessage) {
      console.log(headerMessage)
      this.headerMess = headerMessage
      if (this.empty === true) {
        this.empty = false
      } else {
        this.empty = true
      }
      if (this.showChat === true) {
        this.showChat = false
      } else {
        this.showChat = true
      }
    },
    closeChat (closeChat) {
      this.showChat = false
      this.empty = false
    },
    starChat (starChat) {
      this.room = starChat
      this.socket.emit(
        'welcomeMessage',
        {
          id: this.user.id,
          username: this.user.userName,
          room: starChat
        },
        (error) => {
          alert(error)
        }
      )
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
  border-right: 1px solid #e5e5e5;
}

.Message {
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  width: 75%;
  height: 100%;
}

.mobile {
  display: none;
}

@media (max-width: 576px) {
  .List {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ffffff;
    min-width: 465px;
    min-height: 825px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    padding-top: 30px;
    margin: 0;
    border-right: 1px solid #e5e5e5;
    z-index: 1;
  }

  .Message {
    display: none;
  }

  .mobile {
    display: inline;
    position: absolute;
    left: 0;
    top: 0;
    width: 465px;
    height: 827px;
    background-color: #f6f6f6;
    z-index: 2;
  }
}
</style>
