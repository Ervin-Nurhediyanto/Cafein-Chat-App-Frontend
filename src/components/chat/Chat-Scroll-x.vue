<template>
  <div class="row scroll-x d-flex justify-content-between">
    <h4 v-if="all" @click="handleAllUser">All</h4>
    <h4 v-else class="actived">All</h4>
    <h4 v-if="contact" @click="handleContact">Contact</h4>
    <h4 v-else class="actived">Contact</h4>
    <h4>Group</h4>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Chat-Scroll-x',
  data () {
    return {
      all: true,
      contact: true,
      group: true
    }
  },
  methods: {
    ...mapActions(['getAllUser']),
    ...mapActions(['getAllContact']),

    handleAllUser () {
      this.getAllUser()
      this.all = false
      this.contact = true
      this.group = true
    },
    handleContact () {
      this.getAllContact()
      this.all = true
      this.contact = false
      this.group = true
    }
  }
}
</script>

<style>
.scroll-x {
  margin-top: 5px;
  margin-bottom: 5px;
}

.scroll-x h4 {
  border-radius: 15px;
  min-width: 40px;
  min-height: 30px;
  font-size: 15px;
  padding: 8px;
  cursor: pointer;
}

.scroll-x h4:active {
  background-color: #7e98df;
  border-radius: 15px;
  min-width: 40px;
  min-height: 30px;
  font-size: 15px;
  padding: 8px;
  color: #ffffff;
}

.scroll-x h4.actived {
  background-color: #7e98df;
  border-radius: 15px;
  min-width: 40px;
  min-height: 30px;
  font-size: 15px;
  padding: 8px;
  color: #ffffff;
}

@media (max-width: 768px) {
  .scroll-x {
    margin-top: 0px;
    margin-bottom: 0px;
    /* background-color: royalblue; */
  }

  .scroll-x h4 {
    min-width: 20px;
    min-height: 15px;
    font-size: 12px;
    font-weight: bold;
    padding: 2px;
  }

  .scroll-x h4:active {
    min-width: 20px;
    min-height: 15px;
    font-size: 12px;
    padding: 2px;
  }
}

@media (max-width: 576px) {
  .scroll-x h4 {
    min-width: 20px;
    min-height: 15px;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
  }

  .scroll-x h4:active {
    min-width: 20px;
    min-height: 15px;
    font-size: 20px;
    padding: 5px;
  }
}
</style>
