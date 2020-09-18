<template>
  <div class="ChatList">
    <SettingProfile />
    <div class="row d-flex justify-content-between">
      <h2 v-show="telegram">Telegram</h2>
      <ChatMenu v-show="menuAct" />
      <div class="line-menu" @click="handleMenuProfile">
        <div class="line-one"></div>
        <div class="line-two"></div>
        <div class="line-three"></div>
      </div>
    </div>
    <ChatMenuProfile v-show="menuProf"/>
    <ChatProfile />
    <div class="row search-box d-flex justify-content-between">
      <ChatSearch />
      <div @click="handleMenu">
        <h4>+</h4>
      </div>
    </div>
    <ChatScrollX />
    <ChatContact />
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
      menuProf: false
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
    }
  }
}
</script>

<style scoped>
.ChatList {
  margin-top: 43px;
  margin-left: 20px;
  width: 330px;
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

@media (max-width:768px) {

  .ChatList {
  width: 160px;
  margin-left: 0px;
  margin-top: 10px;
  padding: 15px;
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
</style>>
