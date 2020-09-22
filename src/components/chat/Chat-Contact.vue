<template>
  <div>
    <div class="row contact-chat">
      <div class="row contact-list-chat" v-for="user in allUser" :key="user.id">

        <div class="col-md-3 col-sm-3 container-photo pl-md-0 pr-md-0">

          <div v-if="user.image" class="photo">
            <img :src="user.image" @click="handleShowContact(user)" />
          </div>

          <div v-else class="photo">
            <img src="../../assets/Profile/pp.png" @click="handleShowContact(user)" />
          </div>

        </div>

        <div class="col-md-9 col-sm-9 scroll-edit p-md-0">
          <div class="row justify-content-between">
            <div
              class="col-md-8 col-sm-8 contact-info"
              @click="handleOpenMessage(user)"
            >
              <div class="row contact-name">
                <h4>{{user.name}}</h4>
              </div>
              <div class="row last-chat">
                <!-- <div v-for="message in messages" :key="message.id" class="row last-chat"> -->
                <h4>Why did you do that?</h4>
                <!-- <h4 v-if="message.id === idUser">{{message}}</h4> -->
              </div>
            </div>
            <div class="col-md-3 col-sm-3 time-info">
              <div class="row time-chat justify-content-end">
                <h4>{{user.time}}</h4>
              </div>
              <div class="row qly-chat justify-content-end">
                <h4>
                  <span>2</span>
                </h4>
              </div>
            </div>
          </div>
          <div class="row contact-menu">
            <div class="row contact-menu-i justify-content-between">
              <i class="fas fa-user-plus" @click="handleAddContact(user)"></i>
              <!-- <i class="far fa-bookmark"></i> -->
              <i class="fas fa-check-double"></i>
              <i class="far fa-trash-alt" @click="handleDeleteContact(user)"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
    <ContactInfo v-show="showContactInfo" :infoUser="infoUser"
    v-on:handleClose="handleClose($event)" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ContactInfo from './Chat-Contact-Info'
import io from 'socket.io-client'
export default {
  name: 'Chat-Contact',
  props: ['allUser', 'idUser', 'messages'],
  data () {
    return {
      socket: io('http://localhost:4000'),
      showContactInfo: true,
      infoUser: null,
      headerMessage: null
    }
  },
  components: {
    ContactInfo
  },
  methods: {
    ...mapActions(['addContact']),
    ...mapActions(['deleteContact']),
    handleShowContact (user) {
      if (this.showContactInfo === false) {
        this.showContactInfo = true
        this.infoUser = user
      } else {
        this.showContactInfo = false
      }
    },

    // handleOpenMessage (user) {
    //   this.headerMessage = user
    //   this.$emit('headerMessage', this.headerMessage)
    //   console.log('header: ' + this.headerMessage)
    // },

    handleOpenMessage (user) {
      if (user.idFriend) {
        this.headerMessage = user
        this.$emit('headerMessage', this.headerMessage)
        console.log('header: ' + this.headerMessage)
      } else {
        alert('Not in contact')
      }
    },

    handleClose (handleClose) {
      this.showContactInfo = false
    },

    handleAddContact (user) {
      if (user.idFriend) {
        alert('in contact')
      } else if (this.idUser === user.id) {
        alert("can't add contact")
      } else {
        const data = {
          idUser: this.idUser,
          idFriend: user.id
        }
        this.addContact(data).then((res) => {
          alert(res.data.result)
        })
      }
    },
    handleDeleteContact (user) {
      if (user.idFriend) {
        // alert('siap didelete')
        this.deleteContact(user.id).then((res) => {
          alert(res.data.result)
        })
      } else {
        alert('Not in contact')
      }
    }
  }
}
</script>

<style scoped>
.mobile {
  display: none;
}

.contact-chat {
  height: 250px;
  width: 320px;
  padding: 20px;
  padding-left: 11px;
  overflow-y: scroll;
  /* background-color: yellow; */
  z-index: 2;
}

.contact-chat::-webkit-scrollbar {
  display: none;
}

