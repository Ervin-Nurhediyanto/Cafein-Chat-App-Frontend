<template>
  <div class="row">
    <div class="List">
      <ChatList />
    </div>
    <div class="Message">
      <MessageEmpty />
    </div>
  </div>
</template>

<script>
import ChatList from '../../components/chat/Chat-List'
import MessageEmpty from '../../components/message/Message-Empty'
export default {
  name: 'Chat',
  components: {
    ChatList,
    MessageEmpty
  }
}
</script>

<style scoped>
.List {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  /* width: 400px; */
  width: 30%;
  /* height: 660px; */
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.Message {
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  width: 70%;
  height: 100%;
  /* height: 660px; */
}
</style>
