<template>
  <div class="row contact-chat">
    <div class="col-md-3 photo">
      <img src="../../assets/Profile/photo.png" />
    </div>
    <div class="col-md-6">
      <div class="row contact-name">
        <h4>Theresa Webb</h4>
      </div>
      <div class="row last-chat">
        <h4>Why did you do that?</h4>
      </div>
    </div>
    <div class="col-md-3">
      <div class="row time-chat">
        <h4>15:30</h4>
      </div>
      <div class="row qly-chat">
        <h4>
          <span>2</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.contact-chat {
    height: 80px;
}

.contact-chat .photo {
    padding: 0;
}

.contact-chat .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.contact-chat .contact-name {
    height: 50%;
    padding: 10px;
}

.contact-chat .contact-name h4{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.165px;
    color: #232323;
}

.contact-chat .last-chat {
    height: 50%;
    padding: 10px;
}

.contact-chat .last-chat h4{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.165px;
    color: #7E98DF;
}

.contact-chat .time-chat {
    height: 50%;
    padding: 10px;
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
    height: 50%;
    padding: 10px;
}

.contact-chat .qly-chat h4{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.165px;
    color: #FFFFFF;
    margin-left: auto;
    margin-right: 0;
}

.contact-chat .qly-chat span {
    background: #7E98DF;
    border-radius: 50%;
    padding: 5px 8px 5px 8px;
}
</style>
