<template>
  <div class="login">
    <h1>Login Page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Enter email"
                required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="Password"
                required />
            </div>
            <button type="button" @click="login()" class="btn btn-primary">
              Login
            </button>
          </form>
          <!-- <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
            {{ errorMessage }}
          </div> -->
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Logging in with", this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log("Login successful", userCredential.user.email);
          store.currentUser = userCredential.user.email;
          console.log("* store.currentUser", store.currentUser);

          this.$router.replace("/FindADog");
        })
        .catch((error) => {
          console.error("An error occurred", error);
          alert("Error: " + error);
        });
    },
  },
};
</script>
