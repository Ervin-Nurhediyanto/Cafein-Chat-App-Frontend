<template>
    <div class="input-group mb-3 pt-4">
  <input type="text" v-model="textMessage" @keyup.enter="sendEmail" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="sendEmail">Send</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'InputMessage',
  data: () => ({
    textMessage: ''
  }),
  methods: {
    sendEmail () {
      this.$emit('send-message', this.textMessage)
      this.textMessage = ''
    }
  }
}
</script>

<style scoped>

</style>
