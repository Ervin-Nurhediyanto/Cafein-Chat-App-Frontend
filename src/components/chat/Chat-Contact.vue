<template>
  <div class="row contact-chat">
    <div class="row contact-list-chat">
      <!-- photo -->
      <div class="col-md-3 container-photo pl-md-0 pr-md-0">
        <div class="photo">
          <img src="../../assets/Profile/photo.png" />
        </div>
      </div>
      <!-- scroll-edit -->
      <div class="col-md-9 scroll-edit  p-md-0">
        <div class="row justify-content-between">
          <div class="col-md-8 contact-info">
            <div class="row contact-name">
              <h4>Theresa Webb</h4>
            </div>
            <div class="row last-chat">
              <h4>Why did you do that?</h4>
            </div>
          </div>
          <div class="col-md-3 time-info">
            <div class="row time-chat justify-content-end">
              <h4>15:30</h4>
            </div>
            <div class="row qly-chat justify-content-end">
              <h4>
                <span>2</span>
              </h4>
            </div>
          </div>
        </div>
        <div class="row contact-menu">
          <div class="row contact-menu-i justify-content-between">
            <i class="far fa-bookmark"></i>
            <i class="fas fa-check-double"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat-Contact'
}
</script>

<style>

.contact-chat .contact-list-chat {
  width: 390px;
  height: 100px;
  padding: 0;
}

.contact-chat .container-photo {
  width: 20%;
  padding: 0;
}

.contact-chat .photo {
  width: 100px;
  height: 100px;
  padding: 5px;
  margin-left: 0px;
  margin-right: 0px;
  cursor: pointer;
}

.contact-chat .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.contact-chat .scroll-edit {
  height: 100px;
  margin-left: 0;
  margin-right: 0;
  overflow-y: scroll;
}

.contact-chat .scroll-edit::-webkit-scrollbar {
  display: none;
}

.contact-chat .contact-name {
  height: 50px;
  width: 170px;
  padding: 10px;
  padding-left: 20px;
  cursor: pointer;
}

.contact-chat .contact-name h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.165px;
  color: #232323;
}

.contact-chat .last-chat {
  height: 50px;
  width: 170px;
  padding: 10px;
  padding-left: 20px;

}

.contact-chat .last-chat h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
}

.contact-chat .time-chat {
  height: 50%;
  width: 50px;
  padding-top: 10px;
}

.contact-chat .time-chat h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #848484;
  margin-left: auto;
  margin-right: 0;
}

.contact-chat .qly-chat {
  width: 50px;
  height: 50%;
  padding-top: 10px;
}

.contact-chat .qly-chat h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #ffffff;
  margin-left: auto;
  margin-right: 0;
}

.contact-chat .qly-chat span {
  background: #7e98df;
  border-radius: 50%;
  padding: 5px 8px 5px 8px;
}

.contact-menu {
  width: 297px;
  height: 100px;
  margin-left: 10px;
  padding-left: 20px;
  padding-top: 10px;
}

.contact-menu .contact-menu-i {
  background-color: #7e98df;
  width: 277px;
  height: 85px;
  padding: 10px;
  padding-top: 1px;
}

.contact-menu i {
  font-size: 40px;
  margin: 20px;
  cursor: pointer;
  color: #ffffff;
}
</style>
