<template>
  <div class="setting-profile">
    <div class="username">
      <h4>&#60;</h4>
      <h4>@{{userName}}</h4>
      <h4></h4>
    </div>
    <div class="container-photo">
      <div class="photo">
        <img :src="userImage" />
      </div>
    </div>
    <div class="container-name">
      <div class="name">
        <h4>{{name}}</h4>
        <h5>@{{userName}}</h5>
      </div>
    </div>
    <div class="account">
      <h4>01232342342</h4>
      <h5>Tap to change phone number</h5>
    </div>
    <div class="username-setting">
      <h4>username</h4>
      <h5>Username</h5>
    </div>
    <div class="bio">
      <h4>i'm blablablabla</h4>
      <h5>Bio</h5>
    </div>
    <div class="settings">
      <h4>Settings</h4>
      <ul>
        <li>Notification and Sounds</li>
        <li>Privaty and Security</li>
        <li>Data and Stronge</li>
        <li>Chat settings</li>
        <li>Devices</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'setting-profile',
  computed: {
    ...mapGetters({
      userName: 'userName',
      userImage: 'userImage',
      name: 'name'
    })
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style>
.setting-profile {
  position: absolute;
  width: 403px;
  height: 1024px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  z-index: 3;
  padding: 20px;
}

.setting-profile .username {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.setting-profile .username h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #7e98df;
}

.setting-profile .container-photo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.setting-profile .photo {
  width: 120px;
  height: 120px;
}

.setting-profile .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.setting-profile .container-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.setting-profile .name h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #232323;
}

.setting-profile .name h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.335px;
  color: #848484;
  text-align: center;
}
</style>
