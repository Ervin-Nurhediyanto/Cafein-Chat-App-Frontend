<template>
  <div class="ChatList">
    <SettingProfile v-show="settingShow" v-on:handleClose="closeSetting($event)" />
    <div class="row d-flex justify-content-between">
      <h2 v-show="telegram">Telegram</h2>
      <ChatMenu v-show="menuAct" />
      <div class="mobile">
        <i class="fas fa-plus" @click="handleMenu"></i>
        <i class="fas fa-search" @click="showSearch"></i>
        <i class="fas fa-bars" @click="handleMenuProfile"></i>
      </div>
      <div class="line-menu" @click="handleMenuProfile">
        <div class="line-one"></div>
        <div class="line-two"></div>
        <div class="line-three"></div>
      </div>
    </div>
    <ChatMenuProfile v-show="menuProf" v-on:handleSetting="openSetting($event)" />
    <ChatProfile />
    <div class="row search-box d-flex justify-content-between">
      <ChatSearch class="mobile" v-show="activeSearch"/>
      <ChatSearch class="toMobile"/>
      <div @click="handleMenu" class="toMobile">
        <h4>+</h4>
      </div>
    </div>
    <ChatScrollX />
    <div class="scroll-contact">
      <ChatContact
      :allUser="allUser"
      :idUser="idUser"
      :messages="messages"
      v-on:headerMessage="headerMessage($event)"
      v-on:openNotif="openNotif($event)" />
    </div>
  </div>
</template>

<script>
import ChatSearch from './Chat-Search'
import ChatScrollX from './Chat-Scroll-x'
import ChatContact from './Chat-Contact'
import ChatProfile from './Chat-Profile'
import ChatMenu from './Chat-Menu'
import ChatMenuProfile from './Chat-Menu-Profile'
import SettingProfile from './Chat-Setting'
export default {
  name: 'ChatList',
  props: ['allUser', 'idUser', 'messages'],
  components: {
    ChatSearch,
    ChatScrollX,
    ChatContact,
    ChatProfile,
    ChatMenu,
    ChatMenuProfile,
    SettingProfile
  },
  data () {
    return {
      telegram: true,
      menuAct: false,
      menuProf: false,
      settingShow: false,
      headerMess: null,
      activeSearch: false
    }
  },
  methods: {
    handleMenu () {
      if (this.telegram === true) {
        this.telegram = false
        this.menuAct = true
      } else {
        this.telegram = true
        this.menuAct = false
      }
    },
    handleMenuProfile () {
      if (this.menuProf === false) {
        this.menuProf = true
      } else {
        this.menuProf = false
      }
    },
    openSetting (openSetting) {
      this.settingShow = openSetting
    },
    closeSetting (closeSetting) {
      this.settingShow = closeSetting
    },
    headerMessage (headerMessage) {
      this.headerMess = headerMessage
      this.$emit('headerMessage', headerMessage)
    },
    showSearch () {
      if (this.activeSearch === false) {
        this.activeSearch = true
      } else {
        this.activeSearch = false
      }
    },
    openNotif () {
      this.$emit('openNotif', true)
    }
  }
}
</script>

<style scoped>
.ChatList {
  margin-top: 5px;
  margin-left: 0px;
  /* width: 330px; */
  padding: 20px;
  width: 100%;
  height: 100%;
  /* background-color: paleturquoise; */
}

.ChatList h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.ChatList .line-menu {
  cursor: pointer;
}

.ChatList .line-one {
  background: #7e98df;
  border-radius: 20px;
  border-top: 1px solid #848484;
  width: 50px;
  height: 7px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.ChatList .line-two {
  background: #7e98df;
  border-radius: 20px;
  border-top: 1px solid #848484;
  width: 35px;
  height: 7px;
  margin-bottom: 5px;
}

.ChatList .line-three {
  background: #7e98df;
  border-radius: 20px;
  border-top: 1px solid #848484;
  width: 50px;
  height: 7px;
}

.mobile {
  display: none;
}

/* .scroll-contact {
  height: 250px;
  width: 300px;
  padding: 0;
  overflow-y: scroll;
  background-color: yellow;
}

.scroll-contact::-webkit-scrollbar {
  display: none;
} */

@media (max-width: 768px) {
  .ChatList {
    /* width: 160px; */
    width: 100%;
    margin-left: 0px;
    margin-top: 0px;
    padding: 15px;
    padding-top: 0;
    /* background-color: chartreuse; */
  }
  .ChatList h2 {
    font-size: 18px;
    /* background-color: brown; */
  }

  .ChatList .line-one {
    background: #7e98df;
    border-radius: 20px;
    border-top: 1px solid #848484;
    width: 25px;
    height: 3px;
    margin-top: 7px;
    margin-bottom: 5px;
    margin-left: 0;
  }

  .ChatList .line-two {
    background: #7e98df;
    border-radius: 20px;
    border-top: 1px solid #848484;
    width: 15px;
    height: 3px;
    margin-bottom: 5px;
  }

  .ChatList .line-three {
    background: #7e98df;
    border-radius: 20px;
    border-top: 1px solid #848484;
    width: 25px;
    height: 3px;
  }
}

@media (max-width: 576px) {
  .ChatList {
    /* width: 160px; */
    width: 100%;
    margin-left: 0px;
    margin-top: 0px;
    padding: 15px;
    padding-top: 0;
    /* background-color: chartreuse; */
  }

  .ChatList h2 {
    font-size: 30px;
    /* background-color: brown; */
  }

  .mobile {
    display: inline;
    /* background-color: mediumturquoise; */
  }

  .mobile i {
    font-size: 30px;
    margin-right: 20px;
    color: #7e98df;
  }

  .line-menu {
    display: none;
  }

  .toMobile {
    display: none;
  }
}
</style>>
