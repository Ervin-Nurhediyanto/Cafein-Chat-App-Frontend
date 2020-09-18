<template>
  <div class="row header-message">
      <div class="header-photo">
        <img src="../../assets/Profile/photo2.png" />
      </div>
      <div class="header-info">
        <div class>
          <div class>
            <h4>Mother ❤</h4>
          </div>
          <div class="status">
            <h5>online</h5>
          </div>
        </div>
        <div class="header-icon">
          <div class>
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Message-header'
}
</script>

<style scoped>
.header-message {
  background: #ffffff;
  height: 80px;
  width: 955px;
  margin-left: 0px;
  padding: 15px;
}

.header-message .header-photo {
  height: 50px;
  width: 50px;
}

.header-photo img {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.header-message .header-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 865px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
}

.header-info h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #232323;
}

.header-info h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.header-info .header-icon {
  margin-top: 5px;
  font-size: 25px;
}

.header-icon i {
  color: #7e98df;
}

@media (max-width: 768px) {
.header-message {
  height: 80px;
  width: 448px;
  margin-left: 0px;
  padding: 15px;
  /* background-color: red; */
}

.header-message .header-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 358px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  /* background-color: sandybrown; */
}

}

</style>
