<template>
    <div class="signup">
      <h1>Signup Page</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <form @submit.prevent="signup">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model.trim="email" class="form-control" placeholder="Enter email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone number</label>
                <input type="tel" v-model.trim="phone" class="form-control" placeholder="e.g. +385 91 234 5678" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model.trim="password" class="form-control" placeholder="Password" required>
              </div>
              <div class="form-group">
                <label for="passwordRepeat">Repeat Password</label>
                <input type="password" v-model.trim="passwordRepeat" class="form-control" placeholder="Retype your Password" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { firebase } from '@/firebase';
  
  export default {
    name: "Signup",
    setup() {
      const email = ref('');
      const phone = ref('');
      const password = ref('');
      const passwordRepeat = ref('');
  
      const signup = async () => {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
          console.log("Successful registration");
        } catch (error) {
          console.error("An error occurred", error);
          alert(error.message);
        }
      };
  
      return {
        email,
        phone,
        password,
        passwordRepeat,
        signup
      };
    },
  };
  </script>
  