<template>
  <div class="mt-3">
    <div class="text-secondary text-center">Welcome back <span class="font-weight-bold text-info">{{user}}</span></div>
    <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h4 class="display-4 text-primary mb-2">Meeting Log</h4>
        <p class="lead">
          This is a playground app to learn firebase integration with VueJs.
        </p>

        <router-link
          class="btn btn-outline-primary mr-2"
          to="/register"
        >Register</router-link>
        <router-link
          class="btn btn-outline-primary mr-2"
          to="/login"
        >Log In</router-link>
        <router-link
          class="btn btn-primary"
          to="/meetings"
        >Meetings</router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { db } from "../db.js"
export default {
  name: 'Home',
  data: function() {
    return {
      user: null
    }
  },
  mounted(){
    db.collection("users")
      .doc("Gcp7ed4pVbSPyTP3Wkgi")
      .get()
      .then(s => {
          this.user = s.data().name;
      })
  }
}
</script>
