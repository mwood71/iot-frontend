<template>
  <div id="form" class="col-lg-6 offset-lg-3">

    <form v-on:submit.prevent="onSubmit">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="username">Username</label>
        <input type="text" id="username" class="form-control" />
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="password">Password</label>
        <input type="password" id="password" class="form-control" />
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
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {

        let config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic MTkxYTNiNzAtZTA2MS00YjJkLWEwMDEtN2IzZDMyOTY3OTM5OmJlYWJjNTc4LTU4NjgtNDQ5OS1iZGNjLTZmZDQ1YzU5NDRjZA==',
            'Access-Control-Allow-Origin': '*',


          }
        }

        axios.post('https://thingspace.verizon.com/api/ts/v1/oauth2/token', "grant_type=client_credentials", config)
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          }).finally(() => {
            //Perform action in always
          });
      }
    }
  }
</script>

<style scoped>
  #form {
    padding-top: 3em;
  }
</style>