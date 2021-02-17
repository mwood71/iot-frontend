<template>
  <div>

    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">devID</th>
          <th scope="col">IP Address</th>
          <th scope="col">Number</th>
          <th scope="col">Connected</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(device, index) in devices' :key='index'>
          <th scope="row">{{ device.customFields[0].value }}</th>
          <td>{{ device.ipAddress }}</td>
          <td>{{ device.deviceIds[0].id }}</td>
          <td>{{ device.connected }}</td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Devices',
    data() {
      return {

        devices: []
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
          this.devices = response.data.devices
          console.log(this.devices)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>