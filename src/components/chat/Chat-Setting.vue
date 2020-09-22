<template>
  <div class="setting-profile">
    <form>
      <div class="username">
        <h4 class="back" @click="handleClose">&#60;</h4>
        <h4>@{{userName}}</h4>
        <h4></h4>
      </div>
      <div class="container-photo">
        <div class="photo">
          <img :src="userImage" @click="handleChangeImage" />
          <div v-show="updateImage" class="upload-image">
            <input type="file" @change="onFileUpload" />
          </div>
          <div>
          <button
          v-show="updateImage"
          class="button-update"
            type="submit"
            @click="updateProfile(inputName, inputUsername, inputPhoneNumber, inputBio, FILE)"
          >update</button>
        </div>
        </div>
      </div>
      <div class="container-name">
        <div class="name">
          <h4 v-if="updateName" @click="handleChangeName">{{name}}</h4>
          <div v-else>
            <input v-model="inputName" :placeholder="name" />
          </div>
          <h5>@{{userName}}</h5>
        </div>
      </div>
      <div class="scroll">
        <div class="account">
          <h3>Account</h3>
          <h4 v-if="updatePhoneNumber">{{phoneNumber}}</h4>
          <div v-else>
            <input v-model="inputPhoneNumber" :placeholder="phoneNumber" />
          </div>
          <h5 @click="handleChangeNumber">Tap to change phone number</h5>
        </div>
        <div class="line"></div>
        <div class="username-setting">
          <h4 v-if="updateUsername">@{{userName}}</h4>
          <div v-else>
            <input v-model="inputUsername" :placeholder="userName" />
          </div>
          <h5 @click="handleChangeUsername">Username</h5>
        </div>
        <div class="line"></div>
        <div class="bio">
          <h4 v-if="updateBio">{{bio}}</h4>
          <div v-else>
            <input v-model="inputBio" :placeholder="bio" />
          </div>
          <h5 @click="handleChangeBio">Bio</h5>
        </div>
        <div class="line"></div>
        <div class="settings">
          <h3>Settings</h3>
          <ul>
            <li>
              <i class="far fa-bell"></i> Notification and Sounds
            </li>
            <li>
              <i class="fas fa-lock"></i> Privaty and Security
            </li>
            <li>
              <i class="fas fa-chart-line"></i> Data and Stronge
            </li>
            <li>
              <i class="far fa-list-alt"></i> Chat settings
            </li>
            <li>
              <i class="fas fa-laptop"></i> Devices
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'setting-profile',
  data () {
    return {
      // showPhone: true,
      // userphoneNumber: '',
      FILE: null,
      inputName: '',
      inputUsername: '',
      inputPhoneNumber: '',
      inputBio: '',
      updateName: true,
      updateUsername: true,
      updatePhoneNumber: true,
      updateBio: true,
      updateImage: false
    }
  },
  computed: {
    ...mapGetters({
      userName: 'userName',
      userImage: 'userImage',
      name: 'name',
      phoneNumber: 'phoneNumber',
      bio: 'bio'
    })
  },
  methods: {
    ...mapActions(['logout']),
    ...mapActions(['updateUser']),
    ...mapActions(['getUserId']),
    ...mapActions(['getUserImage']),
    ...mapActions(['getUserName']),
    ...mapActions(['getName']),
    ...mapActions(['getPhoneNumber']),
    ...mapActions(['getBio']),
    handleClose () {
      this.$emit('handleClose', false)
    },

    onFileUpload (event) {
      this.FILE = event.target.files[0]
    },

    updateProfile (inputName, inputUsername, inputPhoneNumber, inputBio, FILE) {
      const data = {
        name: inputName || this.name,
        userName: inputUsername || this.userName,
        phoneNumber: inputPhoneNumber || this.phoneNumber,
        bio: inputBio || this.bio
      }
      this.updateUser(data)
      this.getName(data.name)
      this.getUserName(data.userName)
      this.getPhoneNumber(data.phoneNumber)
      this.getBio(data.bio)

      // const formData = new FormData()
      // formData.append('name', inputName)
      // formData.append('userName', inputUsername)
      // formData.append('image', FILE, FILE.name)
      // formData.append('phoneNumber', inputPhoneNumber)
      // formData.append('bio', inputBio)
    },

    handleChangeName () {
      this.updateName = false
    },
    handleChangeNumber () {
      this.updatePhoneNumber = false
    },
    handleChangeUsername () {
      this.updateUsername = false
    },
    handleChangeBio () {
      this.updateBio = false
    },
    handleChangeImage () {
      if (this.updateImage === true) {
        this.updateImage = false
      } else {
        this.updateImage = true
      }
    }
  }
}
</script>

