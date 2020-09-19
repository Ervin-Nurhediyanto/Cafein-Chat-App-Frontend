<template>
  <div class="message-menu-profile">
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
        <i class="fas fa-user-plus"></i> Invite Frineds
      </li>
      <li>
        <i class="far fa-question-circle"></i> Telegrom FAQ
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Chat-message-menu-profile',
  data () {
    return {
      setting: true
    }
  },
  components: {
  },
  methods: {
    handleSetting () {
      this.$emit('handleSetting', this.setting)
    }
  }
}
</script>

<style>
.message-menu-profile {
  position: absolute;
  right: 200px;
  left: auto;
  top: 90px;
  width: 220px;
  height: 340px;
  background: #7e98df;
  border-radius: 35px 10px 35px 35px;
  z-index: 2;
}

.message-menu-profile ul li {
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

.message-menu-profile ul li:hover {
  color: red;
}

.message-menu-profile ul li i {
  margin: 20px;
  margin-left: 0;
  width: 20px;
}

@media (max-width: 768px) {
  .message-menu-profile {
  position: absolute;
  right: 40px;
  left: auto;
  top: 60px;
  width: 130px;
  height: 240px;
}

.message-menu-profile ul {
  /* background-color: aqua; */
  padding: 0;
}

.message-menu-profile ul li {
  font-size: 12px;
}
.message-menu-profile ul li i {
  margin: 12px;
  margin-left: 10;
  margin-top: 15px;
  width: 10px;
}
}

</style>
