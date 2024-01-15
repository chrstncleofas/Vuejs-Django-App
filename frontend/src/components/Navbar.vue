<template>
        <h5 class="d-flex justify-content-center mt-4 mb-4">
            Employee Management Portal
        </h5>
        <nav class="navbar navbar-expand-md navbar-light bg-ligh">
            <ul class="navbar-nav center">
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary"
                    to="/home">Home</router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary"
                    to="/department">Department</router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary"
                    to="/employee">Employee</router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
    export default {
        /* eslint-disable */
        name: "Navbar",
    }
</script>