.contact-chat .contact-list-chat {
  width: 390px;
  height: 100px;
  padding: 0;
  /* background-color: purple; */
}

.contact-chat .container-photo {
  width: 20%;
  padding: 0;
}

.contact-chat .photo {
  width: 100px;
  height: 100px;
  padding: 5px;
  margin-left: 0px;
  margin-right: 0px;
  cursor: pointer;
}

.contact-chat .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.contact-chat .scroll-edit {
  height: 100px;
  margin-left: 0;
  margin-right: 0;
  overflow-y: scroll;
}

.contact-chat .scroll-edit::-webkit-scrollbar {
  display: none;
}

.contact-chat .contact-name {
  height: 50px;
  width: 210px;
  padding: 10px;
  padding-left: 40px;
  cursor: pointer;
  /* background-color: red; */
}

.contact-chat .contact-name h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.165px;
  color: #232323;
}

.contact-chat .last-chat {
  height: 50px;
  width: 210px;
  padding: 10px;
  padding-left: 40px;
  /* background-color: blue; */
}

.contact-chat .last-chat h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.contact-chat .time-chat {
  height: 50%;
  width: 50px;
  padding-top: 10px;
  /* background-color: chartreuse; */
}

.contact-chat .time-chat h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #848484;
  margin-left: auto;
  margin-right: 0;
}

.contact-chat .qly-chat {
  width: 50px;
  height: 50%;
  padding-top: 10px;
  /* background-color: cyan; */
}

.contact-chat .qly-chat h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #ffffff;
  margin-left: auto;
  margin-right: 0;
}

.contact-chat .qly-chat span {
  background: #7e98df;
  border-radius: 50%;
  padding: 5px 8px 5px 8px;
}

.contact-menu {
  /* width: 297px; */
  width: 100%;
  height: 100px;
  margin-left: 10px;
  padding-left: 20px;
  padding-top: 10px;
}

.contact-menu .contact-menu-i {
  background-color: #7e98df;
  /* width: 277px; */
  height: 85px;
  padding: 10px;
  /* padding: 10px;
  padding-top: 1px; */
}

.contact-menu i {
  font-size: 30px;
  margin: 20px;
  cursor: pointer;
  color: #ffffff;
}

.contact-menu i:hover {
  color: red;
}

@media (max-width: 768px) {
  .contact-chat {
    height: 120px;
    width: 320px;
    padding: 0px;
    padding-left: 11px;
    overflow-y: scroll;
    /* background-color: yellow; */
    z-index: 2;
  }

  .contact-chat .contact-list-chat {
    width: 190px;
    height: 50px;
    padding: 0;
    /* background-color: salmon; */
  }

  .contact-chat .photo {
    width: 50px;
    height: 50px;
  }

  .contact-chat .photo img {
    border-radius: 10px;
  }

  .contact-chat .contact-name {
    height: 25px;
    width: 50px;
    padding: 2px;
    padding-left: 5px;
    /* background-color: springgreen; */
  }

  .contact-chat .contact-name h4 {
    font-size: 10px;
  }

  .contact-chat .last-chat {
    height: 23px;
    width: 70px;
    padding: 2px;
    padding-left: 5px;
    /* background-color: tan; */
    overflow-y: scroll;
    z-index: 2;
    background-color: white;
  }

  .contact-chat .last-chat::-webkit-scrollbar {
    display: none;
  }

  .contact-chat .last-chat h4 {
    font-size: 10px;
  }

  .contact-chat .time-chat {
    height: 25px;
    width: 33px;
    padding-top: 3px;
    /* background-color: red; */
  }

  .contact-chat .time-chat h4 {
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
  }

  .contact-chat .qly-chat {
    width: 33px;
    height: 25px;
    padding-top: 5px;
    /* background-color: springgreen; */
  }

  .contact-chat .qly-chat h4 {
    font-size: 8px;
    margin-left: auto;
    margin-right: 0;
  }

  .contact-chat .qly-chat span {
    background: #7e98df;
    border-radius: 50%;
    padding: 5px 8px 5px 8px;
  }

  .contact-menu {
    width: 140px;
    height: 50px;
    margin-left: -14px;
    padding-left: 20px;
    padding-top: 10px;
    /* background-color: teal; */
  }

  .contact-menu .contact-menu-i {
    background-color: #7e98df;
    width: 140px;
    height: 35px;
    padding: 10px;
    padding-top: 5px;
  }

  .contact-menu i {
    font-size: 17px;
    margin: 2px;
    cursor: pointer;
    color: #ffffff;
  }

  .contact-chat .scroll-edit {
    height: 50px;
    margin-left: 0;
    margin-right: 0;
    overflow-y: scroll;
  }

  .contact-chat .scroll-edit::-webkit-scrollbar {
    display: none;
  }

  .scroll-edit .justify-content-between {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* background-color: yellow; */
    width: 95px;
  }
}

