<template>
    <div class="about">
    <h1>This is a signup page</h1>
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <form>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model="username" class="form-control"
    aria-describedby="emailHelp" placeholder="Enter
   email" />
    <small class="form-text text-muted" >We'll
   never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model="password" class="form-control"
    placeholder="Password" />
    </div>
    <div class="form-group">
    <label for="exampleInputPassword2">Repeat Password</label>
    <input type="password" v-model="passwordRepeat" class="form-control"
    placeholder="Retype your Password" />
    </div>
    <button type="button" @click="signup" class="btn btn-primary">Submit</button>
    </form>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
   </template>
   <script>
   import { firebase } from '@/firebase';
   
   export default{
       name: "signup",
       data(){
           return{
               username:"",
               password:"",
               passwordRepeat:"",
           };
       },
       methods:{
           signup(){
               firebase
               .auth()
               .createUserWithEmailAndPassword(this.username, this.password)
               .then(function(){
                   console.log("uspješna registacija");
           })
           .catch(function(error){
               console.error("došlo je do greške", error);
               alert(error);
           });
           console.log("nastavak");
           },
       },
   };
   </script>
   