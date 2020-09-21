<template>
  <div class="contact-info-profile">
    <div class="username-contact">
      <h4 class="back" @click="handleClose">&#60;</h4>
      <h4>@{{infoUser.userName}}</h4>
      <h4></h4>
    </div>
    <div class="scroll">
    <div class="container-photo">

      <div v-if="infoUser.image" class="photo">
        <img :src="infoUser.image" />
      </div>

      <div v-else class="photo">
        <img src="../../assets/Profile/pp.png" />
      </div>

    </div>
    <div class="container-name">
      <div class="name">
        <h4>{{infoUser.name}}</h4>
        <h5>@{{infoUser.userName}}</h5>
      </div>
    </div>
    <!-- <div class="scroll"> -->
      <div class="account">
        <h3>Phone Number</h3>
        <h4>{{infoUser.phoneNumber}}</h4>
      </div>
      <div class="line"></div>
      <div class="bio">
        <h4>{{infoUser.bio}}</h4>
        <h5>Bio</h5>
      </div>
      <div class="line"></div>
      <div class="more-info">
        <div class="row d-flex justify-content-between option">
          <h4 @click="handleLocation">Location</h4>
          <h4>Image</h4>
          <h4>Documents</h4>
        </div>
        <!-- <Maps
        :locLat="Number(infoUser.lat)"
        :locLng="Number(infoUser.lng)"/>-->
        <div class="desktop">
        <GmapMap
          v-show="showLocation"
          :center="{lat:Number(infoUser.lat), lng:Number(infoUser.lng)}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 300px; height: 300px"
        ></GmapMap>
        </div>
        <div class="mobile">
        <GmapMap
          v-show="showLocation"
          :center="{lat:Number(infoUser.lat), lng:Number(infoUser.lng)}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 450px; height: 300px"
        ></GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Maps from '../_base/location'
export default {
  name: 'contact-info-profile',
  props: ['infoUser'],
  data () {
    return {
      showLocation: false
    }
  },
  components: {
    // Maps
  },
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapActions(['logout']),
    handleClose () {
      this.$emit('handleClose', false)
    },
    handleLocation () {
      if (this.showLocation === false) {
        this.showLocation = true
      } else {
        this.showLocation = false
      }
    }
  }
}
</script>

<style scoped>
.mobile {
  display: none;
}

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
  min-height: 600px;
  overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
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
  padding: 10px;
}

.contact-info-profile .more-info h4:hover {
  color: white;
  background: #7e98df;
  border-radius: 20px;
}

.option {
  padding: 20px;
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
    width: 159px;
    height: 360px;
    left: 481px;
    top: 0px;
    background-color: #ffffff;
    z-index: 3;
    padding: 10px;
  }

  .contact-info-profile .username-contact h4 {
    font-size: 20px;
  }

  .contact-info-profile .container-photo {
    margin-top: 5px;
  }

  .contact-info-profile .photo {
    width: 100px;
    height: 100px;
  }

  .contact-info-profile .container-name {
    margin-top: 10px;
  }

  .contact-info-profile .name h4 {
    font-size: 13px;
  }

  .contact-info-profile .name h5 {
    font-size: 10px;
  }

  .scroll {
    max-height: 130px;
    overflow-y: scroll;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .username-setting {
    margin: 10px;
    margin-top: 20px;
  }

  .contact-info-profile .more-info h4 {
    font-weight: 500;
    font-size: 10px;
    border-radius: 20px;
    padding: 5px;
    width: 100px;
  }
}

@media (max-width: 576px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: inline;
  }

  .contact-info-profile {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #ffffff;
    z-index: 3;
    padding: 20px;
  }

  .contact-info-profile .username-contact h4 {
    font-size: 30px;
  }

  .contact-info-profile .container-photo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    /* margin-left: 100px; */
  }

  .contact-info-profile .photo {
    width: 150px;
    height: 150px;
  }

  .contact-info-profile .container-name {
    margin-top: 20px;
  }

  .contact-info-profile .name h4 {
    font-size: 25px;
  }

  .contact-info-profile .name h5 {
    font-size: 20px;
  }

  .scroll {
    max-height: 500px;
    overflow-y: scroll;
    margin-top: 10px;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .username-setting {
    margin: 10px;
    margin-top: 20px;
  }

  .contact-info-profile .more-info h4 {
    font-weight: 500;
    font-size: 10px;
    border-radius: 20px;
    padding: 5px;
    width: 100px;
  }
}
</style>