@media (max-width: 576px) {
  .mobile {
    display: inline;
}

.desktop {
  display: none;
}

   .contact-chat {
    height: 400px;
    /* height: 100px; */
    width: 400px;
    padding: 0px;
    padding-left: 11px;
    overflow-y: scroll;
    /* background-color: yellow; */
    z-index: 2;
  }

  .contact-chat .contact-list-chat {
    width: 400px;
    height: 100px;
    padding: 0;
    /* background-color: salmon; */
  }

  .container-photo {
    display: flex;
    flex-direction: row;
    width: 25%;
  }

  .contact-chat .photo {
    /* position: absolute; */
    width: 100px;
    height: 100px;
    /* background-color: red; */
    /* display: none; */
  }

  .contact-chat .photo img {
    border-radius: 10px;
  }

   .contact-chat .contact-name {
    height: 50px;
    width: 200px;
    padding: 2px;
    padding-left: 5px;
    margin-left: 0px;
    margin-top: 0;
    /* background-color: springgreen; */
  }

  .contact-chat .contact-name h4 {
    font-size: 22px;
  }

  .contact-chat .last-chat {
    height: 50px;
    width: 200px;
    padding: 2px;
    padding-left: 5px;
    margin-left: 0px;
    /* background-color: red; */
    overflow-y: scroll;
    z-index: 2;
    background-color: white;
  }

  .contact-chat .last-chat::-webkit-scrollbar {
    display: none;
  }

  .contact-chat .last-chat h4 {
    font-size: 20px;
  }

.contact-chat .scroll-edit {
  display: flex;
  flex-direction: column;
  height: 100px;
  /* width: 100%; */
  width: 80%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-left: 0;
  /* margin-bottom: 50px; */
  /* padding: 0; */
  overflow-y: scroll;
  /* background-color: royalblue; */
}

  .contact-info {
    /* background-color: blueviolet; */
    width: 900px;
    height: 0px;
  }

  .contact-chat .time-chat {
    height: 50px;
    width: 50px;
    padding-top: 0px;
    margin-left: 270px;
    /* margin-right: 0; */
    /* background-color: red; */
  }

  .contact-chat .time-chat h4 {
    font-size: 18px;
    margin-left: auto;
    margin-right: 0;
  }

  .contact-chat .qly-chat {
    width: 50px;
    height: 50px;
    padding-top: 12px;
    margin-left: 270px;
    /* background-color: springgreen; */
  }

  .contact-chat .qly-chat h4 {
    font-size: 18px;
    margin-left: auto;
    margin-right: 0;
  }

  .contact-chat .qly-chat span {
    background: #7e98df;
    border-radius: 50%;
    padding: 5px 8px 5px 8px;
  }

   .contact-menu {
    width: 400px;
    height: 100px;
    margin-left: 0px;
    padding-left: 20px;
    padding-top: 10px;
    /* background-color: teal; */
  }

  .contact-menu .contact-menu-i {
    background-color: #7e98df;
    width: 295px;
    height: 100px;
    padding: 10px;
    padding-top: 20px;
  }

  .contact-menu i {
    font-size: 40px;
    margin: 2px;
    cursor: pointer;
    color: #ffffff;
  }
}
</style>
