<template>
  <div>
    <div v-for="(message) in privateChat" :key="message.id">
      <div v-if="message.idContact === headerMess.id">
        <div v-if="userId != message.idSender">
          <div class="other" v-show="true">
            <div class="row">
              <div v-if="message.image" class="body-photo">
                <img :src="message.image" />
              </div>

              <div v-else class="body-photo">
                <img src="../../assets/Profile/pp.png" />
              </div>

              <div v-if="message.chat" class="message-other">
                <h4>{{message.chat}}</h4>
              </div>

              <div v-if="message.lat && message.lng" class="message-other">
                <Maps
                  :locLat="Number(message.lat)"
                  :locLng="Number(message.lng)"
                />
              </div>

              <div v-if="message.imageChat" class="message-other">
                <img :src="message.imageChat">
              </div>

            </div>
          </div>
        </div>

        <div v-else>
          <div class="user" v-show="true">
            <div class="row">
              <div class="col">
                <div v-show="action" v-if="message.chat" @click="handleEditChat(message.id)" class="edit-chat"><i class="far fa-edit"></i></div>
                <div v-show="action" @click="handleDeleteChat(message.id)" class="delete-chat"><i class="fas fa-trash-alt"></i></div>
              </div>

              <div v-if="message.chat" class="message-user">
                <h4 @click="handleAction">{{message.chat}}</h4>
              </div>

              <div v-if="message.lat && message.lng" class="message-user" @click="handleAction">
                <Maps
                  :locLat="Number(message.lat)"
                  :locLng="Number(message.lng)"
                />
              </div>

              <div v-if="message.imageChat" class="message-user">
                <img :src="message.imageChat" @click="handleAction">
              </div>

              <div v-if="userImage && (message.chat || message.imageChat || message.lat)" class="body-photo-user">
                <img :src="userImage" />
              </div>

              <div v-if="!(userImage) && (message.chat || message.imageChat || message.lat)" class="body-photo-user">
                <img src="../../assets/Profile/pp.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Maps from '../_base/location'
export default {
  name: 'Message-From_DB',
  props: ['userId', 'headerMess'],
  data () {
    return {
      action: false
    }
  },
  components: {
    Maps
  },
  computed: {
    ...mapGetters({
      privateChat: 'privateChat',
      userImage: 'userImage'
    })
  },
  methods: {
    ...mapActions(['deleteMessage']),
    handleAction () {
      if (this.action === false) {
        this.action = true
      } else {
        this.action = false
      }
    },
    handleEditChat (idChat) {
      this.$emit('editChat', idChat)
    },
    handleDeleteChat (idChat) {
      this.deleteMessage(idChat).then((res) => {
        // alert(res.data.result)
      })
      this.$emit('openNotif', true)
    }
  }
}
</script>

<style scoped>
.edit-chat {
  width: 20px;
  height: 20px;
}

.edit-chat i {
  color: blue;
  font-weight: bold;
}

.delete-chat {
   width: 20px;
  height: 20px;
}

.delete-chat {
  color: red;
  font-weight: bold;
}

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
  width: 850px;
  height: 30px;
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
