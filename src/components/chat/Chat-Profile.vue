<template>
  <div class="row my-profile">
    <div class="col-md-12 d-flex justify-content-center">
      <div class="row photo-profile d-flex justify-content-center">
        <img src="../../assets/Profile/photo1.png" />
      </div>
    </div>
    <div class="col-md-12 d-flex justify-content-center">
      <div class="row name-profile">
        <h4>Gloria Mckinney</h4>
      </div>
    </div>
    <div class="col-md-12 d-flex justify-content-center">
      <div class="username-profile">
        <h4>@wdlam</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat-Profile'
}
</script>

<style>
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
</style>
