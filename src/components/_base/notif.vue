<template>
  <div class="notif">
    <div class="close" @click="closeNotif">
      <i class="fas fa-window-close"></i>
    </div>
    <div class="message">
      <h4>{{ notif }}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Notif',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      notif: 'notif'
    })
  },
  methods: {
    ...mapActions(['getNotif']),
    ...mapActions(['getNotifActive']),
    closeNotif () {
      this.$emit('closeNotif', false)
    }
  }
}
</script>

<style scoped>
.notif {
  position: absolute;
  top: 15px;
  left: 535px;
  width: 300px;
  height: 70px;
  background-color: lightgreen;
  border-radius: 30px 0 30px 0;
  box-shadow: 5px 5px 5px grey;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.close i {
  color: red;
}

.message {
  margin-top: 20px;
}

.message h4 {
  text-align: center;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

@media (max-width: 768px) {
  .notif {
    top: 5px;
    left: 200px;
    width: 250px;
    height: 50px;
  }

  .close i {
    font-size: 20px;
  }

  .message h4 {
    font-size: 16px;
    font-weight: bold;
  }

@media (max-width: 576px) {
  .notif {
    top: 5px;
    left: 60px;
    width: 250px;
    height: 50px;
  }

  .close i {
    font-size: 20px;
  }

  .message h4 {
    font-size: 16px;
    font-weight: bold;
  }
}
}
</style>>
