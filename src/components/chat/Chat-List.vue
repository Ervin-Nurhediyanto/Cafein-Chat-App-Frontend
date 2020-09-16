<template>
  <div class="ChatList">
    <div class="row d-flex justify-content-between">
      <h2>Telegram</h2>
      <div class="line-menu">
        <div class="line-one"></div>
        <div class="line-two"></div>
        <div class="line-three"></div>
      </div>
    </div>
    <ChatProfile />
    <ChatSearch />
    <ChatScrollX />
    <ChatContact />
  </div>
</template>

<script>
import ChatSearch from './Chat-Search'
import ChatScrollX from './Chat-Scroll-x'
import ChatContact from './Chat-Contact'
import ChatProfile from './Chat-Profile'
export default {
  name: 'ChatList',
  components: {
    ChatSearch,
    ChatScrollX,
    ChatContact,
    ChatProfile
  },
  methods: {}
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
</style>>
