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
      <li @click="handleLocation">
        <i class="fas fa-map-marker-alt"></i> Location
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import io from 'socket.io-client'
export default {
  name: 'Chat-message-add',
  data () {
    return {
      socket: io('http://localhost:4000'),
      setting: true,
      location: {
        lat: 1,
        lng: 1
      },
      room: 1
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['getLocation']),
    handleLocation () {
      this.$getLocation()
        .then(coordinates => {
          this.location.lat = coordinates.lat
          this.location.lng = coordinates.lng
        })
      // console.log('oke: ' + messageOk)
      this.socket.emit(
        'sendMessage',
        {
          message: null,
          userId: this.user.id,
          image: this.user.image,
          room: this.room,
          location: this.location
        },
        (error) => {
          alert(error)
        }
      )
    }
    // handleLocation () {
    //   this.$getLocation()
    //     .then(coordinates => {
    //       this.location.lat = coordinates.lat
    //       this.location.lng = coordinates.lng
    //     })
    //   this.$emit('handleLocation', this.location)
    //   this.getLocation(this.location).then((res) => {
    //     alert('send location')
    //   })
    //   this.socket.emit(
    //     'sendMessage',
    //     {
    //       message: null,
    //       userId: this.user.id,
    //       image: this.user.image,
    //       room: this.room,
    //       location: this.location
    //     },
    //     (error) => {
    //       alert(error)
    //     }
    //   )
    // }
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
  background: #7e98df;
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
    right: 50px;
    left: auto;
    top: auto;
    bottom: 30px;
    width: 130px;
    height: 160px;
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

  @media (max-width: 576px) {
    .message-add {
    position: absolute;
    right: 110px;
    left: auto;
    top: auto;
    bottom: 50px;
    width: 150px;
    height: 180px;
    padding: 10px;
  }

  .message-add ul li {
    font-size: 15px;
  }
  .message-add ul li i {
    margin: 12px;
    margin-left: 10;
    margin-top: 15px;
    width: 10px;
  }

  }
}
</style>
