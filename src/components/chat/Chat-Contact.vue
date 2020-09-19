<template>
  <div>
    <div class="row contact-chat">
      <div class="row contact-list-chat" v-for="user in allUser" :key="user.id">
        <!-- <div v-if="user.id !== idUser"> -->
        <!-- photo -->
        <div class="col-md-3 col-sm-3 container-photo pl-md-0 pr-md-0">
          <div class="photo">
            <!-- <img src="../../assets/Profile/photo.png" /> -->
            <img :src="user.image" @click="handleShowContact(user)" />
          </div>
        </div>
        <!-- scroll-edit -->
        <div class="col-md-9 col-sm-9 scroll-edit p-md-0">
          <div class="row justify-content-between">
            <div
              class="col-md-8 col-sm-8 contact-info"
              @click="handleOpenMessage(user.name, user.image, user.status)"
            >
              <div class="row contact-name">
                <h4>{{user.name}}</h4>
              </div>
              <div class="row last-chat">
                <h4>Why did you do that?</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 time-info">
              <div class="row time-chat justify-content-end">
                <h4>15:30</h4>
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
              <i class="far fa-bookmark"></i>
              <i class="fas fa-check-double"></i>
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <ContactInfo v-show="showContactInfo" :infoUser="infoUser" />
  </div>
</template>

<script>
import ContactInfo from './Chat-Contact-Info'
export default {
  name: 'Chat-Contact',
  props: ['allUser', 'idUser'],
  data () {
    return {
      showContactInfo: true,
      infoUser: null,
      headerMessage: null
    }
  },
  components: {
    ContactInfo
  },
  methods: {
    handleShowContact (user) {
      // console.log(user)
      if (this.showContactInfo === false) {
        this.showContactInfo = true
        this.infoUser = user
      } else {
        this.showContactInfo = false
      }
    },
    handleOpenMessage (name, image, status) {
      console.log(name)
      console.log(image)
      console.log(status)
      this.headerMessage = {
        name: name,
        image: image,
        status: status
      }
      this.$emit('headerMessage', this.headerMessage)
    }
    // starChat (room) {
    //   this.$emit('starChat', room)
    // }
  }
}
</script>

<style>
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
</style>
