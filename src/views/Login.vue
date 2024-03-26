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
              <input type="email" v-model.trim="email" class="form-control" placeholder="Enter email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model.trim="password" class="form-control" placeholder="Password" required>
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
import { ref } from 'vue';
import { firebase } from '@/firebase';

export default {
  name: "Login",
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const login = async () => {
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        errorMessage.value = ''; 
        console.log("Login successful");
        this.$router.push('/home'); //13:30 vue4 login video, router ne radi, probaj sa using promises?
        
      } catch (error) {
        console.error("An error occurred", error);
        errorMessage.value = error.message;
      }
    };

    return {
      email,
      password,
      errorMessage,
      login
    };
  },
};
</script>

