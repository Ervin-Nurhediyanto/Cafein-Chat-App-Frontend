<template>
  <div class="row">
    <div class="List">
      <ChatList />
    </div>
    <div class="Message">
      <MessageEmpty v-if="empty"/>
      <MessageAvailable v-else />
    </div>
  </div>
</template>

<script>
import ChatList from '../../components/chat/Chat-List'
import MessageEmpty from '../../components/message/Message-Empty'
import MessageAvailable from '../../components/message/Message-Available'
export default {
  name: 'Chat',
  data () {
    return {
      empty: false
    }
  },
  components: {
    ChatList,
    MessageEmpty,
    MessageAvailable
  }
}
</script>

<style scoped>
.List {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  width: 30%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border-right: 1px solid #E5E5E5;
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
