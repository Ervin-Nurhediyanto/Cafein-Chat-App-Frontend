<template>
  <div class="menu-profile">
    <ul>
      <li>
        <i class="fas fa-cog"></i> Settings
      </li>
      <li>
        <i class="far fa-user"></i> Contacts
      </li>
      <li>
        <i class="fas fa-phone"></i> Calls
      </li>
      <li>
        <i class="far fa-bookmark"></i> Save messages
      </li>
      <li>
        <i class="fas fa-user-plus"></i> Invite Frineds
      </li>
      <li>
        <i class="far fa-question-circle"></i> Telegrom FAQ
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Chat-menu-profile',
  components: {
  }
}
</script>

<style>
.menu-profile {
  position: absolute;
  width: 220px;
  height: 340px;
  left: 100px;
  top: 90px;
  background: #7e98df;
  border-radius: 35px 10px 35px 35px;
  z-index: 2;
}

.menu-profile ul li {
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

.menu-profile ul li:hover {
  color: red;
}

.menu-profile ul li i {
  margin: 20px;
  margin-left: 0;
  width: 20px;
}
</style>
