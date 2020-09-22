<template>
  <div class="menu-profile">
    <ul>
      <li @click="handleSetting">
        <i class="fas fa-cog"></i> Settings
      </li>
      <li>
        <i class="far fa-user"></i> Contacts
      </li>
      <li>
        <i class="fas fa-phone"></i> Calls
      </li>
      <li>
        <i class="far fa-bookmark"></i> Save messages
      </li>
      <li>
        <i class="fas fa-user-plus"></i> Invite Friends
      </li>
      <li>
        <i class="far fa-question-circle"></i> Telegrom FAQ
      </li>
      <li @click="handleLogout">
        <i class="fas fa-sign-out-alt"></i> Logout
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Chat-menu-profile',
  data () {
    return {
      setting: true
    }
  },
  components: {},
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.$router.go(0)
      this.logout()
    },
    handleSetting () {
      this.$emit('handleSetting', this.setting)
    }
  }
}
</script>

<style>
.menu-profile {
  position: absolute;
  width: 220px;
  height: 390px;
  left: 100px;
  top: 90px;
  background: #7e98df;
  border-radius: 35px 10px 35px 35px;
  z-index: 2;
}

.menu-profile ul li {
  list-style-type: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.165px;
  color: #ffffff;
  cursor: pointer;
}

.menu-profile ul li:hover {
  color: red;
}

.menu-profile ul li i {
  margin: 20px;
  margin-left: 0;
  width: 20px;
}

@media (max-width: 768px) {
  .menu-profile {
    position: absolute;
    width: 130px;
    height: 280px;
    left: 15px;
    top: 60px;
    /* padding: 5px; */
  }

  .menu-profile ul {
    /* background-color: aqua; */
    padding: 0;
  }

  .menu-profile ul li {
    font-size: 12px;
  }
  .menu-profile ul li i {
    margin: 12px;
    margin-left: 10;
    margin-top: 15px;
    width: 10px;
  }
}

@media (max-width: 576px) {
  .menu-profile {
    position: absolute;
    width: 200px;
    height: 310px;
    left: auto;
    right: 50px;
    top: 65px;
    padding: 10px;
  }

  .menu-profile ul li {
    font-size: 15px;
  }
  .menu-profile ul li i {
    margin: 12px;
    margin-left: 10;
    margin-top: 15px;
    width: 10px;
  }
}
</style>
