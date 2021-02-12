<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarBrandProject" class="navbar-brand">
            <router-link class="navbar-brand" to='/'>Orca IoT</router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ">
                <li class="nav-item dropdown">
                    <router-link class="nav-link" to="/devices">Devices</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link" to="/usage">Usage</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
            </ul>

        </div>
           <div class="">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link logout" href="#" @click="logout()">Logout</a>
            </li>
        </ul>
    </div>

    </nav>
</template>

<script>

    export default {
        name: 'NavBar',
        methods: {
            logout() {
                console.log("logout")
            },
        }
    }

</script>


<style scoped>


</style>