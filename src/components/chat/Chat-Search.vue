<template>
  <div class="search-input">
    <i class="fa fa-search" aria-hidden="true"></i>
    <input v-model="search" @keyup.enter="handleSearch" placeholder="Search name..." />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'search-chat',
  data () {
    return {
      telegramShow: true,
      search: ''
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['mapActions']),
    handleSearch (e) {
      e.preventDefault()
      const data = {
        search: this.search
      }
      mapActions(data).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.search-box {
  margin-top: 20px;
  /* width: 100%; */
  width: 300px;
  /* background-color: pink; */
  padding: 0;
}

.search-box .search-input {
  background-color: #fafafa;
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  /* background-color: peru; */
}

.search-box input {
  border: none;
  background-color: transparent;
  margin-left: 10px;
  color: #848484;
  width: 200px;
}

.search-box h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7e98df;
  margin-right: 0px;
  margin-top: 5px;
  cursor: pointer;
  /* background-color: orange; */
}

@media (max-width: 768px) {
  .search-box {
    margin-top: 0px;
    width: 129px;
    height: 30px;
    /* background-color: deepskyblue; */
  }

  .search-box .search-input {
    padding: 0px;
    padding-left: 5px;
    width: 110px;
    height: 30px;
    /* background-color: blue; */
  }

  .search-box input {
    margin-left: 5px;
    width: 80px;
    font-size: 10px;
    /* background-color: indigo; */
  }

  .search-box i {
    font-size: 10px;
  }

  .search-box h4 {
    font-size: 25px;
    margin-right: 0px;
    margin-top: 0;
    /* background-color: fuchsia; */
  }
}

@media (max-width: 576px) {
  .search-box {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 400px;
    height: 50px;
    /* background-color: deepskyblue; */
  }

   .search-box .search-input {
    padding: 10px;
    padding-left: 10px;
    width: 400px;
    height: 50px;
    /* background-color: blue; */
  }

  .search-box input {
    margin-left: 5px;
    width: 300px;
    font-size: 20px;
    /* background-color: indigo; */
  }

    .search-box i {
    font-size: 20px;
  }

}
</style>
