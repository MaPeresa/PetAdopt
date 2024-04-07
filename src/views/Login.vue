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
                v-model.trim="email"
                class="form-control"
                placeholder="Enter email"
                required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model.trim="password"
                class="form-control"
                placeholder="Password"
                required />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
          <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
            {{ errorMessage }}
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.errorMessage = "";
        console.log("Login successful");
        this.$router.replace("/FindADog");
      } catch (error) {
        console.error("An error occurred", error);
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
