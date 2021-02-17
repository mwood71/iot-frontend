<template>
  <div id="form" class="col-lg-6 offset-lg-3">

    <form v-on:submit.prevent="onSubmit">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="username">Username</label>
        <input v-model="username" type="text" id="username" class="form-control" />
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="password">Password</label>
        <input v-model="password" type="password" id="password" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary btn-block">Log in</button>
    </form>

  </div>
</template>

<script>
  import axios from 'axios'


  export default {
    name: 'Login',
    data() {
      return {

        username: '',
        password: '',

      }
    },
    methods: {
      onSubmit() {

        const headers = {
          'Content-Type': 'application/json',
        };
        let payload = {
          "username": this.username,
          "password": this.password,
          "token": this.$cookies.get("token")
        };

        axios.post('http://localhost:1337/api/login', JSON.stringify(payload), {headers})
          .then(response => {
            this.$cookies.set("user_session",response.data.status)
            this.$store.state.isAuthenticated = true
            this.$router.push({name: 'Home'})
          })
          .catch(error => {
            console.log(error);
          })

      }

    },

    mounted() {

      axios.get('http://localhost:1337/api/session')
        .then(response => {

          this.$store.state.token = response.data.access_token
          this.$cookies.set("token",response.data.access_token)

        })
        .catch(error => {
          console.log(error);
        })

    }
  }
</script>

<style scoped>
  #form {
    padding-top: 3em;
  }
</style>