<template>
  <div class="row my-profile">
    <div class="col-md-12 d-flex justify-content-center">
      <div class="row photo-profile d-flex justify-content-center">
        <!-- <img src="../../assets/Profile/photo1.png" /> -->
        <img :src="userImage" @click="handleLogout">
      </div>
    </div>
    <div class="col-md-12 d-flex justify-content-center">
      <div class="row name-profile">
        <!-- <h4>Gloria Mckinney</h4> -->
        <h4>{{name}}</h4>
      </div>
    </div>
    <div class="col-md-12 d-flex justify-content-center">
      <div class="username-profile">
        <h4>@{{userName}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Chat-Profile',
  computed: {
    ...mapGetters({
      user: 'user',
      userImage: 'userImage',
      userName: 'userName',
      name: 'name'
    })
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.$router.go(0)
      this.logout()
    }
  }
}
</script>

<style>
.my-profile {
  z-index: 1;
}

.my-profile .photo-profile {
  width: 120px;
  height: 120px;
  margin-top: 20px;
}

.my-profile .photo-profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30%;
}

.my-profile .name-profile {
  margin-top: 20px;
}

.my-profile .name-profile h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #232323;
}

.my-profile .username-profile h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.335px;
  color: #848484;
}

@media (max-width: 768px) {

  .my-profile .photo-profile {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}

.my-profile .name-profile {
  margin-top: 5px;
}

.my-profile .name-profile h4 {
  font-size: 18px;
  line-height: 20px;
}

.my-profile .username-profile h4 {
  font-size: 10px;
  line-height: 15px;
}

}

</style>
