<template>
  <div>
    <div class="row header-message">
      <h2 class="mobile" @click="closeChat">&#60;</h2>

      <div v-if="headerMess.image" class="header-photo">
        <img :src="headerMess.image" />
      </div>

      <div v-else class="header-photo">
        <img src="../../assets/Profile/pp.png" />
      </div>

      <div class="header-info">
        <div class>
          <div class>
            <!-- <h4>Mother ❤</h4> -->
            <h4>{{headerMess.name}}</h4>
          </div>
          <div class="status">
            <!-- <h5>online</h5> -->
            <h5 v-if="headerMess.status === 'online'" class="status-online">{{headerMess.status}}</h5>
            <h5 v-else class="status-offline">{{headerMess.status}}</h5>
          </div>
        </div>
        <div class="header-icon">
          <div @click="handleChatMenu">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </div>
    <MessageMenu v-show="showMenu" />
  </div>
</template>

<script>
import MessageMenu from './Message-Menu'
export default {
  name: 'Message-header',
  props: ['headerMess'],
  components: {
    MessageMenu
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    handleChatMenu () {
      if (this.showMenu === false) {
        this.showMenu = true
      } else {
        this.showMenu = false
      }
    },
    closeChat () {
      this.$emit('closeChat', false)
    }
  }
}
</script>

<style scoped>
.header-message {
  background: #ffffff;
  height: 80px;
  /* width: 955px; */
  width: 100%;
  margin-left: 0px;
  padding: 15px;
  /* background-color: yellow; */
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
  /* width: 865px; */
  width: 93%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  /* background-color: yellow; */
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

.header-info h5.status-online {
  color: mediumspringgreen;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.165px;
}

.header-info h5.status-offline {
  color: red;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.165px;
}

.header-info .header-icon {
  margin-top: 5px;
  font-size: 25px;
  cursor: pointer;
}

.header-icon i {
  color: #7e98df;
}

.mobile {
  display: none;
}

@media (max-width: 768px) {
  .header-message {
    height: 80px;
    /* width: 448px; */
    width: 100%;
    margin-left: 0px;
    padding: 15px;
    /* background-color: red; */
  }

  .header-message .header-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 390px;
    /* width: 90%; */
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    /* background-color: sandybrown; */
  }
}

@media (max-width: 576px) {
  .header-message {
    height: 80px;
    width: 100%;
    margin-left: 0px;
    padding: 15px;
    /* background-color: red; */
  }

   .header-message .header-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 330px;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    /* background-color: springgreen; */
  }

  .mobile {
    display: inline;
  }

  h2.mobile {
    font-size: 40px;
    font-weight: bold;
    margin-right: 10px;
    color: #7e98df;
  }
}

</style>
