<template>
  <div>
    <div class="scroll-chat">
      <div class="row body-message">
        <div v-for="(message, index) in messages" :key="index">
          <div class="other" v-show="true">
            <div class="row">
              <div class="body-photo">
                <img src="../../assets/Profile/photo2.png" />
              </div>
              <div class="message-other">
                <h4>{{message}}</h4>
              </div>
            </div>
          </div>
          <div class="user" v-show="true">
            <div class="row">
              <div class="message-user">
                <h4>{{message}}</h4>
              </div>
              <div class="body-photo-user">
                <img :src="userImage" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row input-text">
      <div class="row input-chat">
        <div>
          <input
            type="text"
            v-model="chat"
            @keyup.enter="handleMessage"
            placeholder="Type your message..."
          />
        </div>
        <div>
          <i class="fas fa-plus"></i>
          <i class="fas fa-surprise"></i>
          <i class="fas fa-microphone"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Message-Body',
  props: ['messages'],
  data () {
    return {
      chat: ''
    }
  },
  computed: {
    ...mapGetters({
      userImage: 'userImage'
    })
  },
  mounted () {
  },
  methods: {
    handleMessage () {
      console.log(this.chat)
      this.$emit('handleMessage', this.chat)
      this.chat = null
    }
  }
}
</script>

<style scoped>
.body-message {
  min-height: 500px;
  width: 955px;
  margin-left: 10px;
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
  width: 955px;
  padding-left: 30px;
  margin-bottom: 5px;
  margin-top: auto;
}

.body-message .user {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 120px;
  width: 955px;
  padding-top: auto;
  padding-bottom: 0;
  padding-right: 15px;
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
  max-height: 120px;
}

.body-message .message-user {
  background: #ffffff;
  border-radius: 35px 35px 10px 35px;
  margin-left: auto;
  margin-right: 0px;
  padding: 12px;
  max-width: 850px;
  max-height: 120px;
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
  .body-message {
    min-height: 240px;
    width: 448px;
    margin-left: 5px;
    margin-top: auto;
    margin-bottom: 0px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* background-color: springgreen; */
  }

.body-message .other {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 120px;
  width: 448px;
  padding-left: 30px;
  margin-bottom: 5px;
  margin-top: auto;
  /* background-color: darkmagenta; */
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
  margin-bottom: 5px;
  margin-top: auto;
  /* background-color: darksalmon; */
}

  .input-text {
    /* background: red; */
    height: 40px;
    width: 448px;
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
    /* background: blue; */
    border-radius: 15px;
    width: 440px;
    height: 34px;
    padding: 4px;
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
</style>
