<template>
  <div class="message-add">
    <ul>
        <li>
        <i class="fas fa-image"></i> Image
      </li>
      <li>
        <i class="fas fa-file"></i> Documents
      </li>
      <li>
        <i class="fas fa-user"></i> Contact
      </li>
      <li>
        <i class="fas fa-map-marker-alt"></i> Location
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Chat-message-add',
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
.message-add {
  position: absolute;
  right: 90px;
  left: auto;
  top: auto;
  bottom: 55px;
  width: 250px;
  height: 220px;
  background: #7E98DF;
border-radius: 35px 35px 10px 35px;
/* transform: matrix(1, 0, 0, -1, 0, 0); */
}

.message-add ul li {
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

.message-add ul li:hover {
  color: red;
}

.message-add ul li i {
  margin: 20px;
  margin-left: 0;
  width: 20px;
}

@media (max-width: 768px) {
  .message-add {
  position: absolute;
  right: 40px;
  left: auto;
  top: 60px;
  width: 130px;
  height: 240px;
}

.message-add ul {
  /* background-color: aqua; */
  padding: 0;
}

.message-add ul li {
  font-size: 12px;
}
.message-add ul li i {
  margin: 12px;
  margin-left: 10;
  margin-top: 15px;
  width: 10px;
}
}

</style>