<style>
.setting-profile {
  position: absolute;
  width: 340px;
  height: 660px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
  z-index: 3;
  padding: 20px;
  border-left: 2px solid gray;
  /* background-color: red; */
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

.setting-profile .username .back {
  cursor: pointer;
}

.setting-profile .username .back:hover {
  color: red;
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
  cursor: pointer;
}

.setting-profile .container-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.setting-profile .name h4,
.setting-profile .name input {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #232323;
  cursor: pointer;
}

.setting-profile .name h4:hover {
  color: red;
}

input {
  border: none;
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

.account h4, .account input {
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

.username-setting h4, .username-setting input {
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

.bio h4, .bio input {
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

.upload-image {
  margin-top: 10px;
  margin-bottom: 10px;
  position: absolute;
  top: 40px;
  left: 15px;
}

.button-update {
  margin-top: 10px;
  margin-bottom: 10px;
  position: absolute;
  top: 40px;
  left: 250px;
}

@media (max-width: 768px) {
  .setting-profile {
    position: absolute;
    width: 159px;
    height: 360px;
    left: 0px;
    top: 0px;
    background-color: #ffffff;
    z-index: 3;
    padding: 20px;
    padding-top: 10px;
    /* background-color: red; */
  }

  .setting-profile .username h4 {
    font-size: 20px;
  }

  .setting-profile .container-photo {
    margin-top: 5px;
  }

  .setting-profile .photo {
    width: 100px;
    height: 100px;
  }

  .setting-profile .container-name {
    margin-top: 10px;
  }

  .setting-profile .name h4 {
    font-size: 13px;
  }

  .setting-profile .name h5 {
    font-size: 10px;
  }

  .scroll {
    /* background-color: aqua; */
    max-height: 130px;
    /* overflow-y: scroll; */
  }

  .account {
    margin: 0px;
    margin-top: 20px;
  }

  .account h3 {
    font-size: 15px;
  }

  .account h4 {
    font-size: 12px;
  }

  .account h5 {
    font-size: 12px;
  }

  .line {
    margin: 0px;
  }

  .username-setting {
    margin: 5px;
    margin-top: 5px;
  }

  .username-setting h4 {
    font-weight: bold;
    font-size: 13px;
  }

  .username-setting h5 {
    font-size: 10px;
  }

  .bio {
    margin: 5px;
    margin-top: 5px;
  }

  .bio h4 {
    font-weight: bold;
    font-size: 12px;
  }

  .bio h5 {
    font-size: 10px;
  }

  .settings {
    margin: 5px;
    margin-top: 5px;
  }
  .settings h3 {
    font-weight: bold;
    font-size: 15px;
  }

  .settings ul li {
    list-style-type: none;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .settings ul li i {
    width: 12px;
  }
}

@media (max-width: 576px) {
  .setting-profile {
    position: absolute;
    width: 100%;
    height: 100%;
    /* left: 0px;
    top: 0px;
    background-color: #ffffff;
    z-index: 3; */
    padding: 20px;
    padding-top: 20px;
    /* background-color: red; */
  }

  .setting-profile .username h4 {
    font-size: 30px;
  }

  .setting-profile .container-photo {
    margin-top: 10px;
  }

  .setting-profile .photo {
    width: 150px;
    height: 150px;
  }

  .setting-profile .container-name {
    margin-top: 15px;
  }

  .setting-profile .name h4 {
    font-size: 25px;
  }

  .setting-profile .name h5 {
    font-size: 20px;
  }

  .scroll {
    /* background-color: aqua; */
    max-height: 500px;
    /* overflow-y: scroll; */
  }

  .account {
    margin: 0px;
    margin-top: 10px;
  }

  .account h3 {
    font-size: 25px;
  }

  .account h4 {
    font-size: 20px;
  }

  .account h5 {
    font-size: 20px;
  }

  .line {
    margin: 0px;
    width: 100%;
  }

  .username-setting {
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .username-setting h4 {
    font-weight: bold;
    font-size: 25px;
  }

  .username-setting h5 {
    font-size: 20px;
  }

  .bio {
    margin: 0px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .bio h4 {
    font-weight: bold;
    font-size: 25px;
  }

  .bio h5 {
    font-size: 20px;
  }

  .settings {
    margin: 5px;
    margin-top: 20px;
  }
  .settings h3 {
    font-weight: bold;
    font-size: 22px;
  }

  .settings ul li {
    list-style-type: none;
    font-size: 20px;
    margin-bottom: 15px;
  }

  .settings ul li i {
    width: 25px;
  }
}
</style>
