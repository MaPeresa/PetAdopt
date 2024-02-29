<template>
<link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light">
  <!--Image and text-->
  <a class="navbar-brand" href="#">
    <img 
      src="@/assets/PetAdopt_logo.png" 
      width="150" 
      height="45" 
      alt="">
  </a>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNavToggler" 
      aria-controls="navbarNavToggler" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavToggler">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/AddNewListing" class="nav-link">Add New Listing</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/FindaDog" class="nav-link">Find a dog</router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link to="/">Home</router-link>|
          <router-link to="/Login">Login</router-link>|
          <router-link to="/AddNewListing">Add New Listing</router-link>|
        </div>
      </li>
    </ul>
  </div>
</nav>
    
  
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: "Nunito"; font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FED850;
}

nav {
  padding: 30px;
  background-color: #473A0B !important;
  color: #FED850;

  a {
    color: #FED850 !important;

    &.router-link-exact-active {
      font-weight: bold;
      color: #FED850;
      background: rgba(254, 216, 80, 0.18);
      border-radius: 8px;
    }
  }
}
</style>
