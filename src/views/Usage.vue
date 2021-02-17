<template>
  <div>
    Usage

  </div>
</template>

<script>
  import axios from 'axios'


  export default {
    name: 'Usage',
    data() {
      return {
        usage: []
      }
    },
    mounted() {

      const headers = {
        'Content-Type': 'application/json',
      };
      let payload = {
        "token": this.$cookies.get("token"),
        "user_session": this.$cookies.get("user_session")
      };
      console.log(payload)

      axios.post('http://localhost:1337/api/devices', JSON.stringify(payload), {
          headers
        })
        .then(response => {
          // this.devices = response.data.devices
          // console.log(this.devices)

          let devices = response.data.devices.map(device => device.deviceIds[0])

          var today = new Date();
          today.setHours(today.getHours()-5)
          today.setUTCHours(0,0,0,0);

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setUTCHours(0,0,0,0);


          console.log(today.toISOString().replace('00.', '') + " " + tomorrow.toISOString().replace('00.', ''))

          let users = [];
          let promises = [];
          for (let i = 0; i < devices.length; i++) {

            let usagePayload = {
              "token": this.$cookies.get("token"),
              "user_session": this.$cookies.get("user_session"),
              "id": devices[i].id,
              "kind": devices[i].kind,
              "earliest": today.toISOString().replace('00.', '').replace('000Z', '00Z'),
              "latest": tomorrow.toISOString().replace('00.', '').replace('000Z', '00Z')
            };
            console.log(usagePayload)

            promises.push(
              axios.post('http://localhost:1337/api/usage/all', JSON.stringify(usagePayload), {
                headers
              }).then(response => {
                // do something with response
                users.push(response);
              })
            )
          }

          Promise.all(promises).then(() => console.log(users))

        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>