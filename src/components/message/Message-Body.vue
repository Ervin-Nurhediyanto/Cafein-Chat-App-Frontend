<template>
  <div>
    <div class="scroll-chat">
      <div class="row body-message">
        <MessageDB
          :userId="userId"
          :headerMess="headerMess"
          v-on:editChat="editChat($event)"
          v-on:openNotif="openNotif($event)"
        />
        <div v-for="(message, index) in messages" :key="index">
          <div v-if="message.socketId === headerMess.id">
            <div v-if="userId != message.userId">
              <div class="other" v-show="true">
                <div class="row">
                  <div v-if="message.image" class="body-photo">
                    <img :src="message.image" />
                  </div>

                  <div v-else class="body-photo">
                    <img src="../../assets/Profile/pp.png" />
                  </div>

                  <div class="message-other">
                    <h4>{{ message.message }}</h4>
                    <Maps
                      v-if="message.location"
                      :locLat="message.location.lat"
                      :locLng="message.location.lng"
                    />
                    <div class="chat-image">
                      <img v-if="message.imageChat" :src="message.imageChat">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="user" v-show="true">
                <div class="row">

                  <div class="message-user">
                    <h4>{{ message.message }}</h4>
                    <Maps
                      v-if="message.location"
                      :locLat="message.location.lat"
                      :locLng="message.location.lng"
                    />
                    <div class="chat-image">
                      <img v-if="message.imageChat" :src="message.imageChat">
                    </div>
                  </div>

                  <div v-if="userImage" class="body-photo-user">
                    <img :src="userImage" />
                  </div>

                  <div v-else class="body-photo-user">
                    <img src="../../assets/Profile/pp.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row input-text">
      <div class="row input-chat">
        <!-- input message -->
        <div v-if="text">
          <div v-if="input">
            <input
              type="text"
              v-model="chat"
              @keyup.enter="handleMessage"
              placeholder="Type your message..."
            />
          </div>

          <!-- edit message -->
          <div v-else>
            <input
              type="text"
              v-model="chat"
              @keyup.enter="handleEdit"
              placeholder="Edit your message..."
            />
          </div>
        </div>

        <!-- upload image -->
        <div v-else>
          <form class="row">
            <input type="file" @change="onFileUpload" />
            <h4 @click="handleUpload"><b>Send</b></h4>
          </form>
        </div>

        <div>
          <i class="fas fa-plus" @click="handleAdd"></i>
          <i class="fas fa-surprise"></i>
          <i class="fas fa-microphone"></i>
        </div>

        <MessageAdd
          v-show="showAdd"
          v-on:handleLocation="handleLocation($event)"
          v-on:handleImage="handleImage($event)"
          :userId="userId"
          :socketId="headerMess.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MessageDB from './Message-From-Database'
import MessageAdd from './Message-Add'
import Maps from '../_base/location'
import io from 'socket.io-client'
export default {
  name: 'Message-Body',
  props: ['messages', 'userId', 'headerMess'],
  data () {
    return {
      socket: io('http://localhost:4000'),
      chat: '',
      showAdd: false,
      location: null,
      input: true,
      idChatEdit: null,
      text: true,
      FILE: ''
    }
  },
  components: {
    MessageDB,
    MessageAdd,
    Maps
  },
  computed: {
    ...mapGetters({
      userImage: 'userImage',
      privateChat: 'privateChat'
    })
  },
  mounted () {},
  methods: {
    ...mapActions(['sendPrivateMessage']),
    ...mapActions(['editMessage']),
    ...mapActions(['getPrivateChat']),
    ...mapActions(['getChatImage']),

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    handleMessage () {
      const send = {
        idContact: this.headerMess.id,
        idSender: this.userId,
        chat: this.chat,
        lat: '',
        lng: ''
      }
      this.sendPrivateMessage(send).then((res) => {})
      const data = {
        socketId: this.headerMess.id,
        message: this.chat
      }
      this.$emit('handleMessage', data)
      this.chat = null
    },

    handleEdit () {
      const massage = {
        chat: this.chat
      }
      const data = {
        id: this.idChatEdit,
        chat: massage
      }
      this.editMessage(data).then((res) => {
      })
      this.getPrivateChat(this.headerMess.id)
      this.$emit('openNotif', true)
      this.chat = null
    },

    handleUpload () {
      const formData = new FormData()
      formData.append('imageChat', this.FILE, this.FILE.name)
      formData.append('idContact', this.headerMess.id)
      formData.append('idSender', this.userId)
      formData.append('lat', '')
      formData.append('lng', '')
      this.sendPrivateMessage(formData).then((res) => {
        this.getChatImage().then((res) => {
          // alert(res.data.result[0].imageChat)
          this.socket.emit(
            'sendMessage',
            {
              message: null,
              userId: this.userId,
              image: this.userImage,
              socketId: this.headerMess.id,
              imageChat: res.data.result[0].imageChat
            },
            (error) => {
              alert(error)
            }
          )
        })
      })

      // this.getChatImage().then((res) => {
      //   alert(res.data.result[0].imageChat)
      // })
    },

    editChat (editChat) {
      if (this.input === true) {
        this.input = false
        this.idChatEdit = editChat
      } else {
        this.input = true
      }
    },

    handleAdd () {
      if (this.showAdd === false) {
        this.showAdd = true
      } else {
        this.showAdd = false
      }
    },
    handleLocation (handleLocation) {
      this.showAdd = false
      this.location = handleLocation
      this.$emit('handleLocation', handleLocation)
    },
    handleImage (handleImage) {
      if (this.text === true) {
        this.text = false
      } else {
        this.text = true
      }
      this.showAdd = false
    },

    openNotif () {
      this.$emit('openNotif', true)
    }
  }
}
</script>

