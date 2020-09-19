<template>
  <div class="contact-info-profile">
    <div class="username-contact">
      <h4 class="back" @click="handleClose">&#60;</h4>
      <h4>@{{infoUser.userName}}</h4>
      <h4></h4>
    </div>
    <div class="container-photo">
      <div class="photo">
        <img :src="infoUser.image" />
      </div>
    </div>
    <div class="container-name">
      <div class="name">
        <h4>{{infoUser.name}}</h4>
        <h5>@{{infoUser.userName}}</h5>
      </div>
    </div>
    <div class="scroll">
      <div class="account">
        <h3>Phone Number</h3>
        <h4>{{infoUser.phoneNumber}}</h4>
        <!-- <h5>Tap to change phone number</h5> -->
      </div>
      <div class="line"></div>
      <!-- <div class="username-setting">
      <h4>@{{userName}}</h4>
      <h5>Username</h5>
      </div>-->
      <!-- <div class="line"></div> -->
      <div class="bio">
        <h4>{{infoUser.bio}}</h4>
        <h5>Bio</h5>
      </div>
      <div class="line"></div>
      <div class="more-info">
        <div class="row d-flex justify-content-between option">
          <h4>Location</h4>
          <h4>Image</h4>
          <h4>Documents</h4>
        </div>
      </div>
      <!-- <div class="settings">
      <h3>Settings</h3>
      <ul>
        <li><i class="far fa-bell"></i> Notification and Sounds</li>
        <li><i class="fas fa-lock"></i> Privaty and Security</li>
        <li><i class="fas fa-chart-line"></i> Data and Stronge</li>
        <li><i class="far fa-list-alt"></i> Chat settings</li>
        <li><i class="fas fa-laptop"></i> Devices</li>
      </ul>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'contact-info-profile',
  props: ['infoUser'],
  computed: {
    ...mapGetters({
    //   userName: 'userName',
    //   userImage: 'userImage',
    //   name: 'name',
    //   phoneNumber: 'phoneNumber',
    //   bio: 'bio'
    })
  },
  methods: {
    ...mapActions(['logout']),
    handleClose () {
      this.$emit('handleClose', false)
    }
  }
}
</script>

<style>
.contact-info-profile {
  position: absolute;
  width: 340px;
  height: 663px;
  left: 1026px;
  right: 0px;
  top: 0px;
  background-color: #ffffff;
  z-index: 3;
  padding: 20px;
  /* background-color: red; */
}

.contact-info-profile .username-contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.contact-info-profile .username-contact h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #7e98df;
}

.contact-info-profile .username-contact .back {
  cursor: pointer;
}

.contact-info-profile .username-contact .back:hover {
  color: red;
}

.contact-info-profile .container-photo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.contact-info-profile .photo {
  width: 120px;
  height: 120px;
}

.contact-info-profile .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.contact-info-profile .container-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.scroll {
  /* background-color: aqua; */
  max-height: 350px;
  overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.account {
  margin: 10px;
  margin-top: 20px;
}

.account h3 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 23px;
  color: #232323;
}

.account h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.335px;
  color: #232323;
}

.account h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.17px;
  color: #7e98df;
  cursor: pointer;
}

.account h5:hover {
  color: red;
}

.contact-info-profile .name h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #232323;
}

.contact-info-profile .name h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.335px;
  color: #848484;
  text-align: center;
}

.contact-info-profile .more-info h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #232323;
  cursor: pointer;
  /* background: #7E98DF;
border-radius: 20px; */
padding: 10px;
}

.contact-info-profile .more-info h4:hover {
    color: white;
    background: #7E98DF;
border-radius: 20px;
}

.option {
    padding: 20px;
    /* background-color: yellow; */
}

.line {
  background-color: #f6f6f6;
  width: 350px;
  height: 2px;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.username-setting {
  margin: 10px;
  margin-top: 20px;
}

.username-setting h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
}

.username-setting h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.17px;
  color: #848484;
  cursor: pointer;
}

.username-setting h5:hover {
  color: red;
}

.bio {
  margin: 10px;
  margin-top: 20px;
}

.bio h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 181%;
  color: #232323;
}

.bio h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.17px;
  color: #848484;
  cursor: pointer;
}

.bio h5:hover {
  color: red;
}

.settings {
  margin: 10px;
  margin-top: 20px;
}
.settings h3 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #232323;
}

.settings ul {
  /* background-color: aqua; */
  padding: 0;
}

.settings ul li {
  list-style-type: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #232323;
  margin-bottom: 10px;
  cursor: pointer;
}

.settings ul li:hover {
  color: red;
}

.settings ul li i {
  width: 20px;
}

@media (max-width: 768px) {
  .contact-info-profile {
    position: absolute;
    width: 190px;
    height: 360px;
    left: 0px;
    top: 0px;
    /* background-color: #ffffff; */
    z-index: 3;
    padding: 20px;
    background-color: red;
  }
}
</style>