<style scoped>
.body-message {
  height: 100%;
  width: 100%;
  margin-left: 0px;
  margin-top: auto;
  margin-bottom: 0px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.body-message .other {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 500px;
  width: 1000px;
  padding-left: 30px;
  margin-bottom: 5px;
  margin-top: auto;
}

.body-message .user {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 500px;
  width: 1000px;
  padding-top: auto;
  padding-bottom: 0;
  padding-right: 20px;
  margin-bottom: 5px;
  margin-top: auto;
}

.body-message .body-photo {
  height: 45px;
  width: 45px;
  margin-bottom: 0;
  margin-top: auto;
}

.body-message .body-photo-user {
  height: 45px;
  width: 45px;
  margin-bottom: 0;
  margin-top: auto;
  margin-right: 0;
  margin-left: 20px;
}

.body-photo img,
.body-photo-user img {
  height: 100%;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
}

.body-message .message-other {
  background: #7e98df;
  border-radius: 35px 35px 35px 10px;
  margin-left: 20px;
  padding: 12px;
  max-width: 850px;
  max-height: 500px;
}

.body-message .message-user {
  background: #ffffff;
  border-radius: 35px 35px 10px 35px;
  margin-left: auto;
  margin-right: 0px;
  padding: 12px;
  max-width: 850px;
  max-height: 500px;
}

.message-other h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 185.17%;
  letter-spacing: -0.165px;
  color: #ffffff;
}

.message-user h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 185.17%;
  letter-spacing: -0.165px;
  color: #232323;
}

.input-text {
  background: #ffffff;
  height: 80px;
  width: 100%;
  margin-left: 0px;
  margin-bottom: 0;
  margin-top: auto;
  padding: 20px;
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
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-left: 0px;
  justify-content: space-between;
}

.input-chat input {
  border: none;
  background: #fafafa;
  border-radius: 15px;
  width: 800px;
  height: 30px;
  /* background-color: red; */
}

.input-chat h4 {
  font-size: 20px;
  cursor: pointer;
}

.input-chat h4:hover {
  font-size: 20px;
  cursor: pointer;
  color: red;
}

.chat-image {
  max-height: 300px;
  max-width: 300px
}

.chat-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .body-message {
    min-height: 240px;
    max-height: 240px;
    width: 100%;
    margin-left: 0px;
    margin-top: auto;
    margin-bottom: 0px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .body-message .other {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 120px;
    width: 448px;
    padding-left: 10px;
    margin-bottom: 5px;
    margin-top: auto;
  }

  .body-message .message-other {
    margin-left: 5px;
    padding: 12px;
    max-width: 390px;
    max-height: 120px;
  }

  .body-message .user {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 120px;
    width: 448px;
    padding-top: auto;
    padding-bottom: 0;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 5px;
    margin-top: auto;
  }

  .body-message .message-user {
    margin-left: auto;
    margin-right: 0px;
    padding: 12px;
    max-width: 390px;
    max-height: 120px;
  }

  .body-message .body-photo-user {
    height: 45px;
    width: 45px;
    margin-bottom: 0;
    margin-top: auto;
    margin-right: 0;
    margin-left: 5px;
  }

  .input-text {
    height: 40px;
    width: 100%;
    margin-left: 0px;
    padding: 4px;
    margin-bottom: 0;
    margin-top: auto;
  }

  .input-text i {
    font-size: 15px;
    margin-left: 10px;
  }

  .input-chat {
    border-radius: 15px;
    width: 470px;
    height: 34px;
    padding: 5px;
    margin-left: 0px;
    justify-content: space-between;
  }

  .input-chat input {
    border: none;
    background: #fafafa;
    border-radius: 15px;
    width: 360px;
  }
}

@media (max-width: 576px) {
  .body-message {
    min-height: 100px;
    width: 100%;
    margin-left: 0px;
    margin-top: auto;
    margin-bottom: 0px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .body-message .other {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 120px;
    width: 440px;
    padding-left: 10px;
    margin-bottom: 5px;
    margin-top: auto;
  }

  .body-message .user {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 120px;
    width: 440px;
    padding-top: auto;
    padding-bottom: 0;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 5px;
    margin-top: auto;
  }

  .input-text {
    height: 60px;
    width: 100%;
    margin-left: 0px;
    padding: 4px;
    margin-bottom: 0;
    margin-top: auto;
  }

  .input-text i {
    font-size: 25px;
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 5px;
  }

  .input-chat {
    border-radius: 15px;
    width: 450px;
    height: 50px;
    padding: 5px;
    margin-left: 0px;
    justify-content: space-between;
  }

  .input-chat input {
    border: none;
    background: #fafafa;
    border-radius: 15px;
    width: 300px;
    height: 40px;
  }
}
</style>
